import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity, StatusBar, KeyboardAvoidingView, Platform, ScrollView, Dimensions, Button } from 'react-native';
import Icon_add_button from '../../img/icon_add_button.svg';
import Icon_subtract_button from '../../img/icon_subtract_button.svg';
import Arrow_back from '../../img/arrow_back.svg';
import Icon_cam from '../../img/icon_cam.svg';
import api from '../../services/api';

import RNPickerSelect from 'react-native-picker-select';

const Edit_Product = ({ navigation, route }) => {

    const [nome, setNome] = useState();
    const [valor, setValor] = useState(0);
    const [quantidade, setQuantidade] = useState(0);
    const [descricao, setDescricao] = useState();
    const [categoria, setCategoria] = useState();

    const update = () => {
        var body = {
            _id: route.params.id,
            name: nome,
            valor: valor,
            quantidade: quantidade,
            descricao: descricao,
            categoria: categoria,
        }
        // api
        // .post("/admin/changeproduct", body)
        // .then((response) => {
        //     if(response.data) {
        //         alert('Produto atualizado com sucesso')
        //         navigation.navigate('Profile_Store', { name: '' })
                
        //     }
        // })
        // .catch((err) => {
        //     alert("Ocorreu um erro ao atualizar o Produto! Erro -> "+ err);
        // });
        alert('Produto atualizado com sucesso')
        navigation.navigate('Profile_Store', { name: '' })


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

    const load_product = () => {
        var body = {
            _id: route.params.id
        }
        api
        .get("/user/listproduct", body)
        .then((response) => {
            if(response.data) {
                alert(response.data)
            }
        })
        .catch((err) => {
            alert(err);

        });
    };

    useEffect( () => {
        load_product();
    }, []);

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
                            <View style={style.image_picker}>
                                <View style={style.image_container}>
                                    <Image style={style.image_content} source={require('../../img/imagem_teste.jpg')}></Image>
                                </View>
                                <TouchableOpacity style={style.icon_cam}>
                                    <Icon_cam width={50} height={50} />
                                </TouchableOpacity>
                            </View>
                            <View style={style.form_container}>
                                <View style={style.input_container}>
                                    <Text style={style.label_input}>Nome*</Text>
                                    <TextInput style={style.input_text} placeholder='Ex. Sapato'
                                    value={nome}
                                    onChangeText={(nome) => setNome(nome)}
                                    />
                                </View>
                                <View style={style.input_container}>
                                    <Text style={style.label_input}>Valor*</Text>
                                    <TextInput style={style.input_text} placeholder='R$ 0.00'
                                    value={valor}
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
                                        value={quantidade.toString()}

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
                                    value={descricao}
                                    onChangeText={(descricao) => setDescricao(descricao)}
                                    multiline={true}
                                    numberOfLines={4}
                                    />
                                </View>
                                <View style={style.input_container}>
                                    <Text style={style.label_input}>Categoria*</Text>
                                    <RNPickerSelect 
                                        onValueChange={(categoria) => setCategoria(categoria)}
                                        placeholder={{label: 'Selecione uma categoria', value: null}}
                                        items={[
                                            { label: 'Calçados', value: 'Calçados' },
                                            { label: 'Roupas', value: 'Roupas' },
                                            { label: 'Acessórios', value: 'Acessórios' },
                                        ]}
                                        value={categoria}
                                        
                                        // style={style.select}
                                    />
                                </View>
                                <View style={style.button_save_container}>
                                    <View>
                                        <TouchableOpacity style={style.button_save} onPress={() => update()}>
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
    image_picker: {
        width: '100%',
		paddingHorizontal: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image_container: {
        backgroundColor: '#acacac',
        width: 150,
        height: 150,
        borderColor: '#fff',
        borderWidth: 5,
        overflow: 'hidden'
    },
    image_content : {
        width: 150,
        height: 150,
    },
    icon_cam: {
        width: 150,
        marginTop: -30,
        marginEnd: -30,
        alignItems: 'flex-end'
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