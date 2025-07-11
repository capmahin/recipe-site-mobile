import { View, Text, Alert } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import React, { useState } from "react";
import { useRouter } from "expo-router";

const SignInScreen = () => {
  const router = useRouter();
  const { signIn, setActive, isLoaded } = useSignIn();
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [ShowPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
    }
  };

  return (
    <View>
      <Text>Sign In</Text>
    </View>
  );
};

export default SignInScreen;
