import React from 'react'
import NavBarContainer from './navbar/navbar_container'
// import NavBar from './navbar/navbar'
import {Route} from 'react-router-dom'
// import SignupContainer from '../signup/signup_container'

const App = () => {
    return (
        <div>
            <header>
            {console.log('App renders!')}
            <NavBarContainer/>
            </header>

            {/* <Route path="/signup" component={SignupContainer} /> */}
        </div>
    )
}


export default App;