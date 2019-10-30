import React from "react";
import './Character.css';
import {Link} from 'react-router-dom';

export default class Character extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      heroesAll: [],
      
    };
    
  }

  onChange = event => {
    const test=this.props.heroes
    localStorage.setItem('myValueInLocalStorage', JSON.stringify(test));
  };

  onButton = () => {
    localStorage.clear();
  };

  render(){
    
    // console.log(this.props.heroes)
    return (
      <div className="Characters">
        <div className="characters-card">
          <img src={this.props.heroes.image} alt={this.props.heroes.image} />
          <div className="character-contain">
            <h3>
              <b>{this.props.heroes.name}</b>
            </h3>
            <p>PV: {this.props.heroes.HP}</p>
            <p>Vitesse: {this.props.heroes.agility}</p>
            <p>Attaque: {this.props.heroes.atk}</p>
            <p>Defense: {this.props.heroes.def}</p>
            <p>Description: {this.props.heroes.description}</p>
            <p>Origine: {this.props.heroes.origin}</p>
          </div>
          <button onClick={this.onButton}>Reset localstorage</button>
          {/* <button onClick={this.onChange}>test localStorage</button> */}
          <Link to='/stories' onClick={this.onChange} className="">Je veux toi</Link>
        </div>
      </div>
    );

  }
  
}
