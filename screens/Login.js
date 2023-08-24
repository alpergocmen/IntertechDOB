import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBarDark from "../components/StatusBarDark";
import UserName from "../components/UserName";
import DevamEt from "../components/DevamEt";
import Component2 from "../components/Component2";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

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
          <Image
            style={styles.component1Item}
            contentFit="cover"
            source={require("../assets/arrow-1.png")}
          />
        </View>
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
      <UserName kullaniciAdi="Şifre" propTop={376} />
      <UserName kullaniciAdi="Kullanıcı Adı" />
      <DevamEt
        propMarginTop="unset"
        propMarginLeft="unset"
        propTop1="0%"
        propLeft1="0%"
        propFontWeight="unset"
        propFontFamily="unset"
        propColor="unset"
        propTextAlign="unset"
        propHeight1="87.72%"
        propWidth1="100%"
        propRight1="0%"
        propBottom1="12.28%"
        propBorderRadius1={50}
        propBackgroundColor1="rgba(255, 255, 255, 0.5)"
        onDevamEtPress={() => navigation.navigate("KvkkPage")}
      />
      <Text style={styles.ifremiUnuttum}>Şifremi Unuttum</Text>
      <Component2 />
      <View style={styles.loginChild} />
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
  ifremiUnuttum: {
    top: 414,
    left: 231,
    fontSize: FontSize.size_3xs,
    textDecoration: "underline",
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.white,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 125,
    height: 18,
    position: "absolute",
  },
  loginChild: {
    top: 450,
    left: 65,
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 246,
    height: 1,
    position: "absolute",
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
