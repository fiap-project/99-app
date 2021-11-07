import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react'
import { useState } from 'react'
import { Layout, Logo } from '../../components'

function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <Layout title="Login">
      <Logo />
      <IonItem>
        <IonLabel position="floating">E-mail</IonLabel>
        <IonInput
          value={email}
          type="email"
          onIonChange={(e) => setEmail(e.detail.value!)}
          clearInput
        />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Senha</IonLabel>
        <IonInput
          value={password}
          type="password"
          onIonChange={(e) => setPassword(e.detail.value!)}
          clearInput
        />
      </IonItem>
      <br />
      <br />
      <IonButton expand="full">Login</IonButton>
    </Layout>
  )
}

export default Login
