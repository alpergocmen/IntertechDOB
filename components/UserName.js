import React from "react";
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const UserName = () => {
  
  return (
    <SafeAreaView style={styles.container}>
     
        <View style={styles.twoInputs}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="TCKN" editable={false} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Şifre" editable={false}/>
        </View>
        </View>
        <View style={styles.centerContainer}>
          <Text style={styles.ifremiUnuttum}>Şifremi Unuttum</Text>
        </View>
        <View style={styles.loginChild} />
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    
    marginTop: "50%", // Adjust the marginTop for spacing
    alignItems: "center",
    justifyContent: "center",
    height: "40%",
  },
  twoInputs: {
    width: "100%",
    alignItems: "center",
    marginTop: "7.5%",
  },
  inputContainer: {
    width: "60%",
    marginVertical: "2%", // Adjust the vertical margin for spacing
    
  },
  input: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: "6%", 
    paddingVertical: "1.5%", 
    fontSize: 15,
    
  },

  loginChild: {
    alignSelf: "center",
    top: "87.5%",
    borderStyle: "solid",
    borderColor: "#fff",
    borderTopWidth: 1,
    width: 246,
    height: 1,
    position: "absolute",
  },
  centerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: "2%",
  },
  ifremiUnuttum: {
    
    color: Color.white,
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.size_3xs,
    width: "auto",
    marginLeft: "42.5%",
    marginTop: "1.25%",
    lineHeight: 20,
  },
});

export default UserName;
