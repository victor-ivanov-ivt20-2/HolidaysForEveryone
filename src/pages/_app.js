import '@/styles/main.scss'
import Container from '@/components/Layout/Container'
import Transition from '@/components/Layout/Transition'
export default function App({ Component, pageProps }) {
  return (

    <Container>
      <Transition>
        <Component {...pageProps} />

      </Transition>
    </Container>

  )
}
