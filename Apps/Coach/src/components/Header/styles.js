import { StyleSheet } from 'react-native';

import { metrics, font, colors } from '../../styles';

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        height: metrics.headerHeight,
        paddingTop: metrics.headerPadding,
        paddingHorizontal: metrics.padding,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.branco,
        borderBottomWidth: 2,
        borderBottomColor: colors.cinza_claro
    },
    container_back:{
        flexDirection: "row",
        height: metrics.headerHeight,
        paddingTop: metrics.headerPadding,
        paddingHorizontal: metrics.padding,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.branco,
        borderBottomWidth: 2,
        borderBottomColor: colors.cinza_claro
    },
    title:{
        fontSize: font.header,
        color: colors.primaria,
    },

});

export default styles;