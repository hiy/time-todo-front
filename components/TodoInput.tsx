
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

const Container = styled.div<{ isShow: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: ${(props) => props.isShow ? "3rem 0;" : "0;"}
`;

const InputStyle = styled.span`
  input {
	  font-family: inherit;
	  font-size: 2.5rem;
	  -webkit-padding: 0.4em 0;
	  padding: 0.4em;
	  box-sizing: border-box;
	  border: 1px solid #ccc;
	  border-radius: 2px;
  }

  input&:disabled {
  	color: #ccc;
  }
`

const CheckBox = styled.span`
  font-size: 2rem;
  margin: 0 1rem;
  cursor: pointer;
`

const InputWrapper = styled.span`
  position: relative;
`

const DeleteButton = styled.a`
  position: absolute;
  top: 1.3rem;
  right: .3rem;
  font-size: 2.5rem;
  cursor: pointer;
`

const ExecButton = styled.a<{ isExec: boolean }>`
  border: ${(props) => props.isExec ? "3px solid #00d08d;" : "3px solid #b5b5b5;"}
  margin-left: 1rem;
  border-radius: 100%;
  height: 7rem;
  width: 7rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    padding: .5rem;
    &:first-child { margin-top: .5rem; border-bottom: 1px solid gray; }
  }
`;

const TodoInput: React.FC<TodoInputProps> = (props) => {

  const { isDone, isExec, onDelete, onClickExecButton, onClickCheckBox, isShow, ...inputProps } = props

  return (
    <Container isShow={isShow}>
      {isShow ? (
        <InputWrapper>
          <CheckBox>
            {isDone ? (<GrCheckboxSelected style={{color: 'blue'}} onClick={() => onClickCheckBox()} />) : ((<GrCheckbox onClick={() => onClickCheckBox()} />))}
          </CheckBox>
          <InputStyle>
            <input type="text" {...inputProps} />
          </InputStyle>
          { props.value ? (<DeleteButton onClick={() => onDelete()}><MdClear /></DeleteButton>) : null }
        </InputWrapper>
      ) : null}

      {isShow && props.value ? (
        <ExecButton isExec={isExec} onClick={() => onClickExecButton()}>
          <div>Start</div>
          <div>Stop</div>
        </ExecButton>
        ) : null
      }
    </Container>
  )
}

export default TodoInput