import { Slot } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/colors";
export default function RootLayout() {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      captchaOptions={{
        disable: __DEV__ // Disables CAPTCHA in development (__DEV__ is true in React Native dev mode)
      }}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
        <Slot />
      </SafeAreaView>
    </ClerkProvider>
  );
}
