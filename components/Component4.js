import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Component4 = () => {
  return (
    <View style={styles.component4}>
      <Image
        style={[styles.dumenTemplateIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/dumen-template.png")}
      />
      <Image
        style={[styles.avatarIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/avatar.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  dumenTemplateIcon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  avatarIcon: {
    height: "71.95%",
    width: "72.73%",
    top: "14.39%",
    right: "12.73%",
    bottom: "13.66%",
    left: "14.55%",
  },
  component4: {
    top: 162,
    left: 132,
    width: 110,
    height: 111,
    position: "absolute",
  },
});

export default Component4;
