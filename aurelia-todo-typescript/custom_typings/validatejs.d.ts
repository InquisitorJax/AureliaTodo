/**
 * Created by malcolmj on 6/28/2016.
 * Temp until typings are provided,. see: https://github.com/aurelia/validatejs
 */
interface ValidateJS {
    (attributes: any, constraints: any, options?:any): any;
    async(attributes, constraints, options?:any): Promise<any>;
    single(value: any, constraints: any, options?:any): any;
}

declare var validate: ValidateJS;

declare module "validate.js" {
    export default validate;
}