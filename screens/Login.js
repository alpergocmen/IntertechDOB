import React, { useEffect, useRef } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, TouchableHighlight, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBarDark from "../components/StatusBarDark";
import UserName from "../components/UserName";
import DevamEt from "../components/DevamEt";
import Component2 from "../components/Component2";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();
  const animatedScale = useRef(new Animated.Value(1)).current;

  const buttonPress = () => {
    animatedScale.setValue(0.8);
    Animated.spring(animatedScale, {
      toValue: 1,
      bounciness: 5,
      speed: 2,
      useNativeDriver: true,
    }).start();
     navigation.navigate("KvkkPage");
  };

  return (
    <View style={styles.login}>
      <Image
        style={[styles.blueAbstractBackgroundNewGIcon, styles.headerPosition]}
        contentFit="cover"
        source={require("../assets/blue-abstract-background-new-generated-1.png")}
      />
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.component1, styles.logo1IconPosition]}>
          <View style={styles.component1Child} />
        </View>
        <Image
          style={[styles.logo1Icon, styles.logo1IconPosition]}
          contentFit="contain"
          source={require("../assets/logo-1.png")}
        />
      </View>    
      <UserName/>
      
      
      <TouchableHighlight
      style={{
        flex: 0.33,
        alignItems: "center",
        justifyContent: "center",
        marginTop: "7.5%",
        marginTop: "20%",
        marginLeft: "30%",
        marginRight: "30%",
        marginBottom: "15%",
        backgroundColor: Color.basicLightBG,
        borderRadius: Border.br_31xl,
        backgroundColor: Color.gray,
      }}
      onPress={buttonPress}
      underlayColor="transparent"
    >
      <Animated.View
        style={{
          transform: [{ scale: animatedScale }],
        }}
        >
      <Text 
      style={{
        textAlign: "center",
        color: Color.black,
        fontSize: FontSize.size_4xl,
        lineHeight: 30,
        fontWeight: "500",
        color: Color.white,
        fontFamily: FontFamily.interMedium,
      }}
      >
        Devam Et
      </Text>
      </Animated.View>
    </TouchableHighlight>
     
      <Component2 />
     
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    left: 0,
    position: "absolute",
  },
  logo1IconPosition: {
    height:"100%",
    top: 5,
    position: "absolute",
  },
  blueAbstractBackgroundNewGIcon: {
    width: "100%",
    height: "100%",
  },
  component1Child: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_31xl,
    backgroundColor: Color.gainsboro,
    display: "none",
    position: "absolute",
    width: "100%",
  },
  component1Item: {
    width: "70%",
    height: undefined,
    aspectRatio: 1,
    top: "35%",
    right: "20%",
  },
  component1: {
    left: 19,
    width: 40,
    opacity: 0.5,
  },
  logo1Icon: {
    alignSelf: "center",
    width: "70%",
    height: undefined,
    aspectRatio: 1,
    marginBottom: "5%"
  },
  header: {
    top:"2.5%",
    width: "100%",
    height: "10%",
    overflow: "hidden",
    alignSelf: "center",
    paddingHorizontal: 20,
    flex: 2,
    
  },
  login: {
    backgroundColor: Color.basicLightBG,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default Login;