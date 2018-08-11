import { StyleSheet } from 'react-native';

import { metrics, font, colors } from '../../styles';

const styles = StyleSheet.create({
    container: {
        height: metrics.blockH,
        width: metrics.blockW,
        borderRadius: metrics.blockR,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: font.btn_medio,
        fontFamily: 'System',
        color: colors.branco,
    }

});

export default styles;