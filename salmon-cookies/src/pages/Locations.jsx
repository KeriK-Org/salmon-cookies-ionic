import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Locations.css';
import LocationCard from '../components/LocationCard';

const cardContent = [
  {
    title: 'Seattle',
    img: '/img/seattle.png',
    street: '123 Salmon Street',
    city: 'Seattle, WA, USA',
    hours: 'Hours: 6:00am - 8:00pm'
  },
  {
    title: 'Tokyo',
    img: '/img/tokyo.png',
    street: '123 Salmon Street',
    city: 'Tokyo, Japan',
    hours: 'Hours: 6:00am - 8:00pm'
  },
  {
    title: 'Dubai',
    img: '/img/dubai.png',
    street: '123 Salmon Street',
    city: 'Dubai, UAE',
    hours: 'Hours: 6:00am - 8:00pm'
  },
  {
    title: 'Paris',
    img: '/img/paris.png',
    street: '123 Salmon Street',
    city: 'Paris, France',
    hours: 'Hours: 6:00am - 8:00pm'
  },
  {
    title: 'Lima',
    img: '/img/lima.png',
    street: '123 Salmon Street',
    city: 'Lima, Peru',
    hours: 'Hours: 6:00am - 8:00pm'
  }
]

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
      {cardContent.map(location => <LocationCard location={location}/>)}
      </IonContent>
    </IonPage>
  );
};

export default Locations;
