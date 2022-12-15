var mySeason = {
    
data(){
    return {
        input:"",
        img:"",
        texto: "",
        mostrar: false;

}
 },
    methods: {
        verificarTexto(e){
            e.preventDefault();
            mostrar = true
            if(this.input === "verão"){
                this.texto = "O verão está chegando. Pra praia desce geral"
                this.img = "https://g3i5r4x7.rocketcdn.me/wp-content/uploads/2020/04/verao-caracteristicas-quando-ocorre-solsticio-e-horario-de-verao.jpg"
                this.input = ""
            }
            else if(this.input ==="inverno"){
                this.texto = "Let it go, let it go. Can't hold it back anymore"
                this.img= "https://static.preparaenem.com/2021/06/1-foto-de-uma-paisagem-com-arvores-casas-e-montanhas-cobertas-por-neve.jpg"
                this.input = ""
            
            }
            else if(this.input ==="outono"){
                this.texto = "Hoje vamos fazer um piquenique"
                this.img= "https://www.betonart.com.br/media/k2/items/cache/867519228d1d5325856fc61d710ded0e_XL.jpg"
                this.input = ""
            }
            else if(this.input ==="primavera"){
                this.texto = "Dia de andar de Bike"
                this.img= "https://www.laboratoriocoffers.com.br/wp-content/uploads/2019/11/primavera1.jpg"
                this.input = ""
            }


         } 
    }
 }


Vue.createApp(mySeason).mount('#season')
