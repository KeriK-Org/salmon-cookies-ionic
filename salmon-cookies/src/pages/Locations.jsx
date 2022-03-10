import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Locations.css';

const Locations = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Locations</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Locations</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Locations" />
      </IonContent>
    </IonPage>
  );
};

export default Locations;
