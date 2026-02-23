// services/admin.services.ts

import { LoginUserPayload, LoginUserResponse, RegisterUserPayload, RegisterUserResponse  } from "../models/userModel";

const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/user`;

console.log("API URL:", API_URL);

export const loginUser = async (payload: LoginUserPayload): Promise<LoginUserResponse> => {
  try {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      return { message: data.message || "Login gagal", error: data.error };
    }

    const token = data.token;
    if (token) sessionStorage.setItem("adminToken", token);

    return data;
  } catch (error: any) {
    console.error("Error during login:", error);
    return { message: "Terjadi kesalahan jaringan.", error: error.message };
  }
};

export const registerUser = async (payload: RegisterUserPayload): Promise<RegisterUserResponse> => {
  try {
    const res = await fetch(`${API_URL}/registerPelanggan`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      return { message: data.message || "Register gagal", error: data.error };
    }

    return data;
  } catch (error: any) {
    console.error("Error during register:", error);
    return { message: "Terjadi kesalahan jaringan.", error: error.message };
  }
};
