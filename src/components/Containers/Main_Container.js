import React from 'react';
import { StyleSheet, View, StatusBar, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Loading from '../Components/Loading';

const Main_Container = (props) => {
    const [isLoading, setIsLoading] =[props.isLoading, props.setIsLoading];

    return (
        <View style={style.main_view}>
            {isLoading ? <Loading /> : <></>}
            <KeyboardAvoidingView behavior={ Platform.OS == 'ios' ? 'padding' : 'height' } keyboardVerticalOffset={10}>
                <ScrollView>
                    {props.children}
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    ); 
};

const style = StyleSheet.create({
    main_view: {
        width: '100%',
		height: '100%',
		marginTop: StatusBar.currentHeight,
		flex: 1,
    },
});

export default Main_Container;