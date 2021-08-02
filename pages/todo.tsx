import { useState } from 'react'
import Link from 'next/link'
import { format } from 'date-fns'
import addDays from 'date-fns/addDays'
import TodoInput from '../components/TodoInput'
import Timer, { TimeRecord } from '../components/Timer'
import { Todo } from '../domains/todo/model'

export async function getStaticProps() {
  // fetch list of posts
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_page=1'
  )
  const postList = { 'aa': 'bb' } //await response.json()

  const todoListData = [
    {
      title: "英語の勉強",
      isDone: false,
      elapsedTime: 0,
    },
    {
      title: "線形代数の勉強",
      isDone: false,
      elapsedTime: 0,
    },
    {
      title: "tbos",
      isDone: false,
      elapsedTime: 0,
    },
    {
      title: "毎日英語",
      isDone: false,
      elapsedTime: 0,
    },
  ];

  return {
    props: {
      todoListData,
    },
  }
}

const initialTimeRecord = {
  hours: '00',
  minutes: '00',
  seconds: '00',
  time: 0,
}

type Props = {
  todoListData: Todo[]
}

const TodoList: React.FC<Props> = ({ todoListData }) => {
  const [todoList, setTodoList] = useState(todoListData)
  const [execTodoIdx, setExecTodoIdx] = useState<number | null>(null);
  const [isBeingMeasured, setIsBeingMeasured] = useState<boolean>(false);
  const [timeRecord, setTimeRecord] = useState<TimeRecord>(initialTimeRecord)

  const today = format(new Date(), 'Y/MM/dd')

  const handleClickExecButton = (idx: number) => {
    if (isExecTodo()) {
      stopTodo(idx)
      saveTodoList()
      return
    }
    startTodo(idx)
  };
  const handleChangeTodo = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    todoList[idx].title = e.target.value
    setTodoList([...todoList])
  };
  const handleAddTodo = () => {
    todoList.push({
      title: "",
      isDone: false,
      elapsedTime: 0,
    })
    setTodoList([...todoList])
  };

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

  const saveTodoList = () => {

  }

  const isExecTodo = () => {
    return execTodoIdx === 0 || execTodoIdx
  }

  return (
    <main>
      <div>
        <Link href="/">トップへ | </Link>
        <Link href="/todo">TODO | </Link>
        <Link href="/monthly">月間表示へ</Link>
      </div>

      <h1>TODO {today}</h1>
      {todoList.map((t, i) => {
        return (
          <div key={i}>
            {isExecTodo() && i === execTodoIdx ? (<div>現在実行中のタスク</div>) : null}
            <TodoInput
              key={i}
              type="text"
              value={t.title}
              onChange={(e) => handleChangeTodo(e, i)}
              onClickExecButton={() => handleClickExecButton(i)}
              isDone={t.isDone}
              isExec={isExecTodo() ? i === execTodoIdx : true} />
          </div>
        )
      })}
      {isExecTodo() ? null : (<button onClick={handleAddTodo}>+</button>)}

      <Timer
        isShow={isExecTodo() ? true : false}
        timeRecord={timeRecord}
        setTimeRecord={setTimeRecord}
        isBeingMeasured={isBeingMeasured}
      />
    </main>
  )
}

export default TodoList