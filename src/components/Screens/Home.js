import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, StatusBar, KeyboardAvoidingView, Platform, ScrollView, Dimensions, Button } from 'react-native';

const Home = ({ navigation }) => {

	const [nome, setNome] = useState();
	const [valor, setValor] = useState(0);
  const [quantidade, setQuantidade] = useState();
  const [descricao, setDescricao] = useState();
  const [categoria, setCategoria] = useState();

  const addProduct = () => {
    alert('Produto adicionado com sucesso')
  }

  return (
    <View style={style.bg_home}>
        <ScrollView>
				<View style={style.container}>
					<View>
						<Text style={style.title_register}>Adicionar Produto</Text>
						<View style={style.form_container}>
							<View style={style.input_container}>
								<Text style={style.label_input}>Nome do produto</Text>
								<TextInput style={style.input_text} placeholder='Ex. Tênis Lacoste'
								onChangeText={(nome) => setNome(nome)}
								/>
							</View>
							<View style={style.input_container}>
								<Text style={style.label_input}>Valor</Text>
								<TextInput style={style.input_text} placeholder='Ex. R$ 0,00'
								onChangeText={(valor) => setValor(valor)}
								/>
							</View>
							<View style={style.input_container}>
								<Text style={style.label_input}>Quantidade</Text>
								<TextInput style={style.input_text}
								onChangeText={(quantidade) => setValor(quantidade)}
                keyboardType = 'numeric'
								/>
							</View>

              <View style={style.input_container}>
								<Text style={style.label_input}>Quantidade</Text>
								<TextInput style={style.input_text} placeholder='Descrição do produto'
								onChangeText={(descricao) => setDescricao(descricao)}
                multiline={true}
                numberOfLines={4}
								/>
							</View>

              <View style={style.input_container}>
								<Text style={style.label_input}>Categoria</Text>
								<TextInput style={style.input_text} placeholder='Ex. Camiseta'
								onChangeText={(categoria) => setCategoria(categoria)}
								/>
							</View>

              <View style={style.button_container}>
								<TouchableOpacity style={style.button_create}
								onPress={() => addProduct()}
								>
									<Text style={style.label_create}>Salvar</Text>
								</TouchableOpacity>
							</View>
							
						</View>
					</View>
					
				</View>
			</ScrollView>
    </View>
  );
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
  bg_home: {
    width: '100%',
    height: '100%',
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  bg_register: {
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
  title_register: {
    width: '100%',
    textAlign: 'center',
    paddingTop: 30,
    fontWeight: '700',
    letterSpacing: 2,
    fontSize: 18,
    lineHeight: 24,
    color: '#333333'
  },
  button_changer: {
    marginTop: 50,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  changer_boll: {
    width: 18,
    height: 18,
    borderRadius: 10,
    zIndex: 10,
  },
  changer_line: {
    width: 50,
    height: 3,
    marginLeft: -13,
    marginRight: -13,
  },
  blue: {
    backgroundColor: '#0066FF',
  },
  gray: {
    backgroundColor: '#D9D9D9'
  },
  changer_text: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333333'
  },
  changer_container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form_container: {
    width: '100%',
    marginTop: 30,
    paddingHorizontal: 25
  },
  label_input: {
    fontSize: 12,
    color: '#333333',
    letterSpacing: 1,
    lineHeight: 16,
    paddingBottom: 5
  },
  input_container: {
    width: '100%',
    padding: 10
  },
  radio_container: {
    width: '100%',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  input_text: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    paddingEnd: 50,
    marginVertical: 5,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#D8D8D8',
    color: '#757575',
  },
  button_prev_next:{
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
      flexDirection: 'row',
    marginVertical: 20,
  },	
  button_container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  button_create:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0066FF',
    width: 150,
    height: 50,
    borderRadius: 5,
    paddingVertical: 15,
    marginTop: 20
  },
  label_description: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    textAlign: 'center',
  },
  hightligh_description: {
    color: '#0066FF',
  },
  label_create: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '700',
  }
});

export default Home;