import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react'
import { useState } from 'react'
import { Layout, Logo } from '../../components'
import { useAuthContext } from '../../contexts/Auth'

function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const { onAuthenticate } = useAuthContext()

  const onLogin = () => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      const user = JSON.parse(storedUser)
      if (user.email !== email) return alert('Falha ao realizar o login')
      return onAuthenticate(String(Math.random()), user, () => window.location.replace('/'))
    }
  }

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
      <IonButton onClick={onLogin} disabled={!email || !password} expand="full">
        Login
      </IonButton>
    </Layout>
  )
}

export default Login
