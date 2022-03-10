import { card } from 'ionicons/icons';
import './HomeInfo.css';
import ProcessCard from './ProcessCard';

const cardContent = [
  {
    title: 'Fresh',
    img: '/img/cookie-dough.jpeg',
    text: 'We use the freshest farm to table organic non GMO ingredients sourced locally in the PNW.'
  },
  {
    title: 'Fun',
    img: '/img/cutter.jpeg',
    text: 'Our proprietary cookie cutter shapes our cookies into fun salmons!'
  },
  {
    title: 'Delicious',
    img: '/img/frosted-cookie.jpg',
    text: 'Sweet with a hint of savory salmon, these cookies will keep you coming back for more!'
  }
]


const HomeInfo = (props) => {
  return (
    <ion-grid>
    <ion-row>
      <ion-col>
        <ProcessCard content={cardContent[0]} />
      </ion-col>
      <ion-col>
        <ProcessCard content={cardContent[1]} />
      </ion-col>
      <ion-col>
        <ProcessCard content={cardContent[2]}/>
      </ion-col>
    </ion-row>
  </ion-grid>
  );
};

export default HomeInfo;