import React, { Component } from 'react';
import IngredientItem from './IngredientItem.js';
import ingredients from '../data.js';

export default class IngredientList extends Component {
    render() {
        return (
            <ul class="ingredient-list" style={{backgroundImage: "url(/list-bg.png)"}}>
                {
        ingredients.map(ingredient =>
            <IngredientItem
                name={ingredient.name}
                amount={ingredient.amount}
            />)
            }
            </ul>
        )
    }
}
