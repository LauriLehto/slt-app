import TopNav from '../TopNav'

export default function Layout({ children }) {
  return (
    <>
      <TopNav />
      <main>{children}</main>
    </>
  )
}