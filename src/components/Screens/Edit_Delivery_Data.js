import React, { useState } from 'react';
import { StyleSheet, View, Image, TextInput, Text, TouchableOpacity, StatusBar, KeyboardAvoidingView, Platform, ScrollView, Dimensions } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text'
import Arrow_back from '../../img/arrow_back.svg';


const Edit_Delivery_Data = ({ navigation }) => {

    const [pais, setPais] = useState();
	const [cidade, setCidade] = useState();
	const [estado, setEstado] = useState();
	const [endereco, setEndereco] = useState();
	const [bairro, setBairro] = useState();
	const [complemento, setComplemento] = useState();
	const [cep, setCep] = useState();

    const update = () => {
        var body = {
            pais: pais,
            cidade: cidade,
            estado: estado,
            endereco: endereco,
            bairro: bairro,
            complemento: complemento,
            cep: cep,
        }
        // api
        // .post("/admin/addproduct", body)
        // .then((response) => {
        //     alert(response)
        //     if(response.data.success) {
        //         alert('Dados de Entrega atualizados com sucesso')
        //         navigation.navigate('Profile_Store', { name: '' })
        //     }
        // })
        // .catch((err) => {
        //     alert("Ocorreu um erro ao editar os Dados de Entrega! Erro -> "+ err);
        // });
        alert('Dados de Entrega atualizados com sucesso')

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
                                <Text style={style.header_title}>Dados de Entrega</Text>
                            </View>
                        </View>
                        <View style= {style.content}>
                            <View style={style.form_container}>
                                <View style={style.input_container}>
                                    <Text style={style.label_input}>Endereco*</Text>
                                    <TextInput style={style.input_text} placeholder='Ex. Rua Dez, 988'
                                    onChangeText={(endereco) => setEndereco(endereco)}
                                    />
                                </View>
                                <View style={style.input_container}>
                                    <Text style={style.label_input}>Bairro*</Text>
                                    <TextInput style={style.input_text} placeholder='Ex. Centro'
                                    onChangeText={(bairro) => setBairro(bairro)}
                                    />
                                </View>
                                <View style={style.input_container}>
                                    <Text style={style.label_input}>Complemento	*</Text>
                                    <TextInput style={style.input_text} placeholder='Ex. Ao lado da famácia São João'
                                    onChangeText={(complemento) => setComplemento(complemento)}
                                    />
                                </View>
                                <View style={style.input_container}>
                                    <Text style={style.label_input}>Cidade	*</Text>
                                    <TextInput style={style.input_text} placeholder='Ex. Guaporé'
                                    onChangeText={(cidade) => setCidade(cidade)}
                                    />
                                </View>
                                <View style={style.input_container}>
                                    <Text style={style.label_input}>Estado	*</Text>
                                    <TextInput style={style.input_text} placeholder='Ex. Guaporé'
                                    onChangeText={(estado) => setEstado(estado)}
                                    />
                                </View>
                                <View style={style.input_container}>
                                    <Text style={style.label_input}>País	*</Text>
                                    <TextInput style={style.input_text} placeholder='Ex. Guaporé'
                                    onChangeText={(pais) => setPais(pais)}
                                    />
                                </View>
                                <View style={style.input_container}>
                                    <Text style={style.label_input}>CEP*</Text>

                                    <TextInputMask
                                        style={style.input_text} 
                                        placeholder='Ex. 96.225-000'
                                        type={'zip-code'}
                                        value={cep}
                                        onChangeText={(cep) => setCep(cep)}
                                    />

                                    
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

export default Edit_Delivery_Data;
