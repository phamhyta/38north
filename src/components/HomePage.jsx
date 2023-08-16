import React from 'react';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img11 from '../images/img11.png';
import img21 from '../images/img21.png';
import img31 from '../images/img31.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';

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
      <div className="px-2">
        <h1 className="text-5xl font-bold mt-12 text-center">
          STATISTICS IN SPACE
          <div className='w-full flex justify-center'>
            <div className="w-28 h-2 bg-orange-500 mt-6"></div>
          </div>
        </h1>
        <div className="flex justify-between mt-6">
          <div>
            <img src={img11} alt="" />
          </div>
          <div>
            <img src={img21} alt="" />
          </div>
          <div>
            <img src={img31} alt="" />
          </div>
        </div>
        <div className="flex justify-between my-4">
          <div>
            <img src={img4} alt="" />
          </div>
          <div>
            <img src={img5} alt="" />
          </div>
          <div>
            <img src={img6} alt="" />
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
          <div className="flex">
            <article className="article article--compact ajax-item w-4/5">
              <div className="flex">
                <div className="article__date">
                  <time datetime="2010-03-18">May 14</time>
                </div>
                <div className="article__title" itemprop="name">
                  <a
                    href="https://www.38north.org/2023/05/sohae-satellite-launching-station-launch-pad-construction-resumes/"
                    title="Article: Sohae Satellite Launching Station: Launch Pad Construction Resumes"
                    class="article__link"
                    itemprop="url"
                  >
                    Sohae Satellite Launching Station: Launch Pad Construction
                    Resumes{' '}
                  </a>
                </div>
              </div>
              <div className="flex">
                <div class="article__authors" itemprop="author">
                  <a
                    href="https://www.38north.org/author/jack-liu/"
                    title="Posts by Jack Liu"
                    class="author url fn"
                    rel="author"
                  >
                    Jack Liu
                  </a>
                  ,{' '}
                  <a
                    href="https://www.38north.org/author/peter-makowsky/"
                    title="Posts by Peter Makowsky"
                    class="author url fn"
                    rel="author"
                  >
                    Peter Makowsky
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://www.38north.org/author/olli-heinonen/"
                    title="Posts by Olli Heinonen"
                    class="author url fn"
                    rel="author"
                  >
                    Olli Heinonen
                  </a>{' '}
                </div>

                <div class="article__topics">
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
              <div className="mr-[100px] ml-[130px]">
                Recent commercial satellite imagery of North Korea’s Sohae
                Satellite Launching Station indicates that after nearly a
                half-year hiatus, activity at the launch pad area has resumed.
                Within the past two weeks, materials on the launch pad have been
                removed and a new, taller tower crane has been assembled next to
                the gantry tower. These efforts are likely tied to Kim Jong Un’s
                modernization goals to boost space launch capabilities as set
                forth in March 2022, and in support of a new generation of
                larger satellite launch vehicles (SLVs).
              </div>
            </article>
            <div className="flex justify-center items-center mr-24 img-item">
              <img src={img1} className="w-72" alt="" />
            </div>
          </div>
          <div className="flex">
            <article
              className="article article--compact ajax-item w-4/5"
              itemscope=""
              itemtype="http://schema.org/Article"
            >
              <div className="flex">
                <div className="article__date">
                  <time datetime="2023-07-21">Apr 28 </time>
                </div>
                <div className="article__title" itemprop="name">
                  <a
                    href="https://www.38north.org/2023/04/yongbyon-nuclear-scientific-research-center-expansion-work-continues/"
                    title="Article: Yongbyon Nuclear Scientific Research Center: Expansion Work Continues"
                    class="article__link"
                    itemprop="url"
                  >
                    Yongbyon Nuclear Scientific Research Center: Expansion Work
                    Continues{' '}
                  </a>
                </div>
              </div>
              <div className="flex">
                <div class="article__authors" itemprop="author">
                  <a
                    href="https://www.38north.org/author/peter-makowsky/"
                    title="Posts by Peter Makowsky"
                    class="author url fn"
                    rel="author"
                  >
                    Peter Makowsky
                  </a>
                  ,{' '}
                  <a
                    href="https://www.38north.org/author/jack-liu/"
                    title="Posts by Jack Liu"
                    class="author url fn"
                    rel="author"
                  >
                    Jack Liu
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://www.38north.org/author/olli-heinonen/"
                    title="Posts by Olli Heinonen"
                    class="author url fn"
                    rel="author"
                  >
                    Olli Heinonen
                  </a>{' '}
                </div>

                <div class="article__topics">
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
              <div className="mr-[100px] ml-[130px]">
                Commercial satellite imagery of the Yongbyon Nuclear Scientific
                Research Center indicates that expansion and refurbishment work
                continues throughout the site, reinforcing the notion that Kim
                Jong Un’s call “to expand the production of weapon-grade
                materials needed for an ‘exponential’ increase in the country’s
                arsenal” was not an idle request.
              </div>
            </article>
            <div className="flex justify-center items-center mr-24 img-item">
              <img src={img2} className="w-72" alt="" />
            </div>
          </div>
          <div className="flex">
            <article
              className="article article--compact ajax-item w-4/5"
              itemscope=""
              itemtype="http://schema.org/Article"
            >
              <div className="flex">
                <div className="article__date">
                  <time datetime="2023-07-14">Apr 01 </time>
                </div>
                <div className="article__title" itemprop="name">
                  <a
                    href="https://www.38north.org/2023/04/yongbyon-nuclear-research-center-growing-activity-at-the-experimental-light-water-reactor/"
                    title="Article: Growing Activity at North Korea’s Experimental Light Water Reactor"
                    class="article__link"
                    itemprop="url"
                  >
                    Growing Activity at North Korea’s Experimental Light Water
                    Reactor{' '}
                  </a>
                </div>
              </div>
              <div className="flex">
                <div class="article__authors" itemprop="author">
                  <a
                    href="https://www.38north.org/author/peter-makowsky/"
                    title="Posts by Peter Makowsky"
                    class="author url fn"
                    rel="author"
                  >
                    Peter Makowsky
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://www.38north.org/author/jack-liu/"
                    title="Posts by Jack Liu"
                    class="author url fn"
                    rel="author"
                  >
                    Jack Liu
                  </a>{' '}
                </div>

                <div class="article__topics">
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
              <div className="mr-[100px] ml-[130px]">
                Recent commercial satellite imagery of North Korea’s Yongbyon
                Nuclear Scientific Research Center indicates a high level of
                activity around the complex. The 5 MWe Reactor continues to
                operate, and construction has started on an additional support
                building around the Experimental Light Water Reactor (ELWR).
                Furthermore, water discharges have been detected that could be
                associated with testing of the ELWR’s cooling system. This is
                not the first time water discharges have been observed coming
                from the ELWR over the past few years but may indicate the
                reactor is nearing completion.
              </div>
            </article>
            <div className="flex justify-center items-center mr-24 img-item">
              <img src={img3} className="w-72" alt="" />
            </div>
          </div>

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
