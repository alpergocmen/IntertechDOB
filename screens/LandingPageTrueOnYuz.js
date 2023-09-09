import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBarDark from "../components/StatusBarDark";
import GoForward from "../components/GoForward";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const LandingPageTrueOnYuz = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.landingPageTrueOnyuz}>
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
      <Text style={styles.kimliinNYznn}>
        Kimliğin ön yüzünün taranması başarılı bir şekilde tamamlandı. Kimliğin
        arka yüzünü taramak için bir sonraki adıma geçebilirsiniz.
      </Text>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("KimlikArkaYuz")}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          width: "20%",
          padding: 10,
          borderRadius: 5,
          alignSelf: "center",
          marginBottom: 70, 
        }}
      >
        <Image
          source={require("../assets/arrow-2.png")}
          style={{ alignSelf: "center", width: 55, height: 20 }} 
        />
      </TouchableOpacity>
      </View>  
      <Image
        style={styles.image3Icon}
        contentFit="cover"
        source={require("../assets/image-3.png")}
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
    width: "100%",
    height: "100%",
    borderColor: "black",
    borderWidth: 3,
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
    overflow: "hidden",
  },
  kimliinNYznn: {
    top: 503,
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
    left: 19,
    position: "absolute",
  },
  image3Icon: {
    top: 235,
    left: 86,
    width: 220,
    height: 220,
    position: "absolute",
  },
  landingPageTrueOnyuz: {
    backgroundColor: Color.basicLightBG,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default LandingPageTrueOnYuz;
