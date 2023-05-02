import observe from "./observe";
function defineReactiveData(data, key, value) {
    observe(value);
    Object.defineProperty(data, key, {
        get () {
            console.log('响应式 获取', value)
            return value;
        },
        set (newValue) {
            console.log('响应式 设置', value);
            if (newValue === value) return;
            observe(newValue);
            value = newValue;
        }
    })
}

export default defineReactiveData;