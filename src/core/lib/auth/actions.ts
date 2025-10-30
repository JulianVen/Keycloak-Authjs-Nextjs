"use server";

import { signIn, signOut } from "@/auth";

export async function signInWithKeycloak() {
  await signIn("keycloak", { redirectTo: "/dashboard" });
}

export async function signOutToLogin() {
  await signOut({ redirectTo: "/login" });
}
