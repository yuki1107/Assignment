import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button } from 'react-native-elements';
import LineGauge from './LineGauge';
import ProgressBar from "./ProgressBar";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: 34,
            step: 1
        };
    }

    _handleGaugeChange = (val) => {
        this.setState({
            inputValue: val,
            step: 1
        });
    };

    render() {
        return (
            <View style={mainStyles.main}>
                
                <View style={mainStyles.topSection}>
                    <View style={mainStyles.backBtnContainer}>
                        <Button
                            icon={{
                                name: "arrow-left",
                                size: 20,
                                color: "#52595F",
                                type: "font-awesome",
                            }}
                            buttonStyle={mainStyles.backBtn}
                        />
                    </View>
                    <View style={mainStyles.steps}>
                        <ProgressBar step={this.state.step} totalStep="6"></ProgressBar>
                    </View>
                    <View style={mainStyles.title}>
                        <Text style={mainStyles.titleText}>How old are you?</Text>
                    </View>
                </View>
                <View style={mainStyles.middleSection}>
                    <View style={mainStyles.circle}>
                        <Text style={mainStyles.circleText}>{ this.state.inputValue }</Text>
                        <View style={mainStyles.circleTail}/>
                    </View>
                    <LineGauge min={0} max={99} value={this.state.inputValue} mediumInterval={0} onChange={this._handleGaugeChange}/>
                </View>
                <View style={mainStyles.bottonSection}>
                <TouchableOpacity style={mainStyles.continueBtn}>
                    <Text style={mainStyles.continueBtnText}>Continue</Text>
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mainStyles = StyleSheet.create({
    main: {
        height: '100%', 
        width: '100%',
        backgroundColor: "#FFFFFF"
    },
    topSection: {
        height: '10%', 
        width: '100%',
        flexDirection: "row",
    },
    middleSection: {
      height: '75%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    bottonSection:{
      height: '15%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    circle: {
      backgroundColor: '#EBF4F9', 
      width: 90,
      height: 90,
      borderRadius: 45,
      marginBottom: 30,
      position: 'relative'
    },
    circleText: {
      textAlign: 'center',
      fontSize: 42,
      lineHeight: 90,
      fontWeight: 'bold',
      color: '#52595F'
    },
    circleTail: {
      position: 'absolute',
      top: '99%',
      left: '50%',
      marginLeft: -10,
      borderTopWidth: 10,
      borderRightWidth: 10,
      borderBottomWidth: 0,
      borderLeftWidth: 10,
      borderTopColor: "#EBF4F9",
      borderRightColor: 'transparent',
      borderBottomColor: 'transparent',
      borderLeftColor: 'transparent',
    },
    continueBtn: {
      backgroundColor: "#7CCCD5",
      borderRadius: 30,
      width: '60%',
      height: 50,
    },
    continueBtnText: {
        textAlign: "center",
        color: '#FFFFFF',
        fontWeight: 'bold',
        lineHeight: 50
    },
    backBtnContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backBtn: {
        backgroundColor: 'transparent',
    },
    steps: {
        flex: 4
    },
    title: {
        position: 'absolute',
        top: '110%',
        left: '5%'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#52595F'
    }
});

export default Main;