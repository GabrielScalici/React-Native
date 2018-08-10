import { StyleSheet } from 'react-native';

import { metrics, font, colors } from '../../styles';

const styles = StyleSheet.create({
    container: {
        padding: metric.double_padding,


    },
    photo:{
        height: metrics.profilePhotoH, 
        width: metrics.profilePhotoW,
        borderRadius: metrics.profilePhotoR,
    }

});

export default styles;