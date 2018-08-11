import { StyleSheet } from 'react-native';

import { metrics, font, colors } from '../../styles';

const styles = StyleSheet.create({
    container: {
        padding: metrics.double_padding,
        justifyContent: 'center',
        alignItems: 'center',

    },
    photo:{
        height: metrics.profilePhotoH, 
        width: metrics.profilePhotoW,
        //borderRadius: metrics.profilePhotoR,
        //backgroundColor: colors.cinza_claro,
        borderWidth: 2,
        borderColor: colors.branco,
        borderRadius: 100,
    }

});

export default styles;