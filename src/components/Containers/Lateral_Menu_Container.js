import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Animated } from 'react-native';

const Lateral_Menu_Container = (props) => {

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [isOpen, setIsOpen] = useState();

    /**
     * Método para verificar se a propriedade é válida
     * @param {Object} prop 
     * @returns 
     */
    const is_valid = (prop) => {
        return !(prop === undefined);
    }

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

    // Falta terminar refatoração
    return (
        <Animated.View style={ [isOpen ? style.lateral_bar : style.lateral_bar_closed, {
            // Bind opacity to animated value
            opacity: fadeAnim,
        }]}>
            <View>
                <TouchableOpacity 
                    onPress={fadeOut}>
                    <Menu_opened width={25} height={25} />
                </TouchableOpacity>
                <View style={style.lateral_listItems}>
                    <TouchableOpacity style={style.lateral_item}>
                        <Icon_novidades width={20} height={20} />
                        <Text style={style.laterel_item_text}>Novidades</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.lateral_item}>
                        <Icon_products width={20} height={20} />
                        <Text style={style.laterel_item_text}>Produtos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.lateral_item}>
                        <Icon_favoritos width={20} height={20} />
                        <Text style={style.laterel_item_text}>Favoritos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.lateral_item}>
                        <Icon_feed width={20} height={20} />
                        <Text style={style.laterel_item_text}>Feed</Text>
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
            </View>

        </Animated.View>
    );
};

const style = StyleSheet.create({
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
        alignItems: 'center',
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
})

export default Lateral_Menu_Container;