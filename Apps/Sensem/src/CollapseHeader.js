import React, { Component } from 'react';
import { ScrollView, StyleSheet, View,Animated, Text, Platform } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Header_Maximum_Height = 200;

const Header_Minimum_Height = 50;

const Font_Max = 40;

const Font_Min = 20;

export default class CollapseHeader extends Component<{}>
{
    static navigationOptions = {
        tabBarLabel: 'Collapse Header',
        drawerIcon: (tintColor) => {
            return(
                <MaterialIcons
                    name="code"
                    size={24}
                    style={{color: tintColor}}

                >
                </MaterialIcons>
            );
        }
    }

    constructor()
    {
        super();

        this.AnimatedHeaderValue = new Animated.Value(0);

    }

    render()
    {

        const AnimateHeaderBackgroundColor = this.AnimatedHeaderValue.interpolate(
            {
                inputRange: [ 0, ( Header_Maximum_Height - Header_Minimum_Height )  ],

                outputRange: [ '#009688', '#00BCD4' ],

                extrapolate: 'clamp'
            });

        const AnimateHeaderHeight = this.AnimatedHeaderValue.interpolate(
            {
                inputRange: [ 0, ( Header_Maximum_Height - Header_Minimum_Height ) ],

                outputRange: [ Header_Maximum_Height, Header_Minimum_Height ],

                extrapolate: 'clamp'
            });

        const AnimateTextSize = this.AnimatedHeaderValue.interpolate(
            {
                inputRange: [ 0, ( Header_Maximum_Height - Header_Minimum_Height ) ],

                outputRange: [ Font_Max, Font_Min ],

                extrapolate: 'clamp'
            });

        return(
            <View style = { styles.MainContainer }>

                <ScrollView

                    scrollEventThrottle = { 16 }

                    contentContainerStyle = {{ paddingTop: Header_Maximum_Height }}

                    onScroll = { Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.AnimatedHeaderValue }}}]
                    )}>

                    {/* Put all your Component here inside the ScrollView */}

                    <Text style={styles. TextViewStyle}>Sample Text 1</Text>

                    <Text style={styles. TextViewStyle}>Sample Text 2</Text>

                    <Text style={styles. TextViewStyle}>Sample Text 3</Text>

                    <Text style={styles. TextViewStyle}>Sample Text 4</Text>

                    <Text style={styles. TextViewStyle}>Sample Text 5</Text>

                    <Text style={styles. TextViewStyle}>Sample Text 6</Text>

                    <Text style={styles. TextViewStyle}>Sample Text 7</Text>

                    <Text style={styles. TextViewStyle}>Sample Text 8</Text>

                    <Text style={styles. TextViewStyle}>Sample Text 9</Text>

                    <Text style={styles. TextViewStyle}>Sample Text 10</Text>

                    <Text style={styles. TextViewStyle}>Sample Text 11</Text>

                    <Text style={styles. TextViewStyle}>Sample Text 12</Text>

                    <Text style={styles. TextViewStyle}>Sample Text 13</Text>

                    <Text style={styles. TextViewStyle}>Sample Text 14</Text>

                    <Text style={styles. TextViewStyle}>Sample Text 15</Text>

                    <Text style={styles. TextViewStyle}>Sample Text 16</Text>

                    <Text style={styles. TextViewStyle}>Sample Text 17</Text>

                    <Text style={styles. TextViewStyle}>Sample Text 18</Text>

                    <Text style={styles. TextViewStyle}>Sample Text 19</Text>

                    <Text style={styles. TextViewStyle}>Sample Text 20</Text>

                    {/* Put all your Component here inside the ScrollView */}

                </ScrollView>


                <Animated.View style = {[ styles.HeaderStyle, { height: AnimateHeaderHeight, backgroundColor: AnimateHeaderBackgroundColor } ]}>

                    <Animated.Text style={[styles.HeaderInsideTextStyle, { fontSize: AnimateTextSize } ] }> Collapse Header </Animated.Text>

                </Animated.View>


            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        MainContainer:
            {
                flex: 1,
                paddingTop: (Platform.OS == 'ios') ? 20 : 0
            },

        HeaderStyle:
            {
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                left: 0,
                right: 0,
                top: (Platform.OS == 'ios') ? 20 : 0,
            },

        HeaderInsideTextStyle:
            {
                color: "#fff",
                textAlign: 'center'
            },

        TextViewStyle:
            {
                textAlign: 'center',
                color: "#000",
                fontSize: 18,
                margin: 5,
                padding: 7,
                backgroundColor: "#ECEFF1"
            }
    });