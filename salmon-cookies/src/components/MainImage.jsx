import React from 'react';
import { IonImg, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel } from '@ionic/react';


const MainImage = () => {
  return (

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Established: 2021</IonCardTitle>
          </IonCardHeader>
          <IonItem>
            <IonImg src={'/img/salmon.png'} />
          </IonItem>
          <IonCardSubtitle>
            <IonCardTitle>Our Story</IonCardTitle>
          </IonCardSubtitle>

          <IonCardContent>
            Pat's Salmon Cookies was established in the fall of 2021. We strive to live the most accurate depiction of the great Pacific Northwest, and as many can attest to, there is nothing better than sitting inside on a rainy day, sipping your coffee, and snacking on a Pat's Salmon Cookie. A lot of people ask us at Pat's how this amazing combination was brought into exsistance. Well it all started when Pat stored their smoked salmon in the same container as their coffee cookies. Biting into the sweet cookie with that savory salmon taste blew Pat's mind, and they immediately knew they had a winner. Now Pat's has rapidly grown to five global locations and counting to bring the world this amazing combination at the highest quality!
          </IonCardContent>
        </IonCard>
  );
};

export default MainImage;