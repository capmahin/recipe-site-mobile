import { View, Text } from "react-native";
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
