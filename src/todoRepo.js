/**
 * Created by malcolmj on 6/6/2016.
 */

import {STORAGE_KEY} from './todoItem';
import TodoStoreItem from "./todoItem";


export default class TodoRepo
{
  constructor()
  {
  }

  add(todoItem)
  {
    let key = STORAGE_KEY + todoItem.description;
    //NOTE: original will have appended observers attached - which screws with the json serialization - save plain copy
    let todoCopy = new TodoStoreItem(todoItem.description, todoItem.dueDate, todoItem.isDone);
    window.localStorage.setItem(key, JSON.stringify(todoCopy));
  }

  remove(todoItem)
  {
    let key = STORAGE_KEY + todoItem.description;
    window.localStorage.removeItem(key);
  }

  update(todoItem)
  {
    this.add(todoItem);
  }

  findByText(text)
  {
    let key = STORAGE_KEY + text;
    return findByKey(key);
  }

  findByKey(key)
  {
    return JSON.parse(window.localStorage.getItem(key));
  }

  getAll()
  {

    console.log("get all Tasks")
    let items = [];
    for(let i=0; i < window.localStorage.length; i++)
    {
      let key = window.localStorage.key(i);
      if (key.startsWith(STORAGE_KEY))
      {
        let todoItem = this.findByKey(key);
        items.push(todoItem);
      }
    }
    return items;
  }

  clearAll()
  {
    window.localStorage.clear();
  }
}
