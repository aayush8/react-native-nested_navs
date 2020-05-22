import React, {useContext} from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'
import {Context} from '../context/MainContext'

const AccountScreen = () => {
    const {logout} = useContext(Context)
    return (
        <SafeAreaView style={styles.view}>
            <Button title="Logout" onPress={logout}/>
        </SafeAreaView>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    view : {
        marginTop:50
    }
})
