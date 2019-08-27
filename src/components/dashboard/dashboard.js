import React, { Component } from 'react'
import Notifications from './Notifications'
import Projectlist from '../projects/projectList'
import {connect } from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'


class Dashboard extends Component{
    
    render(){
        //console.log(this.props);

        const {projects, auth, notifications} = this.props;
        if(!auth.uid){
            return <Redirect to="./signin" />
        } 
         else
        return(
            <div className="container dashboard">
                <div className="row">
                    <div className="col s12 m6">
                        <Projectlist projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications  notifications = {notifications}/>
                    </div>
                     
                </div>
            </div>
        );


    }
}
    const mapStateToProps = (state) =>{
        console.log(state);
        return {
            
            projects:state.firestore.ordered.project,
            auth: state.firebase.auth,
            notifications: state.firestore.ordered.notifications
        }
    }

export default compose(
    connect(mapStateToProps), 
    firestoreConnect([
        { collection: 'project', orderBy: ['createdAt', 'desc'] },
        {collection: 'notifications', limit: 3, orderBy: ['time','desc']}
    ])
)(Dashboard);