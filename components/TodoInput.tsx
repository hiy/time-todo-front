
import React from 'react'
import styled from 'styled-components'
import { MdClear } from 'react-icons/md'

type InputProps = JSX.IntrinsicElements['input']

const InputStyle = styled.span`
  input {
	font-family: inherit;
	font-size: inherit;
	-webkit-padding: 0.4em 0;
	padding: 0.4em;
	margin: 0 0 0.5em 0;
	box-sizing: border-box;
	border: 1px solid #ccc;
	border-radius: 2px;
  }

  input&:disabled {
  	color: #ccc;
  }
`

const InputWrapper = styled.span`
  position: relative;
`

const DeleteButton = styled.a`
  position: absolute;
  top: 0;
  right: .3rem;
`

const ExecButton = styled.button`
  margin-left: 1rem;
`

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
          <InputWrapper>
            {isDone ? (<span>　✔︎　</span>) : null}
            <InputStyle>
              <input type="text" {...inputProps} />
            </InputStyle>
            <DeleteButton onClick={() => onDelete()}><MdClear /></DeleteButton>
          </InputWrapper>
          <ExecButton onClick={() => onClickExecButton()}>Start | Stop</ExecButton>
        </div>
      ) : null}
    </div>
  )
}

export default TodoInput