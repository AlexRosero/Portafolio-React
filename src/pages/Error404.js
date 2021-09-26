import errorimg from '../images/Error404_1.jpg';

import {
	Link
  } from "react-router-dom";


function Error404() {

	return (


		<div className="container">




			<div class="row">
				<div class="col s12 m8">
					<div class="card">
						<div class="card-image">
							<img className='activator' src={errorimg} />
							<span class="card-title">  </span>
						</div>
						<div class="card-content">
							<h5> <strong>Error 404 </strong> Estás intentando acceder a una página que no existe </h5>
						</div>
						<div class="card-action">

						<Link to="/" class="waves-effect red lighten-2 btn"> Volver a Página de Inicio</Link>
							
						</div>
					</div>
				</div>
			</div>




		</div>







	);
}

export default Error404;