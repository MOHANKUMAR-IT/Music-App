import React, { Component } from 'react';

import './Player.css';
import Sidebar from './Sidebar';
import Body from './Body'
import Footer from './Footer'
function Player({spotify}){
    return (
        // <>
        //     <div className="banner">
        //         <div>
        //             <h1 style={{color:'white',margin:0,fontSize:"70px"}}>Welcome to Slify</h1>
        //         </div>
        //     </div>
            
        // </>
        <div className='player'>
            <div className='player_body'>
                <Sidebar />
                {/* Sidebar */}
                {/* Body */}
                <Body spotify={spotify}/>
            </div>
            {/*Footer */}
            <Footer spotify={spotify}/>
        </div>
    );
}

export default Player;