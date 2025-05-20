
class Zologico{

    constructor() {
        this.animais = [];
    }
    
 inserirAnimal(animal){
   
    this.animais.push(animal)
  
    return this.animais
 }

 retirarAnimal(animal){
   let posicaoAnimal= this.animais.indexOf(animal)

   
   if (posicaoAnimal > -1) {  // Verifica se o animal existe no array
    this.animais.splice(posicaoAnimal, 1);  // Remove o animal do array
}


   return this.animais
 
 }

  trocarAnimal(animal,animal2){

    let posicao = this.animais.indexOf(animal)
    this.animais.splice(posicao,1,animal2)
   
     return this.animais

  }


}
module.exports=Zologico