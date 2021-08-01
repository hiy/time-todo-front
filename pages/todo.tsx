import { useState } from 'react'
import Link from 'next/link'
import { format } from 'date-fns'
import addDays from 'date-fns/addDays'


export default function Todo() {

  const initialTodo = [
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

  const [todo, setTodo] = useState(initialTodo)
  const [executionTodoIdx, setExecutionTodoIdx] = useState(null);
  const handleChangeTodo = () => { };
  const handleAddTodo = () => {
    todo.push({
      title: "",
      isDone: false,
      elapsedTime: 0,
    })
    setTodo([...todo])
  };


  return (
    <main>
      <Link href="/">ホーム</Link>
      {todo.map((t, i) => {
        return (
          <div key={i}>
            a
          </div>
        )
      })}
    </main>
  )
}


