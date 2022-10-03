import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, StatusBar, TouchableOpacity, KeyboardAvoidingView, Platform, Dimensions } from 'react-native';
import { ActivityIndicator } from "react-native";
import Arrow_back from '../../img/arrow_back.svg';
import Icon_dados_pessoais from '../../img/icon_dados_pessoais.svg';
import Icon_arrow_front from '../../img/icon_arrow_front.svg';
import Icon_dados_entrega from '../../img/icon_dados_entrega.svg';
import Icon_dados_senha from '../../img/icon_dados_senha.svg';
import api from '../../services/api';

const Profile = ({ navigation, route }) => {

    const [user, setUser] = useState();
    const [userId, setUserId] = useState(route.params.id);
    const [userName, setUserName] = useState(route.params.name);
    const [isLoading, setIsLoading] = useState(false);


    const load_profile = () => {
        var body = {
            _id: userId,
        }
        setIsLoading(true);
        api
        .post("/user/show", body)
        .then((response) => {
            if(response.data.success) {
                setIsLoading(false);
                setUser(response.data);
                alert(JSON.stringify(response.data));
                // navigation.navigate('Home')
            }
        })
        .catch((err) => {
            setIsLoading(false);
            alert("Error ->"+err);
            
        });
    }

    useEffect( () => {
        load_profile();
      }, []);


    return (
        <View style={style.bg_profile}>
            { isLoading ? 
            <View style={{ position: 'absolute', flex: 1, justifyContent: "center", alignItems: "center", zIndex: 999, height: '100%', width: '100%', backgroundColor: '#00000099' }}>
                <ActivityIndicator color={"#fff"} size={50} /> 
            </View> : <></>}
            <KeyboardAvoidingView behavior={ Platform.OS == 'ios' ? 'padding' : 'height' } keyboardVerticalOffset={10}>
                <View style={style.container}>
                    <View style= {style.header}>
                        <View style={style.header_text}>
                            <TouchableOpacity 
                                onPress={() => navigation.navigate('Home', { name: 'Jane' })}>
                                <Arrow_back width={25} height={25}  />
                            </TouchableOpacity>
                            <Text style={style.header_title}>Perfil</Text>
                        </View>
                        <View style={style.image_container}>
                            <Image style={style.image_content} source={require('../../img/imagem_teste.jpg')}></Image>
                        </View>
                    </View>
                    <View style= {style.content}>
                        <Text style={style.content_title}> Seus Dados </Text>
                        <TouchableOpacity style={style.content_item}
                        onPress={() => navigation.navigate('Edit_Personal_Data', { name: '' })}
                        >
                            <Icon_dados_pessoais width={25} height={25} />
                            <Text style={style.content_item_text}>Alterar Dados Pessoais</Text>
                            <View style={style.content_item_arrow}><Icon_arrow_front width={15} height={15} /></View>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.content_item}
                        onPress={() => navigation.navigate('Edit_Delivery_Data', { name: '' })}
                        >
                            <Icon_dados_entrega width={25} height={25} />
                            <Text style={style.content_item_text}>Alterar Dados de Entrega</Text>
                            <View style={style.content_item_arrow}><Icon_arrow_front width={15} height={15} /></View>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.content_item} 
                        onPress={() => navigation.navigate('Edit_Password', { name: '' })}
                        >
                            <Icon_dados_senha width={25} height={25} />
                            <Text style={style.content_item_text}>Alterar Senha</Text>
                            <View style={style.content_item_arrow}><Icon_arrow_front width={15} height={15} /></View>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
};

const style = StyleSheet.create({
    bg_profile: {
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
        backgroundColor: '#0066FF',
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
        color: '#fff',
        fontSize: 26,
        textAlign: 'center',
    },
    image_container: {
        backgroundColor: '#acacac',
        width: 120,
        height: 120,
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 5,
        marginBottom: -50,
        overflow: 'hidden'

    },
    image_content : {
        width: 110,
        height: 110,
    },
    content: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 60,
        display: 'flex',
        flexDirection: 'column',
    },
    content_title: {
        width: '100%',
        paddingHorizontal: 5,
        textAlign: 'justify',
        fontSize: 20,
    },
    content_item: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginVertical: 10
    },
    content_item_text: {
        fontSize: 16,
        color: '#000',
        paddingHorizontal: 10,
    },
    content_item_arrow: {
        display: 'flex',
    }
});

export default Profile;