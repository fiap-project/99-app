import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { ReactElement } from 'react'
import * as S from './styles'

type Props = {
  title?: string
  children: string | ReactElement | ReactElement[]
}

function Layout({ title, children }: Props) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <S.Wrapper>
          <div>{children}</div>
        </S.Wrapper>
      </IonContent>
    </IonPage>
  )
}

export default Layout
