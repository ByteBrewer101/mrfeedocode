import { Stack } from "expo-router";
import { RecoilRoot } from "recoil";

export default function RootLayout() {



  return (
    <RecoilRoot>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="[id]" options={{ headerShown: false }} />
      </Stack>
    </RecoilRoot>
  );
}
