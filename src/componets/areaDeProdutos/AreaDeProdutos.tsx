// AreaDeProdutos.jsx

import Cards from '../cards/Cards';
import './AreaDeProdutos.css';
import React from 'react';

function AreaDeProdutos(){
  return(
    <div className='conteiner-carrinho-P'>
      <div className='Texto-Principal-carrinho'>
        <h1>Seu carrinho</h1>
      </div>

      <div className='item-valor-container'>
        
      </div>
      <Cards/>
    </div>
  );
}

export default AreaDeProdutos;
