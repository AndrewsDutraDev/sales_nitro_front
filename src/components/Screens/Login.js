import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, View, Button, TextInput, Text, ImageBackground, TouchableOpacity } from 'react-native'
import api from '../../services/api';


const Login = ({ navigation }) => {
  	const [user, setUser] = useState();
  	const [password, setPassword] = useState();


	const logar = () => {
		console.log("logar");
		api
		.post("/user/login",{
			email: "rsouza@rsouza.com",
			password: "123"
		})
		.then((response) => {
			if(response.data.success) {
				console.log(response.data.message)
        		navigation.navigate('Profile', { name: 'Jane' })

			}
		})
		.catch((err) => {
			console.error("ops! ocorreu um erro" + err);
		});
	}

	// useEffect(() => {
	// 	api
	// 	.post("/user/login",{
	// 		email: "rsouza@rsouza.com",
	// 		password: "123"
	// 	})
	// 	.then((response) => {
	// 		if(response.data.success) {
	// 			console.log(response.data.message)
	// 		}
	// 	})
	// 	.catch((err) => {
	// 		console.error("ops! ocorreu um erro" + err);
	// 	});
	// }, []);
  

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
          <View>
            <TouchableOpacity style={style.buttonLogin} onPress={ () => logar()}>
              <Text style={style.textButtonLogin}>Logar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonRegister}>
              <Text style={style.textButtonRegister}>Registrar</Text>
            </TouchableOpacity>
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
    opacity: .7
  },  
  inputFieldName:{
    borderWidth: 1,
    borderColor: '#000',
    height: 40,
    paddingLeft: 10
  },
  inputFieldPassword:{
    height: 40,
    flex: 1,
    paddingLeft: 10
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
  },
  buttonLogin: {
    margin: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "green"
  },
  textButtonLogin: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  buttonRegister: {
    margin: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "blue"
  },
  textButtonRegister: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  }
})

export default Login;