"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "../../../component/RegisterUserPage.module.css";
import { registerUser } from "../../../services/UserServices";

export default function HomeClient() {
  // Tempatkan semua logika interaktif di sini
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [notelp, setNotelp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);
      setIsLoading(true);
      

      // Validasi tambahan di Client-side
      if (password !== confirmPassword) {
        setError("Password dan Konfirmasi Password tidak cocok!");
        return;
      }
      const payload = { email, password, nama, no_telp: notelp, alamat };
      console.log("Payload yang akan dikirim:", { email, password, nama, no_telp: notelp, alamat });

      const result = await registerUser(payload);

      console.log("Hasil dari registerUser:", result);

      try {
        if (result.error) {
          setError(result.message || "Gagal mendaftar. Silakan coba lagi.");
        } else {
          window.location.href = "/login";
        }
      } catch (error) {
        console.error("Error saat memproses hasil register:", error);
        setError("Terjadi kesalahan saat memproses pendaftaran. Silakan coba lagi.");
      }
      
     
  };
 
  useEffect(() => {
    console.log("Komponen berhasil dimuat!");
  }, []);

  return (
    <main >
      <section 
        ref={sectionRef}
        className= {styles.section}
      >
      
       <div className={styles.LeftContainer}>
          <h1 className={styles.Title}> Selamat Datang di LPPM Press </h1>
          <h1 className={styles.Subtitle}> Akses ribuan koleksi buku akademik, novel, dan berbagai sumber pengetahuan untuk mendukung perjalanan belajar Anda. </h1>
        </div>

        <div className={styles.RightContainer}>
          <a href="./" className={styles.BackButton}> 🢀&nbsp;&nbsp;Kembali ke Beranda </a>
          <h1 className={styles.LoginText}> Daftar Akun Baru </h1>
          <h1 className={styles.LoginDesc}> Isi data Anda untuk membuat akun </h1>
        
          <form onSubmit={handleRegister} className={styles.FormContainer}>
            {/* Tampilkan Pesan Error jika ada */}
            {error && <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>}

            <div className={styles.InputGroup}>
              <label className={styles.label}>Nama Lengkap</label>
              <input 
                type="text" 
                className={styles.Input} 
                placeholder="nama lengkap" 
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                required
              />
            </div>

            <div className={styles.InputGroup}>
              <label className={styles.label}>Email</label>
              <input 
                type="email" 
                className={styles.Input} 
                placeholder="email@university.ac.id" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.InputGroup}>
              <label className={styles.label}>Nomor Telepon</label>
              <input 
                type="number" 
                className={styles.Input} 
                placeholder="08xxxxxxxxxx" 
                value={notelp}
                onChange={(e) => setNotelp(e.target.value)}
                required
              />
            </div>

            <div className={styles.InputGroup}>
              <label className={styles.label}>Alamat</label>
              <input 
                type="text" 
                className={styles.Input} 
                placeholder="Masukan Alamat Lengkap" 
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                required
              />
            </div>
            
            <div className={styles.InputGroup}>
              <label className={styles.label}>Password</label>
              <input 
                type="password" 
                className={styles.Input} 
                placeholder="........" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className={styles.InputGroup}>
              <label className={styles.label}>Konfirmasi Password</label>
              <input 
                type="password" 
                className={styles.Input} 
                placeholder="........" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <div className={styles.Row}>
              <p className={styles.LoginDesc}>  </p>
              <a href="./forgot-password" style={{color: '#064635', fontWeight: 'bold'}}>Lupa password?</a>
            </div>

            <button 
              type="submit" 
              className={styles.SubmitButton}
              disabled={isLoading}
            >
              {isLoading ? "Memproses..." : "Daftar"}
            </button>
          </form>

        </div>
      </section>
    </main>
  );
}