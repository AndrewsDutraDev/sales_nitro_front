import React, { useState, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import Icon_dados_pessoais from '../../img/icon_dados_pessoais.svg';
import Icon_arrow_front from '../../img/icon_arrow_front.svg';
import Icon_dados_entrega from '../../img/icon_dados_entrega.svg';
import Icon_dados_senha from '../../img/icon_dados_senha.svg';
import api from '../../services/api';

import {Main_Container, Container, Content, Header} from '../Containers/Index_Container';

import {Button_Back, Header_Title, Container_Half_Color, Image_Container, Profile_Item} from '../Components/Index_Components';

const Profile = ({ navigation, route }) => {

    const [user, setUser] = useState({name: ''});
    const [userId] = useState(route.params.id);
    const [isLoading, setIsLoading] = useState(false);

    const load_profile = () => {

        /**
		 * Cria o body que será enviado no request
		 * @param {String} userId 
		 * @returns 
		 */
        const body_request = (userId) => {
            let body = {
                _id: userId,
            }

            return body;
        };

        /**
         * Método para fazer o request do usuário
         * @param {JSON} body 
         */
        const request_user = (body) => {
            api.post("/user/show", body)
            .then((response) => {
                if(response.status === 200) {
                    setIsLoading(false);
                    setUser(response.data);
                }else {
                    setIsLoading(false);
                    alert(JSON.stringify("Restart Aplication!"));
                }
            })
            .catch((err) => {
                setIsLoading(false);
                alert("Error ->"+err);
            });
        }

        /**
         * Método para preencher o usuário
         */
        const fill_user = () => {
            setIsLoading(true);

            let body = body_request(userId)
            
            request_user(body);

        }

        fill_user();
    }

    useEffect( () => {
        load_profile();
      }, []);

    return (
        <Main_Container isLoading={isLoading} setIsLoading={setIsLoading}>
            <Container alignItems="center" justifyContent="flex-start" flexDirection={'column'}>
                <Header justifyContent="space-evenly" backgroundColor={'#0066FF'}>
                    <Button_Back onPress={() => navigation.navigate('Home', {})} fill={'#fff'} />
                    <Header_Title text={'Perfil'} textColor={'#fff'} justifyContent={'flex-end'} />
                </Header>
                <Container_Half_Color>
                    <Image_Container imageSource={require('../../img/imagem_teste.jpg')} />
                    <Text style={style.text_name}>{user.name}</Text>
                </Container_Half_Color>
                <Content>
                    <Text style={style.content_title}>Seus Dados</Text>
                    <Profile_Item
                        text={'Alterar Dados Pessoais'}
                        iconStart={Icon_dados_pessoais}
                        iconStartWidth={30} iconStartHeight={30}
                        iconEnd={Icon_arrow_front}
                        iconEndWidth={20} iconEndHeight={20}
                        onPress={() => navigation.navigate('Edit_Personal_Data', {user: user})} />
                    <Profile_Item
                        text={'Alterar Dados de Entrega'}
                        iconStart={Icon_dados_entrega}
                        iconStartWidth={30} iconStartHeight={30}
                        iconEnd={Icon_arrow_front}
                        iconEndWidth={20} iconEndHeight={20}
                        onPress={() => navigation.navigate('Edit_Delivery_Data', {user: user})} />
                    <Profile_Item
                        text={'Alterar Senha'}
                        iconStart={Icon_dados_senha}
                        iconStartWidth={30} iconStartHeight={30}
                        iconEnd={Icon_arrow_front}
                        iconEndWidth={20} iconEndHeight={20}
                        onPress={() => navigation.navigate('Edit_Password', {user: user})} />
                </Content>
            </Container>
        </Main_Container>
    )
};

const style = StyleSheet.create({
    text_name: {
        fontSize: 22,
        fontWeight: '400',
        letterSpacing: 1.2,
        lineHeight: 32,
        color: '#555555',
        marginVertical: 10,
    },
    content_title: {
        width: '100%',
        paddingHorizontal: 5,
        textAlign: 'justify',
        fontSize: 20,
    },
});

export default Profile;