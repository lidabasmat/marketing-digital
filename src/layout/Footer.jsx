import * as React from 'react';
import IconLogoSource from '../images/logo.svg';
import IconFacebookSource from '../images/facebook.svg';
import IconInstagramSource from '../images/instagram.svg';
import IconTwitterSource from '../images/twitter.svg';
import IconLinkedinSource from '../images/linkedin.svg';

const Footer = () => {
  return (
    <>
      <footer className="mt-32 bg-black text-white pt-16">
        <div className="container-lg">
          <div className="row justify-between items-end pb-12">
            <div className="col-6 lg:col-3">
              <img src={IconLogoSource} className="" alt="logo icon" />
              <p className="typo-body mt-5 max-w-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <p className="typo-body mt-5">
                @Company.com
              </p>
            </div>
            <div className="col-6 lg:col-3">
              <p className="typo-intro ml-14 lg:ml-28">
                About us
              </p>
              <div className="flex flex-col mt-6 ml-14 lg:ml-28">
                <a href="#" className="typo-body mt-1">Company</a>
                <a href="#" className="typo-body mt-1">Portfolio</a>
                <a href="#" className="typo-body mt-1">Careers</a>
                <a href="#" className="typo-body mt-1">Contact us</a>
              </div>
            </div>
            <div className="col-6 lg:col-3 mt-14 lg:mt-0">
              <p className="typo-intro">
                Contact us
              </p>
              <p className="typo-body mt-6 max-w-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <p className="typo-body mt-4">
                +9000 0000 000
              </p>
            </div>
            <div className="col-full md:col-6 lg:col-3 mt-10 md:mt-0">
              <div className="flex items-top">
                <a href="/">
                  <img src={IconFacebookSource} className="" alt="facebook icon" />
                </a>
                <a href="/" className="ml-5">
                  <img src={IconInstagramSource} className="" alt="instagram icon" />
                </a>
                <a href="/" className="ml-5">
                  <img src={IconTwitterSource} className="" alt="twitter icon" />
                </a>
                <a href="/" className="ml-5">
                  <img src={IconLinkedinSource} className="" alt="linkedin icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-white py-8">
          <p className="typo-small text-center">
            Copyright ® 2021 Company All rights Rcerved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
