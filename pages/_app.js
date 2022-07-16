import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import { Footer, Navbar } from '../components';
import '../styles/globals.css';

const Marketplace = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-white min-h-screen">
      <Navbar />
      <div className="pt-65">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>

    <Script src="https://kit.fontawesome.com/b6f2a4e7de.js" crossOrigin="anonymous" />
  </ThemeProvider>
);

export default Marketplace;
