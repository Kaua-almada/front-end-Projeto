import React from "react";
import axios from 'axios';

async function getUser(divId: HTMLDivElement) {
    const userUri = "http://localhost:8081/api/users";

    try {
        const response = await axios.get(userUri);
        var content = "";
        const dataUser: Record<string, { name: string, lastName: string, email: string, password: string, cpf: string }> = response.data;

        const dataUserArray = Object.entries(dataUser).map(([key, value]) => ({
            key,
            ...value
        }));

        dataUserArray.forEach((dados) => {
            content += `
                <div class="produtos">
                    <h1>produtos</h1>
                </div>
                <div class="Imagens">
                    <div>
                        <img src="${dados.name}" alt="Imagem do usuario">
                    </div>
                    <div class="valor">
                        <h1> ${dados.lastName}</h1>
                    </div>
                    
                </div>`;
        });

        divId.innerHTML = content;
    } catch (err) {
        console.error("Error in getUser:", err);
    }
}


const produtosUri = "http://localhost:8081/api/produtos"

// async function handleDelete() {
//     try {
//         await axios.delete(produtosUri, {
//             data: { id: idBanco }
//         });
//         console.log("Exclusão bem-sucedida");
//     } catch (error) {
//         console.log("Erro ao excluir", error);
//     }
// }
    

async function getCarrinho(divTeste: HTMLDivElement) {
    const produtosUri = "http://localhost:8081/api/produtos"

    
    
    try {
        const response = await axios.get(produtosUri);
        var content = "";
        const dataCarrinho: Record<string, {id: number, title: string, value: string, image: string,description: string
         }> = response.data;

        const dataCarrinhoArray = Object.entries(dataCarrinho).map(([key, value]) => ({
            key,
            ...value
        }));

        
        
        dataCarrinhoArray.forEach((dados) => {
            const valorId = dados.id;
            content += `
            <div class="Container-carrinho">
                <div class="produtos-carrinho-card">
                 
                    <img src="${dados.image}" alt="Imagem do produto">
                    <h3> ${dados.title}</h3>
                    <h4>${dados.value}</h4>
                    <button onClick={handleDelete}>Excluir</button>
                </div>
            </div>`
        })
        divTeste.innerHTML = content;
    } catch (err) {
        console.error("Error in getProducts:", err);
    }
}

async function getSales(divTeste: HTMLDivElement) {
    const dadaVenda = "http://localhost:8081/api/venda";

    try {
        const response = await axios.get(dadaVenda);
        var content = "";
        const dataCarrinho: Record<string, {id: number, title: string, value: string, image: string,description: string
         }> = response.data;

        const dataCarrinhoArray = Object.entries(dataCarrinho).map(([key, value]) => ({
            key,
            ...value
        }));
        
    
        dataCarrinhoArray.forEach((dados) => {
            content += `
            <div class="Container-carrinho">
                <div>
                    <img src="${dados.image}" classe="teste">
                    <h3> ${dados.title}</h3>
                    <h4>${dados.value}</h4>
                    <button onClick={handleDelete}>Excluir</button>
                </div>
            </div>`
        })
        divTeste.innerHTML = content;
    } catch (err) {
        console.error("Error in getProducts:", err);
    }

   
}

export default { getUser, getCarrinho, getSales };
