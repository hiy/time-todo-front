
import React from 'react'

type InputProps = JSX.IntrinsicElements['input']

type TodoProps = InputProps & {
  isExec: boolean
  isDone: boolean
  onClickExecButton: Function
  onDelete: Function
}

const TodoInput: React.FC<TodoProps> = (props) => {

  const { isDone, isExec, onDelete, onClickExecButton, ...inputProps } = props

  return (
    <div>
      {isExec ? (
        <div>
          {isDone ? (<span>　✔︎　</span>) : null}
          <input type="text" {...inputProps} />
          <button onClick={() => onDelete()}>Delete</button>
          <button onClick={() => onClickExecButton()}>Start | Stop</button>
        </div>) : null}
    </div>
  )
}

export default TodoInput