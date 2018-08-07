import { StyleSheet } from 'react-native';

import { metrics, colors, font } from '../../styles';

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    title: {
        fontSize: font.title,
        color: colors.primaria
    },
    photo:{
        height: metrics.avatarH,
        width: metrics.avatarW,
        borderRadius: metrics.avatarR,
        backgroundColor: colors.cinza_claro 
    }
});

export default styles;