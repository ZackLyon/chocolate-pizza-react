import React, { Component } from 'react'

export default class AboutMe extends Component {
    render() {
        return (
            <div className="about-me-section">
                <div className="about-me-pic">
                    <img src="van-pic.png" alt="person" />
                </div>
                <div className="about-me-text">
                    <h3 className="author">
                        Vanessa Stevenson
                    </h3>
                    <p>
                        Food enthusiast, photography fan.  Add a pinch of raw foodism and that's <br />
                        pretty much who I am.
                    </p>
                </div>
                <div className="about-me-button">
                    <button>SHARE RECIPE</button>
                </div>
            </div>
        )
    }
}
