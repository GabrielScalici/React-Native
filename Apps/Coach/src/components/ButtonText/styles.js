import { StyleSheet } from 'react-native';

import { metrics, font, colors } from '../../styles';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: metrics.half_padding,
        backgroundColor: colors.branco
    },
    text: {
        fontSize: font.btn_pequeno,
        borderWidth: 2,
        borderRadius: metrics.text_button_radius,
        paddingVertical: metrics.half_padding,
        paddingHorizontal: metrics.double_padding,
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 1
    },
    text_inline: {
        fontFamily: 'System',
        fontSize: font.btn_pequeno,
        paddingVertical: metrics.half_padding,
        paddingHorizontal: metrics.double_padding,
        textAlign: 'center',
    }

});

export default styles;