import React, { useState } from 'react';
import { StyleSheet, View, } from 'react-native';
import api from '../../services/api';

import {Main_Container, Container, Content, Header,
 Button_Container, Field_Group} from '../Containers/Index_Container';

import {Button_Back, Label_Field, Text_Field, Header_Title, Button_Solid}
 from '../Components/Index_Components';

const Edit_Password = ({ navigation }) => {

    const [senha, setSenha] = useState();
	const [confirmarSenha, setConfirmarSenha] = useState();
    const [isLoading, setIsLoading] = useState(false);

	/**
     * Método para verificar se a propriedade é válida
     * @param {Object} prop 
     * @returns 
     */
    const is_valid = (prop) => {
        return !(prop === undefined);
    }

	/**
	 * Método para atualizar a senha.
	 */
	const update_password = () => {

		/**
		 * Função para retornar se as informações da senha são válidas.
		 * @param {String} senha 
		 * @returns {boolean}
		 */
		const is_valid_password = (senha) => {
			return senha != "";
		}
		
		/**
		 * Cria o body que será enviado no request.
		 * @param {String} senha 
		 * @returns {JSON}
		 */
		const body_request = (senha) => {
			let body = {
				senha: senha,
			}

			return body;
		}

		/**
		 * 
		 * @param {String} password 
		 * @param {String} confirmPassword 
		 * @returns {boolean}
		 */
		const password_is_equal = (password, confirmPassword) => {
			return password === confirmPassword;
		}

		/**
		 * Método para realizar o request.
		 * @param {JSON} body
		 */
		const request_update = (body) => {
			api.post("route", body)
			.then((response) => {
				alert(response);
				if(response.data.success) {
					setIsLoading(false);
					alert("Senha Atualizada!");
					navigation.navigate('Profile');
				}
			})
			.catch((err) => {
				setIsLoading(false);
				alert("Não foi possível atualizar a senha!");
				console.error(`ERROR -> ${err}`);
			});
		}

		/**
		 * Método para validar a atualização da senha.
		 */
		const validate_update_password = () => {
			if(is_valid_password(senha)) {
				if(password_is_equal(senha, confirmarSenha)) {
					setIsLoading(true);

					let body = body_request(senha);

					request_update(body);
				} else {
					alert("Senhas são diferentes!");
				}
			} else {
				alert("Preencha os campos!");
			}
		}

		validate_update_password();
    }

    return (
		<Main_Container isLoading={isLoading} setIsLoading={setIsLoading}>
			<Container alignItems="center" justifyContent="center" flexDirection={'column'}>
				<Header justifyContent="space-evenly">
                    <Button_Back onPress={() => navigation.navigate('Profile', {})} />
                    <Header_Title text={'Alterar Senha'} />
                </Header>
				<Content width={'100%'}>
					<View style={style.form_container}>
						<Field_Group>
                            <Label_Field text={'Senha*'} textColor={'#333333'} />
                            <Text_Field placeholder={'Senha'} 
                            onChangeText={(senha) => setSenha(senha)} value={is_valid(senha) ? senha.senha : ''}/>
                        </Field_Group>
						<Field_Group>
                            <Label_Field text={'Confirmar Senha*'} textColor={'#333333'} />
                            <Text_Field placeholder={'Confirmar Senha'} 
                            onChangeText={(confirmarSenha) => setConfirmarSenha(confirmarSenha)} value={is_valid(confirmarSenha) ? confirmarSenha.confirmarSenha : ''}/>
                        </Field_Group>
						<Button_Container width={'100%'} flexDirection={'row'} justifyContent={'space-around'}>
                            <Button_Solid text={'SALVAR'} backgroundColor={'#0067FF'}
                                onPress={() => { () => {update_password() }}} />
                        </Button_Container>
					</View>
				</Content>
			</Container>
		</Main_Container>
    )
};

const style = StyleSheet.create({
    form_container: {
		width: '100%',
		marginTop: 30,
		paddingHorizontal: 25
	},
});

export default Edit_Password;
