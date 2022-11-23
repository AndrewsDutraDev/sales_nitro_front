import React, { useState, useRef, useEffect } from 'react';
import { ActivityIndicator } from "react-native";
import { StyleSheet, Animated,  Modal, View, TextInput, Image, Text, TouchableOpacity, StatusBar, KeyboardAvoidingView, Platform, ScrollView, Dimensions, Button } from 'react-native';
import Icon_edit from '../../img/icon_edit.svg';
import Icon_delete from '../../img/icon_delete.svg';
import Menu_closed from '../../img/menu_closed.svg';
import Menu_opened from '../../img/menu_opened.svg';
import Icon_car from '../../img/icon_car.svg';
import Icon_search from '../../img/icon_search.svg';
import Icon_novidades from '../../img/icon_novidades.svg';
import Icon_favoritos from '../../img/icon_favoritos.svg';
import Icon_compras from '../../img/icon_compras.svg';
import Icon_conta from '../../img/icon_conta.svg';
import api from '../../services/api';

const Home = ({ navigation, route }) => {

    const [array, setArray] = useState([]);
    const [userId, setUserId] = useState(route.params.id);
    const [userName, setUserName] = useState(route.params.name);
    const [productsList, setProductsList] = useState([]);
    const [productsListResult, setProductsListResult] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [category, setCategory] = useState(1);
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [lateralBarOpened, setlateralBarOpened] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [carProductNumber, setCarProductNumber] = useState(0);
    const [carProductList, setCarProductList] = useState([]);

    // setUserId(route.params.id);
    // setUserName(route.params.name);

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        setlateralBarOpened(true);

        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true
        }).start();
      };
    
      const fadeOut = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true
        }).start();
        
        setTimeout(() => {
            setlateralBarOpened(false);
        }, 500);

      };
      const load_products = () => {
        setIsLoading(true);
        api
        .get("/user/listproducts")
        .then((response) => {
            if(response.data) {
                setProductsList(response.data);
                setProductsListResult(response.data);
                setIsLoading(false);
            }
        })
        .catch((err) => {
            alert("Nenhum produto encontrado!");
            setIsLoading(false);

        });
      };

      useEffect( () => {
        load_products();
      }, []);
      

      const search_products = (search) => {
        let searchText = search.search.toLowerCase();
        let array = Array();
        // console.log(searchText);
        if (searchText) {
            
            productsList.map(item => {
                try{
                    let itemName = item.name.toLowerCase();
                    if(itemName === searchText || itemName.startsWith(searchText) || itemName.includes(searchText)){
                        array.push(item);
                    }
                }catch(err){

                }
            });

            setProductsListResult(array);
            // console.log(array);
        }else {
            setProductsListResult(productsList);
        }
      };

      const display_prodcuts = () => {
        return  (
        productsListResult.length > 0 ? productsListResult.map(item => (
            <TouchableOpacity style={style.list_item} key={item._id}
            onPress={() => navigation.navigate('View_Product',
             { product: item, carProductNumber: carProductNumber, setCarProductNumber: setCarProductNumber,
                 carProductList: carProductList, setCarProductList: setCarProductList })}
            >
                <View style={style.item_header}>
                    <Text style={style.item_header_title}>Novidade</Text>
                </View>

                <View style={style.image_container}>
                    <Image style={style.image_content} source={require('../../img/imagem_teste.jpg')}></Image>
                </View>
                <View style={style.item_footer}>
                    <Text style={style.item_title}>{item.name}</Text>
                    <Text style={style.item_subtitle}>{item.descrition}</Text>
                    <Text style={style.item_price}>R$ {item.value}</Text>
                </View>
            </TouchableOpacity>
        )) : 
            <View style={style.list_message}><Text style={style.list_message_text}> Não há produtos! :(</Text></View>
        );
      }

    return (
        <View style={style.bg_edit_personal_data}>
            { isLoading ? 
            <View style={{ position: 'absolute', flex: 1, justifyContent: "center", alignItems: "center", zIndex: 999, height: '100%', width: '100%', backgroundColor: '#00000099' }}>
                <ActivityIndicator color={"#fff"} size={50} /> 
            </View> : <></>}
            <KeyboardAvoidingView behavior={ Platform.OS == 'ios' ? 'padding' : 'height' } keyboardVerticalOffset={10}>
                <ScrollView style={style.scroll}>
                    <View style={style.container}>
                        <View style= {style.header}>
                            <View style={style.header_text}>
                                <TouchableOpacity 
                                    onPress={fadeIn}>
                                    <Menu_closed width={25} height={25} />
                                </TouchableOpacity>
                                <Text style={style.header_title}>SALESNITRO</Text>
                                <TouchableOpacity style={style.header_car}
                                    onPress={() => navigation.navigate('View_Carrinho', { carProductList: carProductList, setCarProductList: setCarProductList })}>
                                    <Text style={style.header_car_text}>{carProductNumber}</Text>
                                    <Icon_car style={style.header_car_icon} width={25} height={25} />
                                </TouchableOpacity>
                            </View>
                            <View style={style.header_searchBar}>
                                <Icon_search style={style.searchIcon} width={20} height={20} />
                                <TextInput style={style.searchBar} placeholder="Buscar Produto"
                                onChangeText={(search) => search_products({search})}
                                />
                            </View>
                        </View>
                        <View style={style.categoryList}>
                            <TouchableOpacity onPress={() => setCategory(1)}>
                                <Text style={ category == 1 ? style.categorySelected : style.categoryItem}>Calçados</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setCategory(2)}>
                                <Text style={category == 2 ? style.categorySelected : style.categoryItem}>Feminino</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setCategory(3)}>
                                <Text style={category == 3 ? style.categorySelected : style.categoryItem}>Masculino</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setCategory(4)}>
                                <Text style={category == 4 ? style.categorySelected : style.categoryItem}>Infantil</Text>
                            </TouchableOpacity>

                        </View>
                        <View style= {style.content}>
                            <View style={style.list_container}>
                                {/* <TouchableOpacity style={style.image_container}>
                                    <Image style={style.image_content} source={require('../../img/imagem_teste.jpg')}></Image>
                                </TouchableOpacity>     */}
                                {display_prodcuts()}
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
                                        onPress={() => navigation.navigate('Edit_Product', { name: '' })}
                                        >
                                            <Icon_edit width={50} height={50}/>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <Icon_delete width={50} height={50}/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </View>
                    
                </ScrollView>
            </KeyboardAvoidingView>
            <Animated.View style={ [lateralBarOpened ? style.lateral_bar : style.lateral_bar_closed, {
                    // Bind opacity to animated value
                    opacity: fadeAnim,
                }]}>
                <View style={style.lateral_bar_icon}>
                    <TouchableOpacity 
                        onPress={fadeOut}>
                        <Menu_opened width={25} height={25} />
                    </TouchableOpacity>
                </View>
                <View style={style.lateral_listItems}>
                    <TouchableOpacity style={style.lateral_item}>
                        <Icon_novidades width={20} height={20} />
                        <Text style={style.laterel_item_text}>Novidades</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.lateral_item}>
                        <Icon_favoritos width={20} height={20} />
                        <Text style={style.laterel_item_text}>Favoritos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.lateral_item}>
                        <Icon_compras width={20} height={20} />
                        <Text style={style.laterel_item_text}>Suas Compras</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.lateral_item}
                    onPress={() => navigation.navigate('Profile', {id: userId, name: userName })}>
                        <Icon_conta width={20} height={20} />
                        <Text style={style.laterel_item_text}>Sua Conta</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </View>  
    )
};

