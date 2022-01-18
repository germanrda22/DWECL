const tareas = {
    data(){
        return{
            listaTareas: [],
            nuevaTarea: '',
            mostrar:false,
            tareasCompletadas: []
        }
    },
    methods:{
        agregar(){
            this.listaTareas.push(this.nuevatarea);
            this.nuevaTarea = '';
            this.mostrar = true;
        },
        completar(){
            this.tareasCompletadas.push();
        }
    },
    computed:{
        completados(){
            completadas = 0;
            for(let i = 0; i < this.listaTareas.length; i++){
                if(i.completed){
                    completadas++;
                }
            }
            return completadas;
        }
    }
}

window.onload = function(){
    Vue.createApp(tareas).mount('#app');
}