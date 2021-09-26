

import Profile from '../components/perfil/Perfil';
import About from '../components/Sobre/Sobre';
import Skills from '../components/habilidades/habilidades';
import Experiences from '../components/experiencia/Experiencia';
import Educations from '../components/educacion/Educacion';
import Portfolios from '../components/portfolios/Portfolios';

function Portafolio(){

	return(

      
				
				<div className='container'>
					<div className='row'>
						<div className='col s12 m3'>
							<Profile />
						</div>
						<div className='col s12 m9'>
							<About />
							<Skills />
							<Experiences />
							<Educations />
							<Portfolios />
						</div>
					</div>
				</div>
		
		 


		);
}

export default Portafolio;







