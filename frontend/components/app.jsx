import React from 'react'
import NavBarContainer from './navbar/navbar_container'
import { Route, Switch } from 'react-router-dom'
import SignUpContainer from './signup/signup_container'
import SignInContainer from './signin/signin_container'
import AuthRoute from '../util/route_util'
import Footer from './footer/footer'
import PassageIndexContainer from './passage_index/passage_index_container'
import PassageShowContainer from './passage_show/passage_show_container'
import ModalContainer from './modal/modal_container'
// import AnnotationShowContainer from './annotations/annotation_show_container'

const App = () => {
    return (
        <div>
            <ModalContainer />
            <NavBarContainer/>
            <Switch> 
                <AuthRoute path="/signup" component={SignUpContainer} />
                <AuthRoute path="/signin" component={SignInContainer} />
                <Route exact path='/passages/:passageId' component={PassageShowContainer}/>
                {/* <Route path="/passages/:passageId/annotations" component={AnnotationShowContainer} /> */}
                <Route path="/" component={PassageIndexContainer}/>
            </Switch>
            
            <Footer />
        </div>
    )
}


export default App;