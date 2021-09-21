import React, { Component } from 'react'
import MainHeading from './MainHeading.js'

export default class ImageSection extends Component {
    render() {
        return (
            <>
                <MainHeading />
                <div className="center">
                    <img className="center" src="choco-pizza.png" alt="chocolate pizza" />
                </div>
            </> 
        )
    }
}
