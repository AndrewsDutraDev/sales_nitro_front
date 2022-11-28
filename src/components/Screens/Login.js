import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash';
import api from '../../services/api';

import {Main_Container, Container, Content, Button_Container, Field_Group} from '../Containers/Index_Container';

import {Button_Solid, Logo, Label_Field, Text_Field, Text_Field_Iconized} from '../Components/Index_Components';

const Login = ({ navigation }) => {
  	const [email, setEmail] = useState();
  	const [password, setPassword] = useState();
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

	/**
	 * Método para fazer o login
	 */
	const login = () => {
		/**
		 * Verifica se o login é valido
		 * @param {String} email 
		 * @param {String} password 
		 * @returns 
		 */
		const is_valid_login = (email, password) => {
			return email && password;
		}
		
		/**
		 * Remove os caracteres indesejaveis e trasnforma em letras minusculas
		 * @param {String} email 
		 * @returns 
		 */
		const email_remove_regex = (email) => {
			return email.replace(" ", "").toLowerCase();
		}

		/**
		 * Cria o body que será enviado no request
		 * @param {String} email 
		 * @param {String} password 
		 * @returns 
		 */
		const body_request = (email, password) => {
			let body = {
				email: email_remove_regex(email),
				password: password
			}
			return body;
		}

		/**
		 * Método para fazer o request do usuário
		 * @param {JSON} body 
		 */
		const request_user = (body) => {
			api.post("/user/login", body)
			.then((response) => {
				if(response.data.success) {
					setIsLoading(false);
					// alert(JSON.stringify(response.data));
					navigation.navigate('Home', {id: response.data.id, name: response.data.name})
				}
			})
			.catch((err) => {
				setIsLoading(false);
				alert("Login Inválido!");
				console.log(`ERROR -> ${err}`);
			});
		}
		
		/**
		 * Método para validar o login
		 */
		const validate_login = () => {
			if(is_valid_login(email, password)) {
				setIsLoading(true);
				
				let body = body_request(email.email, password.password);
	
				request_user(body);
				
			}else {
				alert("Preencha os campos!")
			}
		}
		
		validate_login();
	}  

  return (
	<Main_Container isLoading={isLoading} setIsLoading={setIsLoading} backgroundColor={'#0066FF'}>
		<Container alignItems="center" justifyContent="flex-start" flexDirection={'column'}>
			<Logo />
			<Content>
				<Text style={style.subtitle_login}>Login como Usuário</Text>
				<Field_Group>
					<Label_Field text={'Email'} textColor={'#fff'} />
					<Text_Field placeholder={'Ex. zézinho@mail.com'} onChangeText={(email) => setEmail({email})} value={email != undefined ? email.email : ''}/>
				</Field_Group>
				<Field_Group>
					<Label_Field text={'Senha'} textColor={'#fff'} />
					<Text_Field_Iconized 
					placeholder={'Coloque sua senha'} onChangeText={(password) => setPassword({password})}
					onPress={() => {setIsPasswordVisible(!isPasswordVisible)}}
					icon={isPasswordVisible ? faEye : faEyeSlash}
					password={true}
					secureTextEntry={!isPasswordVisible}
					/>
				</Field_Group>
				<Button_Container width={'100%'}>
					<Button_Solid text={'LOGIN'} textColor={'#FFF'} backgroundColor={'#063A89'} borderColor={'#063A89'}
                    onPress={() => login()} />
				</Button_Container>
				<View style={style.text_inline}>
					<Text style={style.text_footer}>Não tem cadastro?</Text>
					<Text style={style.text_cadastre_se} onPress={() => navigation.navigate('Register', { name: 'Jane' })}>Cadastre-se</Text> 
				</View>
				<View style={style.text_inline}>
					<Text style={style.text_cadastre_se} onPress={() => navigation.navigate('Profile_Store', { name: 'Jane' })}>Profile Store</Text> 
				</View>
			</Content>
		</Container>
	</Main_Container>
  );
};

const style = StyleSheet.create({
	subtitle_login: {
		color: '#fff',
		fontSize: 22,
		paddingBottom: 20,
		fontWeight: '700'
	},
	text_inline: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 15
	},
	text_footer: {
		textAlign: 'center',
		fontSize: 14,
		color: '#fff',
	},
	text_cadastre_se: {
		marginHorizontal: 5,
		textAlign: 'center',
		fontSize: 16,
		color: '#fff',
		fontWeight: 'bold'
	}
})

export default Login;