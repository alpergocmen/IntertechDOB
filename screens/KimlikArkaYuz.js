import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  View,
  TouchableHighlight,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import TakeAShoot from "../components/TakeAShoot";
import GoForward from "../components/GoForward";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";
import { Camera } from 'expo-camera';
import { useState, useRef, useEffect } from 'react';

const KimlikArkaYuz = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.kimlikArkaYuz}>
      <Image
        style={[styles.blueAbstractBackgroundNewGIcon, styles.backLayer]} // Apply backLayer style
        contentFit="cover"
        source={require("../assets/blue-abstract-background-new-generated-1.png")}
      />
      <View style={styles.header}>
        <Pressable
          style={[styles.component1, styles.logo1IconPosition]}
          onPress={() => navigation.navigate("KimlikOnYuz")}
        >
          <View
            style={[styles.component1Child, styles.statusBarDarkPosition]}
          />
          <Image
            style={styles.component1Item}
            contentFit="cover"
            source={require("../assets/arrow-1.png")}
          />
        </Pressable>
        <Image
          style={[styles.logo1Icon, styles.logo1IconPosition]}
          contentFit="cover"
          source={require("../assets/logo-1.png")}
        />
      </View>
      <Image
        style={[styles.statusBarDark, styles.statusBarDarkPosition]}
        contentFit="cover"
        source={require("../assets/status-bar--dark2.png")}
      />
      <TakeAShoot onTakeAShootPress={() => {}} />
      <GoForward
        imagePlaceholderText={require("../assets/arrow-2.png")}
        propTop={689}
        propLeft={202}
        propTop1="34.22%"
        propRight="19.5%"
        propBottom="34.22%"
        propLeft1="19%"
        onGoForwardPress={() => navigation.navigate("LandingPageTrueArkaYuz")}
      />
      <View style={styles.cameraScreen}>
        <Camera style={styles.camera} type={type} ref={cameraRef} />
      </View>
      <View style={styles.areaForIdCard} />
      <Text style={styles.kimlikNYz}>Kimlik Arka Yüz</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backLayer: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0, // Set a lower zIndex to move it to the back
  },
  statusBarDarkPosition1: {
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  logo1IconPosition: {
    height: 47,
    top: 5,
    position: "absolute",
  },
  statusBarDarkPosition: {
    display: "none",
    position: "absolute",
  },
  blueAbstractBackgroundNewGIcon: {
    borderColor: "black",
    borderWidth: 3,
    width: "100%",
    height: "100%",
  },
  kimlikArkaYz: {
    top: 325,
    left: 355,
    fontSize: FontSize.size_xl,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.white,
    textAlign: "center",
    width: 162,
    height: 20,
    transform: [
      {
        rotate: "90deg",
      },
    ],
    position: "absolute",
  },
  component1Child: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_31xl,
    backgroundColor: Color.gainsboro,
    width: "100%",
  },
  component1Item: {
    height: "47%",
    width: "58.65%",
    top: "25.43%",
    right: "23.53%",
    bottom: "27.56%",
    left: "17.82%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  component1: {
    width: 40,
    opacity: 0.5,
    left: 19,
  },
  logo1Icon: {
    left: 82,
    width: 210,
  },
  header: {
    top: 44,
    width: 311,
    height: 57,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  statusBarDark: {
    height: 44,
    width: 375,
    top: 0,
    left: 0,
  },
  cameraScreen: {
    top: 156,
    backgroundColor: Color.black,
    width: 300,
    height: 500,
    left: 19,
    position: "absolute",
  },
  camera: {
    flex: 1,
  },
  areaForIdCard: {
    top: 219,
    left: 56,
    borderRadius: Border.br_8xs,
    borderStyle: "solid",
    borderColor: "#e83e45",
    borderWidth: 1,
    width: 225,
    height: 375,
    position: "absolute",
  },
  kimlikNYz: {
    top: "50%",
    left: "70%",
    fontSize: FontSize.size_xl,
    lineHeight: 25,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.white,
    textAlign: "center",
    width: 150,
    height: 44,
    margin: 5,
    transform: [
      {
        rotate: "90deg",
      },
    ],
    position: "absolute",
  },
  kimlikArkaYuz: {
    backgroundColor: Color.basicLightBG,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default KimlikArkaYuz;
