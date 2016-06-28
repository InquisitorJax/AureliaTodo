/**
 * Created by malcolmj on 6/28/2016.
 */

import Models = require('./todoItem');
import TodoItem = Models.TodoItem;
import TodoStoreItem = Models.TodoStoreItem;

export default class TodoRepo
{
    constructor()
    {
    }

    add(todoItem : TodoItem)
    {
        let key : string = TodoItem.STORAGE_KEY + todoItem.description;
        //NOTE: original will have appended observers attached - which screws with the json serialization - save plain copy
        let todoCopy = new TodoStoreItem(todoItem.description, todoItem.dueDate, todoItem.isDone);
        window.localStorage.setItem(key, JSON.stringify(todoCopy));
    }

    remove(todoItem : TodoItem)
    {
        let key : string = TodoItem.STORAGE_KEY + todoItem.description;
        window.localStorage.removeItem(key);
    }

    update(todoItem : TodoItem)
    {
        this.add(todoItem);
    }

    findByText(text : string) : TodoItem
    {
        let key : string = TodoItem.STORAGE_KEY + text;
        return this.findByKey(key);
    }

    findByKey(key : string) : TodoItem
    {
        return JSON.parse(window.localStorage.getItem(key));
    }

    getAll() : Array<TodoItem>
    {
        console.log("get all Tasks")
        let items : Array<TodoItem> = [];
        for(let i : number = 0; i < window.localStorage.length; i++)
        {
            let key = window.localStorage.key(i);
            if (key.startsWith(TodoItem.STORAGE_KEY))
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
