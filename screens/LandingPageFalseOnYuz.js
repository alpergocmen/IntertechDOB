import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import StatusBarDark from "../components/StatusBarDark";
import GoForward from "../components/GoForward";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LandingPageFalseOnYuz = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.landingPageFalseOnyuz}>
      <Image
        style={[styles.blueAbstractBackgroundNewGIcon, styles.headerPosition]}
        contentFit="cover"
        source={require("../assets/blue-abstract-background-new-generated-1.png")}
      />
      <Text style={[styles.talimatSayfasnaDnmek, styles.kimliinNYznnTypo]}>
        Talimat sayfasına dönmek için aşağıdaki butona basabilirsiniz.
      </Text>
      <View style={[styles.header, styles.headerPosition]}>
        <Pressable
          style={[styles.component1, styles.logo1IconPosition]}
          onPress={() => navigation.navigate("KimlikOnYuz")}
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
      
       <View style={{ flex: 1, justifyContent: "flex-end" }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Info")}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          width: "20%",
          padding: 10,
          borderRadius: 5,
          alignSelf: "center",
          marginBottom: 70, 
          transform: [{ rotate: '180deg' }]
        }}
      >
        <Image
          source={require("../assets/arrow-2.png")}
          style={{ alignSelf: "center", width: 55, height: 20 }} 
        />
      </TouchableOpacity>
      </View>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Text style={[styles.kimliinNYznn, styles.kimliinNYznnTypo]}>
        Kimliğin ön yüzünün taranması tamamlanamadı. Lütfen verilen talimatlara
        dikkat ederek kimlik fotoğrafını tekrar çekiniz.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    left: 0,
    position: "absolute",
  },
  kimliinNYznnTypo: {
    height: 79,
    width: 342,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.size_lg,
    left: 19,
    position: "absolute",
  },
  logo1IconPosition: {
    height: 47,
    top: 5,
    position: "absolute",
  },
  blueAbstractBackgroundNewGIcon: {
    borderColor: "black",
    borderWidth: 3,
    width: "100%",
    height: "100%",
  },
  talimatSayfasnaDnmek: {
    top: 577,
  },
  component1Child: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 10,
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
    top: 5,
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
  image1Icon: {
    top: 198,
    left: 78,
    width: 220,
    height: 220,
    position: "absolute",
  },
  kimliinNYznn: {
    top: 458,
  },
  landingPageFalseOnyuz: {
    backgroundColor: Color.basicLightBG,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default LandingPageFalseOnYuz;
