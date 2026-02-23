export interface LoginUserPayload {
  email: string;
  password: string;
}

export interface LoginUserResponse {
  message: string;
  token?: string;
  email?: string;
  error?: string;
}

export interface RegisterUserPayload {
  nama: string;
  email: string;
  no_telp: string;
  alamat: string;
  password: string;
}

export interface RegisterUserResponse {
  message: string;
  error?: string;
}