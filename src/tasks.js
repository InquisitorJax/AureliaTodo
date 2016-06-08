/**
 * Created by malcolmj on 6/6/2016.
 */

import TodoRepo from './todoRepo';
import TodoItem from './todoItem';
import {BindingEngine, inject} from 'aurelia-framework';
//http://ilikekillnerds.com/2015/10/observing-objects-and-arrays-in-aurelia/

@inject(BindingEngine)
export class Tasks{

  constructor(bindingEngine){
    this.bindingEngine = bindingEngine;

    this.heading = 'Todo App';
    this.model = new TodoItem();
    this.store = new TodoRepo();
    this.taskItems = [];
    this.filteredItems = [];
    this.searchText = "";
    this.showCompleted = true;
    this.observeShowCompleted();
    
    this.bindingEngine.collectionObserver(this.taskItems).subscribe(this.onTasksChanged);
    this.loadAllTasks();
  }

  loadAllTasks()
  {
    let tasks = this.store.getAll();

    for (let item of tasks)
    {
      this.observeTodoItem(item);
    }

    this.taskItems = tasks;
    this.filterTasks();
  }

  observeShowCompleted()
  {
    this.bindingEngine.propertyObserver(this, 'showCompleted')
      .subscribe((o, n) => this.filterTasks());
  }


  observeTodoItem(todoItem)
  {
    //memory leak because there is no unsubscribe??
    this.bindingEngine.propertyObserver(todoItem, 'isDone')
                                 .subscribe((o, n) => this.onIsDoneChanged(todoItem));
  }

  onIsDoneChanged(todoItem)
  {
    //this.updateFilteredItems(this.filter);
    this.store.update(todoItem)
  }

  addTask()
  {
    this.store.add(this.model);
    this.taskItems.push(this.model);
    this.observeTodoItem(this.model);
    this.model = new TodoItem();
  }

  onTasksChanged(splices)
  {
    this.filterTasks();
  }

  filterTasks()
  {
    console.log("filter items...");
    let filter = this.searchText;
    let showCompleted = this.showCompleted;

    let filterByText = this.searchText;

    this.filteredItems = this.taskItems.filter(function (todoItem)
    {
      let showItem = true;
      if (filterByText) {
        let todoText = todoItem.description.toLowerCase();
        showItem = todoText.indexOf(filter.toLowerCase()) > -1;
      }

      if (showItem && !showCompleted)
      {
        showItem = !todoItem.isDone;
      }

      return showItem;
    });
  }

  deleteCompletedTasks()
  {

    let completedTasks = this.taskItems.filter(function(task) {
      return task.isDone;
    })

    for (let item of completedTasks)
    {
      this.store.remove(item);
      let index = this.taskItems.indexOf(item);
      if (index != -1)
        this.taskItems.splice(index, 1);
    }
  }

  deleteAllTasks()
  {
    this.store.clearAll();
    this.taskItems = [];
  }
}
