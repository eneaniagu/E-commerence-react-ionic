import { IonContent,IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import React from "react";
import ImageSlider from "../../components/Imageslider/ImageSlider";
import "./Home.scss"
import Category from "../../components/Category/Category";
import NewStock from "../../components/NewStock/NewStock";
import BestSells from "../../components/BestSells/BestSells";
import Footer from "../../layout/Footer";




const Home: React.FC = () => {

    return (
        <IonPage>
           
            <IonContent>
            <div className="">
                <ImageSlider/>
                <Category/>
                <NewStock/>
                <BestSells/>
                </div>
                <Footer/>
            </IonContent>
            
        </IonPage>
        
        
        )
}

export default Home