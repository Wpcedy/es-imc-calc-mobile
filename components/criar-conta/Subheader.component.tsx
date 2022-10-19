import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions
} from 'react-native';

export default function Subheader(props: any) {
    return (<View style={styles.container}>
        <Text style={styles.primary}>Cadastro de Usuário</Text>
    </View>);
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    primary: {
        fontWeight: 'bold',
        fontSize: 32
    }
});