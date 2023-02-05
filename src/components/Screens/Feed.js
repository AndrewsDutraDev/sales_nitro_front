import React, {useState} from 'react';
import { Container, Content, Header, } from '../Containers/Index_Container';
import Feed_Container from '../Containers/Feed_Container';
import Main_Container_Feed from '../Containers/Main_Container_Feed';
import {Button_Back, Header_Title} from '../Components/Index_Components';
import Video_Square from '../Components/Video_Square';

const Feed = ({ navigation, route }) => {
    const [productsList, setProductsList] = useState(route.params.productsList, route.params.setProductsList, );
    const [carProductList, setCarProductList] = useState(route.params.carProductList, route.params.setCarProductList);
    const [carProductNumber, setCarProductNumber] = useState(route.params.carProductNumber, route.params.setCarProductNumber);

    const log_product = () => {
        return (
            productsList.map(product => 
                <Video_Square key={product._id} isNew={false} name={product.name} description={product.description} value={product.value}
                onPress={() => navigation.navigate('View_Product',
             { product: product, carProductNumber: carProductNumber, setCarProductNumber: setCarProductNumber,
                 carProductList: carProductList, setCarProductList: setCarProductList })} />
            )
        );
    }

    const [isLoading, setIsLoading] = useState(false);

    return (
        <Main_Container_Feed isLoading={isLoading} setIsLoading={setIsLoading}>
            <Container alignItems="center" justifyContent="center" flexDirection={'column'}>
                <Header justifyContent="space-evenly">
                    <Button_Back onPress={() => navigation.navigate('Home', {id: route.params.id, name: route.params.name})} />
                    <Header_Title text={'Feed de Produtos'} />
                </Header>
                <Feed_Container>
                    <Content>
                        {log_product()}
                    </Content>
                </Feed_Container>
            </Container>
        </Main_Container_Feed>
    );
};

export default Feed;