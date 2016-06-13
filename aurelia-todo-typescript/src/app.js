/**
 * Created by malcolmj on 6/13/2016.
 */
"use strict";
var App = (function () {
    function App() {
        this.message = 'Oh hai';
    }
    App.prototype.exclaim = function () {
        this.message += '!';
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map