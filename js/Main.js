import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Animated, Easing } from "react-native";
import { Button } from 'react-native-elements';
import Graph from './Graph';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            moodList: this.props.moodList ? this.props.moodList : [86, 80, -1, 90, 92, 97, 81],
            fadeInOpacity: new Animated.Value(0)
        };
    }
    
    _getAverage() {
        let numLength = 0;
        let total = 0;
        this.state.moodList.forEach((num) => {
            if (num > 0) {
                numLength++;
                total = total + num;
            }
        });
        return Math.round(total / numLength);
    }

    componentDidMount() {
        var timing = Animated.timing;
        Animated.timing(this.state.fadeInOpacity, {
            toValue: 1,
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: true
        }).start();
    }

    render() {
        return (
            <View style={mainStyles.main}>
                
                <View style={mainStyles.headerSection}>
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
                    <View style={mainStyles.title}>
                        <Text style={mainStyles.titleText}>历史心情指数</Text>
                    </View>
                </View>
                <Animated.View style={[mainStyles.infoSection, {opacity: this.state.fadeInOpacity}]}>
                    <View style={mainStyles.infoContainer}>
                        <View style={mainStyles.profileContainer}>
                            <Image source={require( '../img/profileImg.png' )} style={mainStyles.profileImg}/>
                            <Text style={mainStyles.profileText}>李强</Text>
                        </View>
                        <View><Text style={mainStyles.avgMoodNum}>{this._getAverage()}</Text></View>
                        <Text style={mainStyles.avgMoodText}>周平均心情指数</Text>
                    </View>
                </Animated.View>
                <View style={mainStyles.graphSection}>
                    <Graph moodList={this.state.moodList}/>
                </View>
            </View>
        );
    }
}

const mainStyles = StyleSheet.create({
    main: {
        height: '100%', 
        width: '100%',
        backgroundColor: "#FFFFFF",
    },

    headerSection: {
        height: 50,
        width: '100%',
        position: 'relative',
        justifyContent: 'center',
    },
    backBtnContainer: {
        position: 'absolute',
        left: 0,
        top: 0,
    },
    backBtn: {
        backgroundColor: 'transparent',
        height: 50
    },
    titleText: {
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'PingFang HK',
        lineHeight: 28
    },

    infoSection: {
        overflow: 'hidden',
        // backgroundColor: 'green'
    },
    infoContainer: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width: '100%',
        elevation: 10,
        shadowColor: '#a9a9a9',
        shadowOffset: { width: 0, height: 5 },
        display: 'flex',
        alignItems: 'center',
        // backgroundColor: 'green'
    },
    profileContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 50,
    },
    profileImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10
    },
    profileText: {
        lineHeight: 40,
        fontSize: 18
    },
    avgMoodText: {
        color: '#929292',
        fontSize: 16,
        lineHeight: 25,
        paddingBottom: 40
    },
    avgMoodNum: {
        fontSize: 68,
        fontWeight: 'bold',
        lineHeight: 90
    },

    graphSection: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginTop: -10,
        borderTopWidth: 1,
        borderTopColor: '#F2F2F2',
        width: '95%',
        marginLeft: '2.5%',
        height: 300
    },
    
});

export default Main;