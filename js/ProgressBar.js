import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from 'react-native';

const BAR_WIDTH = Math.floor(Dimensions.get("window").width / 5 * 3);

class ProgressBar extends Component {
    constructor(props) {
        super(props);
        
        this.totalSteps = props.totalSteps ? props.totalSteps : 8;
        this.state = {
            step: this.props.step
        };
    }

    render() {
        return (
            <View style={progressStyles.progressMain}>
                <View style={progressStyles.progressBarContainer}>
                    <View style={progressStyles.progressBar}>
                        <View style={progressStyles.step}/>
                    </View>
                </View>
                <View style={progressStyles.progressTextContainer}>
                    <Text style={progressStyles.progressText}>{this.state.step} / {this.totalSteps}</Text>
                </View>
            </View>
        );
    }
}

const progressStyles = StyleSheet.create({
    progressMain: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    progressBarContainer: {
        width: '70%',
        height: '100%',
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    progressTextContainer: {
        width: '30%',
        flex: 1
    },
    progressText: {
        textAlign: 'center',
        color: '#52595F',
        fontWeight: 'bold'
    },
    progressBar: {
        backgroundColor: "#E7E9E8",
        width: '100%',
        height: 8,
        borderRadius: 10
    },
    step: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: BAR_WIDTH / 8,
        borderRadius: 10,
        height: 8,
        backgroundColor: '#7CCCD5'
    }
});

export default ProgressBar;