import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash';
import api from '../../services/api';


const Login = ({ navigation }) => {
  	const [email, setEmail] = useState();
  	const [password, setPassword] = useState();
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const login = () => {
		if(email && password) {
			var body = {
				email: email.email,
				password: password.password
			}
			api
			.post("/user/login", body)
			.then((response) => {
				if(response.data.success) {
					navigation.navigate('Profile', { name: 'Jane' })
				}
			})
			.catch((err) => {
				alert("Login Inválido!");
			});
		}else {
			alert("Preencha os campos!")
		}
	}  

  return (
	<View style={style.bg_login}>
		<KeyboardAvoidingView behavior={ Platform.OS == 'ios' ? 'padding' : 'height' } keyboardVerticalOffset={10}>
			<ScrollView>
				<Text style={style.title_login}>
					<Text style={style.text_sales}>SALES</Text>
					<Text style={style.text_nitro}>NITRO</Text>
				</Text>
				<View style={style.login_content}>
					<Text style={style.subtitle_login}>Login como Usuário</Text>
					<View style={style.input_container}>
						<Text style={style.label_input}>Email</Text>
						<TextInput style={style.input_text} placeholder='Ex. zézinho@mail.com'  
							onChangeText={(email) => setEmail({email})}
						/>
					</View>
					<View style={style.input_container}>
						<Text style={style.label_input}>Senha</Text>
						<View style={style.password_content}>
							<TextInput style={style.input_text} placeholder='Coloque sua senha' password={true} secureTextEntry={isPasswordVisible ? false : true}
								onChangeText={(password) => setPassword({password})}
							/>
							<Text style={style.password_icon} onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
								<FontAwesomeIcon icon={isPasswordVisible ? faEye : faEyeSlash} size={20} style={style.icon} />
							</Text>
						</View>
					</View>
					<View style={style.input_container}>
						<TouchableOpacity style={style.button_login} onPress={ () => login()}>
							<Text style={style.button_text_login}>Login</Text>
						</TouchableOpacity>
					</View>
				</View>
				
				<View style={style.text_inline}>
					<Text style={style.text_footer}>Não tem cadastro?</Text>
					<Text style={style.text_cadastre_se}>Cadastre-se</Text> 
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	</View>
  );
};

const style = StyleSheet.create({
	bg_login: {
		width: '100%',
		height: '100%',
		flex: 1,
		backgroundColor: '#0066FF'
	},
	scrool: {
		height: '100%',
		width: '100%',
		backgroundColor: 'red'
	},
	title_login: {
		width: '100%',
		textAlign: 'center',
		paddingTop: 60,
		fontWeight: '900',
		letterSpacing: 2,
		fontSize: 32,
	},
	text_sales: {
		color: '#fff'
	},
	text_nitro: {
		color: '#daa520'
	},
	login_content: {
		display: 'flex',
		width: '100%',
		height: '75%',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	subtitle_login: {
		color: '#fff',
		fontSize: 22,
		paddingBottom: 20,
		fontWeight: '700'
	},
	label_input: {
		fontSize: 12,
		color: '#fff',
		letterSpacing: 1,
	},
	input_container: {
		width: '100%',
		padding: 10
	},
	input_text: {
		width: '100%',
		backgroundColor: '#fff',
		padding: 15,
		paddingEnd: 50,
		marginVertical: 5,
		borderRadius: 4,
		borderWidth: 1,
		borderColor: '#D8D8D8',
		color: '#757575',
	},
	password_content: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	password_icon: {
		margin: -50,
		height: '100%',
		width: 50,
		paddingHorizontal: 20,
		paddingVertical: 25
	},
	icon: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	button_login: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#063A89',
		borderColor: '#005FED',
		borderWidth: 2,
		borderRadius: 4,
		paddingHorizontal: 10,
		paddingVertical: 15,
	},
	button_text_login: {
		textAlign: 'center',
		color: '#fff',
		fontSize: 16,
		textTransform: 'uppercase',
		fontWeight: '700',
		letterSpacing: 1
	},
	text_inline: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	text_footer: {
		textAlign: 'center',
		fontSize: 14,
		color: '#fff',
	},
	text_cadastre_se: {
		marginLeft: 5,
		textAlign: 'center',
		fontSize: 14,
		color: '#fff',
		fontWeight: 'bold'
	}
})

export default Login;