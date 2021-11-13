import { IonButton, IonInput, IonSelect, IonSelectOption, IonItem, IonLabel } from '@ionic/react'
import { useState } from 'react'
import { Layout, Logo } from '../../components'
import { useAuthContext } from '../../contexts/Auth'

function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [userType, setUserType] = useState<string>('')

  const { onAuthenticate } = useAuthContext()

  const onRegister = () => {
    localStorage.setItem('user', JSON.stringify({ email, userType }))
    onAuthenticate(String(Math.random()), { email, userType }, () => window.location.replace('/'))
  }

  return (
    <Layout title="Cadastro">
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

      <IonItem>
        <IonLabel position="floating">Tipo de usuário</IonLabel>
        <IonSelect value={userType} onIonChange={(e) => setUserType(e.detail.value!)}>
          <IonSelectOption value="client">Cliente</IonSelectOption>
          <IonSelectOption value="driver">Motorista</IonSelectOption>
        </IonSelect>
      </IonItem>
      <br />
      <br />
      <IonButton
        onClick={() => onRegister()}
        disabled={!email || !password || !userType}
        expand="full"
      >
        Cadastrar-se
      </IonButton>
    </Layout>
  )
}

export default Login
