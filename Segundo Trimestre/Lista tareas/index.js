window.onload = function(){
    
    const tareas = {
        data(){
            return{
                listatareas: [],
                nuevatarea: ''
            }
        },
        methods:{
            agregar(){
                this.listatareas.push(this.nuevatarea);
                this.nuevatarea = '';
            }
        }
    }

    Vue.createApp(tareas).mount('#app');
}