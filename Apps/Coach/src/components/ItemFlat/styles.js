import { StyleSheet } from 'react-native';

import { metrics, font, colors } from '../../styles';

const styles = StyleSheet.create({
    container:{
        height: metrics.listH,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.cinza_claro,
        borderTopWidth: 1,
        borderTopColor: colors.cinza_claro
    },
    text1: {
        fontSize: font.medium_text,
        color: colors.primaria,
    },
    text2: {
        fontSize: font.medium_text,
        color: colors.secundaria,
    },
});

export default styles;