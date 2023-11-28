import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Santino Majur Resume</title>
        <meta name="description" content="created by santino majur" />
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
      </Head>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
