import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">      
        <div className="formulaire">
        <form onSubmit={this.addItem}>
            <table  class="table">
              <tr>
                <td>
                  Nom <input type="text"></input>
                </td>
                <td>
                  Prénom <input type="text"></input>
                </td>
                <td>
                  <button type="submit" class="btn btn-success">Ajouter</button>
                </td>
              </tr>
            </table>
            </form>
        </div>

        <div className="formulaire">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>John</td>
                <td>Doe</td>
                <td><input type="button" value="X" class="btn btn-danger"></input></td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mary</td>
                <td>Moe</td>
                <td><input type="button" value="X" class="btn btn-danger"></input></td>
              </tr>
              <tr>
                <td>2</td>
                <td>July</td>
                <td>Dooley</td>
                <td><input type="button" value="X" class="btn btn-danger"></input></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;