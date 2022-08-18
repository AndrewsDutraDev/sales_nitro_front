import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, StatusBar, KeyboardAvoidingView, Platform, ScrollView, Dimensions, Button } from 'react-native';
import Icon_add_button from '../../img/icon_add_button.svg';
import Icon_subtract_button from '../../img/icon_subtract_button.svg';
import Arrow_back from '../../img/arrow_back.svg';
import RNPickerSelect from 'react-native-picker-select';

const Edit_Product = ({ navigation }) => {

    const [nome, setNome] = useState();
    const [valor, setValor] = useState(0);
    const [quantidade, setQuantidade] = useState(0);
    const [descricao, setDescricao] = useState();
    const [categoria, setCategoria] = useState();

    const addProduct = () => {
        alert('Produto adicionado com sucesso')
    }

    const add_quantidade = () => {
        if(quantidade < 100) {
            setQuantidade(quantidade+1);
        }
    }

    const subtract_quantidade = () => {
        if(quantidade > 0) {
            setQuantidade(quantidade-1);
        }
    }

    return (
        <View style={style.bg_edit_personal_data}>
            <KeyboardAvoidingView behavior={ Platform.OS == 'ios' ? 'padding' : 'height' } keyboardVerticalOffset={10}>
                <ScrollView>
                    <View style={style.container}>
                        <View style= {style.header}>
                            <View style={style.header_text}>
                                <TouchableOpacity 
                                    onPress={() => navigation.navigate('Profile_Store', { name: 'Jane' })}>
                                    <Arrow_back width={25} height={25} fill={'#0066FF'} />
                                </TouchableOpacity>
                                <Text style={style.header_title}>Editar Produto</Text>
                            </View>
                        </View>
                        <View style= {style.content}>
                            <View style={style.form_container}>
                                <View style={style.input_container}>
                                    <Text style={style.label_input}>Nome*</Text>
                                    <TextInput style={style.input_text} placeholder='Ex. Sapato'
                                    onChangeText={(nome) => setNome(nome)}
                                    />
                                </View>
                                <View style={style.input_container}>
                                    <Text style={style.label_input}>Valor*</Text>
                                    <TextInput style={style.input_text} placeholder='R$ 0.00'
                                    onChangeText={(valor) => setValor(valor)}
                                    />
                                </View>
                                <View style={style.input_container}>
                                    <Text style={style.label_input}>Quantidade*</Text>
                                    <View style={style.input_container_with_icons}>
                                        <TouchableOpacity
                                        onPress={() => subtract_quantidade()}
                                        style={style.icon_left}>
                                            <Icon_subtract_button width={25} height={25} />
                                        </TouchableOpacity>
                                        <TextInput style={style.input_text_center}
                                        editable={false}
                                        placeholder={quantidade.toString()}
                                        />
                                        <TouchableOpacity
                                         onPress={() => add_quantidade()}
                                        style={style.icon_right}>
                                            <Icon_add_button width={25} height={25} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={style.input_container}>
                                    <Text style={style.label_input}>Descrição*</Text>
                                    <TextInput style={style.input_text_multiline} placeholder='Coloque aqui a descrição do produto'
                                    onChangeText={(descricao) => setDescricao(descricao)}
                                    multiline={true}
                                    numberOfLines={4}
                                    />
                                </View>
                                <View style={style.input_container}>
                                    <Text style={style.label_input}>Categoria*</Text>
                                    <RNPickerSelect 
                                        onValueChange={(value) => console.log(value)}
                                        placeholder={{label: 'Selecione uma categoria', value: null}}
                                        items={[
                                            { label: 'Calçados', value: 'Calçados' },
                                            { label: 'Roupas', value: 'Roupas' },
                                            { label: 'Acessórios', value: 'Acessórios' },
                                        ]}
                                        
                                        // style={style.select}
                                    />
                                </View>
                                <View style={style.button_save_container}>
                                    <View>
                                        <TouchableOpacity style={style.button_save}>
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

// const style = StyleSheet.create({
//     bg_home: {
//         width: '100%',
//         height: '100%',
//         marginTop: StatusBar.currentHeight,
//         flex: 1,
//     },
//     container: {
//       height: Dimensions.get('window').height,
//       width: Dimensions.get('window').width,
//     },
// });

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
		padding: 10,
        
	},
    input_container_with_icons: {
		width: '100%',
		padding: 10,
        display: 'flex',
        flexDirection: 'row',
		alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
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
    input_text_multiline: {
		width: '100%',
		backgroundColor: '#fff',
        padding: 15,
		paddingEnd: 50,
		marginVertical: 5,
		borderRadius: 4,
		borderWidth: 1,
		borderColor: '#D8D8D8',
		color: '#757575',
        textAlignVertical: 'top'
	},
    input_text_center: {
		width: '100%',
		backgroundColor: '#fff',
		padding: 15,
		marginVertical: 5,
		borderRadius: 4,
		borderWidth: 1,
		borderColor: '#D8D8D8',
		color: '#757575',
        textAlign: 'center',
	},
    // select: {
	// 	width: '100%',
	// 	backgroundColor: '#000',
	// 	padding: 15,
	// 	paddingEnd: 50,
	// 	marginVertical: 5,
	// 	borderRadius: 4,
	// 	borderWidth: 1,
	// 	borderColor: '#D8D8D8',
	// 	color: '#757575',
	// },
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
    },
    icon_right: {
        marginStart: -40,
    },
    icon_left:{
        display: 'flex',
        marginEnd: -40,
        zIndex: 1
    }
});

export default Edit_Product;