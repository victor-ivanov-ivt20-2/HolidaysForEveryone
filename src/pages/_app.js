import '@/styles/main.scss'
import Container from '@/components/Layout/Container'
export default function App({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  )
}
