import { StyleSheet } from 'react-native';

import { metrics, font, colors } from '../../styles';

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#2a4944',
        height: 150,
        marginLeft: 20,
        marginRight: 20,
        borderBottomColor: '#9A9B94',
        borderBottomWidth: 1,
    },
    title:{
        fontSize: 20,
        color: 'black',
    },
    image:{
        width: 100,
        height: 100
    }

});

export default styles;

