

import {
	Link
  } from "react-router-dom";

import React from 'react';

import ImgProfile from '../../images/Foto_Perfil.jpg';
import 'materialize-css';
	




export default function Profile() {
	return (


		
		<div>
			 
			

			<div className='card' >
				<div className='card-image'>
					<img className='activator' src={ImgProfile} alt='' />
					
				</div>
				<div className='card-content' >
					<span className='card-title activator grey-text text-darken-4'  >
						Alex Esteban Rosero Gualguan
					</span>
					<strong> Técnologo ADSI </strong>
					

				</div>


				
				

				

			</div>

			<div class="row">
   			 		<div class="col s12 m16">
      				<div class="card red lighten-4">
       		 		<div class="card-content black-text">
          				<span class="card-title">Contacto:</span>
          			<p></p>
       			</div>
        		<div class="card-action">

				

				<a  href="https://www.facebook.com/" class="waves-effect blue darken-3 social-icon btn facebook">
				<i class="fab fa-facebook"></i></a>
				

				<a href="https://github.com/AlexRosero" class="waves-effect grey darken-3 social-icon btn github">
				<i class="fab fa-github"></i></a>

				<a href="https://instagram.com/alexs_esteban__rosero?utm_medium=copy_link" class="waves-effect  red lighten-1 social-icon btn instagram">
				<i class="fab fa-instagram"></i></a>	

				<a class="waves-effect blue lighten-3 social-icon btn twitter">
				<i class="fab fa-twitter"></i></a>

  
       			 </div>
     			 </div>
    			</div>
  				</div>

				  <div class="row">
    					<div class="col s12 m16">
      					<div class="card cyan lighten-4">
        				<div class="card-content white-text">
         				
        				</div>
       					 <div class="card-action">
							<Link to="/" class="waves-effect waves-light btn"> Volver al menú</Link>
        			</div>
     			 </div>
    		</div>
 		 </div>

				  
				  


		</div>
	);
}
