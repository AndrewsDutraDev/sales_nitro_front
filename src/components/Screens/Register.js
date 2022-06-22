import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, StatusBar, KeyboardAvoidingView, Platform, ScrollView, Dimensions } from 'react-native';

const Register = ({ navigation }) => {
  return (
	<View style={style.bg_register}>
		<KeyboardAvoidingView behavior={ Platform.OS == 'ios' ? 'padding' : 'height' } keyboardVerticalOffset={10}>
			<ScrollView>
				<View style={style.container}>
					<Text>Registrar</Text>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	</View>
  );
};

const style = StyleSheet.create({
    bg_register: {
        width: '100%',
		height: '100%',
		marginTop: StatusBar.currentHeight,
		flex: 1,
    },
	container: {
		height: Dimensions.get('window').height,
		width: Dimensions.get('window').width,
	},	
});

export default Register;