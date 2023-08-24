import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBarDark from "../components/StatusBarDark";
import TakeAShoot from "../components/TakeAShoot";
import GoForward from "../components/GoForward";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Selfie = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.selfie}>
      <Image
        style={[styles.blueAbstractBackgroundNewGIcon, styles.headerPosition]}
        contentFit="cover"
        source={require("../assets/blue-abstract-background-new-generated-1.png")}
      />
      <View style={[styles.header, styles.headerPosition]}>
        <Pressable
          style={[styles.component1, styles.logo1IconPosition]}
          onPress={() => navigation.navigate("CallCenter")}
        >
          <View style={styles.component1Child} />
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
      <StatusBarDark
        statusBarDarkStatusBarDar={require("../assets/status-bar--dark2.png")}
        statusBarDarkPosition="absolute"
        statusBarDarkTop={0}
        statusBarDarkLeft={0}
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
        onGoForwardPress={() => navigation.navigate("LandingPage2")}
      />
      <Text style={styles.kimlikArkaYz}>Ön Kamera</Text>
      <View style={styles.cameraScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    left: 0,
    position: "absolute",
  },
  logo1IconPosition: {
    height: 47,
    top: 5,
    position: "absolute",
  },
  blueAbstractBackgroundNewGIcon: {
    top: 0,
    width: 375,
    height: 812,
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
    left: 19,
    width: 40,
    opacity: 0.5,
  },
  logo1Icon: {
    left: 82,
    width: 210,
  },
  header: {
    top: 44,
    width: 311,
    height: 57,
    overflow: "hidden",
  },
  kimlikArkaYz: {
    top: 135,
    left: 113,
    fontSize: FontSize.size_xl,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.white,
    textAlign: "center",
    width: 150,
    height: 20,
    position: "absolute",
  },
  cameraScreen: {
    top: 172,
    left: 38,
    backgroundColor: Color.black,
    width: 300,
    height: 500,
    position: "absolute",
  },
  selfie: {
    backgroundColor: Color.basicLightBG,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default Selfie;
