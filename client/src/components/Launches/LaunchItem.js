import React from "react";
import gql from 'graphql-tag';
import {Query, useQuery} from 'react-apollo';
import Moment from "react-moment";


export default function LaunchItem(props) {
    return (
        <div className={props.launch_success ? "launch launch_success" : "launch launch_failed"}>
            <p>{props.mission_name}</p>
            {props.launch_success ? <span>Success</span> : <span>Failed</span>}
            <p className="launch__date">{props.launch_date_local}</p>
            <img src={require('./../../assets/left-and-right-arrows.svg')} alt=""/>
        </div>
    )
}