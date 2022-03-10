import './ProcessCard.css';
import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg } from '@ionic/react';

const ProcessCard = (props) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{props.content.title}</IonCardTitle>
      </IonCardHeader>
      <IonImg src={props.content.img}/>
      <IonCardContent>{props.content.text}</IonCardContent>
    </IonCard>
  );
}

export default ProcessCard;