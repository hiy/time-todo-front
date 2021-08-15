import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { format } from 'date-fns'
import TodoInput from '../components/TodoInput'
import Timer, { TimeRecord } from '../components/Timer'
import { Todo } from '../src/app/todo'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import styled from 'styled-components'
import TodoUseCase, { TodoSearchForm } from '../provider/todo'
import { useMutation, useQuery } from 'react-query'
import HtmlHead from '../components/Head'

const Container = styled.div`
  height: 100%;
  padding: 0 1rem;
`

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10rem 0;
`
const MainInner = styled.div`
  padding: 0 3rem;
  max-width: 90%
`

const TodayTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
`

const initialTimeRecord = {
  hours: '00',
  minutes: '00',
  seconds: '00',
  time: 0,
}

type Props = {
  todoListData: Todo[]
}

const today = new Date();

const TodoList: React.FC<Props> = ({ todoListData }) => {
  const [todoList, setTodoList] = useState<Todo[]>([])
  const [execTodoIdx, setExecTodoIdx] = useState<number | null>(null);
  const [isBeingMeasured, setIsBeingMeasured] = useState<boolean>(false);
  const [timeRecord, setTimeRecord] = useState<TimeRecord>(initialTimeRecord)

  const query = useQuery("searchTodoList", async (): Promise<Todo[]> => {

    const year = format(today, 'Y')
    const month = format(today, 'MM')
    const day = format(today, 'dd')

    const form = new TodoSearchForm(year, month, day);
    return await TodoUseCase.search(form)
  });

  const createMutation = useMutation(async (): Promise<Todo[]> => {
    return await TodoUseCase.create()
  })

  const updateMutation = useMutation(async (newTodoList: Todo[]) => {
    return await TodoUseCase.update(newTodoList)
  })

  const addEmptyTodo = () => {
    const emptyTodos = todoList.filter((todo) => {
      if(!todo.title) return true;
      return false
    })
    if(emptyTodos.length === 0) {

    todoList.push({
      title: "",
      isDone: false,
      elapsedTime: 0,
    })
    setTodoList([...todoList])
    updateMutation.mutate(todoList)
  }
  };

  const deleteTodo = (todoIdx: number) => {
    todoList.splice(todoIdx, 1);
    setTodoList([...todoList])
    updateMutation.mutate(todoList)
  }


  useEffect(() => {
    if (!query.isLoading && query.data) {
      if (query.data.length > 0) {
        setTodoList(query.data)
        return
      }
      createMutation.mutate()
    }
  }, [query.isLoading, query.data])

  useEffect(() => {
    if (!createMutation.isLoading && createMutation.data) {
      setTodoList(createMutation.data)
    }
  }, [createMutation.isLoading, createMutation.data])

  useEffect(() => {
    if(todoList.length > 0) {
      addEmptyTodo();
    }
  }, [todoList])

  const handleClickExecButton = (todoIdx: number) => {
    if (isExecTodo()) {
      stopTodo(todoIdx)
      updateMutation.mutate(todoList)
      return
    }
    startTodo(todoIdx)
    updateMutation.mutate(todoList)
  };

  const handleClickCheckBox = (todoIdx: number) => {
    todoList[todoIdx].isDone = !todoList[todoIdx].isDone
    setTodoList([...todoList])
    updateMutation.mutate(todoList)
  };

  const handleChangeTodo = (e: React.ChangeEvent<HTMLInputElement>, todoIdx: number) => {
    if(!e.target.value) {
      if (!confirm(`削除します。よろしいですか？`)) {
        return;
      } else {
        deleteTodo(todoIdx);
        return;
      }
    }
    todoList[todoIdx].title = e.target.value
    setTodoList([...todoList])
    updateMutation.mutate(todoList)
  };

  const handleDeleteTodo = (todoIdx: number) => {
    if(!todoList[todoIdx].title) { return }
    if (!confirm(`${todoList[todoIdx].title}を削除します。よろしいですか？`)) return;
    deleteTodo(todoIdx);
  }

  const startTodo = (todoIdx: number) => {
    initialTimeRecord.time = todoList[todoIdx].elapsedTime
    setTimeRecord({ ...initialTimeRecord })
    setIsBeingMeasured(true)
    todoList[todoIdx].isDone = false
    setTodoList([...todoList])
    setExecTodoIdx(todoIdx)
  }

  const stopTodo = (todoIdx: number) => {
    todoList[todoIdx].elapsedTime = timeRecord.time
    todoList[todoIdx].isDone = true
    setIsBeingMeasured(false)
    setTodoList([...todoList])
    setExecTodoIdx(null)
  }

  const isExecTodo = () => {
    return execTodoIdx === 0 || execTodoIdx
  }


  if (query.isLoading) {
    return <span>Loading...</span>
  }

  return (
    <Container>
      <HtmlHead title={'Timer TODO'} />
      <Nav>
        <li>
          <Link href="/dashboard">ダッシュボード</Link>
        </li>
      </Nav>

      <Main>
        <MainInner>
          <TodayTitle>{format(today, 'Y/MM/dd')}<hr /></TodayTitle>
          {todoList.map((t, i) => {
            return (
              <TodoInput
                key={i}
                type="text"
                value={t.title}
                onChange={(e) => handleChangeTodo(e, i)}
                onClickExecButton={() => handleClickExecButton(i)}
                onClickCheckBox={() => handleClickCheckBox(i)}
                onDelete={() => handleDeleteTodo(i)}
                isDone={t.isDone}
                isShow={i === execTodoIdx || execTodoIdx === null}
                isExec={isExecTodo() ? true : false} />
            )
          })}

          <Timer
            isShow={isExecTodo() ? true : false}
            timeRecord={timeRecord}
            setTimeRecord={setTimeRecord}
            isBeingMeasured={isBeingMeasured}
          />
        </MainInner>
      </Main>
      <Footer />
    </Container>
  )
}

export default TodoList