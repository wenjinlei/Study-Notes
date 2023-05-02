import Vue from 'vue';

let vm = new Vue({
    el: '#app',
    data() {
        return {
            title: '学生列表',
            className: 1,
            total: 2,
            info: {
                age: 34,
                sex: 'man'
            },
            students: [
                {
                    id: 1,
                    name: '小米姑娘'
                },
                {
                    id: 2,
                    name: '章一'
                }
            ]
        }
    }
})

console.log(vm.students.push({id: 3, name: '之一'}));