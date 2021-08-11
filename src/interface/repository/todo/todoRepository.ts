import TodoRepositoryInterface from '../../../application/repository/todo/todoRepositoryInterface'
import { Todo } from '../../../domain/todo'
import { TodoListJson } from '../../../application/repository/todo/todoRepositoryInterface'
import axios from 'axios'
import { format } from 'date-fns'

const storageKey = 'todoList'
const today = new Date();

export class TodoRepository implements TodoRepositoryInterface {
  async search(): Promise<Todo[]> {
    const isSignIn = false

    if (isSignIn) {
      // axios.get('/')
      // const todo = new Todo('title', false, 0)
      // return [todo]
      return []
    } else {
      const storageData = localStorage.getItem(storageKey);
      if (storageData) {
        const list = JSON.parse(storageData)
        if (typeof (list) === 'object') {
          const todaysTodoList: Todo[] = list[format(today, 'YMMdd')]
          if (todaysTodoList) return todaysTodoList;
        }
      }
      return []
    }
  }

  async create(): Promise<Todo[]> {
    const isSignIn = false

    if (isSignIn) {
      return []
    } else {
      const storageData = localStorage.getItem(storageKey);
      if (storageData) {
        const list = JSON.parse(storageData)
        if (typeof (list) === 'object') {
          const listedArray = Object.entries(list)
          const latestDate = listedArray.sort()[listedArray.length - 1][0]
          const newData = []
          for (let data of list[latestDate]) {
            data.isDone = false;
            data.elapsedTime = 0;
            newData.push(data)
          }
          return newData;
        }
      }
    }

    return []
  }

  async update(todoList: Todo[]): Promise<Todo[]> {
    const isSignIn = false

    if (isSignIn) {
      // const todo = new Todo('title', false, 0)
      return []
    } else {
      const storageData = localStorage.getItem(storageKey) || "{}"
      const list = JSON.parse(storageData)
      list[format(today, 'YMMdd')] = todoList;
      localStorage.setItem(storageKey, JSON.stringify(list));
      return todoList
    }
  }
}
