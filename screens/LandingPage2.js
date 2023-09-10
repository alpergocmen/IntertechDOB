import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBarDark from "../components/StatusBarDark";
import Component4 from "../components/Component4";
import Component3 from "../components/Component3";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

import { userName, userGender } from './Selfie';

const LandingPage2 = () => {
  const navigation = useNavigation();

  const name = userName;
  const gender = userGender;

  if (gender == "E/M") {
    gender = "BEY";
  }
  else if (gender == "K/F") {
    gender = "HANIM";
  }

  return (
    <View style={styles.welcome}>
      <Image
        style={[styles.blueAbstractBackgroundNewGIcon, styles.headerPosition]}
        contentFit="cover"
        source={require("../assets/blue-abstract-background-new-generated-1.png")}
      />
      <View style={[styles.header, styles.headerPosition]}>
        <Pressable
          style={[styles.component1, styles.logo1IconPosition]}
          onPress={() => navigation.navigate("Login")}
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
      <Component4 />
      <Text style={[styles.denizbankaHogeldiniz, styles.metinUsluFlexBox]}>
        DenizBank’a Hoşgeldiniz,
      </Text>
      <Text style={[styles.metinUslu, styles.metinUsluFlexBox]}>
        {name} {gender}
      </Text>
      <Text style={[styles.artkSizDe, styles.metinUsluFlexBox]}>
        Artık siz de bir DenizBank müşterisisiniz.
      </Text>
      <Component3
        buttonText="Giriş Yap"
        onGoForwardPress={() => navigation.navigate("Selfie")}
      />
      <Text style={[styles.hesabnzaGiriYapmak, styles.metinUsluFlexBox]}>
        Hesabınıza giriş yapmak için bir sonraki adıma geçebilirsiniz.
      </Text>
      <Image
        style={styles.image8Icon}
        contentFit="cover"
        source={require("../assets/image-8.png")}
      />
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
  metinUsluFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 25,
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
  denizbankaHogeldiniz: {
    top: 295,
    left: 67,
    width: 242,
    height: 43,
    fontSize: FontSize.size_lg,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 20,
  },
  metinUslu: {
    top: 353,
    left: 85,
    fontSize: 24,
    width: 203,
  },
  artkSizDe: {
    top: 396,
    left: 7,
    width: 362,
    fontSize: FontSize.size_lg,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 20,
  },
  hesabnzaGiriYapmak: {
    top: 626,
    left: 44,
    width: 288,
    fontSize: FontSize.size_lg,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 20,
  },
  image8Icon: {
    top: 463,
    left: 125,
    width: 125,
    height: 125,
    position: "absolute",
  },
  welcome: {
    backgroundColor: Color.basicLightBG,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default LandingPage2;
