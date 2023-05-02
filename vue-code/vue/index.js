import { initState } from './init.js';
function Vue (options) {
    this._init(options);
}

Vue.prototype._init = function(options) {
    var vm = this;
    vm.$options = options;

    initState(vm);
}

export default Vue;