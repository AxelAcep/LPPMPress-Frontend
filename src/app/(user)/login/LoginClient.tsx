"use client";

import { useState, useRef, useEffect } from "react";
import styles from "../../../component/LoginPage.module.css";
import { loginUser } from "../../../services/UserServices"; // Sesuaikan path ini
import { useRouter } from "next/navigation";

export default function HomeClient() {
  // Tempatkan semua logika interaktif di sini
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

   const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const payload = { email, password };
    const result = await loginUser(payload);

    if (result.token) {
      // Berhasil login
      console.log("Login sukses:", result);
      window.location.href = "/";
    } else {
      // Gagal login
      setError(result.message || "Email atau password salah.");
    }

    setIsLoading(false);
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
          <h1 className={styles.LoginText}> Masuk </h1>
          <h1 className={styles.LoginDesc}> Masukkan kredensial Anda untuk melanjutkan </h1>
        
          
          <form onSubmit={handleLogin} className={styles.FormContainer}>
            {/* Tampilkan Pesan Error jika ada */}
            {error && <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>}

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

            <div className={styles.Row}>
              <label><input type="checkbox" className={styles.Checkbox} /> Ingat saya</label>
              <a href="./forgot-password" style={{color: '#064635', fontWeight: 'bold'}}>Lupa password?</a>
            </div>

            <button 
              type="submit" 
              className={styles.SubmitButton}
              disabled={isLoading}
            >
              {isLoading ? "Memproses..." : "Masuk"}
            </button>
          </form>

          <div className={styles.BottomLogin}>
              <div className={`${styles.Row}`}>
                <p>Belum punya akun? <a href="./register-user" style={{color: '#064635', fontWeight: 'bold'}}>Daftar sekarang</a></p>
              </div>

              <div className={styles.DividerContainer}>
                <span className={styles.DividerText}>atau</span>
              </div>

               <div className={`${styles.Row}`}>
                <p>Ingin menjadi mitra kami? <a href="./register-mitra" style={{color: '#064635', fontWeight: 'bold'}}> Kunjungi </a></p>
              </div>
          </div>

        </div>


      </section>
    </main>
  );
}