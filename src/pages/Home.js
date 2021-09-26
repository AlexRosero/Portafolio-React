
import {
  Link
} from "react-router-dom";


import Img1 from '../images/imagen1.jpg';
import Img3 from '../images/imagen3.jpg';
import Img4 from '../images/imagen4.jpg';
import Img6 from '../images/imagen6.jfif';




function Home() {

  return (
    <div className="container">

      <header class="header">
        <div class="header__container">

          <a href="#" > <h6>  Creación de Componentes con React JS </h6></a>

          <div class="header__toggle">
            <i class='bx bx-menu' id="header-toggle"></i>
          </div>
        </div>
      </header>



      <main>
        <section>
          <h4 class="title"> Lenguaje de programación Javascript FrontEnd - Framework</h4>
          <h5 class="title1"> Analisis y Desarrollo de Sistemas de Información </h5>

          <h4 class="titles">Ficha 2242760</h4>

          <div class="col s12 m7">
            
            <div class="card horizontal">
              <div class="card-image">
                <img className='activator' src={Img4} />
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <p> <b>Portafolio - Hoja de vida, haga click en la parte inferior para continuar </b> </p>
                </div>
                <div class="card-action">
                <a class="btn-floating btn-large pulse"></a>
                <Link to="/portafolio" class="waves-effect waves-light btn" > Ir al portafolio</Link>
                
                </div>
              </div>
            </div>
          </div>



          <div class="row">
        <div class="col s8 m12">
      <div class="card">
        <div class="card-image">
        <img className='activator' src={Img6} />
          <span class="card-title"> Analisis y Desarrollo de Sistemas de Información </span>
        </div>
        <div class="card-content">
          <p></p>
        </div>
        <div class="card-action">
          <a href="#" class="waves-effect light-blue lighten-1 btn"> Mas Información</a>
        </div>
      </div>
    </div>
  </div>


        </section>
      </main>


    </div>
    




  );
}

export default Home;