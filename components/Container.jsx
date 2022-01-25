import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="flex flex-auto flex-col justify-center px-8">
        <div className="flex-auto">{children}</div>
        <Footer />
      </main>
    </>
  )
}
