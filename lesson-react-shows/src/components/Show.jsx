import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import withDaysFromPremiere from '../HOC/withDaysFromPremiere';

class Show extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        language: PropTypes.string.isRequired,
        premiered: PropTypes.string.isRequired,
        image: PropTypes.shape({
            medium: PropTypes.string.isRequired,
            original: PropTypes.string.isRequired,
        }).isRequired,
        id: PropTypes.number.isRequired,
    };

    render() {
        return (
            <li>
                <Link to={`/show/${this.props.id}`}>
                    <h1>Name: {this.props.name}</h1>
                    <img src={this.props.image.medium}></img>
                </Link>
                <p>{this.props.language}</p>
                <p>{this.props.premiered}</p>
                <p>Days from premiere: {this.props.daysFromPremiere}</p>
            </li>
        )
    }
}

export default withDaysFromPremiere(Show);