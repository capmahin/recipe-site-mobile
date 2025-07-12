import {
  View,
  Text,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { useSignUp } from "@clerk/clerk-expo";
import { authStyles } from "./../../assets/styles/auth.styles";
import { Image } from "expo-image";
import { COLORS } from "../../constants/colors";

const SignUpScreen = () => {
  const router = useRouter();
  const { isLoaded, signUp } = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pendingVerification, setPendingVerification] = useState(false);

  const handleSignUp = async () => {
    if (!email || !password)
      return Alert.alert("Error", "Please fill in all fields");
    if (password.length < 6)
      return Alert.alert("Error", "Password must be at least 6 characters");

    if (!isLoaded) return;
    setLoading(true);

    try {
      await signUp.create({
        emailAddress: email,
        password
      });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);
    } catch (err) {
      Alert.alert(
        "Error",
        err.errors?.[0]?.message || "Failed to create account"
      );
      console.error(JSON.stringify(err, null, 2));
    } finally {
      setLoading(false);
    }
  };

  if (pendingVerification) return <Text>pending ui will go here</Text>;

  return (
    <View style={authStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
        style={authStyles.keyboardView}
      >
        <ScrollView
          contentContainerStyle={authStyles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Image Container */}
          <View style={authStyles.imageContainer}>
            <Image
              source={require("../../assets/images/i2.png")}
              style={authStyles.image}
              contentFit="contain"
            />
          </View>
          <Text style={authStyles.title}>Create Account</Text>
          <View style={authStyles.formContainer}>
            <TextInput
              style={authStyles.textInput}
              placeholder="Enter email"
              placeholderTextColor={COLORS.textLight}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUpScreen;
