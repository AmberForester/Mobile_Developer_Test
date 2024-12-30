import React, { useEffect, useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<any>(null);
  const history = useHistory();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => setData(response.data));
  }, [id]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Detail Data</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {data && (
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{data.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {/* <h3>Post by User {data.userId}</h3> */}
              <p>{data.body}</p>
            </IonCardContent>
          </IonCard>
        )}
        
        {/* Tombol Kembali */}
        <IonButton 
          color="secondary" 
          expand="full" 
          onClick={() => history.goBack()}
        >
          <IonIcon icon={arrowBack} slot="start" />
          Kembali
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default DetailPage;
