
import React from 'react';
import {
    Text,
    View,
    TouchableNativeFeedback,
} from 'react-native';

import globalStyle from '../Style/globalStyle';

const AppButton = (props)=>{
    return(
        <TouchableNativeFeedback onPress={props.onPress}>
                <View style={globalStyle.button}>
                    <Text style={globalStyle.buttonText}>{props.title}</Text>
                </View>
        </TouchableNativeFeedback>
    )
}

export default AppButton