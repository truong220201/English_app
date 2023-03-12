import React, { useState } from 'react';
import { CheckBox, Icon } from 'react-native-elements';
import { Animated, TouchableOpacity, TouchableHighlight, ScrollView, Text, View, Button, StyleSheet, Image, ImageBackground, ActivityIndicator, Easing, Dimensions } from 'react-native';

import SwipeUpDown from 'react-native-swipe-up-down';
import CountDown from 'react-native-countdown-component';
import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


class BaiDoc extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      n: [false, false, false],
      open: false,
      flexQS: 3,
      flexAnw: 6,
    },
      //state
      this.state = {
        socau: 50,
        isLoading: false,
        hideBack: 'flex',
        hideNext: 'flex',
        timer: 500,
        keys: [],
        //id question
        //item:1,
        //
        //itemQ:1,
        //opt0:1,
        //opt1:2,
        //opt2:3,
        //opt3:4,
        //itemK:1,
        //nameqs:1,
        //tgian:10,
        leng: 0,
        trueAns: 1,
        //test
        q: '',
        a1: '',
        a2: '',
        a3: '',
        a4: '',
        //
        selectedOption: '',
        optList: [],
        o: ['', '', '', ''],
        ans: '',
        answ: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      };
  };
  chiatg() {
    console.log('ok', this.state.tgian)
    if (this.state.tgian == 50) {
      return true

    } else {
      return false
    }
  }
  //dap an duoc chon
  setSelectedOption(selectedOption) {
    this.setState({
      optList: [...this.state.optList, selectedOption],
      //answ:[...this.state.answ[this.state.itemQ-1]=this.state.trueAns[this.state.itemQ-1]],

      selectedOption,
    });
    this.state.answ[this.state.itemQ - 1] = selectedOption;
    console.log(this.state.answ);
  }
  render() {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
      <View>
        <View style={{ borderWidth: 0, width: '100%', height: 745 }}>
          <View style={{ flex: 2, borderWidth: 0, width: '100%', }}>
            <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row', paddingRight: 5, alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1, }}>
                {this.chiatg() ?
                  <CountDown
                    size={17}
                    until={50 * 60}
                    onFinish={() => this.nopbai(true)}
                    digitStyle={{ backgroundColor: '#FFF', }}
                    digitTxtStyle={{ color: '#53ad71' }}
                    timeLabelStyle={{ color: 'red', fontWeight: '300' }}
                    separatorStyle={{ color: '#53ad71' }}
                    timeToShow={['M', 'S']}
                    timeLabels={{ m: null, s: null }}
                    showSeparator
                  /> :
                  <CountDown
                    size={17}
                    until={10 * 60}
                    onFinish={() => this.nopbai(true)}
                    digitStyle={{ backgroundColor: '#FFF', }}
                    digitTxtStyle={{ color: '#53ad71' }}
                    timeLabelStyle={{ color: 'red', fontWeight: '300' }}
                    separatorStyle={{ color: '#53ad71' }}
                    timeToShow={['M', 'S']}
                    timeLabels={{ m: null, s: null }}
                    showSeparator
                  />
                }
                <Icon name={'alarm'} size={20} color={'#1CC625'} style={{ margin: 5, }} />
              </View>
              <TouchableOpacity onPress={() => this.nopbai(false)} style={styles.btnNopbai}>
                <Text style={{ color: '#fff', fontSize: 15, }}>Nộp bài</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ borderWidth: 1, paddingTop: 0, flex: 2, paddingBottom: 0 }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ borderWidth: 0, }}>
              {

                [...Array(20)].map((o, n) => {
                  if (n % 4 == 0) {
                    return (
                      <TouchableOpacity key={n} onPress={() => null} style={{
                        borderWidth: 0,
                        margin: 5,
                        height: windowHeight / 22,
                        width: windowHeight / 12,
                        borderRadius: 10,
                        //borderColor:'#1CC625',
                        backgroundColor: '#63cc7b',
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>

                        <Text style={{ color: '#fff', fontSize: 15, }}>{n}</Text>
                      </TouchableOpacity>
                    )
                  } else {
                    return (
                      <TouchableOpacity key={n} onPress={() => null} style={{
                        borderWidth: 0,
                        margin: 5,
                        height: windowHeight / 22,
                        width: windowHeight / 22,
                        borderRadius: 30,
                        //borderColor:'#1CC625',
                        backgroundColor: '#63cc7b',
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                      }}>
                        <Text style={{ color: '#fff', fontSize: 15, }}>{n}</Text>
                      </TouchableOpacity>
                    )
                  }
                }
                )
              }

            </ScrollView>
          </View>
          <View style={{ flex: 10, borderWidth: 0, width: '100%', paddingLeft: 5, paddingRight: 5, paddingTop: 5, backgroundColor: 'grey' }}>
            <View style={{ flex: 10, borderWidth: 0, width: '100%', padding: 10, backgroundColor: 'white', borderRadius: 0 }}>
              <ScrollView>
                <Text style={styles.txtLevel}>Lunar New Year Festival often falls between late January and early February; it is among the most important holidays in Vietnam. Officially, the festival includes the 1st, 2nd, and 3rd day in Lunar Calendar; however, Vietnamese people often spend nearly a month celebrating this special event. Tet Holiday gets its beginning marked with the first day in the Lunar Year; however, its preparation starts long before that. The 23rd day of the last Lunar month is East Day—a ritual worshiping Kitchen Gods (Tao Cong). It thought that each year on this day, these Gods go to heaven to tell Jade Emperor about all activities of households on earth. On New Year’s Eve, they return home to continue their duties as taking care of families. On New Year’s Day, the first ones who come to visit households—called first-foot—are very important and hence need to be well chosen, as they believed to hold in their hands the entire luck of the family in New Year (Tan Nien). After that, till the third day or even the fourth day of Tet, individuals meet relatives, friends, and colleagues, wishing them all kinds of good things like happiness, health, and success</Text>
              </ScrollView>
            </View>
          </View>
        </View>



        <SwipeUpDown
          swipeHeight={150}
          extraMarginTop={50}
          disableSwipeIcon={false}

          animation="none"
          itemFull={
            <ScrollView>
              {
                [...Array(4)].map((o, n) => {
                  return (
                    <View style={{ with: 2000, borderWidth: 0, top: 30 }}>
                      <View style={{ borderWidth: 0, width: '100%', padding: 20, }}>
                        <TouchableOpacity style={{ height: 310 }}>
                          <Text style={{ color: 'white' }}>Cau 1</Text>
                          <Text style={{
                            elevation: 1,
                            backgroundColor: 'lightwhite',
                            borderRadius: 4,
                            padding: 15,
                            flexDirection: 'row',
                            marginBottom: '1%',
                            marginLeft: 5,                         
                            backgroundColor: 'white',
                          }}>
                            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industrLorem Ipsum is simply dummy text of the printing and typesetting industr. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum </Text>

                          </Text>
                        </TouchableOpacity>
                        <View style={{}}>
                          {this.state.isLoading ? <ActivityIndicator style={styles.vw2} size="large" color="#00ff00" /> : (
                            <ScrollView style={{ width: windowWidth, }} showsScrollIndicator={false}>

                              <View style={{ marginRight: 45 }}>
                                <RadioButtons
                                  options={this.state.o}
                                  onSelection={this.setSelectedOption.bind(this)}
                                  selectedOption={this.state.selectedOption}
                                  renderOption={
                                    (option, selected, onSelect, index) => {
                                      /*const s = selected ? { borderWidth:2,
                                                              borderColor:'#1CC625',
                                                              borderRadius:7,
                                                              padding:15,
                                                              flexDirection:'row',
                                                              marginBottom:'6%',} : { borderWidth:2,
                                                                  borderColor:'#f0f0f0',
                                                                  borderRadius:7,
                                                                  padding:15,
                                                                  flexDirection:'row',
                                                                  marginBottom:'6%',};
                                                                  */
                                      const windowWidth = Dimensions.get('window').width;
                                      //console.log("num: ",this.state.itemQ);
                                      //console.log("num: ",this.state.answ[this.state.itemQ-1]);
                                      if (option == this.state.answ[this.state.itemQ - 1]) {
                                        return (
                                          <LinearGradient key={index} start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} colors={['#6bdb91', '#6bdb91', '#6bdb91', '#b9f5dc']} style={{
                                            borderWidth: 0,
                                            borderColor: '#1CC625',
                                            borderRadius: 10,
                                            padding: 15,
                                            marginBottom: '6%',
                                            elevation: 1,
                                            backgroundColor: 'smoke',
                                          }} >
                                            <TouchableOpacity onPress={onSelect} style={{ flexDirection: 'row', }} >
                                              <Text style={styles.abcd}></Text>
                                              <View style={{ top: 5, }}>

                                                <Text>okokok333</Text>
                                              </View>
                                            </TouchableOpacity>
                                          </LinearGradient>
                                        );
                                      } else {
                                        return (
                                          <TouchableOpacity onPress={() => console.log('HELLO YOU')} key={index} style={{//borderWidth:1,
                                            //borderColor:'#b9b9b9',
                                            elevation: 1,
                                            backgroundColor: 'lightwhite',
                                            borderRadius: 15,
                                            padding: 15,
                                            flexDirection: 'row',
                                            marginBottom: '1%',
                                            marginLeft: 5,
                                            backgroundColor: 'green',
                                          }}>
                                            <View style={{}}>

                                              <Text>Answer</Text>
                                            </View>
                                          </TouchableOpacity>
                                        );
                                      }

                                    }
                                  }
                                  index={9}
                                  renderContainer={this.renderContainer}
                                />
                              </View>

                            </ScrollView>
                          )}
                        </View>
                      </View>
                    </View>
                  );
                })}
            </ScrollView>}// Pass props component when collapsed
          itemMini={<View>
            <ScrollView>
              <Text style={styles.txtLevel}>Câu 1:Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industrLorem Ipsum is simply dummy text of the printing and typesetting industr. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum </Text>
            </ScrollView>
          </View>} // Pass props component when
          disablePressToShow={false} // Press item mini to show full
          style={{ backgroundColor: 'lightblue' }} // style for swipe
        />
      </View>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //content question 
  vw2: {
    width: '100%',
    flex: 5,
    paddingRight: 20,
    paddingLeft: 20,
    justifyContent: 'center',
    borderWidth: 0,

  },
  txtLevel: {
    justifyContent: 'center',
    color: 'black',
    fontSize: 20,
    //marginBottom:'2%',
    flexDirection: 'row',
    borderWidth: 0,
  },
  //end content question

  //footer
  btnNopbai: {
    backgroundColor: '#4fad68',
    borderRadius: 5,
    width: 100,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  timer: {
    alignSelf: 'center',
    width: 150,
  },
  btnNext: {
    borderWidth: 2,
    margin: 5,
    height: 50,
    width: 50,
    borderRadius: 30,
    borderColor: '#1CC625',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnPrev: {
    borderWidth: 2,
    margin: 5,
    height: 50,
    width: 50,
    borderRadius: 30,
    borderColor: '#1CC625',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vw4: {
    width: '100%',
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderWidth: 0
  },
  //end footer
});


export default BaiDoc;