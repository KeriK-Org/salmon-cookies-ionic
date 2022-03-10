import './LocationCard.css';
import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg } from '@ionic/react';

const ProcessCard = (props) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{props.location.title}</IonCardTitle>
      </IonCardHeader>
      <IonImg src={props.location.img}/>
      <IonCardContent>{props.location.street}</IonCardContent>
      <IonCardContent>{props.location.city}</IonCardContent>
      <IonCardContent>{props.location.hours}</IonCardContent>
    </IonCard>
  );
}

export default ProcessCard;