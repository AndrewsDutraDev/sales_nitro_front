import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Square_Size = (props) => {
    const [selectedSize, setSelectedSize] = [props.selectedSize, props.setSelectedSize];
    const [size] = [props.size];
    
    /**
     * Método para lidar com o botão
     */
    const button_handler = () => {
        setSelectedSize(size);
    }

    return (
        <TouchableOpacity onPress={() => button_handler()}>
            <Text style={{backgroundColor: selectedSize === size ? '#0067FF' : '#D9D9D9' , width: 40, height: 40, color: '#fff', borderRadius: 5, fontSize: 20, textAlign: 'center', textAlignVertical: 'center', marginHorizontal: 10}}>{size}</Text>
        </TouchableOpacity>
    );

};

export default Square_Size;