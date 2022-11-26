import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Modal, TextInput, Text, TouchableOpacity, StatusBar, KeyboardAvoidingView, Platform, ScrollView, Dimensions, Button } from 'react-native';

import Main_Container from '../Containers/Main_Container';
import Container from '../Containers/Container';
import Header from '../Containers/Header';
import Content from '../Containers/Content';

import Button_Back from '../Components/Button_Back';
import Header_Title from '../Components/Header_Title';

import Icon_car from '../../img/icon_car_blue.svg';

const Teste = ({ navigation, route }) => {
    const [isLoading, setIsLoading] = useState(false);
  
    return (
        <Main_Container isLoading={isLoading} setIsLoading={setIsLoading}>
            <Container alignItems="flex-start" justifyContent="flex-start" flexDirection={'column'}>
                <Header justifyContent="space-evenly">
                    <Button_Back onPress={() => navigation.navigate('Home', {})} />
                    <Header_Title text="Seu Carrinho" icon={Icon_car} />
                </Header>
                <Content>
                    <Text>teste</Text>
                </Content>
            </Container>
        </Main_Container>
    ); 
};


export default Teste;