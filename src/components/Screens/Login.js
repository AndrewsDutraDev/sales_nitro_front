import React, { Component } from 'react';
import { StyleSheet, View, Button, TextInput, Text, ImageBackground } from 'react-native'

const Login = ({ navigation }) => {
  return (
    <View style={style.loginContainer}>
      <ImageBackground source={require('../../img/login.png')} resizeMode="cover" style={style.login_img}>
        <View style={style.login_inputs}>
          <View>
            <Text style={style.label}> E-mail </Text>
            <TextInput
              style={style.inputFieldName}
              placeholder="email@email.com"
            />
          </View>
          <View>
            <Text style={style.label}> Senha </Text>
            <View style={style.password}>
              <TextInput
                style={style.inputFieldPassword}
                placeholder="senha"
                password={true}
                secureTextEntry={true}
              />
              <Text>Icone</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      

    </View>
    // <Button
    //   ttle="Go to Jane's profilea"
    //   onPress={() =>
    //     navigation.navigate('Profile', { name: 'Jane' })
    //   }
    // />
  );
};

const style = StyleSheet.create({
  loginContainer:{
    height: '100%',
    width: '100%',
  },
  login_inputs:{
    padding: 15,
    height: '35%',
    justifyContent: 'space-between'
  },
  login_img:{
    flex: 1,
    justifyContent: 'center',
    opacity: .8
  },  
  inputFieldName:{
    borderWidth: 1,
    borderColor: '#000',
    height: 40,
  },
  inputFieldPassword:{
    height: 40,
    flex: 1
  },
  label:{
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 15,
    marginBottom: 15
  },
  password:{
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  }
})

export default Login;