const style = StyleSheet.create({
    bg_edit_personal_data: {
        width: '100%',
		height: '100%',
        position: 'relative',
		marginTop: StatusBar.currentHeight,
		flex: 1,
    },
    scroll: {
        width: '100%',
        height: '100%',
    },
	container: {
		height: '100%',
		width: Dimensions.get('window').width,
        height: '100%',
		marginBottom: 40,
        position: 'relative',
        backgroundColor: '#F5F5F5',

	},
    header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#0066FF'
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
        color: '#fff',
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    header_car: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    header_car_text: {
        width: 20,
        height: 20,
        fontSize: 12,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#CF0909',
        color: '#fff',
        borderRadius: 10,
        marginEnd: -10,
        marginBottom: -5,
        elevation: 3,
        zIndex: 2
    },
    header_car_icon: {
    },
    searchIcon: {
        display: 'flex',
        position: 'absolute',
        start: 35,
        zIndex: 1
    },
    header_searchBar: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    searchBar: {
        width: '100%',
        borderRadius: 20,
        backgroundColor: '#fff',
        height: 50,
        paddingHorizontal: 25,
        paddingStart: 50,
        paddingVertical: 5,
        color: '#757575',
        fontSize: 16,
    },
    categoryList: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    categoryItem: {
        fontSize: 16,
        color: '#9095A6A6',
    },
    categorySelected: {
        fontSize: 16,
        color: '#0066FF',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    list_container: {
        width: '100%',
		marginTop: 10,
		paddingHorizontal: 25,
        display: 'flex',
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        
    },
    list_item: {
        width: 140,
        marginBottom: 15,
        marginHorizontal: ((Dimensions.get('window').width - 20) - (140 * Math.floor((Dimensions.get('window').width - 20) / 140))) / (Math.floor((Dimensions.get('window').width - 20) / 140) * 4),
        overflow: 'hidden',
        borderRadius: 5,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {width: 5, height: 20},
        shadowOpacity: 0.2,
        elevation: 5,
    },
    item_header: {
        width: '100%',
        backgroundColor: '#FFD600',
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    item_header_title: {
        color: '#fff',
        fontSize: 16,
    },
    image_container: {
        width: 140,
        height: 80,
        overflow: 'hidden',
    },
    image_content : {
        width: 140,
        height: 80,
    },
    item_footer: {
        width: '100%',
        maxHeight: 150,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5,
        marginVertical: 5
    },
    item_title: {
        width: '100%',
        fontSize: 18,
        textAlign: 'justify',
        fontWeight: '600',
        color: '#000',
        marginVertical: 5
    },
    item_subtitle: {
        width: '100%',
        fontSize: 12,
        textAlign: 'justify',
        color: '#9095A6',
    },
    item_price: {
        width: '100%',
        fontSize: 18,
        textAlign: 'justify',
        color: '#0066FF',
        marginVertical: 10,
        fontWeight: '500'
    },

    list_message: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    list_message_text: {
        fontSize: 22,
        fontWeight: '500',
        color: '#757575'
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
    lateral_bar: {
        display: 'flex',
        position: 'absolute',
        height: '100%',
        backgroundColor: '#0066FF',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        zIndex: 99,
        paddingHorizontal: 30,
        paddingVertical: 45,
    },
    lateral_bar_closed: {
        display: 'flex',
        position: 'absolute',
        marginStart: '-50%',
        height: '100%',
        backgroundColor: '#0066FF',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        zIndex: 99,
        paddingHorizontal: 20,
        paddingVertical: 50,
    },
    lateral_bar_icon: {
    },
    lateral_listItems: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        marginVertical: 50,
    },
    lateral_item: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingEnd: 50,
        marginVertical: 15

    },
    laterel_item_text: {
        fontSize: 20,
        fontWeight: '500',
        color: '#fff',
        marginStart: 15
    }
});

export default Home;