/**
 * Created by malcolmj on 6/3/2016.
 */
/** This is the View-Model **/

import {Router, RouterConfiguration} from 'aurelia-router';

export class App
{
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router)
    {
        config.title = 'Todo App';
        config.map([
            { route: ['','tasks'], moduleId: 'tasks', nav: true, title:'Tasks with Aurelia' }
        ]);
        this.router = router;
    }
}
