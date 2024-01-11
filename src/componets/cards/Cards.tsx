import './Cards.css';
import getCarrinho from '../../services/api'
import { useEffect, useState } from "react";

function Cards(){
    useEffect(() => {
        var teste = document.getElementById("mainCard") as HTMLDivElement;
        console.log(teste)
        getCarrinho.getCarrinho(teste)
        // teste get sales na div 
        console.log(getCarrinho)
    }, []);
    
    return(
        
        <div id="mainCard" className="mainCard">
        </div>
    )
}



export default Cards;