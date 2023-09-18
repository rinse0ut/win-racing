import Image from 'next/image'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Layout from './components/Layout'

export default function Home() {
  return (
    <Layout>
      <Main/>
    </Layout>
  )
}