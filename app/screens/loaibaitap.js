import React, { useState } from 'react';
import { Dimensions, Animated, TouchableOpacity, TouchableHighlight, ScrollView, Text, View, Button, StyleSheet, Image, ImageBackground, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';
import { firebaseApp } from '../../components/firebaseConfig';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import HTMLView from 'react-native-htmlview';
import * as Animatable from 'react-native-animatable';
import './model/exam'
//import { black } from 'react-native-paper/lib/typescript/styles/colors';

export default class LoaiBaiTap extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { route, navigation } = this.props;
        const windowWidth = Dimensions.get('window').width;
        const windowHeight = Dimensions.get('window').height;

        //var l = this.state.leng;
        //console.log(this.state.keys);

        //trai sang phai va phai sang trai
        const tsp = {
            from: {
                opacity: 0,
                left: 700,
            },
            to: {
                opacity: 1,
                left: 0
            },
        };
        const pst = {
            from: {
                opacity: 0,
                left: -700,
            },
            to: {
                opacity: 1,
                left: 0
            },
        };
        const zoomIn = {
            0: {
                opacity: 0,
                scale: 0,
            },
            0.5: {
                opacity: 1,
                scale: 0.3,
            },
            1: {
                opacity: 1,
                scale: 1,
            },
        };
        return (

            <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} colors={['#aef6d6a6', '#ffffff', '#ffffff', '#aef6d6a6']} style={styles.container}>

                <View style={{ width: windowWidth, flex: 1, alignItems: 'center', }}>
                    <ImageBackground style={{
                        height: 170,
                        width: windowWidth,
                        backgroundColor: '#f5f5f500',
                        zIndex: 100,
                        flexDirection: 'column',
                        borderRadius: 20,
                        borderWidth: 1
                    }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYO0u07nDm35gsnfEO-zxF_ev6HpLrGT_mJQ&usqp=CAU' }}>
                        <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} colors={['#ffffff00', '#ffffffc4', '#ffffffc4', '#aef6d6']} style={styles.vw1}>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginBottom: 10, }}>
                                <View style={{ width: 60, height: 60, borderRadius: 5, backgroundColor: '#fff' }}>
                                    <Image
                                        style={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: 50,
                                            borderWidth: 2,
                                            borderColor: 'green'

                                        }}
                                        source={{ uri: 'https://www.iconsdb.com/icons/preview/green/user-4-xxl.png' }}
                                    />
                                </View>
                                <View style={{ width: '100%', height: 60, justifyContent: 'center' }}>
                                    <View style={{ flexDirection: 'row' }}>

                                        <Text style={{ color: '#475b52', fontSize: windowWidth / 30, fontWeight: 'bold', marginLeft: 20, marginBottom: 5, }}>Xin chào,</Text>
                                        <Text style={{ color: '#51ab41', fontSize: windowWidth / 30, fontWeight: 'bold', marginLeft: 5, marginBottom: 5, }}>email</Text>
                                    </View>
                                    <View style={{ borderWidth: 1, marginLeft: 20, width: '75%', borderColor: '#9ab69373' }}></View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ color: '#475b52', fontSize: windowWidth / 30, fontWeight: 'bold', marginLeft: 20, marginTop: 5 }}>Id:</Text>
                                        <Text style={{ color: '#51ab41', fontSize: windowWidth / 30, fontWeight: 'bold', marginLeft: 5, marginTop: 5 }}>uid</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ position: 'absolute', top: '95%', borderWidth: 2, borderColor: '#fff', left: '5%' }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ width: 160, height: 40, margin: 4, borderRadius: 5, }} source={{ uri: 'https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/283705731_763859411658694_971246722580644252_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=BjBlsdeHI10AX8HS4n4&tn=nHQac_V4HpyKU2Pt&_nc_ht=scontent.fhan5-9.fna&oh=00_AT8HpAWD3SvL1ipz4fl5dxnzxY9zPskG4Hrpuurr-eF0-Q&oe=629B3094' }} />
                                </View>
                            </View>

                        </LinearGradient>
                    </ImageBackground>
                    <ScrollView>
                        <View style={{ height: windowHeight / 6, padding: 20, width: windowWidth / 1, }}>
                            <TouchableOpacity onPress={() => navigation.navigate('home', { uid: '0', email: 'Anonymous' })}>
                                <View style={styles.vTxtLoai} >
                                    <Animatable.Text animation={tsp} style={styles.circle}>
                                        <View style={{}}>

                                            <Image
                                                style={styles.circle}
                                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1903/1903162.png' }}
                                            //onLoadEnd={ ()=>{ console.log('load xong') }}
                                            />

                                        </View>
                                    </Animatable.Text>

                                    <Animatable.Text animation={pst} >
                                        <Text>Home</Text>
                                    </Animatable.Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: windowHeight / 6, padding: 0, width: windowWidth / 1, }}>
                            <TouchableOpacity onPress={() => navigation.navigate('tm', { uid: '0', email: 'Anonymous' })}>
                                <View style={styles.vTxtLoai} >
                                    <Animatable.Text animation={tsp} style={styles.square}>
                                        <View style={{}}>

                                            <Image
                                                style={styles.square}
                                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-v9sHU9LDZd4-ulW-6uJfIe2P3R0ye0VBWg&usqp=CAU' }}
                                            //onLoadEnd={ ()=>{ console.log('load xong') }}
                                            />

                                        </View>
                                    </Animatable.Text>


                                    <Animatable.Text animation={pst} >
                                        <Text>Câu hỏi kép</Text>
                                    </Animatable.Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: windowHeight / 6, padding: 0, width: windowWidth / 1, }}>
                            <TouchableOpacity onPress={() => navigation.navigate('tm', { uid: '0', email: 'Anonymous' })}>
                                <View style={styles.vTxtLoai} >
                                    <Animatable.Text animation={tsp} style={styles.square}>
                                        <View style={{}}>

                                            <Image
                                                style={styles.square}
                                                source={{ uri: 'https://dontpaniclabs.com/wp-content/uploads/2018/09/question-mark.jpg' }}
                                            //onLoadEnd={ ()=>{ console.log('load xong') }}
                                            />

                                        </View>
                                    </Animatable.Text>


                                    <Animatable.Text animation={pst} >
                                        <Text>Câu hỏi khác</Text>
                                    </Animatable.Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </ScrollView >
                </View>

            </LinearGradient>
        )
    }
    componentDidMount() {
        // this.listenForItems(this.itemRef);
    }
};
const styles = StyleSheet.create({
    footer: {
        height: 60,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 3,
    },
    c4: {
        padding: 10,
        flex: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    vw1: {
        height: 170,
        padding: 10,
        width: '100%',
        backgroundColor: '#f5f5f500',
        zIndex: 100,
        flexDirection: 'column',
        paddingTop: 40,
        borderWidth: 2,
        borderColor: 'white'
    },
    vw1a: {
        height: 170,
        width: '100%',
        backgroundColor: '#f5f5f500',
        zIndex: 100,
        flexDirection: 'column',
        borderRadius: 20,
        borderWidth: 1
    },
    vw2: {
        flex: 11,
        width: '100%',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 10,
    },
    square:{
        width:70,
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 50,
        borderRightWidth: 50,
        borderBottomWidth: 100,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
      

    },
    vTxtLoai: {
        alignItems: 'center',
        padding: 10,

    },
    txtLoai: {
        color: '#757575',
        fontSize: 15,
        fontWeight: 'bold'
    }
});
