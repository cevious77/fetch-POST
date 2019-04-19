import React, { Component } from 'react';

class MovieForm extends Component {

  constructor (props) {
    super(props);
    this.state = {
      name: '',
      poster : '',
      comment:''
    }
    this.sendMovie=this.sendMovie.bind(this);
    this.updateMovie=this.updateMovie.bind(this);
  }
  submitMovie = event => {
    event.preventDefault();
    this.sendMovie();
    this.setState ({
      [event.target.name]: ''
    });
  }

  updateMovie = event => {
    this.setState ({
      [event.target.name]: event.target.value
    })
    console.log(this.state);
  }

  sendMovie () {
    const url = 'http://campus-bordeaux.ovh:3001/api/quests/movies/';
    const config = {
      method: "POST",
      headers : {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(this.state),
    };
    
    fetch (url, config)
      .then(results=>results.json())
      .then(results => {
        if (results.error) {
          alert(results.error);
        }
        else {
          alert (`Film ajouté avec l'id ${results}`)
        }
      })
      .catch (event => {
        console.error(event);
        alert("Erreur lors de l'ajout du film");
      })
  };

  render () {
    const {name, poster, comment} = this.state;
    return (
      <form onSubmit={this.submitMovie}>
        <div className="">
          <h3>Nom du film:</h3>
          <input onChange={this.updateMovie}
          value={name}
          type="text" name="name"/>
        </div>
        <div className="">
          <h3>Lien vers l'affiche du film:</h3>
          <input onChange={this.updateMovie}
          value= {poster}
          type="url" id="url" name= "poster" />
        </div>
        <div className="">
          <h3>Mes commentaires:</h3>
          <input onChange={this.updateMovie}
          value={comment}
          type="textarea" id = "textarea" name="comment" />
        </div>
        <br /> 
        <div>
          <button type="submit" value="envoyer">Envoyer</button>
        </div>
      </form>
    )
  }
}
export default MovieForm;