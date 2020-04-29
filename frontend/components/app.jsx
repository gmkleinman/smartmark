import React from 'react'
import NavBarContainer from './navbar/navbar_container'
import {Route} from 'react-router-dom'
import SignUpContainer from './signup/signup_container'
import SignInContainer from './signin/signin_container'
import AuthRoute from '../util/route_util'
import Footer from './footer/footer'
import PassageIndexContainer from './passage_index/passage_index_container'

const App = () => {
    return (
        <div>
            <header>
            <NavBarContainer/>
            </header>
            <Route exact path="/" component={PassageIndexContainer}/>
            <AuthRoute path="/signup" component={SignUpContainer} />
            <AuthRoute path="/signin" component={SignInContainer} />
            <Footer />
        </div>
    )
}


export default App;