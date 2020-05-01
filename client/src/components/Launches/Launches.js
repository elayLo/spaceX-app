import React from "react";
import gql from 'graphql-tag';
import {Query, useQuery} from 'react-apollo';
import LaunchItem from "./LaunchItem";
import './Launches.sass'
import Loading from "../Loading/Loading";


export default function Launches() {
    const LAUNCHES_QUERY = gql`
        query LaunchesQuery{
            launches {
                flight_number
                mission_name
                launch_date_local
                launch_success

            }
        }
    `;
    return (
        <div className="launches">
            <p>Launches</p>
            <Query query={LAUNCHES_QUERY}>
                {
                    ({loading, error, data}) => {
                        console.log(data)
                        if (loading) return <Loading/>
                        if (error) return <p>error</p>
                        return <div>
                            {
                                data.launches.map(launch => (
                                    <LaunchItem key={launch.flight_number} {...launch}/>
                                ))
                            }
                        </div>



                    }
                }
            </Query>
        </div>
    )
}