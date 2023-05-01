import { IonButton, IonButtons, IonContent, IonFooter, IonIcon, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from "@ionic/react";
 import "../assets/style/style.scss"


const Footer: React.FC = () => {

    return (

        <IonFooter>
    <IonToolbar>
    <div className="footer">
        <div className="">
        <IonButton fill="outline">
            <img src="../logo.png"  className="footer logo" />
        </IonButton>

        <p className="gool-text">
        Empower yourself with affordable technology solutions that simplify their lives and enhance their potentials, one gadget at a time. 

        </p>

        </div>

        <div className="divid-r">
       
    <IonItem>
      FaceBook
        </IonItem>
        <IonItem>
       instagram
        </IonItem>
  <IonButtons slot="bottom">
    <IonButton>
       tiktok
    </IonButton>
  </IonButtons>
  <div className="terms">
  <IonButtons slot=""  color="black">
    <IonButton>
       Privacy
    </IonButton>
    
  </IonButtons>
  <IonButtons>
    <IonButton>
        Terms
    </IonButton>
  </IonButtons>


  </div>
 
        </div>


        <div className="divid-r-1">

        <IonList>
      <IonItem>
        <IonLabel>Service</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Blog</IonLabel>
      </IonItem>
    </IonList>

        </div>

        <div className="divid-r-2">
    <IonList>
      <IonItem>
        <IonLabel>Stocks</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Policy</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>term and condition</IonLabel>
      </IonItem>
    </IonList>
    </div>

    </div>
    </IonToolbar>
</IonFooter>
   
    )

} 

export default Footer

