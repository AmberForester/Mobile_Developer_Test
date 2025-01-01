import React, { useEffect, useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon } from '@ionic/react';
import axios from 'axios';
import { arrowForward, listOutline } from 'ionicons/icons';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const ListPage: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .then(response => setData(response.data.slice(0, 10))) // Ambil 10 data pertama
      .catch(error => console.error(error)); // Tambahkan error handling
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <IonIcon icon={listOutline} style={{ marginRight: '10px' }} />
            List Data
            </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {data.map((item) => (
            <IonItem key={item.id}>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>{item.title}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>{item.body.slice(0, 50)}...</p> {/* Menampilkan cuplikan isi body */}
                  {/* Tombol untuk menuju ke detail */}
                  <IonButton 
                    color="secondary" 
                    expand="full" 
                    routerLink={`/detail/${item.id}`}
                  >
                    <IonIcon icon={arrowForward} slot="end" />
                    Lihat Detail
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonItem>
          ))}
        </IonList>
      </IonContent>

      <style>{`
        ion-card {
          margin: 10px 0;
          border: 1px solid black;
          border-radius: 5%;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }

        ion-card:hover {
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
          transform: translateY(-5px);
          transition: all 0.3s ease-in-out;
        }

        ion-button {
          margin-top: 20px;
        }

        h3 {
          font-size: 1.2rem;
          color: #666;
        }

        p {
          font-size: 1rem;
          line-height: 1.6;
        }
      `}</style>

    </IonPage>
  );
};

export default ListPage;
