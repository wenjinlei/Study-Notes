import { ARR_METHODS } from "./config";
import observeArr from './observeArr';

let  originArrMethods = Array.prototype,
     arrMethods = Object.create(originArrMethods);

ARR_METHODS.map(fn => {
    arrMethods[fn] = function() {
        let args = Array.prototype.slice.call(arguments);
        let rt = originArrMethods[fn].apply(this, args);

        // 需要观察数组增加的项
        let newArr;
        switch(fn) {
            case 'push':
            case 'unshift':
                newArr = args;
                break;
            case 'splice':
                newArr = args.slice(2);
                break;
            default:
                break;
        }

        newArr && observeArr(newArr);

        return rt;
    }
})

export {
    arrMethods
}
