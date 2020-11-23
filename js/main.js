Vue.component('task', {
    template: '#task-template',
    props: ['name', 'date', 'color', 'priority', 'small_tasks', 'index'],
    methods: {
        deleteTask: function () {
            Todo.deleteTask()
        },
    },

});

var Todo = new Vue({
    el: '#Todo',
    data: {
        new_name: '',
        new_color: "",
        dateNow: new Date,
        tasks: [],
        new_task: '',
    },
    methods: {
        addTask: function () {
            new_task = {
                title: this.new_name,
                color: this.new_color,
                date: this.dateNow.toDateString() + " " + this.dateNow.toLocaleTimeString(),
                smallTasks: []
            };
            if (new_task.title != '') {
                this.tasks.push(new_task);
                if (new_task.color == "") {
                    new_task.color = "white"
                }
                this.new_name = '';
                this.new_color = '';
            }
        },
        deleteTask: function (index) {
            this.tasks.splice(index, 1);

        },
        addSmallTask: function (index) {
            console.log(this.tasks[index])
        }
    },
    created() {
        for (i = 0; i < localStorage.length; i++) this.tasks.push(JSON.parse(localStorage.getItem(i)));
    },
    updated() {
        localStorage.clear();
        for (i = 0; i < this.tasks.length; i++) localStorage.setItem(i, JSON.stringify(this.tasks[i]));
    }
});