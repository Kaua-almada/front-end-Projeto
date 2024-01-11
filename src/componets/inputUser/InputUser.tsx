import React from "react";
import './InputUser.css'
import NavBar from "../navbar/Navbar";
import axios from "axios";

async function UserDataPost(){
    var userNameInput = document.getElementById("userName") as HTMLInputElement || null;
    var userLastName = document.getElementById("userLastName") as HTMLInputElement || null;
    var userEmail = document.getElementById("userEmail") as HTMLInputElement || null;
    var userPasseword = document.getElementById("userPasseword") as HTMLInputElement || null;
    var userCpf = document.getElementById("userCpf") as HTMLInputElement || null;
    var userUri = "http://localhost:8081/api/users";
     var userDataJson = {
        
        "name": userNameInput.value.toString(),
        "lastName": userLastName.value.toString(),
        "email": userEmail.value.toString(),
        "passeword": userPasseword.value.toString(),
        "cpf": userCpf.value.toString()

    };
    console.log(userDataJson)
    await axios.post(userUri, userDataJson, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json"
        },
        maxRedirects: 0,
      }).then((response) => {
        console.log(response)
      })
      .catch((erro) => {
        console.log("error" + erro)
      });
    }

    


function InpuUser (){
    return(
    <div className="container">

        <div className="inputs-user">
            <input type="text" placeholder="name" id="userName"></input>
        </div>

        <div className="inputs-user">
            <input type="text" placeholder="lastName" id="userLastName"></input>
        </div>

        <div className="inputs-user">
            <input type="text" placeholder="email" id="userEmail"></input>    
        </div>

        <div className="inputs-user">
            <input type="password" placeholder="pesseword" id="userPasseword"></input>
        </div>

        <div className="inputs-user">
                <input type="text" placeholder="cpf" id="userCpf"></input>
        </div>
        <div className="botaopost-user">
            <button id="sendpost"className="botao-user-post" onClick={UserDataPost}>post</button>
        </div>
    </div>
    )
}
export default InpuUser;