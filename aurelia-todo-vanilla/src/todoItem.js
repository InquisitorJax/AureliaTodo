/**
 * Created by malcolmj on 6/6/2016.
 */

export const STORAGE_KEY = 'Todo';

export default class TodoItem
{
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
