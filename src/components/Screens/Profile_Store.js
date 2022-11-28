import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import Icon_arrow_front from '../../img/icon_arrow_front.svg';
import Icon_gerenciamento from '../../img/icon_gerenciamento.svg';
import Icon_add from '../../img/icon_add.svg';

import {Main_Container, Container, Content, Header} from '../Containers/Index_Container';

import {Button_Back, Header_Title, Container_Half_Color, Image_Container, Profile_Item} from '../Components/Index_Components';

const Profile_Store = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Main_Container isLoading={isLoading} setIsLoading={setIsLoading}>
            <Container alignItems="center" justifyContent="flex-start" flexDirection={'column'}>
                <Header justifyContent="space-evenly" backgroundColor={'#0066FF'}>
                    <Button_Back onPress={() => navigation.navigate('Home', {})} fill={'#fff'} />
                    <Header_Title text={'Sua Loja'} textColor={'#fff'} justifyContent={'flex-end'} />
                </Header>
                <Container_Half_Color>
                    <Image_Container imageSource={require('../../img/imagem_teste.jpg')} />
                </Container_Half_Color>
                <Content>
                    <Text style={style.content_title}>Gerenciamento</Text>
                    <Profile_Item
                        text={'Adicionar Produto'}
                        iconStart={Icon_add}
                        iconStartWidth={30} iconStartHeight={30}
                        iconEnd={Icon_arrow_front}
                        iconEndWidth={20} iconEndHeight={20}
                        onPress={() => navigation.navigate('Add_Product', {})} />
                    <Profile_Item
                        text={'Gerenciamento de Produto'}
                        iconStart={Icon_gerenciamento}
                        iconStartWidth={30} iconStartHeight={30}
                        iconEnd={Icon_arrow_front}
                        iconEndWidth={20} iconEndHeight={20}
                        onPress={() => navigation.navigate('List_Product', {})} />
                </Content>
            </Container>
        </Main_Container>
    )
};

const style = StyleSheet.create({
    content_title: {
        width: '100%',
        paddingHorizontal: 5,
        textAlign: 'justify',
        fontSize: 20,
    },
});

export default Profile_Store;