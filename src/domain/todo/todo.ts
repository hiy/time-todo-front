export class Todo {
  title: string;
  isDone: boolean;
  elapsedTime: number;

  constructor(title: string, isDone: boolean, elapsedTime: number) {
    this.title = title;
    this.isDone = isDone;
    this.elapsedTime = elapsedTime;
  }
}