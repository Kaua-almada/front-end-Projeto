import getSales from '../../services/api'
import { useEffect, useState } from "react";

function Cards(){
    useEffect(() => {
        var teste = document.getElementById("mainCard") as HTMLDivElement;
        console.log(teste)
        getSales.getSales(teste)
       
        console.log(getSales)
    }, []);
    
    return(
        
        <div id="mainCard" className="mainCard">
        </div>
    )
}



export default Cards;