import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import { useSignUp } from "@clerk/clerk-react";

const VerifyEmail = ({ email, onBack }) => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerification = async () => {
    if (!isLoaded) return;
    setLoading(true);
    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code
      });
      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
      } else {
        Alert.alert("Error", "Verification failed. Please try again");
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (err) {
    } finally {
    }
  };
  return (
    <View>
      <Text>VerifyEmailScreen</Text>
    </View>
  );
};

export default VerifyEmail;
