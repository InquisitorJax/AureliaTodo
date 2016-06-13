/**
 * Created by malcolmj on 6/13/2016.
 */

export class App {
    //private _someVariable : integer;
    message;

    constructor()
    {
        this.message = 'Oh hai';
    }

    exclaim()
    {
        this.message += '!';
    }
}