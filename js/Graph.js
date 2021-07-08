import React, { Component } from "react";
import { StyleSheet, Text, View, Animated, TouchableHighlight } from "react-native";


class Graph extends Component {
    constructor(props) {
        super(props);

        this.state = {
            moodList: this.props.moodList,
            barPressed: new Array(7).fill(false),
            barAnimate: this.props.moodList.map(() => new Animated.Value(0)),
        };
    }

    componentDidMount() {
        Animated.stagger(100, this.state.barAnimate.map(value => {
            return Animated.timing(value, {
                toValue: 1,
                useNativeDriver: false,
            });
        })).start();
    }

    _getMoodColor(mood, index) {
        if (mood >= 90) {
            return this.state.barPressed[index] ? '#FFA14A' : '#FF823C';
        } else if (mood < 50) {
            return '#CFCFCF';
        } else {
            return this.state.barPressed[index] ? '#42F373' : '#52C873';
        }
    }

    _onPress(index) {
        let newBarPressed = new Array(7).fill(false);
        newBarPressed[index] = true;
        this.setState({
            barPressed: newBarPressed
        });
    }

    render() {
        const weekdays = ['六', '日', '一', '二', '三', '四', '五'];
        const barColor = this.state.moodList ? this.state.moodList.map((mood, index) => this._getMoodColor(mood, index)) : new Array(7).fill('#52C873');
        const barHeight = this.state.moodList ? this.state.moodList.map((mood) => mood > 0 ? Math.floor(mood / 100 * 262) : 100) : 100;
        return (
            <View style={graphStyles.graphContainer}>
                {this.state.moodList && this.state.moodList.map((mood, index) => {
                    return (
                        <View key={index} style={graphStyles.barContainer}>
                            <TouchableHighlight underlayColor={barColor[index]} style={graphStyles.moodBarContainer}
                                onPress={() => {this._onPress(index)}}>
                                <Animated.View style={[graphStyles.moodBar, this.state.barPressed[index] && graphStyles.addShadow, 
                                    {
                                        backgroundColor: barColor[index], 
                                        height: this.state.barAnimate[index].interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0, barHeight[index]]
                                        })
                                    }]} >
                                    {mood > 0 && <Text style={graphStyles.moodText}>{mood}</Text>}
                                </Animated.View>
                            </TouchableHighlight>
                            <View style={[graphStyles.weekdayContainer, this.state.barPressed[index] && graphStyles.addShadow ]}>
                                <Text style={graphStyles.weekdayText}>{weekdays[index]}</Text>
                            </View>
                        </View>
                    );
                })}
            </View>
        )
    }

}

const graphStyles = StyleSheet.create({
    graphContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        alignItems: 'flex-end',
        flexWrap: 'nowrap'
    },
    barContainer: {
        flex: 1,
        alignItems: 'center',
    },
    moodBarContainer: {
        width: '80%',
        borderRadius: 50,
    },
    moodBar: {
        width: '100%',
        borderRadius: 50,
        height: 100
    },
    moodText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 25,
        marginTop: 10
    },
    weekdayContainer: {
        borderRadius: 5,
        width: 30,
        height: 30,
        marginTop: 8,
        backgroundColor: '#fff'
    },
    addShadow: {
        elevation: 8,
        borderWidth: 1,
        borderColor: '#fff'
    },
    weekdayText: {
        textAlign: 'center',
        lineHeight: 30,
        fontWeight: 'bold'
    }
})

export default Graph;