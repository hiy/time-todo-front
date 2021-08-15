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

export class TodoChartData {
  name: string;
  value: number;
  unit: string ;

  constructor(name: string, value: number, unit: string) {
    this.name = name;
    this.value = value;
    this.unit = unit;
  }
}
