import Subtitle from '../components/Subtitle';
import Card from '../components/Card';
import Header from '../components/Header';
import CampoPesquisa from '../components/CampoPesquisa';


import atividade1 from '../img/Atividade1.png';
import atividade2 from '../img/Atividade2.jpg';
import atividade3 from '../img/Atividade3.webp';

export default function Atividades() {
   return (
      <div>
         <Header />

         <Subtitle subtitle="Atividades" />

         <CampoPesquisa />
         <div className="d-flex container-fluid">
            <div className="row mx-auto">
               <Card atividadeNome="Silabas" foto={atividade1} />
               <Card atividadeNome="Numeros" foto={atividade2} />
               <Card atividadeNome="Formas" foto={atividade3} />
            </div>
         </div>
      </div>
   )
}
