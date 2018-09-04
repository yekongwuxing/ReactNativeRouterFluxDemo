import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Test1 extends Component{
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}
                      onPress={() => {
                          Actions.test2({username:'测试测试',password:'111111'})

                      }} >
                    Scarlet Screen
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bb0000',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
    },
});
