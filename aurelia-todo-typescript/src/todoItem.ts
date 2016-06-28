/**
 * Created by malcolmj on 6/28/2016.
 */

module Models {

    export interface ITodoItem {
        description:string;
        dueDate:string;
        isDone:boolean;
    }

    export class TodoItem implements ITodoItem {
        static STORAGE_KEY:string = 'Todo';
        public description:string;
        public dueDate:string;
        public isDone:boolean;

        constructor() {
            this.description = '';
            this.dueDate = '';
            this.isDone = false;
        }
    }


    export class TodoStoreItem implements ITodoItem {
        constructor(public description:string, public dueDate:string, public isDone:boolean) {
        }
    }
}
export = Models;