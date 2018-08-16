import { StyleSheet } from 'react-native';
import { metrics, font, colors } from '../../styles';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.cinza_claro,
        backgroundColor: colors.background_claro
    },
    btn_trash: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: colors.trash,
        padding: metrics.padding,
    },
    btn_check: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        backgroundColor: colors.check,
        padding: metrics.padding,
    },
    itens: {
        fontSize: font.title,
        fontFamily: 'System',
        textAlign: 'center',
        margin: metrics.half_padding,
        color: colors.primaria,
    },

});