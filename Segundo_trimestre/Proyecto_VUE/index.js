window.onload = function(){
    Vue.createApp(tareas).mount('body');
}

const tareas = {
    data(){
        return{
            listaTareas: [],
            tarea: '',
            prioridad:'',
            clase_true: 'completado',
            clase_false: 'incompleto'
        }
    },
    methods:{
        agregar(){
            if (this.tarea && this.prioridad){
                this.listaTareas.push(
                    {
                        nombre: this.tarea,
                        fecha: new Date(),
                        prioridad: this.prioridad,
                        estado:false
                    }
                );
                this.tarea = '';
                this.prioridad = '';
                this.updateLocalStorage()
            }
        },
        completar(index){
            this.listaTareas[index].estado = !this.listaTareas[index].estado;
            
            this.updateLocalStorage();
        },
        borrar(index){
            this.listaTareas.splice(index, 1);
            this.updateLocalStorage();
        },
        updateLocalStorage(){
            localStorage.all = JSON.stringify(this.listaTareas);
        },
        borrarCompletadas(){
            arr =[];
            this.listaTareas.forEach(element => {
                if(element.estado == false){
                    arr.push(element);
                }
            });
            this.listaTareas = arr;
            this.updateLocalStorage();
        },
        mostrarCompletadas(){
            this.tareas = JSON.parse(localStorage.all);
            let completas = [];
            this.tareas.forEach(tarea =>{
                if(tarea.estado){
                    completas.push(tarea);
                }
                this.listaTareas = completas;
            })
        },
        mostrarIncompletadas(){
            this.tareas = JSON.parse(localStorage.all);
            let incompletas = [];
            this.tareas.forEach(tarea =>{
                if(!tarea.estado){
                    incompletas.push(tarea);
                }
                this.listaTareas = incompletas;
            })
        },
        mostrarTodos(){
            this.listaTareas = JSON.parse(localStorage.all);
        },
        borrarTodas(){
            this.listaTareas = [];
        }
    },
    computed:{
        incompletos(){
            let num_incompletos = this.listaTareas.filter(tarea => !tarea.estado).length;
            return num_incompletos;
        }
    },
    mounted(){
        if(localStorage.all)
            this.listaTareas = JSON.parse(localStorage.all);
    }
}