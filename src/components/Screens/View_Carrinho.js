import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, StatusBar, KeyboardAvoidingView, Platform, ScrollView, Dimensions, Button } from 'react-native';
import { ActivityIndicator } from "react-native";
import 'react-native-reanimated';
import Arrow_back from '../../img/arrow_back.svg';

const View_Carrinho = ({ navigation, route }) => {
    const [isLoading, setIsLoading] = useState(false);

    return (<View style={style.bg_view}>
        { isLoading ? 
        <View style={{ position: 'absolute', flex: 1, justifyContent: "center", alignItems: "center", zIndex: 999, height: '100%', width: '100%', backgroundColor: '#00000099' }}>
            <ActivityIndicator color={"#fff"} size={50} /> 
        </View> : <></>}
        <KeyboardAvoidingView behavior={ Platform.OS == 'ios' ? 'padding' : 'height' } keyboardVerticalOffset={10}>
            <ScrollView>
                <View style={style.container}>
                    <View style= {style.header}>
                        <View style={style.header_text}>
                            <TouchableOpacity 
                                onPress={() => navigation.navigate('Home', { name: 'Jane' })}>
                                <Arrow_back width={25} height={25} fill={'#0066FF'} />
                            </TouchableOpacity>
                            <Text style={style.header_title}>Seu Carrinho</Text>
                        </View>
                    </View>
                    <View style= {style.content}>
                        <View style={style.carrinho_item_container}></View>
                        
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    </View> );
}

const style = StyleSheet.create({
    bg_view: {
        width: '100%',
		height: '100%',
		marginTop: StatusBar.currentHeight,
		flex: 1,
    },
	container: {
		height: '100%',
		width: Dimensions.get('window').width,
		marginBottom: 40,
	},
    header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    header_text: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 40,
        paddingHorizontal: 40,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    header_title: {
        display: 'flex',
        width: '100%',
        color: '#000',
        fontSize: 26,
        textAlign: 'center',
    },
    carrinho_item_container: {
        
    }
});


export default View_Carrinho;