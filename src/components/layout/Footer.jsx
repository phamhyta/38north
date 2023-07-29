import React from 'react';

const Footer = () => {
  return (
    <div className="footer bg-[#3c3c3c]">
      <footer class="px-36 py-20 text-white font-semibold text-xl">
        <div class="flex justify-between">
          <div class="sc-AxhUy fxWvvr">
            <h1>CONTACT US</h1>
            <br />
            <h2>boGO Consulting Corp</h2>
            <p>Vancouver, BC, Canada</p>
            <br />
            <p>Email: info@bogoconsulting.com</p>
          </div>
          <div class="">
            <div className="mt-0">
              <a class="sc-AxheI eXzlnr" href="/">
                HOME
              </a>
            </div>
            <div className="mt-4">
              <a class="sc-AxheI eXzlnr" href="/company">
                ABOUT US
              </a>
            </div>
            <div className="mt-4">
              <a class="sc-AxheI eXzlnr" href="/marketplace">
                INFORMATION POST
              </a>
            </div>
          </div>
          <div class="">
            <div className="mt-0">
              {' '}
              <a class="sc-AxheI eXzlnr" href="/howto">
                HOW TO NOAH
              </a>
            </div>
            <div className="mt-4">
              {' '}
              <a class="sc-AxheI eXzlnr" href="/partner">
                BECOME A MEMBER
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
