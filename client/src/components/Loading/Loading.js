import React from "react";
import './Loading.sass';

export default function Loading() {
    return(
        <div className="loading">
            <img src={require('../../assets/tenor.gif')} alt=""/>
        </div>
    )
}