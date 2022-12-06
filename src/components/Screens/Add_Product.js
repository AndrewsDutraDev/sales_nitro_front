import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Image, TouchableOpacity, StatusBar, Dimensions, } from 'react-native';

import {Main_Container, Container, Content, Header, Field_Group, Modal_Bottom, Button_Container} from '../Containers/Index_Container';
import {Button_Back, Quantity_Box, Header_Title, Text_Field, Label_Field, Button_Solid,} from '../Components/Index_Components';

import Icon_cam from '../../img/icon_cam.svg';
import RNPickerSelect from 'react-native-picker-select';
import api from '../../services/api';

const Add_Product = ({ navigation }) => {

    const [nome, setNome] = useState();
    const [valor, setValor] = useState(0.0);
    const [quantidade, setQuantidade] = useState(0);
    const [descricao, setDescricao] = useState();
    const [categoria, setCategoria] = useState();
    const [isLoading, setIsLoading] = useState(false);

    /**
     * Método para verificar se a propriedade é válida
     * @param {Object} prop 
     * @returns 
     */
     const is_valid = (prop) => {
        return !(prop === undefined);
    }


    const addProduct = () => {
        var body = {
            name: nome,
            value:  parseFloat(valor),
            quantity: parseInt(quantidade),
            descrition: descricao,
            category: categoria
        }

        setIsLoading(true);
        api
        .post("/admin/addproduct", body)
        .then((response) => {
            alert(response)
            if(response.data.success) {
                setIsLoading(false);
                alert('Produto adicionado com sucesso')
                navigation.navigate('List_Product')
            }
        })
        .catch((err) => {
            setIsLoading(false);
            alert("Ocorreu um erro ao adicionar o produto! Erro -> "+ err);
            
        });
        // alert('Produto adicionado com sucesso');
        // navigation.navigate('Profile_Store', { name: '' })
        
    }

    return (
        <Main_Container isLoading={isLoading} setIsLoading={setIsLoading}>
            <Container alignItems="center" justifyContent={'center'} flexDirection={'column'}>
                <Header justifyContent="space-evenly">
                    <Button_Back onPress={() => navigation.navigate('Profile_Store', {})} />
                    <Header_Title text="Adicionar Produto" />
                </Header>
                <Content width={'100%'}>
                    <View style={style.image_picker}>
                        <View style={style.image_container}>
                            <Image style={style.image_content} source={require('../../img/imagem_teste.jpg')}></Image>
                        </View>
                        <TouchableOpacity style={style.icon_cam}>
                            <Icon_cam width={50} height={50} />
                        </TouchableOpacity>
                    </View>
                    <View style={style.form_container}>
                        <Field_Group>
                            <Label_Field text={'Nome*'} textColor={'#333333'} />
                            <Text_Field placeholder={'Ex. Sapato'} 
                            onChangeText={(nome) => setNome(nome)} value={is_valid(nome) ? nome.nome : ''}/>
                        </Field_Group>
                        <Field_Group>
                            <Label_Field text={'Valor*'} textColor={'#333333'} />
                            <Text_Field placeholder={'R$ 0.00'} 
                            onChangeText={(valor) => setValor(valor)} value={is_valid(valor) ? valor.valor : ''}/>
                        </Field_Group>
                        <View style={style.input_container}>
                            <Text style={style.label_input}>Quantidade*</Text>
                            <Quantity_Box quantidade={quantidade} setQuantidade={setQuantidade} />
                        </View>
                        <Field_Group>
                            <Label_Field text={'Descrição*'} textColor={'#333333'} />
                            <Text_Field placeholder={'Coloque aqui a descrição do produto'} 
                            multiline={true} numberOfLines={4}
                            textAlignVertical={'top'}
                            onChangeText={(descricao) => setValor(descricao)} value={is_valid(descricao) ? descricao.descricao : ''}/>
                        </Field_Group>
                        <Field_Group>
                            <Label_Field text={'Categoria*'} textColor={'#333333'} />
                            <RNPickerSelect 
                                placeholder={{label: 'Selecione uma categoria', value: null}}
                                onValueChange={(categoria) => setCategoria(categoria)}
                                items={[
                                    { label: 'Calçados', value: 'Calçados' },
                                    { label: 'Roupas', value: 'Roupas' },
                                    { label: 'Acessórios', value: 'Acessórios' },
                                ]}
                                
                                // style={style.select}
                            />
                        </Field_Group>
					<Button_Container width={'100%'} flexDirection={'row'} justifyContent={'space-around'}>
                        <Button_Solid text={'SALVAR'} backgroundColor={'#0067FF'}
                            onPress={() => { () => {addProduct() }}} />
                    </Button_Container>
                    </View>
                </Content>
            </Container>
        </Main_Container>
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

export default Add_Product;