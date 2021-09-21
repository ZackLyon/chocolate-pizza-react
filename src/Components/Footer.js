import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer-section">
                <img src="small-logo.png" alt="logo" />
                <div>
                Delicious © 2013 &#8226; All Rights Reserved.
                </div>
                <div>
                Proudly published with Ghost.
                </div>
            </footer>
        )
    }
}
