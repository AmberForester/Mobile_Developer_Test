import {
  IonContent,
  IonHeader,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonToolbar,
  IonTitle,
  IonIcon,
} from '@ionic/react';
import './Home.css';
import { homeOutline, listOutline, personOutline } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <IonIcon icon={homeOutline} style={{ marginRight: '10px' }} />
            Home
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      {/* Menambahkan latar belakang gradien dan memastikan konten fullscreen */}
      <IonContent fullscreen>
        <div className="gradient-background">
          {/* Selamat Datang */}
          <div className="welcome-container">
            <h2>Selamat Datang!</h2>
            <p>Berikut adalah deskripsi singkat untuk fitur yang kami miliki.</p>
          </div>

          {/* Section List Data */}
          <IonCard className="custom-card">
            <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={listOutline} style={{ marginRight: '10px' }} />
                List Data
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>Anda dapat melihat informasi di halaman ini</p>
            </IonCardContent>
          </IonCard>

          {/* Section Profile */}
          <IonCard className="custom-card">
            <IonCardHeader>
              <IonCardTitle>
                <IonIcon icon={personOutline} style={{ marginRight: '10px' }} />
                Profile
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>Anda dapat melihat profil developer aplikasi ini disini</p>
            </IonCardContent>
          </IonCard>

          {/* Footer Note */}
          <div className="footer-note">
            <p>Fitur-fitur tersebut dapat dilihat melalui tombol di atas ini lho. Ayo kunjungi!</p>
          </div>
        </div>

        {/* Embedded CSS */}
        <style>
          {`
            /* Gradien latar belakang */
            .gradient-background {
              background: linear-gradient(to bottom, #0078FF, #00C6FF);
              min-height: 85vh;
              padding: 20px 0;
            }

            /* Gaya teks Selamat Datang */
            .welcome-container {
              text-align: center;
              margin: 20px 0;
              color: white;
            }

            /* Gaya kartu */
            .custom-card {
              margin: 15px 20px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              border-radius: 10px;
              transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            }

            /* Animasi hover pada kartu */
            .custom-card:hover {
              transform: scale(1.05);
              box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
            }

            /* Gaya teks footer */
            .footer-note {
              text-align: center;
              font-size: 0.9rem;
              color: white;
              margin-top: 20px;
            }
          `}
        </style>
      </IonContent>
    </IonPage>
  );
};

export default Home;
