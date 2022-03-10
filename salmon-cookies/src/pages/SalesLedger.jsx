import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './SalesLedger.css';

const SalesLedger = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sales Ledger</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sales Ledger</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Sales Ledger" />
      </IonContent>
    </IonPage>
  );
};

export default SalesLedger;
