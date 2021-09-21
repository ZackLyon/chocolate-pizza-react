import React, { Component } from 'react'

export default class MainHeading extends Component {
    render() {
        return (
            <div className="main-heading">
                <div id="main-heading-left">
                    <div>
                        <h1>Chocolate Pizza</h1>
                        <h6>POSTED ON 15 DEC 2013 / DESSERTS</h6>
                    </div>
                </div>
            
                <div id="main-heading-right">
                   <img class="print" src="print-icon.png" alt="print icon" />
                </div>
            </div>
        )
    }
}
