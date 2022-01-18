window.onload = function(){
    Vue.createApp(tareas).mount('body');
}

const tareas = {
    data(){
        return{
            listaTareas: [],
            tarea: '',
            prioridad: ''
        }
    },
    methods:{
        agregar(){
            this.listaTareas.push({nombre:this.tarea, prioridad:this.prioridad});
        },
    },
    computed:{
        
    },
    mounted(){

    }
}