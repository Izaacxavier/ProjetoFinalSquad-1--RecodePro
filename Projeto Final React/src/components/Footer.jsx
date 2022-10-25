import React from "react";

export default class Footer extends React.Component {
   render() {
      return (
         <footer class="p-3 mt-5">
            <p class="text-dark m-0 text-center">&copy; Betin 2022</p>
            <ul class="navbar-nav text-center d-flex flex-row justify-content-center">
               <li><a class="nav-item nav-link mr-2" href="#"><i class="fa-brands fa-facebook-square"></i></a></li>
               <li><a class="nav-item nav-link mr-2" href="#"><i class="fa-brands fa-instagram"></i></a></li>
               <li><a class="nav-item nav-link mr-2" href="#"><i class="fa-brands fa-twitter-square"></i></a></li>
            </ul>
         </footer>
      )
   }
}