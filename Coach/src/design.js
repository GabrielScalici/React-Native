import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({

    //Strings
    title: {
        fontSize: 45,
        margin: 10,
        color: '#143A52',
        fontFamily: 'verdana',
        justifyContent: 'center',
        marginTop: 60,
    },

    //
    view_tabBar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

    itens_flatlist: {
        fontSize: 10,
        margin: 2,
        color: '#143A52',
        fontFamily: 'verdana',
        justifyContent: 'center',
        alignItems: 'center'
    },

    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        margin: 5,
        borderColor: '#2a4944',
        backgroundColor: '#6E828A',
    }


});