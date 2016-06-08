/**
 * Created by malcolmj on 6/6/2016.
 */
export const STORAGE_KEY = 'Todo';

export default class TodoItem
{
  constructor()
  {
    this.description = "";
    this.dueDate = "";
    this.isDone = false;
  }

  get storekey()
  {
    return '${STORAGE_KEY}${this.description}';
  }
  
}
