import React, { useRef, useState } from "react";
import {Animated, StyleSheet, View} from "react-native";
import Menu_opened from '../../img/menu_opened.svg';

const Barra_Lateral = (props) => {
    const fadeAnimation = useRef(new Animated.Value(0)).current;
    const [isOpen, setIsOpen] = useState();

    /**
     * Método para realizar a animação de abertura
     */
    const fade_in = () => {
        setIsOpen(true);

        Animated.timing(fadeAnimation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start();
    };

    /**
     * Método para realizar a animação de saída.
     */
    const fade_out = () => {
        Animated.timing(fadeAnimation, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start();

        setTimeout(() => {
            setIsOpen(false);
        }, 500);
    };

    return (
        <Animated.View 
            style={[style.lateral_bar, isOpen ? style.opened : style.closed,
            { opacity: fadeAnimation }]}>
            <View style={style.lateral_bar_icon}>
                <TouchableOpacity 
                    onPress={fade_out}>
                    <Menu_opened width={25} height={25} />
                </TouchableOpacity>
            </View>
            <View style={style.lateral_bar_list_items}>
                {props.children}
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
    },
    opened: {
        paddingHorizontal: 30,
        paddingVertical: 45,
    },
    closed: {
        marginStart: '-50%',
        paddingHorizontal: 20,
        paddingVertical: 50,
    },
    lateral_bar_icon: {

    },
    lateral_bar_list_items: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        marginVertical: 50,
    }

})

export default Barra_Lateral;