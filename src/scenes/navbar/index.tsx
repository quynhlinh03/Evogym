// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Logo from '@/assets/Logo.png';
import Link from './Link';
// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Navbar = ({selectedPage, setSelectedPage}: Props) => {
  const flexBetween = 'flex items-center justify-between';
  return (
    <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          {/* LEFT SIDE  */}
          <img alt="logo" src={Logo} />

          {/* RIGHT SIDE */}
          <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-8 text-sm`}>
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
            <div className={`${flexBetween} gap-8`}>
              <p>Sign In</p>
              <button>Become a Member</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
