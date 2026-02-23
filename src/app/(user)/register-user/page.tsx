import { Metadata } from "next";
import RegisterClient from "./RegisterClient"; // Pindahkan logic ke sini

export const metadata: Metadata = {
  title: "Home | Nama Website Anda",
  description: "Deskripsi singkat untuk SEO Google",
  openGraph: {
    title: "Home | Nama Website Anda",
    description: "Tampilan saat di-share ke medsos",
  },
};

export default function Page() {
  return <RegisterClient />;
}