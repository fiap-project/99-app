import { Redirect, Route } from 'react-router-dom'
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { person, home, personAdd, map } from 'ionicons/icons'

import Home from '../../pages/Home'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import Map from '../../pages/Map'
import { useAuthContext } from '../../contexts/Auth'

function Router() {
  const { isAuthenticated, onLogout, user } = useAuthContext()

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/mapa">
            {isAuthenticated && <Map />}
          </Route>
          <Route exact path="/login">
            {!isAuthenticated && <Login />}
          </Route>
          <Route exact path="/cadastro">
            {!isAuthenticated && <Register />}
          </Route>

          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" style={{ height: '70px' }}>
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          {isAuthenticated && (
            <IonTabButton tab="map" href="/mapa">
              <IonIcon icon={map} />
              <IonLabel>Map</IonLabel>
            </IonTabButton>
          )}
          {!isAuthenticated && (
            <IonTabButton tab="login" href="/login">
              <IonIcon icon={person} />
              <IonLabel>Login</IonLabel>
            </IonTabButton>
          )}
          {!isAuthenticated && (
            <IonTabButton tab="register" href="/Cadastro">
              <IonIcon icon={personAdd} />
              <IonLabel>Cadastro</IonLabel>
            </IonTabButton>
          )}
          {isAuthenticated && (
            <IonTabButton tab="map" onClick={() => onLogout(() => window.location.replace('/'))}>
              <IonIcon onClick={() => onLogout(() => window.location.replace('/'))} icon={map} />
              <IonLabel onClick={() => onLogout(() => window.location.replace('/'))}>
                Logout - {user.email}
              </IonLabel>
            </IonTabButton>
          )}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  )
}

export default Router
