import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TextInput, Text, TouchableOpacity, StatusBar, KeyboardAvoidingView, Platform, ScrollView, Dimensions } from 'react-native';
import { ActivityIndicator } from "react-native";
import { RadioButton } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text'
import Arrow_back from '../../img/arrow_back.svg';
import api from '../../services/api';

import {Main_Container, Container, Content, Header, Radio_Container, Modal_Center,
    Button_Container, Field_Group} from '../Containers/Index_Container';
   
   import {Button_Back, Label_Field, Text_Field, Button_Round, Header_Title,
    Step_Item, Step_Boll, Step_Line, Page_Title, Text_Field_Masked, Button_Solid}
    from '../Components/Index_Components';

const Edit_Personal_Data = ({ navigation, route }) => {

    // const [userId, setUserId] = useState(route.params.id);
    const [userId, setUserId] = useState(1);
    // const [userName, setUserName] = useState(route.params.name);
    const [userName, setUserName] = useState("teste");

    const [nome, setNome] = useState();
	const [email, setEmail] = useState();
	const [cpf, setCpf] = useState();
	const [dataNascimento, setDataNascimento] = useState();
	const [celular, setCelular] = useState();
    const [sexo, setSexo] = React.useState('Feminino');
    const [isLoading, setIsLoading] = useState(false);

    /**
         * Método para verificar se a propriedade é válida
         * @param {Object} prop 
         * @returns 
         */
    const is_valid = (prop) => {
        return !(prop === undefined);
    }

    const load_personal_data = () => {

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
            alert("Login Inválido!");
            
        });
    }

    /**
     * Método para atualizar os dados pessoais.
     */
    const update_personal_data = () => {

        /**
         * 
         * @param {String} userId 
         * @param {String} nome 
         * @param {String} email 
         * @param {String} cpf 
         * @param {String} dataNascimento 
         * @param {String} celular 
         * @param {String} sexo 
         * @returns {boolean}
         */
        const is_valid_personal_data = (userId, nome, email, cpf, dataNascimento, celular, sexo) => {
            return userId && nome && email && cpf && dataNascimento && celular && sexo
        }

        /**
         * Cria o body que será enviado no request.
         * @param {String} userId 
         * @param {String} nome 
         * @param {String} email 
         * @param {String} cpf 
         * @param {String} dataNascimento 
         * @param {String} celular 
         * @param {String} sexo 
         * @returns {JSON}
         */
        const body_request = (userId, nome, email, cpf, dataNascimento, celular, sexo) => {
            let body = {
                _id: userId,
                name: nome,
                email: email,
                cpf: cpf,
                birthDate: dataNascimento,
                phoneNumber: celular,
                gender: sexo,
            }
            
            return body;
        }

        /**
         * Método para realizar o request.
         * @param {JSON} body 
         */
        const request_update = (body) => {
            api.post("/user/changeuser", body)
            .then((response) => {
                alert(response);
                if(response.data.success) {
                    setIsLoading(false);
                    alert("Dados pessoais atualizados!");
                    navigation.navigate('Profile');
                }
            })
            .catch((err) => {
                setIsLoading(false);
                alert("Não foi possível atualizar os dados pessoais!");
                console.error(`ERROR -> ${err}`);
            });
        }

        /**
         * Método para validar a atualização dos dados pessoais.
         */
        const validate_update_personal_data = () => {
            if(is_valid_personal_data(userId, nome, email, cpf, dataNascimento, celular, sexo)) {
                setIsLoading(true);

                let body = body_request(userId, nome, email, cpf, dataNascimento, celular, sexo);

                request_update(body);
            } else {
                alert("Preencha os campos!");
            }
        }

        validate_update_personal_data();
    }

    useEffect( () => {
        // load_personal_data();
      }, []);

    return (
        <Main_Container isLoading={isLoading} setIsLoading={setIsLoading}>
            <Container alignItems="center" justifyContent="center" flexDirection={'column'}>
                <Header justifyContent="space-evenly">
                    <Button_Back onPress={() => navigation.navigate('Profile', {})} />
                    <Header_Title text={'Dados Pessoais'} />
                </Header>
                <Content width={'100%'}>
                    <View style={style.form_container}>
                        <Field_Group>
                            <Label_Field text={'Nome*'} textColor={'#333333'} />
                            <Text_Field placeholder={'Ex. Zé Roberto'} 
                            onChangeText={(nome) => setNome(nome)} value={is_valid(nome) ? nome.nome : ''}/>
                        </Field_Group>
                        <Field_Group>
                            <Label_Field text={'Email*'} textColor={'#333333'} />
                            <Text_Field placeholder={'Ex. zézinho@mail.com'} 
                            onChangeText={(email) => setEmail(email)} value={is_valid(email) ? email.email : ''}/>
                        </Field_Group>
                        <Field_Group>
                            <Label_Field text={'CPF*'} textColor={'#333333'} />
                            <Text_Field_Masked placeholder={'Ex. 000.000.000-00'} 
                                onChangeText={(cpf) => setCpf(cpf)} 
                                value={is_valid(cpf)? cpf.cpf : ''}
                                type={'cpf'}
                            />
                        </Field_Group>
                        <Field_Group>
                            <Label_Field text={'Data de Nascimento*'} textColor={'#333333'} />
                            <Text_Field_Masked placeholder={'Ex. 12/11/1999'} 
                                onChangeText={(dataNascimento) => setDataNascimento(dataNascimento)} 
                                value={is_valid(dataNascimento)? dataNascimento.dataNascimento : ''}
                                type={'datetime'}
                            />
                        </Field_Group>
                        <Field_Group>
                            <Label_Field text={'Celular*'} textColor={'#333333'} />
                            <Text_Field_Masked placeholder={'Ex. 53 999000000'} 
                                onChangeText={(celular) => setCelular(celular)} 
                                value={is_valid(celular)? celular.celular : ''}
                                type={'cel-phone'}
                                options={{
                                    maskType: 'BRL',
                                    withDDD: true,
                                    dddMask: '(99) '
                                }}
                            />
                        </Field_Group>
                        <Radio_Container>
                            <Text style={style.label_input}>Sexo:*</Text>
                            <RadioButton value="Feminino" color='#0066FF' uncheckedColor='#0066FF'
                                status={ sexo === 'Feminino' ? 'checked' : 'unchecked' }
                                onPress={() => setSexo('Feminino')}
                            />
                            <Text style={style.label_input}>Feminino</Text>
                            <RadioButton value="Masculino" color='#0066FF' uncheckedColor='#0066FF'
                                status={ sexo === 'Masculino' ? 'checked' : 'unchecked' }
                                onPress={() => setSexo('Masculino')}
                            />
                            <Text style={style.label_input}>Masculino</Text>
                        </Radio_Container>
                        <Button_Container width={'100%'} flexDirection={'row'} justifyContent={'space-around'}>
                            <Button_Solid text={'SALVAR'} backgroundColor={'#0067FF'}
                                onPress={() => { () => {update_personal_data() }}} />
                        </Button_Container>
                    </View>
                </Content>
            </Container>
        </Main_Container> 
    )
};

const style = StyleSheet.create({
    form_container: {
		width: '100%',
		marginTop: 30,
		paddingHorizontal: 25
	},
});

export default Edit_Personal_Data;
