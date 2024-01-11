import React, { useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import imagemLogo from '../../assets/imgs/logo_da_imagem-removebg-preview.png';

function NavBar() {
  useEffect(() => {
    var endereco = document.location.href.split("/")[4];

    if (endereco === "cadastroProdutos") {
      var divProduto = document.getElementById("produto") as HTMLDivElement;
      divProduto.classList.add("disableLink");
    } else if (endereco === "cadastroCliente") {
      var divCliente = document.getElementById("cliente") as HTMLDivElement;
      divCliente.classList.add("disableLink");
    } else if (endereco === "sobre") {
      var divSobre = document.getElementById("sobre") as HTMLDivElement;
      divSobre.classList.add("disableLink");
    } else if (endereco === "cadastroVendedor") {
      var divVendedor = document.getElementById("vendedor") as HTMLDivElement;
      divVendedor.classList.add("disableLink");
    }
  }, []);

  return (
    <div className="navbar-container">
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/produtos" className="nav-link">Produto</Link>
        <Link to="/vendas" className="nav-link">Vendedor</Link>
      </div>
      <img src={imagemLogo} alt="Logo Almadas" className="logo-image" />
      <div>
        <Link to="/usuario" className="nav-link entrar-btn">Entrar</Link>
      </div>
    </div>
  );
}

export default NavBar;
