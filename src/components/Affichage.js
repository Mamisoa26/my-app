import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


const Affichage = props => (
	<table className="table table-striped table-bordered">
		<thead className="thead-dark">
			<tr>
          <th>Id</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Action</th>
			</tr>
		</thead>
		<tbody>
			{props.users.length > 0 ? (
                
				props.users.map(user => (

					<tr key={user.id}>
            <td>{user.id-1}</td>
						<td>{user.nom}</td>
						<td>{user.prenom}</td>
            <td> 
							<button  onClick={
                                    () => confirmAlert({
                                        message: 'Confirmer la suppression',
                                        buttons: [
                                          {
                                            label: 'OUI',
                                            onClick: () => props.deleteUser(user.id)
                                          },
                                          {
                                            label: 'NON',
                                            onClick: () => ''
                                          }
                                        ]
                                      }) 
                                    
                                }
                                className="btn btn-danger">X
                            </button>
						</td>						
					</tr>
                ))
			) : ''}
		</tbody>
	</table>
)

export default Affichage
