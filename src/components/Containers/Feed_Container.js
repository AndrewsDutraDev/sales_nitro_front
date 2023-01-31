import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, StatusBar, ScrollView, View } from "react-native";

const Feed_Container = (props) => {
    
    return (
        <View style={style.view}>
            <KeyboardAvoidingView behavior={ Platform.OS == 'ios' ? 'padding' : 'height' } keyboardVerticalOffset={10}>
                <ScrollView contentContainerStyle={{alignItems: 'center'}}>
                    {props.children}
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
};

const style = StyleSheet.create({
    view: {
        width: '100%',
		height: '100%',
        display:'flex',
        flexDirection: 'column',
		marginTop: StatusBar.currentHeight,
		flex: 1,
    },
});

export default Feed_Container;