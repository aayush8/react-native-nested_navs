import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Spacer = ({mval}) => {
    
    const styles = StyleSheet.create({
        view: {
            margin: mval
        }
    })

    
    return (
        <View style={styles.view}>
        </View>
    )
}

export default Spacer

