import { Todo } from './todo'

export class TodoSearchForm {
  readonly year?: string | null;
  readonly month?: string | null;
  readonly day?: string | null;

  constructor(year?: string | null, month?: string | null, day?: string | null) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  isPresentYMD(): boolean {
    if(this.year && this.month && this.day) {
      return true;
    }
    return false;
  }

  isPresentYM(): boolean {
    if(this.year && this.month) {
      return true;
    }
    return false;
  }
}