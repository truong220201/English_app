import React, { useState } from 'react';
import { Animated, TouchableOpacity, TouchableHighlight, ScrollView, Text, View, Button, StyleSheet, Image, ImageBackground } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default class chontrinhdo extends React.Component {

    render() {
        const { route, navigation } = this.props;
        return (
            <LinearGradient colors={['#6bdb91', '#6bdb91', '#73e9bb', '#b9f5dc']} style={styles.container}>
                <View style={styles.vw2}>
                    <Text style={{ color: 'black', fontSize: 50 }}>Chọn dang bai test</Text>
                </View>
                <LinearGradient
                    colors={['#c0392b', '#f1c40f', '#8e44ad']}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.vw1}
                >

                    <TouchableOpacity onPress={() => navigation.navigate('home', { uid: '0', email: 'Anonymous' })}  >
                        <Text style={{ color: 'black', fontSize: 50 }}>Bai test ngan (10p)</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                    colors={['#c0392b', '#f1c40f', '#8e44ad']}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.vw1}
                >

                    <TouchableOpacity onPress={() => navigation.navigate('baidoc')}  >
                        <Text style={{ color: 'black', fontSize: 50 }}>Bai doc ngan (10p)</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <LinearGradient
                    colors={['#c0392b', '#f1c40f', '#8e44ad']}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.vw1}
                >

                    <TouchableOpacity onPress={() => navigation.navigate('home', { uid: '0', email: 'Anonymous' })}  >
                        <Text style={{ color: 'black', fontSize: 50 }}>Test tong hop (50p)</Text>
                    </TouchableOpacity>
                </LinearGradient>

            </LinearGradient>
        )
    }
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5%'
    },
    vw1: {
        flex: 2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        margin: 20,
        borderRadius: 10,
        borderColor: 'white',
    },
    vw2: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    vw3: {
        flex: 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'flex-end',
        borderWidth: 1,
    }
});
