import React, { Component } from 'react';
import { connect } from 'react-redux';
import {removeCharacterById} from '../actions';

export class HeroList extends Component {
  render() {
    return (
      <div>
        <h4>Your Hero Squads</h4>
        <ul>
            {
                this.props.heroes.map(hero => {
                return (
                    <li key={hero.id}>
                    <div>{hero.name}</div>
                    <div
                    onClick= { () => this.props.removeCharacterById(hero.id) }
                    >x</div>
                    </li>
                )
                })
            }
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
    return{
        heroes:state.heroes
    }
}



export default connect(mapStateToProps, {removeCharacterById})(HeroList);
