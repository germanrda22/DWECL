const Counter = {
    data() {
      return {
        counter: 0,
        midato: "Germán",
        listanombres: [],
        nuevonombre:"Escribe tu nombre",
        mostrar:false
      }
    },
    methods:{
        incrementa(){
            this.listanombres.push(this.nuevonombre);
            this.nuevonombre = "";
            this.mostrar = true;
        }
    }
}
window.onload = ()=>{
    Vue.createApp(Counter).mount('#aplicacionVue');
}