import React from 'react';
import {StyleSheet, View } from 'react-native';

const Page_Container = (props) => {
    const [pageIndex] = [props.pageIndex];
    const [currentPageIndex] = [props.currentPageIndex];

    const is_current_page = () => {
        return currentPageIndex === pageIndex;
    }

    return (
        <View style={[style.page_container, {
            display: is_current_page() ? 'flex' : 'none',
        }]}>
            {props.children}
        </View>
    );
};

const style = StyleSheet.create({
    page_container: {
        width: '100%',
    }
})

export default Page_Container;