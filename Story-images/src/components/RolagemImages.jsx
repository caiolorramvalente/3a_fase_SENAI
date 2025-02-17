import React, { useState } from 'react'
import './Rolagem.css'


function RolagemImages() {
    const [imagemSelecionada,setImagemSelecionada]=useState('https://png.pngtree.com/png-vector/20230124/ourmid/pngtree-click-here-button-in-duo-tone-yellow-color-with-rectangle-shape-png-image_6561832.png')
    let imagesUsadas = []
    



    function gerarImagens() {
        let gerarNumero = Math.floor(Math.random()*(5-1)+1)
        console.log(gerarNumero)
        


        switch(gerarNumero){
            case 1:
                let gerarNumero = Math.floor(Math.random() * (8 - 1)+1) // escolher entre uma das images
                console.log("dentro do case um  :"+gerarNumero)
                  if(gerarNumero){}

                  if(gerarNumero==1){ setImagemSelecionada('./images/animais/alien.svg')}
                  
                  if(gerarNumero==2){setImagemSelecionada('./images/animais/ele.svg')}

                  if(gerarNumero==3){setImagemSelecionada('./images/animais/galinha.svg')}

                   if(gerarNumero==4){setImagemSelecionada('./images/animais/pato.svg')}

                  if(gerarNumero==5){setImagemSelecionada('./images/animais/proco.svg')}

                   if(gerarNumero==6){setImagemSelecionada('./images/animais/tartaruga.svg')}

                   if(gerarNumero==7){setImagemSelecionada('./images/animais/vaca.svg')}

                
            break

            case 2:
                var gerarNumeroDois = Math.floor(Math.random() * 8) // escolher entre uma das images
                  

                  if(gerarNumeroDois==1){ setImagemSelecionada('./images/comidas/abacaxi.svg')}
                  
                  if(gerarNumeroDois==2){setImagemSelecionada('./images/comidas/arroz.svg')}

                  if(gerarNumeroDois==3){setImagemSelecionada('./images/comidas/feija.svg')}

                   if(gerarNumeroDois==4){setImagemSelecionada('./images/comidas/hambregeur.svg')}

                  if(gerarNumeroDois==5){setImagemSelecionada('./images/comidas/maca.svg')}

                   if(gerarNumeroDois==6){setImagemSelecionada('./images/comidas/pizza.svg')}

                   if(gerarNumeroDois==7){setImagemSelecionada('./images/comidas/taco.svg')}
                
            break

            case 3:
                var gerarNumeroDois = Math.floor(Math.random() * 8) // escolher entre uma das images
                  

                if(gerarNumeroDois==1){ setImagemSelecionada('./images/lugares/casa.svg')}
                
                if(gerarNumeroDois==2){setImagemSelecionada('./images/lugares/fanteama.svg')}

                if(gerarNumeroDois==3){setImagemSelecionada('./images/lugares/macaco.svg')}

                 if(gerarNumeroDois==4){setImagemSelecionada('./images/lugares/montanha.svg')}

                if(gerarNumeroDois==5){setImagemSelecionada('./images/lugares/piramide.svg')}

                 if(gerarNumeroDois==6){setImagemSelecionada('./images/lugares/praia.svg')}

                 if(gerarNumeroDois==7){setImagemSelecionada('./images/lugares/zmobie.svg')}
                
            break

            case 4:
                var gerarNumeroDois = Math.floor(Math.random() * 8)
                console.log(gerarNumeroDois)

            if(gerarNumeroDois==1){ setImagemSelecionada('./images/proficoes/avaio.svg')}
                
                if(gerarNumeroDois==2){setImagemSelecionada('./images/proficoes/bombeiro.svg')}

                if(gerarNumeroDois==3){setImagemSelecionada('./images/proficoes/f1.svg')}

                 if(gerarNumeroDois==4){setImagemSelecionada('./images/proficoes/navio.svg')}

                if(gerarNumeroDois==5){setImagemSelecionada('./images/proficoes/planeta.svg')}

                 if(gerarNumeroDois==6){setImagemSelecionada('./images/proficoes/police.svg')}

                 if(gerarNumeroDois==7){setImagemSelecionada('./images/proficoes/bomb.svg')}
                
            default:
        }
       



    }
  return (
    <div className='divRolagem'>

       
          
<div className='divTest'>
    
        <img src={imagemSelecionada} alt="" className='img' onClick={gerarImagens} />

</div>
           
           

       
        
        
    </div>
    
  )
}

export default RolagemImages