import { Platform } from 'react-native';

export default {
    
    padding: 15,
    half_padding: 7,
    double_padding: 30,
    
    avatarH: 80,
    avatarW: 80,
    avatarR: 100,

    profilePhotoH: 200,
    profilePhotoW: 200,
    profilePhotoR: 100,

    blockH: 110,
    blockW: 155,
    blockR: 20,

    listH: 70,

    text_button_radius: 20,
    text_button_padding: 4,

    ...Platform.select({
        ios: { headerHeight: 74, headerPadding: 20 },
        android: { headerHeight: 54, headerPadding: 0 },
    }),
};