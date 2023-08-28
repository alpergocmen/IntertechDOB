import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text, TouchableHighlight } from "react-native";
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
            contentFit="contain"
            source={require("../assets/arrow-1.png")}
          />
        </Pressable>
        <Image
          style={[styles.logo1Icon, styles.logo1IconPosition]}
          contentFit="contain"
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
      
      <TouchableHighlight
      style={{
        flex: 0.10,
        alignItems: "center",
        justifyContent: "center",
        margin: 100,
        padding: 0,
        backgroundColor: Color.basicLightBG,
        borderRadius: Border.br_31xl,
        backgroundColor: Color.gray,
      }}
      onPress={() => navigation.navigate("Info")}
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
      </TouchableHighlight>
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
