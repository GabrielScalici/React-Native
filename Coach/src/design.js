import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({

    //Atuais
    //Strings
    title: {
        fontSize: 45,
        margin: 10,
        color: '#143A52',
        fontFamily: 'verdana',
        justifyContent: 'center',
        marginTop: 60,
    },




    /*
    --
    --       SCREEN STUDY
    --
    */

    view_study: {
        flex: 1,
        justifyContent: 'center', //externo
        alignItems: 'center',   //interno

    },

    view_head_user: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',

    },

    view_infos_user: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',

    },

    items_coach_user: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#2a4944',
        height: 100,
        marginLeft: 20,
        marginRight: 20,
        borderBottomColor: '#CDE3EB',
        borderBottomWidth: 1,
    },

    items_infos_user: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#2a4944',
        height: 70,
        marginLeft: 20,
        marginRight: 20,
        borderBottomColor: '#CDE3EB',
        borderBottomWidth: 1,
    },

    image_user_study: {
        width: 200,
        height: 200
    },

    name_user: {
        fontSize: 30,
        margin: 10,
        color: '#143A52',
        fontFamily: 'verdana',
        justifyContent: 'center',
        marginTop: 10,
    },

    title_infos: {
        fontSize: 20,
        fontWeight: '100' ,
        margin: 10,
        color: '#143A52',
        fontFamily: 'verdana',
        justifyContent: 'center',
    },

    /*
    --
    --       SCREEN COACH
    --
    */


    items_infos_coach: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#2a4944',
        height: 100,
        marginLeft: 20,
        marginRight: 20,
    },






    //Antigos

    names: {
        fontSize: 30,
        margin: 10,
        paddingBottom: 50,
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
        color: '#E3EFF3',
        fontFamily: 'verdana',
        justifyContent: 'center',
        alignItems: 'center'
    },

    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:1,
        margin:1,
        borderColor: '#2a4944',
        backgroundColor: '#E3EFF3',
    }


});