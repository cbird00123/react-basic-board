const Header = () => {
  return <header>header</header>;
}

const Footer = () => {
  return <footer>footer</footer>;
}

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout