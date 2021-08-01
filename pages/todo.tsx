import { useState } from 'react'
import Link from 'next/link'
import { format } from 'date-fns'
import addDays from 'date-fns/addDays'
import TodoInput from '../components/TodoInput'
import Timer, { TimeRecord } from '../components/Timer'

const initialTodo = [
  {
    title: "英語の勉強",
    isDone: false,
    elapsedTime: 10,
  },
  {
    title: "線形代数の勉強",
    isDone: false,
    elapsedTime: 20,
  },
  {
    title: "tbos",
    isDone: false,
    elapsedTime: 30,
  },
  {
    title: "毎日英語",
    isDone: false,
    elapsedTime: 40,
  },
];

const initialTimeRecord = {
  hours: '00',
  minutes: '00',
  seconds: '00',
  time: 0,
}

export default function Todo() {
  const [todo, setTodo] = useState(initialTodo)
  const [execTodoIdx, setExecTodoIdx] = useState<number | null>(null);
  const [isBeingMeasured, setIsBeingMeasured] = useState<boolean>(false);
  const [timeRecord, setTimeRecord] = useState<TimeRecord>(initialTimeRecord)

  const today = format(new Date(), 'Y/MM/dd')

  const handleChangeExecTodo = (idx: number) => {
    if (isExecTodo()) {
      StopTimeMeasurement(idx)
      setExecTodoIdx(null)
      return
    }
    StartTimeMeasurement(idx)
    todo[idx].isDone = false
    setTodo([...todo])
    setExecTodoIdx(idx)
  };
  const handleChangeTodo = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    todo[idx].title = e.target.value
    setTodo([...todo])
  };
  const handleAddTodo = () => {
    todo.push({
      title: "",
      isDone: false,
      elapsedTime: 0,
    })
    setTodo([...todo])
  };

  const StartTimeMeasurement = (todoIdx: number) => {
    initialTimeRecord.time = todo[todoIdx].elapsedTime
    setTimeRecord({ ...initialTimeRecord })
    setIsBeingMeasured(true)
  }

  const StopTimeMeasurement = (todoIdx: number) => {
    todo[todoIdx].elapsedTime = timeRecord.time
    todo[todoIdx].isDone = true
    setIsBeingMeasured(false)

    setTodo([...todo])
  }

  const isExecTodo = () => {
    return execTodoIdx === 0 || execTodoIdx
  }

  return (
    <main>
      <div>
        <Link href="/">トップへ</Link>
      </div>

      <h1>TODO {today}</h1>
      {todo.map((t, i) => {
        return (
          <div>
            {isExecTodo() && i === execTodoIdx ? (<div>現在実行中のタスク</div>) : null}
            <TodoInput
              key={i}
              type="text"
              value={t.title}
              onChange={(e) => handleChangeTodo(e, i)}
              onClickExecButton={() => handleChangeExecTodo(i)}
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


