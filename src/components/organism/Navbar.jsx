import { useState, useEffect } from 'react';
import Navitems from '../atoms/Navitems';

export default function Navbar() {
  const navItemList = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Contacts',
      href: '/',
    },
    {
      title: 'Features',
      href: '/',
    },
    {
      title: 'About Us',
      href: '/',
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      console.log(scrollY)
      setIsScrolled(scrollY >= 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const Transition = isScrolled ? 'bg-[rgba(3,4,94,0.8)] animate-topToBot fixed text-white  ' : ' absolute text-antiwhite';

  return (
    <nav
      className={`${Transition} bg-indigo  top-0 w-full shadow-sm p-[16px_64px] backdrop-blur-[2px] backdrop-invert flex items-center justify-between`}
    >
      <section className="text-[32px] font-light font-[Philosopher]">ContactBooks</section>
      <section className="flex gap-8">
        {navItemList.map((item, index) => (
          <Navitems key={index} scrolled={isScrolled} name={item.title} navTo={item.href} />
        ))}
      </section>
    </nav>
  );
}
