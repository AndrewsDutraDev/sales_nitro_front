import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Container_Half_Color = (props) => {
    return (
        <LinearGradient 
        style={style.container} 
        colors={['#0066ff', '#ffffff']}
        locations={[0.5, 0.5]}
        >
            {props.children}
        </LinearGradient>
    );
};

const style = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
});

export default Container_Half_Color;