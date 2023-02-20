import MainLayout from '@/layouts/Main';
import '@/styles/globals.css';
// swiper css
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
