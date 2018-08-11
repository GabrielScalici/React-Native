import { StyleSheet } from 'react-native';

import { metrics, font, colors } from '../../styles';

const styles = StyleSheet.create({

    text: {
        color: colors.primaria,
        fontSize: font.btn_pequeno,
        borderWidth: 2,
        borderColor: colors.primaria,
        borderRadius: metrics.text_button_radius,
        padding: metrics.text_button_padding
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: metrics.half_padding,
    }

});

export default styles;