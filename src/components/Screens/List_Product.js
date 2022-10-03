import React, { useState, useEffect } from 'react';
import { StyleSheet, Modal, View, Alert, TextInput, Image, Text, TouchableOpacity, StatusBar, KeyboardAvoidingView, Platform, ScrollView, Dimensions, Button } from 'react-native';
import { ActivityIndicator } from "react-native";
import Icon_add_button from '../../img/icon_add_button.svg';
import Icon_subtract_button from '../../img/icon_subtract_button.svg';
import Icon_edit from '../../img/icon_edit.svg';
import Icon_delete from '../../img/icon_delete.svg';
import Arrow_back from '../../img/arrow_back.svg';
import RNPickerSelect from 'react-native-picker-select';
import api from '../../services/api';

const List_Product = ({ navigation }) => {

    // const [array, setArray] = useState([0, 1, 2, 3, 4]);
    const [productId, setProductId] = useState();
    const [modalVisible, setModalVisible] = useState(false);
    const [productsList, setProductsList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const selectCurrentProduct = (id) => {
        setModalVisible(true);
        setProductId(id);   
    }

    const deleteProduct = () => {
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

    const remove = () => {
        // alert(productId)
        setIsLoading(true);
        var body = {
            _id: productId,
        }
        api
        .delete("/admin/deleteproduct", body)
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

    const toGoProduct = () => {
        navigation.navigate('Edit_Product', { id:  productId})
    }

    const load_products = () => {
        api
        .get("/user/listproducts")
        .then((response) => {
            if(response.data) {
                // alert(response.data[3]._id)
                setProductsList(response.data);
            }
        })
        .catch((err) => {
            alert("Nenhum produto encontrado!");

        });
    };

    useEffect( () => {
        load_products();
    }, []);



    return (
        <View style={style.bg_edit_personal_data}>
            { isLoading ? 
            <View style={{ position: 'absolute', flex: 1, justifyContent: "center", alignItems: "center", zIndex: 999, height: '100%', width: '100%', backgroundColor: '#00000099' }}>
                <ActivityIndicator color={"#fff"} size={50} /> 
            </View> : <></>}
            <KeyboardAvoidingView behavior={ Platform.OS == 'ios' ? 'padding' : 'height' } keyboardVerticalOffset={10}>
                <ScrollView>
                    <View style={style.container}>
                        <View style= {style.header}>
                            <View style={style.header_text}>
                                <TouchableOpacity 
                                    onPress={() => navigation.navigate('Profile_Store', { name: 'Jane' })}>
                                    <Arrow_back width={25} height={25} fill={'#0066FF'} />
                                </TouchableOpacity>
                                <Text style={style.header_title}>Selecione um Produto</Text>
                            </View>
                        </View>
                        <View style= {style.content}>
                            <View style={style.list_container}>
                                {/* <TouchableOpacity style={style.image_container}>
                                    <Image style={style.image_content} source={require('../../img/imagem_teste.jpg')}></Image>
                                </TouchableOpacity>     */}
                                {productsList.map((elem) => (
                                    <TouchableOpacity key={elem._id} style={style.image_container}
                                    onPress={() => selectCurrentProduct(elem._id)}
                                    >   
                                        <Image style={style.image_content} source={require('../../img/imagem_teste.jpg')}></Image>
                                        <Text style={style.image_text}>{elem.name}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                        <Modal 
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                setModalVisible(!modalVisible);
                            }}
                            
                        >
                            <View style={style.modal}>
                                <View style={style.modal_container}>
                                    <View style={style.button_container}>
                                        <TouchableOpacity
                                        onPress={() => toGoProduct()}
                                        >
                                            <Icon_edit width={50} height={50}/>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                        onPress={() => deleteProduct()}>
                                            <Icon_delete width={50} height={50}/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>
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
        fontSize: 22,
        textAlign: 'center',
    },
    list_container: {
        width: '100%',
		marginTop: 30,
		paddingHorizontal: 25,
        display: 'flex',
        flexDirection:'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    image_container: {
        // backgroundColor: '#acacac',
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

    modal: {
        height: '100%',
		width: Dimensions.get('window').width,
        backgroundColor: '#00000080',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal_container: {
        width: '50%',
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    button_container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    
});

export default List_Product;