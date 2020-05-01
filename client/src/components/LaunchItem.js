import React from "react";
import gql from 'graphql-tag';
import {Query, useQuery} from 'react-apollo';


export default function LaunchItem(props) {
    return (
        <div className="launch">
            <p>{props.mission_name}</p>
        </div>
    )
}