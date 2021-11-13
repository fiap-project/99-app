import { IonApp } from '@ionic/react'

import '@ionic/react/css/core.css'
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'

import Router from './core/Router'
import AuthProvider from './contexts/Auth'

const App: React.FC = () => (
  <IonApp>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </IonApp>
)

export default App
