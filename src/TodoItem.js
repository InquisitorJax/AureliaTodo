/**
 * Created by malcolmj on 6/6/2016.
 */
export const STORAGE_KEY = 'Todo';
//import {length, required, date} from 'aurelia-validatejs';

export default class TodoItem
{
  //NOTE: Currently get error with circular reference when trying to stringify via JSON
  // @length({ minimum: 5, maximum: 25 })  description = '';
  // @required dueDate = '';

  constructor()
  {
    this.description = "";
    this.dueDate = "";
    this.isDone = false;
  }

  
}
