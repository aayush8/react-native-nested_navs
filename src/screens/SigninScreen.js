import React, { useContext } from 'react'
import { StyleSheet, View, Button as LinkButton } from 'react-native'
import {Text, Input, Button} from 'react-native-elements'
import Spacer from '../components/Spacer'
import SignupScreen from './SignupScreen'
import {Context} from '../context/MainContext'

const SigninScreen = ({navigation}) => {
    const {email, password, changeEmail, changePassword, login} = useContext(Context)
    return (
        <View style={styles.view}>
            <Spacer mval={5}/>
            <Text h3 style={styles.head}>Sign in for Tracker</Text>
            <Spacer mval={15}/>
            <Input autoCapitalize="none" label="Email address" placeholder="eg. someone@example.com" onChangeText={text => changeEmail(text)}/>
            <Spacer mval={5}/>
            <Input secureTextEntry autoCapitalize="none" label="Password " placeholder="enter your password" onChangeText={text => changePassword(text)}/>
            <Spacer mval={5}/>
            <Button title="Log in" onPress={() => {
                if (email=="admin" && password=="aayush")
                    login()
                else
                    console.log("Incorrect details ...")
            }}/>
            <Spacer mval={5}/>
            <Text style={styles.text}>Don't have an account?</Text>
            <LinkButton title="Goto Signup" onPress={() => navigation.navigate("Signup")}/>
        </View>
    )
}

SigninScreen.navigationOptions = () => {
    return {
        header: null
    }
}

export default SigninScreen

const styles = StyleSheet.create({
    text: {
        alignSelf: "center", color: "red"
    },
    head: {
        alignSelf:  "center"
    },
    view: {
        margin: 10, marginTop: 50
    }
})
