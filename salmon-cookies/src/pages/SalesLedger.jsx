import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonButton } from '@ionic/react';
import { useTable } from 'react-table'

class Store  {
  constructor(location, minHrlyCust, maxHrlyCust, avgCustSale, estDailySales, totalSales){
    this.location = location;
    this.minHrlyCust = minHrlyCust;
    this.maxHrlyCust = maxHrlyCust;
    this.avgCustSale = avgCustSale;
    this.estDailySales = estDailySales;
    this.totalSales = totalSales;
    this.estCookieSales();
  }

  customerRange = (min, max) => {
    return max - min;
  };

  randHrlyCustomers = () => {
    return Math.trunc(Math.random() * this.customerRange(this.minHrlyCust, this.maxHrlyCust) + 1) + this.minHrlyCust;
  };

  estCookieSales = () => {
    let cookieSales;
    let dailySales = [];
    let total = 0;
    for (let i = 0; i <=  13; i += 1){
      cookieSales = Math.round(this.randHrlyCustomers() * this.avgCustSale)
      dailySales[i] = cookieSales;
      total += cookieSales;
    }
    this.estDailySales = dailySales;
    this.totalSales = total;
  };
}

const SalesLedger = () => {
  const initialLocations = [];
  
  initialLocations.push( new Store('Seattle', 23, 65, 6.3, [], 0));
  initialLocations.push( new Store('Tokyo', 3, 24, 1.2, [], 0));
  initialLocations.push( new Store('Dubai', 11, 38, 3.7, [], 0));
  initialLocations.push( new Store('Paris', 20, 38, 2.3, [], 0));
  initialLocations.push( new Store('Lima', 2, 16, 4.6, [], 0));

  const [city, setCity] = useState();
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const [avg, setAvg] = useState();
  const [storeLocations, setStoreLocations] = useState(initialLocations);

  const handleClick = (e) => {
    let addedLocation = new Store(city, min, max, avg, [], 0);
    setStoreLocations([...storeLocations, addedLocation]);
  }

  function newObjConstructor(store){
    console.log(store.location);
    return {
      //map through the keys of the Object
      //object output for each location
      '0': store.location,
      '1': store.estDailySales[0], 
      '2': store.estDailySales[1],
      '3': store.estDailySales[2],
      '4': store.estDailySales[3],
      '5': store.estDailySales[4],
      '6': store.estDailySales[5],
      '7': store.estDailySales[6],
      '8': store.estDailySales[7],
      '9': store.estDailySales[8], 
      '10': store.estDailySales[9], 
      '11': store.estDailySales[10], 
      '12': store.estDailySales[11], 
      '13': store.estDailySales[12], 
      '14': store.estDailySales[13], 
      '15': store.totalSales
    }
  }

  let storeArray = storeLocations.map(store => newObjConstructor(store))
  console.log(storeArray);

  const data = React.useMemo(
    () => storeArray
    , [storeLocations])

  const tableHeader = ['Location', '6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', 'Daily Location Totals'];

  const columns = React.useMemo(
    () => {
     let temp =  tableHeader.map((time, index) => ( {Header: ` ${time}  `, accessor: index.toString()}))
      return temp
    }, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })
  return (
    
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sales Ledger</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider>Location: </IonItemDivider>
          <IonItem>
            <IonInput value={city} placeholder="Enter Location" onIonChange={e => setCity(e.detail.value)}></IonInput>
          </IonItem>

       
          <IonItemDivider>Expected Customer Traffic: </IonItemDivider>
          <IonItem>
            <IonInput type="number" value={min} placeholder="Enter Min" onIonChange={e => setMin(parseInt(e.detail.value, 10))}></IonInput>
          </IonItem>
          <IonItem>
            <IonInput type="number" value={max} placeholder="Enter Max" onIonChange={e => setMax(parseInt(e.detail.value, 10))}></IonInput>
          </IonItem>
          <IonItemDivider>Avg Sale/Cust: </IonItemDivider>
          <IonItem>
            <IonInput type="number" value={avg} placeholder="Enter Avg sales/cust" onIonChange={e => setAvg(parseInt(e.detail.value, 10))}></IonInput>
          </IonItem>
          <IonButton onClick={handleClick}> Submit </IonButton>
        </IonList> 
        <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
                 style={{
                   borderBottom: 'solid 3px red',
                   background: 'aliceblue',
                   color: 'black',
                   fontWeight: 'bold',
                 }}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     style={{
                       padding: '10px',
                       border: 'solid 1px gray',
                       background: 'black',
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>



      </IonContent>
    </IonPage>
  );
};

export default SalesLedger