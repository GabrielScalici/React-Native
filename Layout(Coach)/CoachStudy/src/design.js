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

    tab_bar: {
        color: "#143A52",
        fontFamily: 'verdana',
        justifyContent: 'center',

    },

    small_text: {
        fontSize: 15,
        fontWeight: '100' ,
        color: '#143A52',
        fontFamily: 'verdana',
    },

    /*
    --
    --       FIRST SCREEN
    --
    */

    btn_enter: {
        fontSize: 22,
        fontWeight: '100' ,
        color: 'white',
        fontFamily: 'verdana',
        justifyContent: 'center',
    },

    view_first_screen: {
        flex:5,
        justifyContent: 'center',
        backgroundColor: 'white',

    },

    view_btn_first_screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#143A52',
    },

    image_logo: {
        width: 300,
        height: 300,
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
        backgroundColor: 'white'
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
        color: '#ff8f00',
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
    --       SCREEN EDIT USER
    --
    */

    view_edit_user: {
        flex: 1,
        justifyContent: 'center', //externo
        //alignItems: 'center',   //interno
        backgroundColor: 'white'
    },

    view_edit_name_user: {
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop:10,
    },
    view_componets:{
        flex:4,
        marginTop: 10,
    },

    btn_new_photo: {
        fontSize: 15,
        fontWeight: '100' ,
        color: '#143A52',
        fontFamily: 'verdana',
        justifyContent: 'center',
    },

    btn_save_edit: {
        fontSize: 22,
        fontWeight: '100' ,
        color: '#143A52',
        fontFamily: 'verdana',
        justifyContent: 'center',
    },

    view_btn_save_edit: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop:10,
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

    view_status_list: {
        flex:5,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop:10,
        backgroundColor: 'white',
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
        backgroundColor: 'white'
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
        backgroundColor: 'white'
    },

    time_picker: {
      backgroundColor: '#143A52',
      color: 'white',

    },

    view_small_text: {
        justifyContent: 'center',
        alignItems: 'center',
        //color: '#373739'
    },





});