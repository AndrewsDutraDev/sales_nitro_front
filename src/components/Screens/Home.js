import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, StatusBar, KeyboardAvoidingView, Platform, ScrollView, Dimensions, Button } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={style.bg_home}>
        <Button title="Register Screen" onPress={() => navigation.navigate('Register', { name: 'Jane' })}/>
    </View>
  );
};

const style = StyleSheet.create({
    bg_home: {
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

export default Home;