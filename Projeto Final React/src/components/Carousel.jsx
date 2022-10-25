import React from "react";

import carouselImg from "../img/hero-image (1).jpg";
import carouselImg2 from "../img/hero-image (3).jpg";

export default function Carousel() {
   return (
      <section class="carrosel">
         <article id="carouselExampleIndicators" class="carousel slide " data-interval="4000" data-ride="carousel">

            <ol class="carousel-indicators">
               <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
               <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>

            <div class="carousel-inner">
               <div class="carousel-item active">
                  <figure>
                     <img class="d-block w-100 img-carrosel" src={carouselImg} alt="Primeiro Slide" />
                  </figure>
               </div>
               <div class="carousel-item">
                  <figure>
                     <img class="d-block w-100 img-carrosel" src={carouselImg2} alt="Segundo Slide" />
                  </figure>
               </div>
            </div>

            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
               <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>

            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
               <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
         </article>
      </section>
   )
}