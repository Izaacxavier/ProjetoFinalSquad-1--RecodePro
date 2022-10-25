// react
import React from "react";
import { useNavigate } from "react-router-dom";
// img
import imgContent from "../../img/teste.jpg";
// css
import "./Content.css";

export default function Content() {
  //redirect
  const navigate = useNavigate();

  return (
    <div class="container-fluid">
      <section>
        <h1 class="titulo-principal text-center mt-5">
          Um mundo com educação sem fronteiras.
        </h1>

        <p class="texto my-2">
          Tendo em base o PNE seus retrocessos e a situação atual da educação no
          Brasil, decidimos lançar o projeto chamado BETIN um site interativo,
          dinâmico, intuitivo de fácil acesso capaz de engajar facilmente até
          mesmo as pessoas que não possuem afinidade com a tecnologia.
        </p>

        <div class="conteudo-secundario container py-4 py-xl-5">
          <div class="row gy-4 gy-md-0">
            <div class="col-md-6">
              <div class="p-xl-6 m-xl">
                <img
                  class="rounded img-fluid w-100 fit-cover shadow-sm p-2 mb-5 bg-white"
                  src={imgContent}
                />
              </div>
            </div>
            <div class="col-md-6 d-md-flex align-items-gb-center">
              <div class="conteudo-secundario-text">
                <h2 class="text-uppercase fw-bold text-xl-start">
                  {" "}
                  Um projeto que leva educação a todos
                </h2>
                <p class="my-2 text-xl-start">
                  Betin é um projeto com objeto de levar educação para população
                  em zonas rurais através da tecnologia. Apesar de políticas
                  públicas implementadas nos últimos vinte anos o analfabetismo
                  no Brasil acompanha o crescente mapa da fome e subemprego. As
                  condições precárias das instituições escolares, o limitado
                  acesso às escolas de educação básica pela ausência de
                  transporte, são agravantes que confirmam essa dura realidade.
                </p>
                <p class="my-2 text-xl-start">
                  O acesso às instituições de ensino e a qualidade do serviço
                  não são uniformes no território brasileiro. Existem diferenças
                  significativas entre regiões, estados e municípios.
                  Possivelmente, a diferença mais marcante é verificada entre os
                  indicadores educacionais dos meios rural e urbano. as condição
                  da escola rural ainda é precária em relação às escolas
                  urbanas.
                </p>
                <div className="btn-principal">
                  <button
                    class=" btn btn-primary"
                    onClick={() => navigate("/sobre")}
                  >
                    Saiba mais sobre o nosso projeto
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
