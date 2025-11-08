import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Booking from './components/Booking';
import MainSections from './components/Sections';

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main>
        <Hero />
        <Booking />
        <MainSections />
      </main>
      <footer className="border-t border-black/10 mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-black/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Velodent. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-black">Home</a>
            <a href="#about" className="hover:text-black">About</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
