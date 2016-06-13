/**
 * Created by malcolmj on 6/6/2016.
 */
export const STORAGE_KEY = 'Todo';
import {length, required} from 'aurelia-validatejs';

export default class TodoItem
{
  // @length({ minimum: 4, maximum: 25 })  description = '';
  // @required dueDate = '';
  // isDone = false;

  constructor()
  {
    this.description = '';
    this.dueDate = '';
    this.isDone = false;
  }
}

export default class TodoStoreItem
{
  constructor(description, dueDate, isDone)
  {
    this.description = description;
    this.dueDate = dueDate;
    this.isDone = isDone;
  }
}
