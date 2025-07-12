import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { useSignUp } from "@clerk/clerk-expo";

const SignUpScreen = () => {
  const router = useRouter();
  const { isLoaded, signUp } = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pendingVerificartion, setPendingVerification] = useState(false);

  const handleSignUp = async () => {
    if (!email || !password)
      return Alert.alert("Error", "Please fill in all fields");
    if (password.length < 6)
      return Alert.alert("Error", "Password must be at least 6 characters");
  };

  return (
    <View>
      <Text>SignUpScreen</Text>
    </View>
  );
};

export default SignUpScreen;
