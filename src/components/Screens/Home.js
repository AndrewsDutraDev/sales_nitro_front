import React, { useState, useRef } from 'react';
import { StyleSheet, Animated,  Modal, View, TextInput, Image, Text, TouchableOpacity, StatusBar, KeyboardAvoidingView, Platform, ScrollView, Dimensions, Button } from 'react-native';
import Icon_add_button from '../../img/icon_add_button.svg';
import Icon_subtract_button from '../../img/icon_subtract_button.svg';
import Icon_edit from '../../img/icon_edit.svg';
import Icon_delete from '../../img/icon_delete.svg';
import Arrow_back from '../../img/arrow_back.svg';
import Menu_closed from '../../img/menu_closed.svg';
import Menu_opened from '../../img/menu_opened.svg';
import Icon_car from '../../img/icon_car.svg';
import Icon_search from '../../img/icon_search.svg';
import Icon_novidades from '../../img/icon_novidades.svg';
import Icon_favoritos from '../../img/icon_favoritos.svg';
import Icon_compras from '../../img/icon_compras.svg';
import Icon_conta from '../../img/icon_conta.svg';
import RNPickerSelect from 'react-native-picker-select';

const Home = ({ navigation }) => {

    const [array, setArray] = useState([0, 1, 2, 3, 4]);
    const [modalVisible, setModalVisible] = useState(false);
    const [category, setCategory] = useState(1);
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [lateralBarOpened, setlateralBarOpened] = useState(false);
    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        setlateralBarOpened(true);

        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 0.5,
          useNativeDriver: true
        }).start();
      };
    
      const fadeOut = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        setlateralBarOpened(false);
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 0.5,
          useNativeDriver: true
        }).start();
      };

    return (
        <View style={style.bg_edit_personal_data}>
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
                                <TouchableOpacity 
                                    onPress={() => navigation.navigate('Profile_Store', { name: 'Jane' })}>
                                    <Icon_car width={25} height={25} />
                                </TouchableOpacity>
                            </View>
                            <View style={style.header_searchBar}>
                                <Icon_search style={style.searchIcon} width={20} height={20} />
                                <TextInput style={style.searchBar} placeholder="Buscar Produto"/>
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
                                {array.map(index => (
                                    <TouchableOpacity style={style.list_item}
                                    onPress={() => alert('produto')}
                                    >
                                        <View style={style.item_header}>
                                            <Text style={style.item_header_title}>Novidade</Text>
                                        </View>

                                        <View key={index} style={style.image_container}>
                                            <Image style={style.image_content} source={require('../../img/imagem_teste.jpg')}></Image>
                                        </View>
                                        <View style={style.item_footer}>
                                            <Text style={style.item_title}>Puma</Text>
                                            <Text style={style.item_subtitle}>Edição Especial</Text>
                                            <Text style={style.item_price}>R$ 799,99</Text>
                                        </View>
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
                    <Animated.View style={ [lateralBarOpened ? style.lateral_bar : style.lateral_bar_closed, {
                            // Bind opacity to animated value
                            opacity: fadeAnim
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
                            <TouchableOpacity style={style.lateral_item}>
                                <Icon_conta width={20} height={20} />
                                <Text style={style.laterel_item_text}>Sua Conta</Text>
                            </TouchableOpacity>
                        </View>
                    </Animated.View>
                </ScrollView>
            </KeyboardAvoidingView>
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
        height: Dimensions.get('window').height,
		marginBottom: 40,
        position: 'relative',
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
        flexDirection: 'row'
    },
    searchBar: {
        width: '90%',
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
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    list_item: {
        width: 140,
        marginBottom: 15,
        overflow: 'hidden',
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
        height: 80,
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
        width: '50%',
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
        width: '50%',
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
        width: '100%',
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