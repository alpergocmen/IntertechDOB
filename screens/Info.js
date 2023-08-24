import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBarDark from "../components/StatusBarDark";
import GoForward from "../components/GoForward";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Info = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.info}>
      <Image
        style={[styles.blueAbstractBackgroundNewGIcon, styles.headerPosition]}
        contentFit="cover"
        source={require("../assets/blue-abstract-background-new-generated-1.png")}
      />
      <View style={[styles.header, styles.headerPosition]}>
        <Pressable
          style={[styles.component1, styles.logo1IconPosition]}
          onPress={() => navigation.navigate("KvkkPage")}
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
      <Image
        style={[styles.kimlikk1Icon, styles.kimlikk11Layout]}
        contentFit="cover"
        source={require("../assets/kimlikk-1.png")}
      />
      <Image
        style={[styles.kimlikk11, styles.kimlikk11Layout]}
        contentFit="cover"
        source={require("../assets/kimlikk-1-1.png")}
      />
      <Text style={styles.kimliinNVe}>
        Kimliğin ön ve arka yüzünü düz bir zemin üzerinde, kenarları dikdörtgene
        denk gelecek şekilde ve yazıları okunaklı olacak şekilde tutun.
      </Text>
      <GoForward
        imagePlaceholderText={require("../assets/arrow-2.png")}
        propTop={689}
        propLeft={202}
        propTop1="34.22%"
        propRight="19.5%"
        propBottom="34.22%"
        propLeft1="19%"
        onGoForwardPress={() => navigation.navigate("KimlikOnYuz")}
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
  kimlikk11Layout: {
    height: 135,
    width: 225,
    borderRadius: Border.br_8xs,
    left: 75,
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
  kimlikk1Icon: {
    top: 339,
  },
  kimlikk11: {
    top: 481,
  },
  kimliinNVe: {
    top: 220,
    left: 16,
    fontSize: FontSize.size_lg,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.white,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 342,
    height: 79,
    position: "absolute",
  },
  info: {
    backgroundColor: Color.basicLightBG,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default Info;
