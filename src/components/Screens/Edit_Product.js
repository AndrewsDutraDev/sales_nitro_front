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

    /**
     * Método para atualizar um produto.
     */
    const update_product = () => {

        /**
         * Função para retornar se as informações do produto são válidas.
         * @param {String} nome 
         * @param {String} valor 
         * @param {String} quantidade 
         * @param {String} descricao 
         * @param {String} categoria 
         * @returns {boolean}
         */
        const is_valid_product = (nome, valor, quantidade, descricao, categoria) => {
            return nome && valor && quantidade && descricao && categoria;
        };

         /**
         * Cria o body que será enviado no request.
         * @param {String} nome 
         * @param {String} valor 
         * @param {String} quantidade 
         * @param {String} descricao 
         * @param {String} categoria 
         * @returns {JSON}
         */
         const body_request = (nome, valor, quantidade, descricao, categoria) => {
            let body = {
                _id: route.params.id,
                name: nome,
                valor: valor,
                quantidade: quantidade,
                descricao: descricao,
                categoria: categoria,
            }

            return body;
        };

        /**
         * Método para realizar o request.
         * @param {JSON} body 
         */
        const request_update_product = (body) => {
            api.post("/admin/changeproduct", body)
            .then((response) => {
                alert(response);
                if(response.data.success) {
                    setIsLoading(false);
                    alert("Produto atualizado com sucesso!")
                    navigation.navigate('List_Product');
                }
            })
            .then((err) => {
                setIsLoading(false);
                alert("Não foi possível atualizar o produto!");
				console.error(`ERROR -> ${err}`);
            })
        }

        /**
		 * Método para validar a inserção do produto
		 */
        const validate_update_product = () => {
            if(is_valid_product(nome, valor, quantidade, descricao, categoria)) {
                setIsLoading(true);

                let body = body_request(nome, valor, quantidade, descricao, categoria);

                request_update_product(body);
            } else {
                alert("Preencha os campos!");
            }
        }

        validate_update_product();
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
        // load_product();
    }, []);

    return (
        <Main_Container isLoading={isLoading} setIsLoading={setIsLoading}>
            <Container alignItems="center" justifyContent="center" flexDirection={'column'}>
            <Header justifyContent="space-evenly">
                <Button_Back onPress={() => navigation.navigate('Profile_Store', {})} />
                <Header_Title text={'Editar Produto'} />
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
                        <Field_Group>
                            <Label_Field text={'Quantidade*'} textColor={'#333333'} />
                            <Quantity_Box quantidade={quantidade} setQuantidade={setQuantidade} />
                        </Field_Group>
                        <Field_Group>
                            <Label_Field text={'Descrição*'} textColor={'#333333'} />
                            <Text_Field placeholder={'Coloque aqui a descrição do produto'} 
                            multiline={true} numberOfLines={4}
                            textAlignVertical={'top'}
                            onChangeText={(descricao) => setDescricao(descricao)} value={is_valid(descricao) ? descricao.descricao : ''}/>
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
                                value={categoria}
                            />
                        </Field_Group>
                        <Button_Container width={'100%'} flexDirection={'row'} justifyContent={'space-around'}>
                            <Button_Solid text={'SALVAR'} backgroundColor={'#0067FF'}
                                onPress={() => { () => {update_product() }}} />
                        </Button_Container>
                    </View>
                </Content>
            </Container>
        </Main_Container>
    )
};

const style = StyleSheet.create({
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