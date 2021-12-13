import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>HELLO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
         <h1>witaj!</h1>
        </p>
      </main>
      <a href="hosting">pozdro</a>
      <Footer />
    </div>
  )
}
