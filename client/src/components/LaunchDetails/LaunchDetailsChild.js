import React from 'react';
import './LaunchDetails.sass'
import {Link} from 'react-router-dom'
import Moment from 'react-moment'

export default function LaunchDetailsChild(props) {
    return(
        <div className="launch-details__child">
            <h3>Launch information:</h3>
            <ul>
                <li>Mission: {props.mission_name}</li>
                <li>Year: {props.launch_year}</li>
                <li>Date: <Moment format="HH:mm DD-MM-YYYY">{props.launch_date_local}</Moment></li>
                <li>Succes: {props.launch_success ? 'Yes' : 'No'}</li>
            </ul>
            <h3>Rocket information:</h3>
            <ul>
                <li>Rocket name: {props.rocket.rocket_name}</li>
                <li>Rocket type: {props.rocket.rocket_type}</li>
            </ul>
            <div>
                <Link to="/">Go back</Link>
            </div>
        </div>
    )
}
