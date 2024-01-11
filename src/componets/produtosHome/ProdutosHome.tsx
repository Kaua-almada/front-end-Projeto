import React, { useState } from 'react';
import './ProdutosHome.css';
import axios from 'axios';

interface Produto {
  title: string;
  value: string;
  image: string;
  description: string;
}


const produtos: Produto[] = [
  {
    title: '100 Salgado Especiais',
    value: '20,00',
    image: 'https://panificadorabonanza.com.br/wp-content/uploads/2022/07/IMG_8225-1024x683.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Promoção Especial',
    value: ' ̶1̶0̶0̶.̶0̶0̶  $70,00',
    image: 'https://www.mimoscestasepresentes.com.br/image/cache/data/cesta-com-chocolates/10110---mini-salgados-c-6-und-01-2023-07-22-13-53-55-926x926.jpg',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Cesta de Mini Salgados',
    value: ' ̶1̶0̶,̶0̶0̶  $10,00',
    image: 'https://img77.uenicdn.com/image/upload/v1620674715/business/c4c5a21d-0e22-48f2-95a1-66eedc1ff3ac.jpg',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

async function AdicionarCarrinho(produto: Produto) {
  var produtoUri = "http://localhost:8081/api/produtos";

  console.log(`Produto adicionado ao carrinho: ${produto.title}`);

  
  var titulo = (produto.title);
  var value = (produto.value);
  var image = (produto.image);
  var description = (produto.description);

  var produtorDataJson = {
    title: produto.title,
    value: produto.value,
    image: produto.image,
    description: produto.description,
  };

  console.log(produtorDataJson);

  const response = await axios.post(produtoUri, produtorDataJson, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
    maxRedirects: 0,
  });
  
  if (response.status === 200) {
    console.log("Produto adicionado com sucesso!");
  } else {
    console.error("Erro ao adicionar produto ao carrinho.");
  }
}



function ProdutosDiv() {
  const [carrinho, setCarrinho] = useState<Produto[]>([]);

  return (
    <div className="papai">
      <h1>Confira nossas promoções de salgados</h1>
      <div className="cards-container">
        {produtos.map((produto, index) => (
          <div key={index} className="card">
            <img src={produto.image} alt={`Card ${index + 1}`} />
            <h3>{produto.title}</h3>
            <h4>{produto.value}</h4>
            <p>{produto.description}</p>
            <button onClick={() => AdicionarCarrinho(produto)}>
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
      <p>Confira também nossos doces</p>
    </div>
  );
}

export default ProdutosDiv;