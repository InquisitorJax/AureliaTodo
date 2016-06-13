"use strict";
/**
 * Created by malcolmj on 6/13/2016.
 */
require('bootstrap');
function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging();
    //.plugin('aurelia-validatejs');
    //Uncomment the line below to enable animation.
    //aurelia.use.plugin('aurelia-animator-css');
    //if the css animator is enabled, add swap-order="after" to all router-view elements
    //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
    //aurelia.use.plugin('aurelia-html-import-template-loader')
    aurelia.start().then(function () { return aurelia.setRoot(); });
}
exports.configure = configure;
//# sourceMappingURL=main.js.map