import React from 'react'
import NavBarContainer from './navbar/navbar_container'
import {Route} from 'react-router-dom'
import SignUpContainer from './signup/signup_container'
import SignInContainer from './signin/signin_container'
import AuthRoute from '../util/route_util'
import Footer from './footer/footer'
// import IndexContainer from './index/index_container'

const App = () => {
    return (
        <div>
            <header>
            {/* {console.log('App renders!')} */}
            <NavBarContainer/>
            </header>
            <Route exact path="/" />
            <AuthRoute path="/signup" component={SignUpContainer} />
            <AuthRoute path="/signin" component={SignInContainer} />
            <Footer />
        </div>
    )
}


export default App;