import { View, Text } from "react-native";
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

  return (
    <View>
      <Text>SignUpScreen</Text>
    </View>
  );
};

export default SignUpScreen;
