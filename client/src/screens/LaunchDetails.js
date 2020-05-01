import React from 'react';
import Launches from "./../components/Launches/Launches";
import gql from 'graphql-tag';
import {Link} from 'react-router-dom';
import {Query} from 'react-apollo'
import Loading from './../components/Loading/Loading'
import LaunchDetailsChild from '../components/LaunchDetails/LaunchDetailsChild';


export default function LaunchDetails(props) {
    const LAUNCH_QUERY = gql`
        query Launchquery($flight_number: Int) {
            launch(flight_number: $flight_number){
                flight_number,
                mission_name
                launch_year
                launch_date_local
                launch_success
                rocket{
                    rocket_name
                    rocket_type
                }
            }
        }
    `
    let { flight_number } = props.match.params;
    flight_number = parseInt(flight_number)
    return(
        <div className="launches-details">
            <div className = "App" >
                <div className = "logo" >
                    <h1> SpaceX </h1> 
                </div> 
                <Query query={LAUNCH_QUERY} variables={{flight_number}}>
                    {
                        ({ loading, error, data }) => {
                            console.log(data)
                            if (loading) return <Loading/>
                            if (error) return <p>error</p>
                            return <LaunchDetailsChild {...data.launch}/>



                        }
                    }
                </Query>
            </div> 
        </div>
    )
}
