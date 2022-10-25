import "../../App.css";
import sobreImg from "../../img/logo-betin.svg";

//css
import './ContentSobre.css'
export function ContentSobre() {
  return (
    <section className="content-sobre container">
      <div className="header-img container">
        <img src={sobreImg} alt="" />
      </div>
            <div class=" text-uppercase fw-bold">
            <h2>Sobre o Projeto Betin</h2>
            </div>
            
            <h2 className="title-page">Quem somos</h2>
            <p class="my-3 text-xl-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti libero sed autem, voluptate inventore ducimus laboriosam incidunt et at repudiandae id amet maiores necessitatibus. Distinctio consectetur soluta quae laboriosam nobis.</p>
            <p class="my-3 text-xl-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque autem amet ullam quasi error fuga nam molestiae voluptatum eius. Perferendis assumenda, architecto iure, ipsum eveniet praesentium similique molestiae est tempore fugit rerum! Obcaecati eum, cum perspiciatis amet eos quae? Architecto eaque ullam quisquam suscipit unde ea accusantium ipsum aspernatur nihil voluptate nemo, nobis fuga earum magnam excepturi, maxime atque eveniet!</p>
            <p class="my-3 text-xl-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse suscipit atque dolorem molestiae expedita sapiente ipsa pariatur vero, fuga quisquam eaque labore debitis commodi hic sunt repellendus maxime sit. Ab debitis fugit eum delectus ad! Incidunt at illo ducimus eaque!</p>
     
    </section>
  );
}
