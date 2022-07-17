import React, { useState } from 'react';
import { StyleSheet, View, Image, TextInput, Text, TouchableOpacity, StatusBar, KeyboardAvoidingView, Platform, ScrollView, Dimensions } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { SvgUri } from 'react-native-svg';
import SVGImg from '../../img/next_button.svg';

const Register = ({ navigation }) => {

	const [page, setPage] = useState(1);
	const [nome, setNome] = useState();
	const [email, setEmail] = useState();
	const [cpf, setCpf] = useState();
	const [dataNascimento, setDataNascimento] = useState();
	const [endereco, setEndereco] = useState();
	const [bairro, setBairro] = useState();
	const [complemento, setComplemento] = useState();
	const [cep, setCep] = useState();
	const [celular, setCelular] = useState();
	const [senha, setSenha] = useState();
	const [confirmarSenha, setConfirmarSenha] = useState();
	const [sexo, setSexo] = React.useState('Feminino');

	const nextPage = () => {
		if(page < 3) {
			if(validate_blank[page]()){
				setPage(page+1);
			}else {
				alert("Preencha os campos!")
			}
		}else{
			alert('request');
		}
	}

	const prevPage = () => {
		if(page > 1) {
			setPage(page-1);
		}
	}

	const validate_blank = {
		1: () => {
			if(nome && email && cpf && sexo) {
				return true;
			}
			else {
				return false;
			}
		},
		2: () => {
			if(endereco && bairro && complemento && dataNascimento && cep) {
				return true;
			}
			else {
				return false;
			}
		},
		3: () => {
			if(celular && senha && confirmarSenha) {
				return true;
			}
			else {
				return false;
			}
		}
	}

	const createAccount = () => {
		alert('Criar Conta');
	}

  return (
	<View style={style.bg_register}>
		<KeyboardAvoidingView behavior={ Platform.OS == 'ios' ? 'padding' : 'height' } keyboardVerticalOffset={10}>
			<ScrollView>
				<View style={style.container}>
					<View style={style.button_changer}>
						<View style={style.changer_container}>
							<Text style={style.changer_text}>Passo 1</Text>
							<View style={ page >= 1 ? [style.changer_boll, style.blue] : [style.changer_boll, style.gray]}></View>
						</View>
						<View style={style.changer_container}>
							<Text style={style.changer_text}></Text>
							<View style={page > 1 ? [style.changer_line, style.blue] : [style.changer_line, style.gray] }></View>
						</View>
						<View style={style.changer_container}>
							<Text style={style.changer_text}>Passo 2</Text>
							<View style={page >= 2 ? [style.changer_boll, style.blue] : [style.changer_boll, style.gray]}></View>
						</View>
						<View style={style.changer_container}>
							<Text style={style.changer_text}></Text>
							<View style={page > 2 ? [style.changer_line, style.blue] : [style.changer_line, style.gray]}></View>
						</View>
						<View style={style.changer_container}>
							<Text style={style.changer_text}>Passo 3</Text>
							<View style={page >= 3 ? [style.changer_boll, style.blue] : [style.changer_boll, style.gray]}></View>
						</View>
					</View>

					<View style={page === 1 ? [style.content, style.show] : [style.content, style.hide]}>
						<Text style={style.title_register}>Dados Pessoais</Text>
						<View style={style.form_container}>
							<View style={style.input_container}>
								<Text style={style.label_input}>Nome*</Text>
								<TextInput style={style.input_text} placeholder='Ex. Zé Roberto'
								onChange={(nome) => setNome(nome)}
								/>
							</View>
							<View style={style.input_container}>
								<Text style={style.label_input}>Email*</Text>
								<TextInput style={style.input_text} placeholder='Ex. zézinho@mail.com'
								onChange={(email) => setEmail(email)}
								/>
							</View>
							<View style={style.input_container}>
								<Text style={style.label_input}>CPF*</Text>
								<TextInput style={style.input_text} placeholder='Ex. 000.000.000-00'
								onChange={(cpf) => setCpf(cpf)}
								/>
							</View>
							<View style={style.input_container}>
								<Text style={style.label_input}>Data de Nascimento*</Text>
								<TextInput style={style.input_text} placeholder='Ex. 12/11/1999'
								onChange={(dataNascimento) => setDataNascimento(dataNascimento)}
								/>
							</View>
							<View style={style.radio_container}>
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

							</View>

							<View style={style.button_prev_next}>
								<View>
									<TouchableOpacity style={style.button_prev}
									onPress={() => prevPage()}
									>
											<SVGImg width={25} height={25} />
									</TouchableOpacity>
								</View>
								<View>
									<TouchableOpacity style={style.button_next}
									onPress={() => nextPage()}
									>
											<SVGImg width={25} height={25} />
									</TouchableOpacity>
								</View>
							</View>

							
						</View>
					</View>

					<View style={page === 2 ? [style.content, style.show] : [style.content, style.hide]}>
						<Text style={style.title_register}>Dados de Entrega</Text>
						<View style={style.form_container}>
							<View style={style.input_container}>
								<Text style={style.label_input}>Endereco*</Text>
								<TextInput style={style.input_text} placeholder='Ex. Rua Dez, 988'
								onChange={(endereco) => setEndereco(endereco)}
								/>
							</View>
							<View style={style.input_container}>
								<Text style={style.label_input}>Bairro*</Text>
								<TextInput style={style.input_text} placeholder='Ex. Centro'
								onChange={(bairro) => setBairro(bairro)}
								/>
							</View>
							<View style={style.input_container}>
								<Text style={style.label_input}>Complemento	*</Text>
								<TextInput style={style.input_text} placeholder='Ex. Ao lado da famácia São João'
								onChange={(complemento) => setComplemento(complemento)}
								/>
							</View>
							<View style={style.input_container}>
								<Text style={style.label_input}>CEP*</Text>
								<TextInput style={style.input_text} placeholder='Ex. 96.225-000'
								onChange={(cep) => setCep(cep)}
								/>
							</View>

							<View style={style.button_prev_next}>
								<View>
									<TouchableOpacity style={style.button_prev}
									onPress={() => prevPage()}
									>
											<SVGImg width={25} height={25} />
									</TouchableOpacity>
								</View>
								<View>
									<TouchableOpacity style={style.button_next}
									onPress={() => nextPage()}
									>
											<SVGImg width={25} height={25} />
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</View>

					<View 
					style={page === 3 ? [style.content, style.show] : [style.content, style.hide]}
					>
						<Text style={style.title_register}>Informações da Conta</Text>
						<View style={style.form_container}>
							<View style={style.input_container}>
								<Text style={style.label_input}>Celular*</Text>
								<TextInput style={style.input_text} placeholder='Ex. 53 999000000'
								onChange={(celular) => setCelular(celular)}
								/>
							</View>
							<View style={style.input_container}>
								<Text style={style.label_input}>Senha*</Text>
								<TextInput style={style.input_text} placeholder='Sua senha'
								onChange={(senha) => setSenha(senha)}
								/>
							</View>
							<View style={style.input_container}>
								<Text style={style.label_input}>Confirme sua senha*</Text>
								<TextInput style={style.input_text} placeholder='Repita sua senha'
								onChange={(confirmarSenha) => setConfirmarSenha(confirmarSenha)}
								/>
							</View>
							<View style={style.input_container}>
								<Text style={style.label_description}>Ao clicar em “criar conta”, você passa a  concordo com o uso dos seus dados para compra e experiência no site conforme a <Text style={style.hightligh_description}>Política de Privacidade </Text> </Text>
							</View>
							<View style={style.button_container}>
								<TouchableOpacity style={style.button_create}
								onPress={() => createAccount()}
								>
									<Text style={style.label_create}>Criar conta</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
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