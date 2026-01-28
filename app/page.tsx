import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Brands from '@/components/Brands';
import SocialProof from '@/components/SocialProof';
import Clubs from '@/components/Clubs';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';
import NetworkPreview from '@/components/NetworkPreview';
import InteractiveMap from '@/components/InteractiveMap';
import { getClubs } from '@/lib/google-sheets';

// Revalidate data every hour
export const revalidate = 3600;

export default async function Home() {
    const clubs = await getClubs();

    const stats = {
        totalClubs: clubs.length,
        totalCourts: clubs.reduce((acc, club) => acc + club.canchas, 0)
    };

    return (
        <main className="bg-slate-900 min-h-screen">
            <Header />
            <Hero />
            <Brands />
            <SocialProof />
            <Clubs />
            <NetworkPreview clubs={clubs} />
            <InteractiveMap />
            <MapSection stats={stats} />
            <Footer />
        </main>
    );
}
