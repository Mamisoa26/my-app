import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
//import Popup from './Popup';



const Affichage = props => (
	<table className="table table-striped table-bordered">
		<thead className="thead-dark">
			<tr>
                <th>ID</th>
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
                                            label: 'Oui',
                                            onClick: () => props.deleteUser(user.id)
                                          },
                                          {
                                            label: 'Non',
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
			) : (
				<tr>
					<td colSpan={3}>Aucun(0) apprenant enregistré</td>
				</tr>
			)}
		</tbody>
	</table>
)
/*
function suppr(callback){
    confirmAlert({
        message: 'Confirmer la suppression',
        buttons: [
          {
            label: 'Oui',
            onClick: () => callback
          },
          {
            label: 'Non',
            onClick: () => ''
          }
        ]
      })
}*/


export default Affichage

/*
<td>
                        <div className='custom-ui'></div>
							<button  onClick={
                                    confirmAlert({
                                        //title: 'Confirmer la suppression',
                                        message: 'Confirmer la suppression',
                                        buttons: [
                                          {
                                            label: 'Oui',
                                            onClick: () => props.deleteUser(user.id)
                                          },
                                          {
                                            label: 'Non',
                                            onClick: () => ''
                                          }
                                        ]
                                      })
                                } 
                                className="btn btn-danger">X
                            </button>
						</td>*/