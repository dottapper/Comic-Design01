import Navbar from '@/components/Navbar';
import HeroCollage from '@/components/HeroCollage';
import WorksSection from '@/components/WorksSection';
import CreatorsSection from '@/components/CreatorsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroCollage />
      <WorksSection />
      <CreatorsSection />
      <Footer />
    </>
  );
}