import React, { useState } from 'react';
import { StyleSheet, Text, StatusBar, Dimensions } from 'react-native';
import { RadioButton } from 'react-native-paper';
import SVGImg from '../../img/next_button.svg';
import api from '../../services/api';

import { Step_Container, Radio_Container, Field_Group, Page_Container,
 Container, Content, Header, Main_Container, Button_Container }
  from '../Containers/Index_Container';
  
import {Button_Back, Label_Field, Text_Field, Button_Round,
 Header_Title, Step_Item, Step_Boll, Step_Line, Page_Title, Text_Field_Masked, 
 Button_Solid} from '../Components/Index_Components';

const Register = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [nome, setNome] = useState();
	const [email, setEmail] = useState();
	const [cpf, setCpf] = useState();
	const [dataNascimento, setDataNascimento] = useState();
	const [pais, setPais] = useState();
	const [cidade, setCidade] = useState();
	const [estado, setEstado] = useState();
	const [endereco, setEndereco] = useState();
	const [bairro, setBairro] = useState();
	const [complemento, setComplemento] = useState();
	const [cep, setCep] = useState();
	const [celular, setCelular] = useState();
	const [senha, setSenha] = useState();
	const [confirmarSenha, setConfirmarSenha] = useState();
	const [sexo, setSexo] = useState('Feminino');

	/**
     * Método para verificar se a propriedade é válida
     * @param {Object} prop 
     * @returns 
     */
     const is_valid = (prop) => {
        return !(prop === undefined);
    }

	/**
	 * Método para passar para a próxima página
	 */
	const nextPage = () => {
		if(page < 3) {
			if(validate_blank[page]()){
				setPage(page+1);
			}else {
				alert("Preencha os campos!");
			}
		}else{
			createAccount();
		}
	}

	/**
	 * Método para voltar à página anterior
	 */
	const prevPage = () => {
		if(page > 1) {
			setPage(page-1);
		}
	}

	/**
	 * Método para validação dos dados em branco de cada página
	 */
	const validate_blank = {
		1: () => {
			return (nome && email && cpf && sexo);
		},
		2: () => {
			return (endereco && bairro && complemento && dataNascimento && cep);
		},
		3: () => {
			return (celular && senha && confirmarSenha);
		}
	}

	/**
	 * Método para criar a conta do usuário
	 */
	const createAccount = () => {

		/**
		 * Remove os caracteres indesejaveis e trasnforma em letras minusculas
		 * @param {String} email 
		 * @returns {String}
		 */
		 const email_remove_regex = (email) => {
			return email.replace(" ", "").toLowerCase();
		}

		/**
		 * 
		 * @param {String} nome -> nome do usuário
		 * @param {String} email -> email do usuário
		 * @param {String} cpf -> cpf do usuário
		 * @param {Boolean} sexo -> sexo do usuário
		 * @param {String} celular -> celular do usuário
		 * @param {String} birthDate -> data de aniversário do usuário
		 * @param {String} senha -> senha da conta do usuário
		 * @param {String} endereco -> endereço do usuário
		 * @param {String} bairro -> bairro do usuário
		 * @param {String} cidade -> cidade do usuário
		 * @param {String} estado -> estado do usuário
		 * @param {String} cep -> cep do usuário
		 * @param {String} pais -> país do usuário
		 * @returns {JSON}
		 */
		const body_request = (nome, email, cpf, sexo, celular, birthDate, senha, endereco,
			bairro, cidade, estado, cep, pais) => {

			let body = {
				name: nome,
				email: email_remove_regex(email),
				cpf: cpf, 
				gender: sexo, 
				phoneNumber: celular, 
				birthDate: birthDate, 
				password: senha, 
				street: endereco, 
				district: bairro, 
				city: cidade, 
				state: estado, 
				zipCode: cep, 
				country: pais,
			}

			return body;
		}

		
		/**
		 * Método para fazer o request do usuário
		 * @param {JSON} body 
		 */
		const request_register = (body) => {
			api.post("/user", body)
			.then((response) => {
				if(response.data.success) {
					alert('Usuário Cadastrado!')
					setIsLoading(false);
					navigation.navigate('Login');

				}
			})
			.catch((err) => {
				setIsLoading(false);
				alert("Registro Inválido!");
				console.error(`ERROR -> ${err}`);
			});
		}

		/**
		 * Método para validar o Cadastro
		 */
		const validate_register = () => {
			if(validate_blank[3]()){
				setIsLoading(true);
	
				let body = body_request(nome, email, cpf, sexo, celular, birthDate, senha,
					endereco, bairro, cidade, estado, cep, pais);
				
				request_register(body);
				
			}else {
				alert("Preencha os campos!")
			}
		}
		
		validate_register();
		
	}

  return (
	<Main_Container isLoading={isLoading} setIsLoading={setIsLoading}>
		<Container alignItems="center" justifyContent="flex-start" flexDirection={'column'}>
			<Header justifyContent="space-evenly">
				<Button_Back onPress={() => navigation.navigate('Login', {})} />
				<Header_Title text="Cadastro"/>
			</Header>
			<Content width={'90%'}>
				<Step_Container>
					<Step_Item text={'Passo 1'} stepView={Step_Boll} stepViewBackground={ page >= 1 ? '#0066ff' : '#D9D9D9'} />
					<Step_Item text={''} stepView={Step_Line} stepViewBackground={page > 1 ? '#0066ff' : '#D9D9D9'} />
					<Step_Item text={'Passo 2'} stepView={Step_Boll} stepViewBackground={ page >= 2 ? '#0066ff' : '#D9D9D9'} />
					<Step_Item text={''} stepView={Step_Line} stepViewBackground={page > 2 ? '#0066ff' : '#D9D9D9'} />
					<Step_Item text={'Passo 3'} stepView={Step_Boll} stepViewBackground={ page >= 3 ? '#0066ff' : '#D9D9D9'} />
				</Step_Container>
				<Page_Container currentPageIndex={page} pageIndex={1} >
					<Page_Title text={'Dados Pessoais'} />

					<Field_Group>
						<Label_Field text={'Nome*'} textColor={'#333333'} />
						<Text_Field placeholder={'Ex. Zé Roberto'} 
						onChangeText={(nome) => setNome(nome)} value={is_valid(nome) ? nome.nome : ''}/>
					</Field_Group>

					<Field_Group>
						<Label_Field text={'Email*'} textColor={'#333333'} />
						<Text_Field placeholder={'Ex. Zé Roberto'} 
						onChangeText={(email) => setEmail(email)} value={is_valid(email)? email.email : ''}/>
					</Field_Group>

					<Field_Group>
						<Label_Field text={'CPF*'} textColor={'#333333'} />
						<Text_Field_Masked placeholder={'Ex. 000.000.000-00'} 
						onChangeText={(cpf) => setCpf(cpf)} value={is_valid(cpf)? cpf.cpf : ''}
						type={'cpf'}
						/>
					</Field_Group>

					<Field_Group>
						<Label_Field text={'Data de Nascimento*'} textColor={'#333333'} />
						<Text_Field_Masked placeholder={'Ex. 12/11/1999'} 
						onChangeText={(dataNascimento) => setDataNascimento(dataNascimento)} 
						value={is_valid(dataNascimento)? dataNascimento.dataNascimento : ''}
						type={'datetime'} 
						options={{
							format: 'DD/MM/YYYY'
						}}
						/>
					</Field_Group>

					<Radio_Container>
						<Text style={style.label_input}>Sexo:*</Text>
						<RadioButton value="Feminino" color='#0066FF' uncheckedColor='#0066FF'
							status={ sexo === 'Feminino' ? 'checked' : 'unchecked' }
							onPress={() => setSexo('Feminino')}
						/>
						<Text style={style.label_input}>Feminino</Text>
						<RadioButton value="Masculino" color='#0066FF' uncheckedColor='#0066FF'
							status={ sexo === 'Masculino' ? 'checked' : 'unchecked' }
							onPress={() => setSexo('Masculino')}
						/>
						<Text style={style.label_input}>Masculino</Text>
					</Radio_Container>

					<Button_Container width={'100%'} flexDirection={'row'} justifyContent={'space-around'}>
						<Button_Round width={40} height={40} 
						icon={SVGImg} backgroundColor={'#0066FF'} borderColor={'#0066FF'}
						transform={[{ rotate: '180deg' }]}
						onPress={() => prevPage()} />
						<Button_Round width={40} height={40} 
						icon={SVGImg} backgroundColor={'#0066FF'} borderColor={'#0066FF'}
						onPress={() => nextPage()} />
					</Button_Container>

				</Page_Container>

				{/* Página 2 */}
				<Page_Container currentPageIndex={page} pageIndex={2} >
					<Page_Title text={'Dados de Entrega'} />

					<Field_Group>
						<Label_Field text={'Endereco*'} textColor={'#333333'} />
						<Text_Field placeholder={'Ex. Rua Dez, 988'} 
						onChangeText={(endereco) => setEndereco(endereco)} value={is_valid(endereco) ? endereco.endereco : ''}/>
					</Field_Group>

					<Field_Group>
						<Label_Field text={'Bairro*'} textColor={'#333333'} />
						<Text_Field placeholder={'Ex. Centro'} 
						onChangeText={(bairro) => setBairro(bairro)} value={is_valid(bairro) ? bairro.bairro : ''}/>
					</Field_Group>

					<Field_Group>
						<Label_Field text={'Complemento*'} textColor={'#333333'} />
						<Text_Field placeholder={'Ex. Ao lado da famácia São João'} 
						onChangeText={(complemento) => setComplemento(complemento)} value={is_valid(complemento) ? complemento.complemento : ''}/>
					</Field_Group>

					<Field_Group>
						<Label_Field text={'Cidade*'} textColor={'#333333'} />
						<Text_Field placeholder={'Ex. Guaporé'} 
						onChangeText={(cidade) => setCidade(cidade)} value={is_valid(cidade) ? cidade.cidade : ''}/>
					</Field_Group>

					<Field_Group>
						<Label_Field text={'Estado*'} textColor={'#333333'} />
						<Text_Field placeholder={'Ex. Rio Grande do Sul'} 
						onChangeText={(estado) => setEstado(estado)} value={is_valid(estado) ? estado.estado : ''}/>
					</Field_Group>

					<Field_Group>
						<Label_Field text={'País*'} textColor={'#333333'} />
						<Text_Field placeholder={'Ex. Rio Grande do Sul'} 
						onChangeText={(pais) => setPais(pais)} value={is_valid(pais) ? pais.pais : ''}/>
					</Field_Group>

					<Field_Group>
						<Label_Field text={'CEP*'} textColor={'#333333'} />
						<Text_Field_Masked placeholder={'Ex. 96.225-000'} 
						onChangeText={(cep) => setCep(cep)} 
						value={is_valid(dataNascimento)? dataNascimento.dataNascimento : ''}
						type={'zip-code'} 
						/>
					</Field_Group>

					<Button_Container width={'100%'} flexDirection={'row'} justifyContent={'space-around'}>
						<Button_Round width={40} height={40} 
						icon={SVGImg} backgroundColor={'#0066FF'} borderColor={'#0066FF'}
						transform={[{ rotate: '180deg' }]}
						onPress={() => prevPage()} />
						<Button_Round width={40} height={40} 
						icon={SVGImg} backgroundColor={'#0066FF'} borderColor={'#0066FF'}
						onPress={() => nextPage()} />
					</Button_Container>

				</Page_Container>

				{/* Página 3 */}
				<Page_Container currentPageIndex={page} pageIndex={3} >
					<Page_Title text={'Informações da Conta'} />

					<Field_Group>
						<Label_Field text={'Celular*'} textColor={'#333333'} />
						<Text_Field_Masked placeholder={'Ex. 53 999000000'} 
						onChangeText={(celular) => setCelular(celular)} 
						value={is_valid(celular)? celular.celular : ''}
						type={'cel-phone'}
						options={{
							maskType: 'BRL',
							withDDD: true,
							dddMask: '(99) '
						}}
						/>
					</Field_Group>

					<Field_Group>
						<Label_Field text={'Senha*'} textColor={'#333333'} />
						<Text_Field placeholder={'Sua senha'} 
						onChangeText={(senha) => setSenha(senha)} value={is_valid(senha) ? senha.senha : ''}/>
					</Field_Group>
					
					<Field_Group>
						<Label_Field text={'Confirme sua senha*'} textColor={'#333333'} />
						<Text_Field placeholder={'Repita sua senha'} 
						onChangeText={(confirmarSenha) => setConfirmarSenha(confirmarSenha)} value={is_valid(confirmarSenha) ? confirmarSenha.confirmarSenha : ''}/>
					</Field_Group>

					<Field_Group>
						<Text style={style.label_description}>
							Ao clicar em “criar conta”, você passa a  concordo com o uso dos seus dados para compra e experiência no site conforme a 
							<Text style={style.hightligh_description}>Política de Privacidade </Text> 
						</Text>
					</Field_Group>

					<Button_Container width={'100%'} flexDirection={'row'} justifyContent={'space-around'}>
					<Button_Solid text={'Criar conta'} backgroundColor={'#0067FF'}
                        onPress={() => nextPage()} />
					</Button_Container>
					
				</Page_Container>
			</Content>
		</Container>
	</Main_Container>
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
		height: '100%',
		width: Dimensions.get('window').width,
		marginBottom: 40,
	},
	title_register: {
		width: '100%',
		textAlign: 'center',
		paddingTop: 30,
		fontWeight: '700',
		letterSpacing: 2,
		fontSize: 18,
		lineHeight: 24,
		color: '#333333'
	},
	button_changer: {
		marginTop: 50,
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	changer_boll: {
		width: 18,
		height: 18,
		borderRadius: 10,
		zIndex: 10,
	},
	changer_line: {
		width: 50,
		height: 3,
		marginLeft: -13,
		marginRight: -13,
	},
	blue: {
		backgroundColor: '#0066FF',
	},
	gray: {
		backgroundColor: '#D9D9D9'
	},
	changer_text: {
		fontSize: 12,
		lineHeight: 15,
		fontWeight: '600',
		marginBottom: 5,
		color: '#333333'
	},
	changer_container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	form_container: {
		width: '100%',
		marginTop: 30,
		paddingHorizontal: 25
	},
	label_input: {
		fontSize: 12,
		color: '#333333',
		letterSpacing: 1,
		lineHeight: 16,
		paddingBottom: 5
	},
	input_container: {
		width: '100%',
		padding: 10
	},
	radio_container: {
		width: '100%',
		padding: 10,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
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
	button_prev_next:{
		display: 'flex',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
    	flexDirection: 'row',
		marginVertical: 20,
	},	
	button_next: {
		width: 40,
		height: 40,
		borderRadius: 50,
		backgroundColor: '#0067FF',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	button_prev: {
		width: 40,
		height: 40,
		borderRadius: 50,
		backgroundColor: '#0067FF',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		transform: [{ rotate: '180deg' }],
		marginRight: 30
	},
	button_create: {
		width: 150,
		height: 50,
		borderRadius: 5,
		paddingVertical: 15,
		paddingHorizontal: 10,
		backgroundColor: '#0067FF',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	content: {
		display: 'flex',
		width: '100%',
	},
	button_image: {
		
	},
	show: {
		display: 'flex',
		width: '100%',

	},
	hide: {
		display: 'none',
	},
	label_description: {
		fontSize: 14,
		lineHeight: 22,
		fontWeight: '400',
		textAlign: 'center',
	},
	hightligh_description: {
		color: '#0066FF',
	},
	label_create: {
		color: '#fff',
		fontSize: 16,
		lineHeight: 18,
		fontWeight: '700',
	}
});

export default Register;