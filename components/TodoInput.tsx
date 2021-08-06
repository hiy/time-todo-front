
import React from 'react'
import styled from 'styled-components'
import { MdClear } from 'react-icons/md'
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr'

interface TodoProps {
  isExec: boolean;
  isDone: boolean;
  isShow: boolean;
  onClickExecButton: Function;
  onClickCheckBox: Function;
  onDelete: Function;
}

type TodoInputProps = TodoProps & JSX.IntrinsicElements['input'];

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

const CheckBox = styled.span`
  margin: 0 1rem;
`

const InputWrapper = styled.span`
  position: relative;
`

const DeleteButton = styled.a`
  position: absolute;
  top: 0;
  right: .3rem;
`

const ExecButton = styled.button<{ isExec: boolean }>`
  border: ${(props) => props.isExec ? "1px solid red;" : null}
  margin-left: 1rem;

  div {
    padding: .5rem;
    &:first-child { border-bottom: 1px solid gray; }
  }

`
const TodoInput: React.FC<TodoInputProps> = (props) => {

  const { isDone, isExec, onDelete, onClickExecButton, onClickCheckBox, isShow, ...inputProps } = props

  return (
    <div>
      {isShow ? (
        <InputWrapper>
          <CheckBox>
            {isDone ? (<GrCheckboxSelected onClick={() => onClickCheckBox()} />) : ((<GrCheckbox onClick={() => onClickCheckBox()} />))}
          </CheckBox>
          <InputStyle>
            <input type="text" {...inputProps} />
          </InputStyle>
          <DeleteButton onClick={() => onDelete()}><MdClear /></DeleteButton>
        </InputWrapper>
      ) : null}

      {isShow ? (
        <ExecButton isExec={isExec} onClick={() => onClickExecButton()}>
          <div>Start</div>
          <div>Stop</div>
        </ExecButton>) : null}


    </div >
  )
}

export default TodoInput