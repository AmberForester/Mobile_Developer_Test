import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/react';
import { personOutline } from 'ionicons/icons';

const ProfilePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
              <IonIcon icon={personOutline} style={{ marginRight: '10px' }} />
            Profile
            </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="profile-container">
          <div className="profile-header">
            <img src="../foto_diri.jpg" alt="Foto" className="profile-img" />
          </div>

          <h1>Hironemus Apriliano D. P</h1>
          <p className="subtitle">Saya adalah mahasiswa semester 5 Program Studi Teknik Informatika Universitas Brawijaya. Saya memiliki ketertarikan pada bidang rekayasa perangkat lunak khususnya pengembangan aplikasi perangkat bergerak.</p>
        <br></br>
          <h3>Riwayat Pendidikan</h3>
          <ol className="education-list">
            <li>
              <h4>Universitas Brawijaya</h4>
              <p>Program Studi Teknik Informatika, Fakultas Ilmu Komputer</p>
              <h5>Agustus 2022 - Sekarang</h5>
            </li>
            <li>
              <h4>SMA Negeri 4 Surakarta</h4>
              <p>Jurusan MIPA</p>
              <h5>Juli 2019 - Mei 2022</h5>
            </li>
          </ol>

          <h3>Aktivitas dan Pengalaman</h3>
          <ol className="education-list">
            <li>
              <h4>Proyek Aplikasi Reservasi Lapangan Olahraga</h4>
              <p>proyek membuat aplikasi berbasis perangkat Bergerak sebagai proyek akhir dari mata kuliah Pemrograman Aplikasi Perangkat Bergerak</p>
              {/* <p>Program Studi Teknik Informatika, Fakultas Ilmu Komputer</p> */}
              <h5>Oktober 2024 - Desember 2024 </h5>
            </li>
            <li>
              <h4>Staff Perlengkapan dan Keamanan, UAKKAT Competition 2024</h4>
              {/* <p>Jurusan MIPA</p> */}
              <h5>April 2024 - Oktober 2024 </h5>
            </li>
            <li>
              <h4>Staff Perlengkapan, Business Expo for Entrepreneur 2023 FILKOM UB</h4>
              {/* <p>Jurusan MIPA</p> */}
              <h5>Mei 2023 - Desember 2023</h5>
            </li>
          </ol>

          <h3>GitHub</h3>
          <p>
            <a href="https://github.com/AmberForester" target="_blank" rel="noopener noreferrer">github.com/AmberForester</a>
          </p>
        </div>

        {/* Embedded CSS */}
        <style>{`
          .profile-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
          }

          .profile-header {
            text-align: center;
            margin-bottom: 20px;
          }

          .profile-img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid rgb(75, 201, 247);
            object-position: 0px 0px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .profile-container h1 {
            font-size: 22px;
            margin-bottom: 10px;
            font-weight: bold;
          }

          .profile-container .subtitle {
            font-size: 10px;
            font-style: italic;
            color: #666;
            margin-bottom: 20px;
          }

          .profile-container h3 {
            font-size: 20px;
            margin-top: 20px;
            margin-bottom: 10px;
          }

          .profile-container h4 {
            font-size: 18px;
            margin-top: 10px;
          }

          .profile-container h5 {
            font-size: 14px;
            margin-top: 5px;
            color: #777;
          }

          .profile-container p {
            font-size: 14px;
            color: #555;
          }

          .education-list {
            list-style-type: decimal; /* Menampilkan nomor */
            padding-left: 20px;
            width: 100%;
          }

          .education-list li {
            margin-bottom: 20px;
          }

          .education-list li h4 {
            margin-top: 5px;
          }

          .education-list li h5 {
            margin-top: 5px;
          }

          .profile-container a {
            color: #007bff;
            text-decoration: none;
          }

          .profile-container a:hover {
            text-decoration: underline;
          }
        `}</style>
      </IonContent>
    </IonPage>
  );
};

export default ProfilePage;
