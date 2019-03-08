import './Formulaire.css';

import React, { useState } from 'react'

const Formulaire = props => {
	const initialFormState = { id: null, nom: '', prenom: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.nom || !user.prenom) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
            <table  className="table">
              <tr>
                <td>
                    Nom&nbsp;
                    <input type="text" name="nom" value={user.nom} onChange={handleInputChange} />
                </td>
                <td>
                    Prénom&nbsp;
			        <input type="text" name="prenom" value={user.prenom} onChange={handleInputChange} />
                </td>
                <td>
                    <button className="btn btn-success">Ajouter</button>
                </td>
              </tr>
            </table>
			
			
			
		</form>
	)
}

export default Formulaire