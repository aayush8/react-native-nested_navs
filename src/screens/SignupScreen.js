import React, {useContext} from 'react'
import { StyleSheet, View, Button as LinkButton } from 'react-native'
import {Text, Input, Button} from 'react-native-elements'
import Spacer from '../components/Spacer'
import {Context} from '../context/MainContext'

const SignupScreen = ({navigation}) => {
    const {email, password, changeEmail, changePassword} = useContext(Context)
    return (
        <View style={styles.view}>
            <Spacer mval={5}/>
            <Text h3 style={styles.head}>Sign up for Tracker</Text>
            <Spacer mval={15}/>
            <Input autoCapitalize="none" label="Email address" placeholder="eg. someone@example.com" onChangeText={text => changeEmail(text)}/>
            <Spacer mval={5}/>
            <Input secureTextEntry autoCapitalize="none" label="Password " placeholder="create your password" onChangeText={text => changePassword(text)}/>
            {/* <Spacer mval={5}/>
            <Input secureTextEntry autoCapitalize="none" label="Verify Password " placeholder="confirm your password" /> */}
            <Spacer mval={10}/>
            <Button title="Sign up" onPress={() => console.log(`Signup - Email: ${email} Password: ${password}`)}/> 
            <Spacer mval={5}/>
            <Text style={styles.text}>Already have an account?</Text>
            <LinkButton title="Goto Login" onPress={() => navigation.navigate("Signin")}/>
        </View>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    head: {
        alignSelf:  "center"
    },
    text: {
        alignSelf: "center", color: "red"
    },
    view: {
        margin: 10, marginTop: 50
    }
})
