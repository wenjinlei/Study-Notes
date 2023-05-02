import proxyData from "./proxy";
import observe from "./observe";

function initState(vm) {
    var options = vm.$options;

    if (options.data) {
        initData(vm);
    }

}

function initData(vm) {
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function' ? data.call(vm) : data || {};

    // data 代理到vm实例上
    for (var key in data) {
        proxyData(vm, '_data', key);
    }

    observe(data);
}

export {
    initState
}