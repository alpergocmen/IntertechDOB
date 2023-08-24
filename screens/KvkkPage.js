import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBarDark from "../components/StatusBarDark";
import KabulEdiyorum from "../components/KabulEdiyorum";
import DevamEt from "../components/DevamEt";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const KvkkPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.kvkkPage}>
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
      <KabulEdiyorum />
      <Pressable
        style={styles.kvkkAydnlatmaMetniContainer}
        onPress={() =>
          Linking.openURL("https://www.nvi.gov.tr/kvkk-aydinlatma-metni")
        }
      >
        <Text style={styles.kvkkAydnlatmaMetni}>KVKK Aydınlatma Metni</Text>
      </Pressable>
      <DevamEt
        dEVAMET="DEVAM ET"
        onDevamEtPress={() => navigation.navigate("Info")}
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
  kvkkAydnlatmaMetni: {
    fontSize: FontSize.size_base,
    textDecoration: "underline",
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.white,
    textAlign: "center",
    width: 195,
    height: 20,
  },
  kvkkAydnlatmaMetniContainer: {
    left: 90,
    top: 241,
    position: "absolute",
  },
  kvkkPage: {
    backgroundColor: Color.basicLightBG,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default KvkkPage;
