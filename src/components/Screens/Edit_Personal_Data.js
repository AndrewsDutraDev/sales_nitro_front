import React, { useState } from 'react';
import { StyleSheet, View, Image, TextInput, Text, TouchableOpacity, StatusBar, KeyboardAvoidingView, Platform, ScrollView, Dimensions } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text'
import Arrow_back from '../../img/arrow_back.svg';


const Edit_Personal_Data = ({ navigation }) => {

    const [nome, setNome] = useState();
	const [email, setEmail] = useState();
	const [cpf, setCpf] = useState();
	const [dataNascimento, setDataNascimento] = useState();
	const [celular, setCelular] = useState();

    const [sexo, setSexo] = React.useState('Feminino');

    const update = () => {
        var body = {
            nome: nome,
            email: email,
            cpf: cpf,
            dataNascimento: dataNascimento,
            celular: celular,
            sexo: sexo,
        }
        // api
        // .post("/admin/addproduct", body)
        // .then((response) => {
        //     alert(response)
        //     if(response.data.success) {
        //         alert('Dados Pessoais atualizados com sucesso')
        //         navigation.navigate('Profile_Store', { name: '' })
        //     }
        // })
        // .catch((err) => {
        //     alert("Ocorreu um erro ao editar os Dados Pessoais! Erro -> "+ err);
        // });
        alert('Dados Pessoais atualizados com sucesso')

    }

    return (
        <View style={style.bg_edit_personal_data}>
            <KeyboardAvoidingView behavior={ Platform.OS == 'ios' ? 'padding' : 'height' } keyboardVerticalOffset={10}>
                <ScrollView>
                    <View style={style.container}>
                        <View style= {style.header}>
                            <View style={style.header_text}>
                                <TouchableOpacity 
                                    onPress={() => navigation.navigate('Profile', { name: 'Jane' })}>
                                    <Arrow_back width={25} height={25} fill={'#0066FF'} />
                                </TouchableOpacity>
                                <Text style={style.header_title}>Dados Pessoais</Text>
                            </View>
                        </View>
                        <View style= {style.content}>
                            <View style={style.form_container}>
                                <View style={style.input_container}>
                                    <Text style={style.label_input}>Nome*</Text>
                                    <TextInput style={style.input_text} placeholder='Ex. Zé Roberto'
                                    onChangeText={(nome) => setNome(nome)}
                                    />
                                </View>
                                <View style={style.input_container}>
                                    <Text style={style.label_input}>Email*</Text>
                                    <TextInput style={style.input_text} placeholder='Ex. zézinho@mail.com'
                                    onChangeText={(email) => setEmail(email)}
                                    />
                                </View>
                                <View style={style.input_container}>
                                    <Text style={style.label_input}>CPF*</Text>
                                    <TextInputMask
                                        style={style.input_text}
                                        placeholder='Ex. 000.000.000-00'
                                        type={'cpf'}
                                        value={cpf}
                                        onChangeText={(cpf) => setCpf(cpf)}
                                    />
                                </View>
                                <View style={style.input_container}>
                                    <Text style={style.label_input}>Data de Nascimento*</Text>
                                    <TextInputMask
                                        style={style.input_text} 
                                        placeholder='Ex. 12/11/1999'
                                        type={'datetime'}
                                        options={{
                                            format: 'DD/MM/YYYY'
                                        }}
                                        value={dataNascimento}
                                        onChangeText={(dataNascimento) => setDataNascimento(dataNascimento)}
                                    />
                                </View>
                                <View style={style.input_container}>
                                    <Text style={style.label_input}>Celular*</Text>
                                    <TextInputMask
                                        style={style.input_text} 
                                        placeholder='Ex. 53 999000000'
                                        type={'cel-phone'}
                                        options={{
                                            maskType: 'BRL',
                                            withDDD: true,
                                            dddMask: '(99) '
                                        }}
                                        value={celular}
                                        onChangeText={(celular) => setCelular(celular)}
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

                                <View style={style.button_save_container}>
                                    <View>
                                        <TouchableOpacity style={style.button_save}
                                        onPress={() => update()} 
                                        >
                                                <Text style={style.text_save}>Salvar</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>  
    )
};

const style = StyleSheet.create({
    bg_edit_personal_data: {
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
    button_save_container:{
		display: 'flex',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
    	flexDirection: 'row',
		marginVertical: 20,
	},	
	button_save: {
		width: 100,
		height: 50,
		borderRadius: 5,
		backgroundColor: '#0067FF',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
    text_save: {
        fontSize: 16,
        color: '#fff'
    }
});

export default Edit_Personal_Data;
