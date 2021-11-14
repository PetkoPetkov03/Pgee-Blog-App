import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
    title: string
}

const Header = (props: Props) => {
    return(
        <View style={styles.header} >
            <Text style={styles.title} >{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'darkslateblue'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 23
    }
});

export default Header;