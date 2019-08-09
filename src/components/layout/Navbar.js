import React from 'react'
import {Link} from 'react-router-dom'
import SignedinLinks from './signedinLinks'
import SignedOutLinks from './signedoutLinks'
import {connect} from 'react-redux'

const Navbar = (props) =>{
    const {auth, profile} = props;
    const links = auth.uid ? <SignedinLinks profile={profile}/> : <SignedOutLinks /> ;
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Project Planner </Link>
              {links}
            </div>

        </nav>
    )
}
const mapStateToProps = (state) =>{
    console.log(state);
    
return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
}
}
export default connect(mapStateToProps)(Navbar);