/**
 * Created by malcolmj on 6/3/2016.
 */
/** This is the View-Model **/

import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Todo App';
    config.map([
      { route: ['','tasks'], moduleId: 'tasks', nav: true, title:'Tasks with Aurelia' }
    ]);
  });
  }
}
