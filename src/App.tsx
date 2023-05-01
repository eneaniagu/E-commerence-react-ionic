import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonButton,
  IonHeader,
  IonIcon,
  IonImg,
  IonLabel,
  IonRouterOutlet,
  IonSearchbar,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonToolbar,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Home from './pages/Home/index';
import Navbar from './layout/Navbar'
import logo    from "./assets/images/logo.png"
 

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import {IoMdNotificationsOutline } from "react-icons/io"
import { CiSearch }  from  "react-icons/ci"
import { GiShoppingCart } from "react-icons/gi"

/* Theme variables */
import './theme/variables.css';
import "./assets/style/app.scss"




setupIonicReact();

const App: React.FC = () => (
  <IonApp>
  
    <IonReactRouter>
      <IonTabs>
       
      <IonTabBar slot="top" >

      

      <IonTabButton tab="Home" href="/Home" className='nav-tab'>

          <IonLabel>Home</IonLabel>
        </IonTabButton>

        <IonTabButton tab="tab2" href="/tab2">
       
          <IonLabel>Shop</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tab3">
         
          <IonLabel>DIscovery</IonLabel>
        </IonTabButton>
        
     
  
          <div className='divider'>

          </div>
        

      <IonTabButton className="v-logo">

     
        <img src={logo} className='logo'/>
        </IonTabButton>


        <IonTabButton tab="tab2"  className='nav-right-0'>

        <GiShoppingCart className='notify'/>

        </IonTabButton>
        
        <IonTabButton tab="tab2"  className='nav-right-2'>
       
       <IoMdNotificationsOutline  className='notify'/>

       </IonTabButton>

       <IonTabButton tab="tab3"  className="nav-right-3">
         
       <CiSearch className="notify"/>

        </IonTabButton>

        
      
        

        
      
        
      </IonTabBar>



        <IonRouterOutlet>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
            
          </Route>

          <Route path="/tab3">
            <Tab3 />
          </Route>

          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
        </IonRouterOutlet>



      </IonTabs>
     
    </IonReactRouter>
    <IonToolbar>
          <IonSearchbar className='Search-input'></IonSearchbar>
      </IonToolbar>
  
  </IonApp>
);

export default App;
