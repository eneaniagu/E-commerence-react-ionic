import React from "react"
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonToolbar,
    setupIonicReact
  } from '@ionic/react';
  import { IonReactRouter } from '@ionic/react-router';
  import { Redirect, Route } from 'react-router-dom';
  import { ellipse, square, triangle } from 'ionicons/icons';
import Home from "../pages/Home";
import logo    from "../assets/images/logo.png"
const Navbar: React.FC = () => {

    return (
        
    <IonToolbar>
      <IonReactRouter>
      <IonTabs>
      <IonTabBar slot="top">
      <IonTabButton>
      <img src={logo} className='logo'/>
      </IonTabButton>
      
        <IonTabButton tab="tab1" href="/tab1">
          <IonLabel>Home</IonLabel>
        </IonTabButton>

        <IonTabButton tab="tab2" href="/tab2">
       
          <IonLabel>Shop</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tab3">
         
          <IonLabel>DIscovery</IonLabel>
        </IonTabButton>
        
      </IonTabBar>

        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Home />
          </Route>
          <Route exact path="/tab2">
            {/* <Tab2 /> */}
            
          </Route>

          <Route path="/tab3">
            {/* <Tab3 /> */}
          </Route>

          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>

      </IonTabs>
    </IonReactRouter>

    </IonToolbar>
    )

} 

export default Navbar