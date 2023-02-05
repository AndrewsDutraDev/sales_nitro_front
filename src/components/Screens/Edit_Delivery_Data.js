import React, { useState } from 'react';
import { StyleSheet, View, } from 'react-native';
import api from '../../services/api';

import {Main_Container, Container, Content, Header, Button_Container,
 Field_Group} from '../Containers/Index_Container';

import {Button_Back, Label_Field, Text_Field, Header_Title,
 Text_Field_Masked, Button_Solid} from '../Components/Index_Components';

const Edit_Delivery_Data = ({ navigation }) => {

	const [endereco, setEndereco] = useState();
	const [bairro, setBairro] = useState();
	const [complemento, setComplemento] = useState();
	const [cidade, setCidade] = useState();
	const [estado, setEstado] = useState();
    const [pais, setPais] = useState();
	const [cep, setCep] = useState();
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
     * Método para atualizar os dados de entrega.
     */
    const update_delivery_data = () => {

        /**
         * Função para retornar se as informações de entrega são válidas.
         * @param {String} endereco 
         * @param {String} bairro 
         * @param {String} complemento 
         * @param {String} cidade 
         * @param {String} estado 
         * @param {String} pais 
         * @param {String} cep 
         * @returns {boolean}
         */
        const is_valid_delivery_data = (endereco, bairro, complemento, cidade, estado, pais, cep) => {
            return endereco && bairro && complemento && cidade && estado && pais && cep;
        }

        /**
         * Cria o body que será enviado no request.
         * @param {String} endereco 
         * @param {String} bairro 
         * @param {String} complemento 
         * @param {String} cidade 
         * @param {String} estado 
         * @param {String} pais 
         * @param {String} cep 
         * @returns {JSON}
         */
        const body_request = (endereco, bairro, complemento, cidade, estado, pais, cep) => {
            let body = {
                endereco: endereco,
                bairro: bairro,
                complemento: complemento,
                cidade: cidade,
                estado: estado,
                pais: pais,
                cep: cep,
            };

            return body;
        }

        /**
         * Método para realizar o request.
         * @param {JSON} body 
         */
        const request_update = (body) => {
            api.post("route", body)
            .then((response) => {
                alert(response);
                if(response.data.success) {
                    setIsLoading(false);
                    alert("Dados de Entrega Atualizados!");
                    navigation.navigate('Profile');
                }
            })
            .catch((err) => {
                setIsLoading(false);
                alert("Não foi possível atualizar os dados de entrega!");
                console.error(`ERROR -> ${err}`)
            });
        }

        /**
         * Método para validar a atualização dos dados de entrega.
         */
        const validate_update_delivery_data = () => {
            if(is_valid_delivery_data(endereco, bairro, complemento, cidade, estado, pais, cep)) {
                setIsLoading(true);

                let body = body_request(endereco, bairro, complemento, cidade, estado, pais, cep);

                request_update(body);
            } else {
                alert("Preencha os campos!")
            }
        }

        validate_update_delivery_data();
    }

    return (
        <Main_Container isLoading={isLoading} setIsLoading={setIsLoading}>
            <Container alignItems="center" justifyContent="center" flexDirection={'column'}>
                <Header justifyContent="space-evenly">
                    <Button_Back onPress={() => navigation.navigate('Profile', {})} />
                    <Header_Title text={'Dados de Entrega'} />
                </Header>
                <Content width={'100%'}>
                    <View style={style.form_container}>
                        <Field_Group>
                            <Label_Field text={'Endereco*'} textColor={'#333333'} />
                            <Text_Field placeholder={'Ex. Rua Dez, 988'} 
                            onChangeText={(endereco) => setEndereco(endereco)} value={is_valid(endereco) ? endereco.endereco : ''}/>
                        </Field_Group>
                        <Field_Group>
                            <Label_Field text={'Bairro*'} textColor={'#333333'} />
                            <Text_Field placeholder={'Ex. Centro'} 
                            onChangeText={(bairro) => setBairro(bairro)} value={is_valid(bairro) ? bairro.bairro : ''}/>
                        </Field_Group>
                        <Field_Group>
                            <Label_Field text={'Complemento'} textColor={'#333333'} />
                            <Text_Field placeholder={'Ex. Ao lado da famácia São João'} 
                            onChangeText={(complemento) => setComplemento(complemento)} value={is_valid(complemento) ? complemento.complemento : ''}/>
                        </Field_Group>
                        <Field_Group>
                            <Label_Field text={'Cidade*'} textColor={'#333333'} />
                            <Text_Field placeholder={'Ex. Guaporé'} 
                            onChangeText={(cidade) => setCidade(cidade)} value={is_valid(cidade) ? cidade.cidade : ''}/>
                        </Field_Group>
                        <Field_Group>
                            <Label_Field text={'Estado*'} textColor={'#333333'} />
                            <Text_Field placeholder={'Ex. Guaporé'} 
                            onChangeText={(estado) => setEstado(estado)} value={is_valid(estado) ? estado.estado : ''}/>
                        </Field_Group>
                        <Field_Group>
                            <Label_Field text={'País*'} textColor={'#333333'} />
                            <Text_Field placeholder={'Ex. Guaporé'} 
                            onChangeText={(pais) => setPais(pais)} value={is_valid(pais) ? pais.pais : ''}/>
                        </Field_Group>
                        <Field_Group>
                            <Label_Field text={'CEP*'} textColor={'#333333'} />
                            <Text_Field_Masked placeholder={'Ex. 96.225-000'} 
                                onChangeText={(cep) => setCep(cep)} 
                                value={is_valid(cep)? cep.cep : ''}
                                type={'zip-code'}
                            />
                        </Field_Group>
                        <Button_Container width={'100%'} flexDirection={'row'} justifyContent={'space-around'}>
                            <Button_Solid text={'SALVAR'} backgroundColor={'#0067FF'}
                                onPress={() => { () => {update_delivery_data() }}} />
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

export default Edit_Delivery_Data;
