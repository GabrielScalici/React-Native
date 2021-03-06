import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({

    //Atuais
    //Strings

    /*
    --
    --       BASICS
    --
    */

    title: {
        fontSize: 45,
        margin: 10,
        color: '#143A52',
        fontFamily: 'verdana',
        justifyContent: 'center',
        marginTop: 60,
    },

    tab_image: {
        width:20,
        height:20
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
        backgroundColor: '#E9E9E5'
    },

    view_head_user: {
      flex:5,
      justifyContent: 'center',
      alignItems: 'center',

    },

    view_infos_user: {
        flex:5,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop:10,
    },


    items_coach_user: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#2a4944',
        height: 100,
        marginLeft: 20,
        marginRight: 20,
        borderBottomColor: '#9A9B94',
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
        borderBottomColor: '#9A9B94',
        borderBottomWidth: 1,
    },

    edit_user: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#2a4944',
        height: 60,
        borderBottomColor: '#CDE3EB',
        borderBottomWidth: 1,
    },

    image_user_study: {
        width: 200,
        height: 200,
    },

    name_user: {
        fontSize: 30,
        color: '#143A52',
        fontFamily: 'verdana',
        justifyContent: 'center',
    },

    title_infos: {
        fontSize: 20,
        fontWeight: '100' ,
        color: '#143A52',
        fontFamily: 'verdana',
        justifyContent: 'center',
    },

    description_infos: {
        fontSize: 15,
        fontWeight: '100' ,
        color: '#143A52',
        fontFamily: 'verdana',
        justifyContent: 'center',
    },

    btn_user_edit: {
        fontSize: 15,
        fontWeight: '100' ,
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
        height: 80,
        marginLeft: 20,
        marginRight: 20,
    },

    btn_coach_list: {
        fontSize: 15,
        fontWeight: '100' ,
        color: '#143A52',
        fontFamily: 'verdana',
        justifyContent: 'center',
    },

    image_user_coach: {
        width: 200,
        height: 200,
        marginTop: 25,
    },

    items_coach_coach: {
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

    view_coach_list: {
        flex:5,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop:10,
        backgroundColor: '#E9E9E5'
    },

    image_coach_status: {
        width: 80,
        height: 80,
        margin: 5
    },



    /*
    --
    --       SCREEN GOAL
    --
    */

    view_goal: {
        flex: 1,
        justifyContent: 'center', //externo
        alignItems: 'center',   //interno
        backgroundColor: '#E9E9E5'
    },

    /*
    --
    --       SCREEN TIME
    --
    */

    view_time: {
        flex: 1,
        justifyContent: 'center', //externo
        alignItems: 'center',   //interno
        backgroundColor: '#E9E9E5'
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