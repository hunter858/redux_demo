import React ,{Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from '../redux/store/store'
import Main from './Main';
import store from '../redux/store/store'

export default class Root extends Component {
    render (){
        return(
               <Provider store = {store}>
                <Main/>
                </Provider>
        )
    }
}