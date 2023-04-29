import { IonContent,IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";


const Home: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <h2>Heloo world</h2>
            </IonContent>
        </IonPage>
        
        
        )
}

export default Home