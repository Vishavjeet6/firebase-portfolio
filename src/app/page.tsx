import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/home/hero';
import Projects from '@/components/home/projects';
import Experience from '@/components/home/experience';
import Skills from '@/components/home/skills';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
