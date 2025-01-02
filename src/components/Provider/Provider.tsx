"use client";
import { PersistGate } from "redux-persist/integration/react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Provider } from "react-redux";
import store, { persistor } from "../Redux/store";
import { Toaster } from "sonner";
import { GoogleOAuthProvider } from "@react-oauth/google";

export function Providers({ children }: { children: React.ReactNode }) {
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  if (!googleClientId) {
    console.error(
      "Google Client ID is missing. Please add it to the .env.local file."
    );
    return null;
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="light">
            <GoogleOAuthProvider clientId={googleClientId}>
              <Toaster position="top-right" richColors />
              {children}
            </GoogleOAuthProvider>
          </NextThemesProvider>
        </NextUIProvider>
      </PersistGate>
    </Provider>
  );
}
