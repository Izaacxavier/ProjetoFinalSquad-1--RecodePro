import React from "react";
import { Link } from 'react-router-dom';

import logoBetin from "../img/logo-betin.svg";
import logoAccount from "../img/account.svg";

import '../App.css'


class Header extends React.Component {
   render() {
      return (
         <div>
            <nav class=" cabecalho fixed-top navbar navbar-expand-lg navbar-light ">
               <a class="navbar-brand" href="index.html">
                  <img src={logoBetin} alt="logo dass viagens" class="logo" />
               </a>

               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Alterna navegação">
                  <span class="navbar-toggler-icon"></span>
               </button>

               <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                  <ul class="navbar-nav">
                     <li className="nav-item">
                        <Link className="nav-link" to='/'>Inicio</Link>
                     </li>
                     <li>
                        <Link class="nav-link" to='/atividades'>Atividades</Link>
                     </li>
                     <li>
                        <Link class="nav-link" to="historico.html">Histórico</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to='/sobre'>Sobre</Link>
                     </li>
                  </ul>
               </div>

               <div class="collapse navbar-collapse justify-content-end mobile-login" id="navbarNavAltMarkup">
                  <Link class="cabecalho-login" to="/login">
                     <img src={logoAccount} alt="" srcset="" />
                     Login ou Cadastre-se
                  </Link>
               </div>

            </nav>
         </div>

      )
   }
}

export default Header;