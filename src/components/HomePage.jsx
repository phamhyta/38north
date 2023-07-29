import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div className='bg-[url("https://noahbogo.com/static/media/header_image.937ef110.png")] h-[600px] bg-no-repeat w-full bg-cover'>
        <h1 className="text-5xl text-white font-semibold text-center items-center flex justify-center h-full mx-20">
          We deliver information about Satellite Earth Observation and set up
          business networks.
        </h1>
      </div>
      <div className="bg-gray-50 pb-10 relative">
        <div className="-top-8 bg-[#1e1e1e] text-white font-extralight mx-32 shadow-lg rounded-md py-8 px-20 relative">
          <div className="flex justify-between items-center text-sm text-center">
            <p>EXPERIENCE (yrs)</p>
            <p>PROJECT CONSULTING (cases)</p>
            <p>SUPPORTED CONTRACT VOLUME</p>
            <p className="w-1/4">
              LONG-STANDING RELATIONSHIP WITH CLIENTS (avg. yrs)
            </p>
          </div>
          <div className="flex justify-between items-center text-center ml-10">
            <span className="text-2xl font-bold">25+ </span>
            <span className="text-2xl font-bold">30+ </span>
            <span className="text-2xl font-bold">$90M</span>
            <span className="text-2xl font-bold w-1/4">10+ </span>
          </div>
        </div>
        <div className="my-10">
          <h1 className="text-center text-5xl">OUR HISTORY</h1>
          <div className="flex justify-center items-center my-3">
            <div className="w-20 h-2 bg-orange-500"></div>
          </div>
          <p className="text-2xl font-semibold text-center mx-40 text-gray-600">
            With User Experience and Success Story of over 20 years, we have
            been the representative of the world leading Satellite Image
            provider.
          </p>
        </div>
      </div>
      <div>
        <div className="my-10">
          <h1 className="text-center text-5xl">OUR MISSION</h1>
          <div className="flex justify-center items-center my-3">
            <div className="w-20 h-2 bg-orange-500"></div>
          </div>
          <p className="text-2xl font-semibold text-center mx-40 text-gray-600">
            Helping clients search Satellite Image and Geospatial Solution, a
            virtual information center (NOAH) is served by boGO Consulting Corp.
            At NOAH, Clients can open up the posted information package, discuss
            their needs with boGO, and reach out to the providers who can best
            meet the client’s requirements.
          </p>
        </div>
      </div>
      <div className="bg-[#3c3c3c] py-6">
        <h1 className="mx-32 text-5xl text-white">OUR SERVICES</h1>
      </div>
      <div className="bg-[#1e1e1e] text-white px-40 py-10">
        <div className="font-bold text-2xl">
          <h1>DEFINING MISSION AND MATCHING</h1>
          <div className="w-20 h-2 bg-orange-500 mt-6"></div>
        </div>
        <div className="flex justify-between">
          <div className="sc-pjstK jsIEAM">
            <p className="text-[#63d9d7] my-6 font-bold text-2xl">For Client</p>
            <ul className="text-xl font-semibold list-disc w-3/4">
              <li className="mt-3">
                Update on Solution Provider’s progress including the offer with
                ROM pricing
                <br /> -Regular update by emails and calls on 24/7 basis
              </li>
              <li className="mt-3">
                Arrange meetings to review Solution Provider’s offer and
                proposal
              </li>
              <li className="mt-3">
                Help negotiate and place the purchase order within Client’s
                budget range
              </li>
              <li className="mt-3">
                Support “contract signing procedure” between Client and Solution
                Provider
              </li>
              <li className="mt-3">
                Monitor how Solution Provider’s services are fulfilled
              </li>
            </ul>
          </div>
          <div className="ml-20">
            <p className="text-[#63d9d7] my-6 font-bold text-2xl">
              For Solution Provider
            </p>
            <ul className="text-xl font-semibold list-disc">
              <li className="mt-3">
                Update on Client’s progress including Client’s interests and
                budget cycle <br />
                -Regular update by emails and calls on 24/7 basis
              </li>
              <li className="mt-3">
                Arrange meetings to clarify and define Client’s needs and
                requirements
              </li>
              <li className="mt-3">Estimate Client’s budget range</li>
              <li className="mt-3">
                Help negotiate and prepare the proposal that secures Provider’s
                proper margin
              </li>
              <li className="mt-3">
                Support “contract signing procedure” between Solution Provider
                and Client
              </li>
              <li className="mt-3">
                Continued feedback on the operation status by Client
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex">
        <img
          className="w-1/2"
          src="https://noahbogo.com/static/media/WorldView(5).6e06eadb.jpg"
          alt="Shake"
        />
        <div className="w-1/2 my-6 mx-20">
          <h1 className="text-2xl font-bold">
            FAST-TRACK ACCESS TO INFORMATION
          </h1>
          <div className="w-20 h-2 bg-orange-500 mt-6"></div>
          <p className="mt-6 text-[#63d9d7] text-2xl font-bold">
            Clients can easily access information posted by world leading
            Satellite Image and Geospatial Solution providers
          </p>
          <h1 className="mt-10 text-2xl font-semibold">
            Clients can have a chat with boGO Consulting for:
          </h1>
          <ul className="list-disc text-xl font-semibold text-gray-600 mx-5 mt-6 mb-4">
            <li>
              Detailed information on a specific product or service they are
              looking for
            </li>
            <li>
              Comparison of the value among the similar products or services
            </li>
            <li>Recommendation that best meets their requirements.</li>
          </ul>
        </div>
      </div>
      <div className="bg-[url(https://noahbogo.com/static/media/business_image.95c669db.png)] h-[600px] w-full bg-cover text-white">
        <div className="flex justify-start h-full items-center">
          <div className="w-1/2 mx-32">
            <h1 className="text-2xl font-bold">SETTING BUSINESS NETWORK</h1>
            <div className="w-20 h-2 bg-orange-500 mt-6"></div>
            <p className="text-xl font-semibold mt-6">
              boGO Consulting regularly organizes symposium in Vancouver Canada
              for Satellite Earth Observation community members to help set up a
              business network between Clients and Providers.
            </p>
          </div>
        </div>
      </div>
      <div className="px-20 py-10 bg-black text-white">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            LATEST ARTICLES
            <div className="w-20 h-2 bg-orange-500 mt-6"></div>
          </h1>
          <div className="border-4 text-2xl font-bold px-8 py-2">
            - All Topics -
          </div>
        </div>
        <div className="ajax-target">
          <article className="article article--compact ajax-item">
            <div className="flex">
              <div className="article__date">
                <time datetime="2023-07-27">Jul 27 </time>
              </div>
              <div className="article__title" itemprop="name">
                <a
                  href="https://www.38north.org/reports/2023/07/risk-reduction-and-crisis-management-on-the-korean-peninsula/"
                  title="Article: Risk Reduction and Crisis Management on the Korean Peninsula"
                  className="article__link"
                >
                  Risk Reduction and Crisis Management on the Korean Peninsula{' '}
                </a>
              </div>
            </div>
            <div className="flex">
              <div className="article__authors" itemprop="author">
                <a
                  href="https://www.38north.org/author/maj-gen-ret-mats-engman/"
                  title="Posts by Maj. Gen. (Ret.) Mats Engman"
                  className="author url fn"
                >
                  Maj. Gen. (Ret.) Mats Engman
                </a>{' '}
                and{' '}
                <a
                  href="https://www.38north.org/author/frida-lampinen/"
                  title="Posts by Frida Lampinen"
                  className="author url fn"
                >
                  Frida Lampinen
                </a>{' '}
              </div>

              <div className="article__topics">
                <span itemprop="about">
                  <a
                    href="https://www.38north.org/topics/special-reports/"
                    rel="category tag"
                  >
                    Special Reports
                  </a>
                </span>{' '}
              </div>
            </div>
          </article>
          <article
            className="article article--compact ajax-item"
            itemscope=""
            itemtype="http://schema.org/Article"
          >
            <div className="flex">
              <div className="article__date">
                <time datetime="2023-07-21">Jul 21 </time>
              </div>
              <div className="article__title" itemprop="name">
                <a
                  href="https://www.38north.org/2023/07/the-unintended-consequences-of-natos-drift-toward-asia/"
                  title="Article: The Unintended Consequences of NATO’s Drift Toward Asia"
                  className="article__link"
                >
                  The Unintended Consequences of NATO’s Drift Toward Asia{' '}
                </a>
              </div>
            </div>
            <div className="flex">
              <div className="article__authors" itemprop="author">
                <a
                  href="https://www.38north.org/author/daniel-r-depetris/"
                  title="Posts by Daniel R. DePetris"
                  className="author url fn"
                >
                  Daniel R. DePetris
                </a>{' '}
              </div>

              <div className="article__topics">
                <span itemprop="about">
                  <a
                    href="https://www.38north.org/topics/foreign-affairs/"
                    rel="category tag"
                  >
                    Foreign Affairs
                  </a>
                </span>
                ,{' '}
                <span itemprop="about">
                  <a
                    href="https://www.38north.org/topics/military-affairs/"
                    rel="category tag"
                  >
                    Military Affairs
                  </a>
                </span>{' '}
              </div>
            </div>
          </article>
          <article
            className="article article--compact ajax-item"
            itemscope=""
            itemtype="http://schema.org/Article"
          >
            <div className="flex">
              <div className="article__date">
                <time datetime="2023-07-14">Jul 14 </time>
              </div>
              <div className="article__title" itemprop="name">
                <a
                  href="https://www.38north.org/2023/07/sohae-satellite-launching-station-modernization-status-2/"
                  title="Article: Sohae Satellite Launching Station: Modernization Status"
                  className="article__link"
                >
                  Sohae Satellite Launching Station: Modernization Status{' '}
                </a>
              </div>
            </div>
            <div className="flex">
              <div className="article__authors" itemprop="author">
                <a
                  href="https://www.38north.org/author/jack-liu/"
                  title="Posts by Jack Liu"
                  className="author url fn"
                >
                  Jack Liu
                </a>
                ,{' '}
                <a
                  href="https://www.38north.org/author/peter-makowsky/"
                  title="Posts by Peter Makowsky"
                  className="author url fn"
                >
                  Peter Makowsky
                </a>{' '}
                and{' '}
                <a
                  href="https://www.38north.org/author/olli-heinonen/"
                  title="Posts by Olli Heinonen"
                  className="author url fn"
                >
                  Olli Heinonen
                </a>{' '}
              </div>

              <div className="article__topics">
                <span itemprop="about">
                  <a
                    href="https://www.38north.org/topics/satellite-analysis/"
                    rel="category tag"
                  >
                    Satellite Imagery
                  </a>
                </span>
                ,{' '}
                <span itemprop="about">
                  <a
                    href="https://www.38north.org/topics/wmd/"
                    rel="category tag"
                  >
                    WMD
                  </a>
                </span>{' '}
              </div>
            </div>
          </article>
          <div className="flex justify-between mt-6">
            <div className="article__topics">
              <span className="text-gray-700 my-4 underline">View All</span>{' '}
            </div>
            <div className="flex w-1/5 justify-between text-xl font-bold">
              <span className="text-gray-200 my-4">1</span>{' '}
              <span className="text-gray-700 my-4">2</span>{' '}
              <span className="text-gray-700 my-4">3</span>{' '}
              <span className="text-gray-700 my-4">...</span>{' '}
              <span className="text-gray-700 my-4">242</span>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
