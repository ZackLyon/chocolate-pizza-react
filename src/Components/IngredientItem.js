import React, { Component } from 'react'

export default class IngredientItem extends Component {
    render() {
        return (
            <li className="ingredient-item">
                <input type="checkbox" /><span>{this.props.amount} {this.props.name}</span>
            </li>
        )
    }
}
