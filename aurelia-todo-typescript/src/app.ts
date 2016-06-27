/**
 * Created by malcolmj on 6/27/2016.
 */

export class App {
    message: string;
    
    constructor() {
        this.message = 'Oh hai';
    }

    exclaim() {
        this.message += '!!!';
    }
}