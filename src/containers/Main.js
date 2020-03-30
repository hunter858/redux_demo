import React,{Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
  } from 'react-native';

import { CHANGE_TEXT, changeText } from '../redux/action/action';
import { connect } from 'react-redux';
import {increase,decrease,reset} from '../redux/action/action'

class Main extends Component {
    
    render (){

        const { onChangeText } = this.props;
        return (

                <View style={style.container}>
                    <SafeAreaView>
                    <View style={style.content}>

                        <Text style={style.counter}>{this.props.counter.count}</Text>
                        <TouchableOpacity onPress = {()=> this._onPressIncreate()}>
                            <View style ={style.button}>
                            <Text>Increate</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {()=> this._onPressDecreate()}>
                            <View style ={style.button}>
                            <Text>Decreate</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {()=> this._onPressReset()}>
                            <View style ={[style.button,{backgroundColor:'red'}]}>
                            <Text>Reset</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    </SafeAreaView>
                </View>
        )
    }

    _onPressIncreate(){
        this.props.dispatch(increase())
    }
    _onPressDecreate(){
        this.props.dispatch(decrease())
    }
    _onPressReset(){
        this.props.dispatch(reset())
    }

}


const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
    },
    content:{
        top:100,
        justifyContent:'center',alignItems:'center',alignItems:'center'
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        margin: 10,
        height:22,
        backgroundColor:'yellow'
    },
    counter:{
        fontSize: 50,
        marginBottom: 70
    }
})
const mapStateToProps = state => ({
    counter: state.counter
})

export default connect(mapStateToProps)(Main);
// const mapStateToProps = (state) =>{
//     return {
//         value: state.text,
//     }
// };

// const mapDispatchToProps = (dispatch) =>{
//     return {
//         onChangeText:()=>dispatch(changeText('hello'))
//     }
// };

// export default connect(mapStateToProps,mapDispatchToProps)(Main);