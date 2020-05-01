import React from 'react';
import Launches from "./../components/Launches/Launches";

export default function Home() {
    return(
        <div className="launches-pages">
            <div className = "App" >
                <div className = "logo" >
                    <h1> SpaceX </h1> 
                </div> 
                <Launches />
            </div> 
        </div>
    )
}
