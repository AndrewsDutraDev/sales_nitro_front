import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import Icon_edit from '../../img/icon_edit.svg';
import Icon_delete from '../../img/icon_delete.svg';
import api from '../../services/api';

import {Main_Container, Container, Content, Header, Modal_Center, Button_Container} from '../Containers/Index_Container';

import {Button_Back, Header_Title} from '../Components/Index_Components';

const List_Product = ({ navigation }) => {

    const [productId, setProductId] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const [productsList, setProductsList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    /**
     * Método para abrir a modal do produto e setar o id do produto selecionado
     * @param {Number} id 
     */
    const select_current_product = (id) => {
        setModalVisible(true);
        setProductId(id);
    }

    /**
     * Método para abrir a mensagem de confirmação de deleção
     */
    const delete_product = () => {
        Alert.alert(
            "Excluir Produto",
            "Deseja realmente excluir o produto selecionado?",
            [
              {
                text: "Não",
                onPress: () => {},
                style: "cancel"
              },
              { text: "Sim", onPress: () => remove()}
            ]
          );
    }
    
    /**
     * Método para remover um produto
     */
    const remove = () => {

        /**
		 * Cria o body que será enviado no request
		 * @param {Number} productId 
		 * @returns 
		 */
        const body_request = (productId) => {
            let body = {
                _id: productId,
            }
            
            return body;
        }

        /**
		 * Método para fazer o request da remoção do produto
		 * @param {JSON} body 
		 */
        const request_remove = (body) => {
            api.delete("/admin/deleteproduct", body)
            .then((response) => {
                alert(JSON.stringify(response))
                alert('Produto removido com sucesso!')
                load_products();
                setModalVisible(!modalVisible);
                setIsLoading(false);
            })
            .catch((err) => {
                alert("Ocorreu um erro ao remover Produto! Erro -> "+ err);
                setIsLoading(false);
            });
        }

        /**
         * Método para executar a remoção
         */
        const remove_product = () => {
            setIsLoading(true);

            let body = body_request(productId);

            request_remove(body);
        }

        remove_product();
    }

    /**
     * Método para redirecionar para a pagina de produto
     */
    const toGoProduct = () => {
        navigation.navigate('Edit_Product', { id:  productId})
    }

    /**
     * Método para carregar a lista de produtos
     */
    const load_products = () => {

        /**
         * Método para fazer o request da lista de produtos
         */
        const request_products = () => {
            api.get("/user/listproducts")
            .then((response) => {
                if(response.data) {
                    setIsLoading(false);
                    setProductsList(response.data);
                }
            })
            .catch((err) => {
                alert("Nenhum produto encontrado!");
            });
        }

        setIsLoading(true);
        
        request_products();
    };

    useEffect( () => {
        load_products();
    }, []);

    return (
        <Main_Container isLoading={isLoading} setIsLoading={setIsLoading}>
            <Container alignItems="center" justifyContent="center" flexDirection={'column'}>
                <Header justifyContent="space-evenly">
                    <Button_Back onPress={() => navigation.navigate('Profile_Store', {})} />
                    <Header_Title text={'Selecione um Produto'} />
                </Header>
                <Content>
                    <View style={style.list_container}>
                        {productsList.map((elem) => (
                            <TouchableOpacity key={elem._id} style={style.image_container}
                            onPress={() => select_current_product(elem._id)}
                            >   
                                <Image style={style.image_content} source={require('../../img/imagem_teste.jpg')}></Image>
                                <Text style={style.image_text}>{elem.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </Content>
                <Modal_Center title={'Opções'} fontSize={18} isVisible={modalVisible} setIsVisible={setModalVisible}
                width={'80%'} justifyContent={'center'} closeWidth={18} closeHeight={18}>
                    <Button_Container flexDirection={'row'} justifyContent={'space-around'}>
                        <TouchableOpacity
                        onPress={() => toGoProduct()}>
                            <Icon_edit width={50} height={50}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={() => delete_product()}>
                            <Icon_delete width={50} height={50}/>
                        </TouchableOpacity>
                    </Button_Container>
                </Modal_Center>
            </Container>
        </Main_Container>
    )
};

const style = StyleSheet.create({
    list_container: {
        width: '100%',
		marginTop: 30,
        display: 'flex',
        flexDirection:'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image_container: {
        width: 140,
        height: 200,
        borderColor: '#fff',
        borderWidth: 5,
        overflow: 'hidden',
        marginVertical: 5
    },
    image_content : {
        width: 140,
        height: 140,
    },
    image_text: {
        display: 'flex',
        width: '100%',
        color: '#000',
        fontSize: 16,
        textAlign: 'center',
    },   
});

export default List_Product;