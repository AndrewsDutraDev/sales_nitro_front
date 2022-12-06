import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, StatusBar, Dimensions, } from 'react-native';

import {Main_Container, Container, Content, Header, Field_Group, Button_Container} from '../Containers/Index_Container';
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

    /**
     * Método para adicionar um produto no banco
     */
    const addProduct = () => {

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
         * Cria o body que será enviado no request
         * @param {String} nome 
         * @param {String} valor 
         * @param {String} quantidade 
         * @param {String} descricao 
         * @param {String} categoria 
         * @returns {JSON}
         */
        const body_request = (nome, valor, quantidade, descricao, categoria) => {
            let body = {
                name: nome,
                value:  parseFloat(valor),
                quantity: parseInt(quantidade),
                descrition: descricao,
                category: categoria
            }

            return body;
        };

        /**
         * Método para realizar o request 
         * @param {JSON} body 
         */
        const request_insert_product = (body) => {
            api.post("/admin/addproduct", body)
            .then((response) => {
                alert(response)
                if(response.data.success) {
                    setIsLoading(false);
                    alert('Produto adicionado com sucesso!')
                    navigation.navigate('List_Product');
                }
            })
            .catch((err) => {
                setIsLoading(false);
                alert("Não foi possível adicionar o produto!");
				console.error(`ERROR -> ${err}`);
            });
        };

        /**
		 * Método para validar a inserção do produto
		 */
        const validate_add_product = () => {
            if(is_valid_product(nome, valor, quantidade, descricao, categoria)) {
                setIsLoading(true);
    
                let body = body_request(nome, valor, quantidade, descricao, categoria)
                
                request_insert_product(body);
            } else {
				alert("Preencha os campos!")
            }
        };
        
        validate_add_product();
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
});

export default Add_Product;