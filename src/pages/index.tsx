import Head from 'next/head';
import Navbar from '@/components/Navbar';
import ProfileHero from '@/components/ProfileHero';
import About from '@/components/About';
import IndustryExperience from '@/components/IndustryExperience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mahdi Ben Amor | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Mahdi Ben Amor — Software Engineer Portfolio" />
      </Head>
      <main className="min-h-screen bg-white text-black">
        <Navbar />
        <ProfileHero />
        <About />
        {/* <IndustryExperience /> */}
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
