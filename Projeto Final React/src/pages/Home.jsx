import React from "react";

import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

import { SecondSection } from "../components/home/SecondSection";
import Content from "../components/home/Content";



export default function Home() {
   return (
      <div className="App">

         <Header />

         <Carousel />

         <div className="container">
            <Content />
            
         </div>
         <div class="container-fluid">
         <SecondSection />
         </div>

         <Footer />
      </div>
   )

}