import React from 'react';
import { StyleSheet, View, StatusBar, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Loading from '../Components/Loading';

const Main_Container_Feed = (props) => {
    const [isLoading, setIsLoading] =[props.isLoading, props.setIsLoading];

    /**
     * Método para verificar se a propriedade é válida
     * @param {Object} prop 
     * @returns 
     */
    const is_valid = (prop) => {
        return !(prop === undefined);
    }

    return (
        <View style={[style.main_view, {backgroundColor: is_valid(props.backgroundColor) ? props.backgroundColor : '#fff'}]}>
            {isLoading ? <Loading /> : <></>}
            <KeyboardAvoidingView behavior={ Platform.OS == 'ios' ? 'padding' : 'height' } keyboardVerticalOffset={10}>
                
                {props.children}
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

export default Main_Container_Feed;