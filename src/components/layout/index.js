import TopNav from '../TopNav'
import Container from '@mui/material/Container'

export default function Layout({ children }) {

  return (
    <Container>
      <TopNav />
      <main>{children}</main>
    </Container>
  )
}