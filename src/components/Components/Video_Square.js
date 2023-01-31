import React, {useRef, useState} from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Video, AVPlaybackStatus } from 'expo-av';

const Video_Square = (props) => {
    const video = useRef(null);
    const [status, setStatus] = React.useState({isPlaying: true});
    const [isNew] = useState(false);
    const [name] = useState(props.name);
    const [description] = useState(props.description);
    const [value] = useState(props.value);

    return (
        <View style={style.video_square}>
            {isNew ? ( <View style={style.container_text_news}>
                <Text style={style.text_news}>Novidade</Text>
            </View>) : (<></>)} 
            <View style={style.video_container}>
                <View style={style.video_content}>
                    <Video
                            ref={video}
                            style={style.video}
                            source={{
                            uri: 'https://sales-nitro-product-image.s3.sa-east-1.amazonaws.com/demo1.mp4',
                            }}
                            resizeMode="contain"
                            isLooping
                            onPlaybackStatusUpdate={status => setStatus(() => status)}
                        />
                </View>
                <TouchableOpacity
                style={[style.button_play, status.isPlaying ? style.button_red : style.button_blue]}
                onPress={() =>
                    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                }>
                    <Text style={style.text_play}>{status.isPlaying ? 'Pause' : 'Play'}</Text>

                </TouchableOpacity>
                <TouchableOpacity style={style.info_product_container} onPress={() => props.onPress()} >
                    <Text style={style.title_product}>{name}</Text>
                    <Text style={style.subtitle_product}>{description}</Text>
                    <Text style={style.price_product}>R$ {value}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    video_square: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',

    },
    video: {
        width: '100%',
        height: '100%',
    },
    container_text_news: {
        width: '90%',
        backgroundColor: '#FFD600',
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    text_news: {
        color: '#fff',
        fontSize: 16,
    },
    video_container: {
        width: '80%',
        // width: 300,
        margin: 30,
        borderRadius: 5,
    },
    video_content: {
        position: 'relative',
        width: '100%',
        height: 300,
        borderRadius: 5,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    info_product_container: {
        width: '100%',
    },
    title_product: {
        width: '100%',
        marginTop: 10,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: '600',
        color: '#1B153D',
        textAlign: 'justify',
    },
    subtitle_product: {
        fontSize: 12,
        marginTop: 10,
        fontWeight: '500',
        lineHeight: 14,
        textAlign: 'justify',
        color: '#9095A6',
    },
    price_product: {
        marginTop: 10, 
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 19,
        color: '#0066FF',
    },
    button_play: {
        width: '100%',
        height: 40,
        backgroundColor: '#9095A6',
        display: 'flex',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button_blue: {
        backgroundColor: '#0066FF'
    },
    button_red: {
        backgroundColor: '#FF2929'
    },
    text_play: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 18,
        color: '#fff'
    }
});

export default Video_Square;