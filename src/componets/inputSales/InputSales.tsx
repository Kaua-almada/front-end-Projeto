import React, { useState } from "react";
import './InputSales.css'
import axios from "axios";

async function ProductDataPost(){
    var productTitleInput = document.getElementById("productTitle") as HTMLInputElement || null;
    var productValue = document.getElementById("productValue") as HTMLInputElement || null;
    var productImage = document.getElementById("productImage") as HTMLInputElement || null;
    var productDescription = document.getElementById("productDescription") as HTMLInputElement || null;
    var productUri = "http://localhost:8081/api/venda";
     var productDataJson = {
        
        "Title": productTitleInput.value.toString(),
        "Value": productValue.value.toString(),
        "Image": productImage.value.toString(),
        "Description": productDescription.value.toString(),

    };
    console.log(productDataJson)
    await axios.post(productUri, productDataJson, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json"
        },
        maxRedirects: 0,
      }).then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log("error" + error)
      });
      
    }

function InputProduct (){

    return(
        <div className="container">
            <div className="inputs-product">
                <input type="text" placeholder="title" id="productTitle"></input>
            </div>

            <div className="inputs-product">
                <input type="text" placeholder="value" id="productValue"></input>
            </div>

            <div className="inputs-product">
                <input type="text" placeholder="Image" id="productImage"></input>    
            </div>

            <div className="inputs-product">
                <input type="text" placeholder="Description" id="productDescription"></input>
            </div>
            <div className="botaopost-product">
                <button id="sendpost" className="botao-product-post" onClick={ProductDataPost}>post</button>
            </div>
        </div>
    )
}

export default InputProduct;
