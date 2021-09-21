import React, { Component } from 'react';
import ButtonList from './ButtonList.js';


export default class Header extends Component {
    render() {
        return (
            <header>
               <div className='left-side-nav'>
                   <img className='logo' src='logo.png' alt="logo"/>
                   <div>
                       <h1>Delicious</h1>
                       <h6>The Best Food Blog on The Web</h6>
                   </div>
                   
               </div>
               <div >
                    <ButtonList />
               </div> 
            </header>
        )
    }
}
