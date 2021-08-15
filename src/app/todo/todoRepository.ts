import TodoRepositoryInterface from './todoRepositoryInterface'
import { Todo } from './todo'
import { TodoListJson } from './todoRepositoryInterface'
import axios from 'axios'
import { format } from 'date-fns'
import {TodoSearchForm} from './todoSearchForm'

const storageKey = 'todoList'
const today = new Date();

export class TodoRepository implements TodoRepositoryInterface {

  async search(form: TodoSearchForm): Promise<Todo[]> {
    const isSignIn = false

    if (isSignIn) {
      // axios.get('/')
      // const todo = new Todo('title', false, 0)
      // return [todo]
      return []
    } else {
      const storageData = localStorage.getItem(storageKey);
      if (storageData) {
        const list: { [key: string]: Todo[] } = JSON.parse(storageData)
        if (typeof (list) === 'object' && form.isPresentYMD()) {
          const todaysTodoList: Todo[] = list[`${form.year}${form.month}${form.day}`]
          if (todaysTodoList) return todaysTodoList;
        } else if (form.isPresentYM()) {
          const keys = Object.keys(list)
          const currentMonths = keys.filter((key: string) => { return key.indexOf(`${form.year}${form.month}`) > -1 })
          const currentMonthList = []
          for (const m of currentMonths) {
            currentMonthList.push(...list[m])
          }
          const tmp = currentMonthList.filter((todo: Todo) => {
            if(todo.title) return true
            return false
          });
          console.log(tmp)
          return tmp;
        }
        else {

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
