"use client";

import { useState, useRef, useEffect } from "react";
import styles from "../../component/LoginPage.module.css";

export default function HomeClient() {
  // Tempatkan semua logika interaktif di sini
  const sectionRef = useRef<HTMLDivElement>(null);

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
        
          <div className={styles.FormContainer}>
            <div className={styles.InputGroup}>
              <label className={styles.label}>Email</label>
              <input type="email" className={styles.Input} placeholder="email@university.ac.id" />
            </div>
            
            <div className={styles.InputGroup}>
              <label className={styles.label}>Password</label>
              <input type="password" className={styles.Input} placeholder="........" />
            </div>

            <div className={styles.Row}>
              <label><input type="checkbox" className={styles.Checkbox} /> Ingat saya</label>
              <a href="./forgot-password" style={{color: '#064635', fontWeight: 'bold'}}>Lupa password?</a>
            </div>

            <button className={styles.SubmitButton}>Masuk</button>
          </div>

          <div className={styles.BottomLogin}>
              <div className={`${styles.Row}`}>
                <p>Belum punya akun? <a href="./register" style={{color: '#064635', fontWeight: 'bold'}}>Daftar sekarang</a></p>
              </div>

              <div className={styles.DividerContainer}>
                <span className={styles.DividerText}>atau</span>
              </div>

               <div className={`${styles.Row}`}>
                <p>Ingin menjadi mitra kami? <a href="./register" style={{color: '#064635', fontWeight: 'bold'}}> Kunjungi </a></p>
              </div>
          </div>

        </div>


      </section>
    </main>
  );
}