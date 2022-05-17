import * as React from 'react';
import IconLogoSource from '../images/logo.svg';
import IconMenuSource from '../images/icon-menu.svg';
import IconLocalSource from '../images/local.svg';
import IconPhoneSource from '../images/phone.svg';

const Header = () => {
  return (
    <>
      <header className="">
        <div className="container-lg">
          <div className="flex justify-end py-2">
            <div className="flex items-center">
              <img src={IconLocalSource} className="" alt="local icon" />
              <p className="typo-small ml-3">
                Company Address type here
              </p>
            </div>
            <div className="flex items-center ml-24">
              <img src={IconPhoneSource} className="" alt="phone icon" />
              <p className="typo-small ml-3">
                +94 000 00000
              </p>
            </div>
          </div>
        </div>
        <div className="bg-orange-500 py-4">
          <div className="container-lg">
            <div className="row justify-between items-center">
              <div className="col">
                <img src={IconLogoSource} className="" alt="logo icon" />
              </div>
              <div className="col hidden md:flex">
                <a href="#" className="typo-body text-white flex items-center"><div className="rounded-full bg-white h-2.5 w-2.5 mr-2"></div>Home</a>
                <a href="#" className="typo-body text-white flex items-center ml-20">About us</a>
                <a href="#" className="typo-body text-white flex items-center ml-20">Services</a>
                <a href="#" className="typo-body text-white flex items-center ml-20">News</a>
                <button className="text-orange-500 bg-white rounded-lg py-2.5 px-7 text-sm ml-20">Contact us</button>
              </div>
              <img src={IconMenuSource} className="inline-block md:hidden w-7 mr-4" alt="menu icon" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
