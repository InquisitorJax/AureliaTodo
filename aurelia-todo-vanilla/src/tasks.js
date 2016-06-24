/**
 * Created by malcolmj on 6/6/2016.
 */

import TodoRepo from './todoRepo';
import TodoItem from './todoItem';
import {BindingEngine, inject} from 'aurelia-framework';
import {NewInstance} from 'aurelia-dependency-injection';
import {ValidationController} from 'aurelia-validation';
import {validateTrigger} from 'aurelia-validation';
import {ValidationRules} from 'aurelia-validatejs';

@inject(BindingEngine, NewInstance.of(ValidationController))
export class Tasks
{


  constructor(bindingEngine, validationController)
  {
    this.bindingEngine = bindingEngine;
    this.validationController = validationController;
    this.validationController.validateTrigger = validateTrigger.change;

    this.heading = 'Todo App';
    
    this.initializeModel();

    this.store = new TodoRepo();
    this.taskItems = [];
    this.filteredItems = [];
    this.searchText = "";
    this.showCompleted = true;
    this.observeShowCompleted();

    //note: if delegate is a this.method(splices) which calls filterTasks, filterTasks cannot be found because 'this' is undefined??
    this.bindingEngine.collectionObserver(this.taskItems).subscribe(splices => this.filterTasks());
    this.loadAllTasks();
  }

  initializeModel()
  {
    this.model = new TodoItem();
    this.rules =  ValidationRules
      .ensure('description').required().length({minimum: 3, maximum: 10})
      .ensure('dueDate').required()
      .on(this.model);

  }


  loadAllTasks()
  {
    let tasks = this.store.getAll();

    for (let item of tasks)
    {
      this.observeTodoItem(item);
    }

    console.log("Found :" + tasks.length);

    this.taskItems.length = 0;
    this.taskItems.push.apply(this.taskItems, tasks);
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
    this.store.update(todoItem)
  }

  addTask()
  {
    let errors = this.validationController.validate();

    if (errors.length == 0)
    {
      this.store.add(this.model);
      this.taskItems.push(this.model);
      this.observeTodoItem(this.model);
      this.model = new TodoItem();
    }
  }

  filterTasks()
  {
    console.log("filter items...");
    console.log("Count original: " + this.taskItems.length);

    let filter = this.searchText;
    let showCompleted = this.showCompleted;

    let filterByText = this.searchText;

    let filteredTasks = this.taskItems.filter(function (todoItem)
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

    this.filteredItems.length = 0;
    this.filteredItems.push.apply(this.filteredItems, filteredTasks);
    console.log("Count filtered: " + this.filteredItems.length);
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
    this.taskItems.splice(0, this.taskItems.length); //NOTE: .length = 0 doesn't fire the array observation event
  }
}
