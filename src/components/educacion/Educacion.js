import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Educations() {
	return (
		<div>
			<div class='card'>
				<div class='card-content'>
					<h6>
						<strong>Formación Academica</strong>
					</h6>
					<table class="striped" class="highlight">
						<thead>
							<tr >
								<th> Estudio </th>
								<th> Fecha </th>
								<th> Institución </th>
								<th></th>
							</tr>
						</thead>
						<tbody>

						    <tr>
								<td>Estudios Primarios</td>
								<td> 20-Nov-2009 </td>
								<td> Colegio Técnico Republica de Guatemala I.E.D </td>
								
								<td>
									<Link to='/details' class='btn red lighten-2'>
										Más Info
									</Link>
								</td>
							</tr>

							<tr>
								<td>Estudios Secundarios</td>
								<td> 20-Nov-2020 </td>
								<td> Colegio Técnico Republica de Guatemala I.E.D </td>
								<td>
									<Link to='/details' class='btn blue lighten-2'>
										Más Info
									</Link>
								</td>
							</tr>

							<tr>
								<td>Técnico en Programación de Software </td>
								<td> 30-nov-2020 </td>
								<td> Servicio Nacional de Aprendizaje - SENA </td>
								<td>
									<Link to='/details' class='btn red lighten-2'>
										Más Info
									</Link>
								</td>
							</tr>
							<tr>
								<td> Desarrollo de Habilidades Digitales para la Gestión de la Información </td>
								<td>16-sep-2021</td>
								<td> Servicio Nacional de Aprendizaje - SENA </td>
								<td>
									<Link to='/details' class='btn blue lighten-2'>
										Más Info
									</Link>
								</td>
							</tr>
							
							
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
