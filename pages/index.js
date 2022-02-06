import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="https://ploon24.link" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
         Ploon24.link <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
