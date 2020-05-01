import React from "react";
import gql from 'graphql-tag';
import {Query, useQuery} from 'react-apollo';
import Moment from "react-moment";
import {Link} from 'react-router-dom';


export default function LaunchItem(props) {
    return (
        <div className={props.launch_success ? "launch launch_success" : "launch launch_failed"}>
            <Link to={`/launch/${props.flight_number}`}>
                <p className="launch__name">{props.mission_name}</p>
                {props.launch_success ? <span>Success</span> : <span>Failed</span>}
                <p className="launch__date"><Moment format="HH:mm DD-MM-YYYY">{props.launch_date_local}</Moment></p>
                <img src={require('./../../assets/left-and-right-arrows.svg')} alt=""/>
            </Link>
        </div>
    )
}