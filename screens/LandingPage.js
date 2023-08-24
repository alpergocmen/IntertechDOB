import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import StatusBarDark from "../components/StatusBarDark";
import { Color } from "../GlobalStyles";

const LandingPage = () => {
  return (
    <View style={styles.landingPage}>
      <Image
        style={[styles.blueAbstractBackgroundNewGIcon, styles.headerPosition]}
        contentFit="cover"
        source={require("../assets/blue-abstract-background-new-generated-1.png")}
      />
      <View style={[styles.header, styles.headerPosition]}>
        <Image
          style={styles.logo1Icon}
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
      <Image
        style={styles.logoKopya2}
        contentFit="cover"
        source={require("../assets/logo--kopya-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    left: 0,
    position: "absolute",
  },
  blueAbstractBackgroundNewGIcon: {
    top: 0,
    width: 375,
    height: 812,
  },
  logo1Icon: {
    top: 5,
    left: 82,
    width: 210,
    height: 47,
    position: "absolute",
  },
  header: {
    top: 44,
    width: 311,
    height: 57,
    overflow: "hidden",
  },
  logoKopya2: {
    top: 350,
    left: 132,
    width: 110,
    height: 111,
    position: "absolute",
  },
  landingPage: {
    backgroundColor: Color.basicLightBG,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});

export default LandingPage;
