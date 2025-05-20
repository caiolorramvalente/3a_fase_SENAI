
Zoologico = require('./Zologico')

describe('teste  da classe Zologico ',()=>{
    let zoo
    
 beforeEach(()=>{
    zoo = new Zoologico
 })


test('CT001 (passa) inserir animal', () => {
    expect(zoo.inserirAnimal("🦒")).toEqual(["🦒"])
  
})

test('CT002 (passa) retirar animal',()=>{
     expect(zoo.retirarAnimal("🦒")).toEqual([])
 })
test('CT003 (passa) trocar animal',()=>{
    expect(zoo.trocarAnimal("🦒","🐂")).toEqual(["🐂"])
   

})
test("CT004 (falha) trocar um animal que não existe",()=>{
 expect(zoo.trocarAnimal("🐂","🐸")).toEqual(["🐂"])
})


})