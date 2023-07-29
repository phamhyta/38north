import React from 'react';

const AdminPage = () => {
  return (
    <div>
      <div className="text-3xl font-bold text-center my-6">All News</div>
      <div className="flex justify-end mx-36 cursor-pointer">
        <div className="rounded-lg bg-blue-600 text-white font-bold px-4 py-2">
          + Create
        </div>
      </div>
      <div className="mx-32">
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
              <div className="ml-10 flex">
                <div className="rounded-lg text-white font-medium bg-green-400 p-1 w-20 justify-center flex items-center">
                  Edit
                </div>
                <div className="rounded-lg text-white font-medium bg-red-400 p-1 w-20 justify-center flex items-center ml-4">
                  Delete
                </div>
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
              <div className="ml-24 flex">
                <div className="rounded-lg text-white font-medium bg-green-400 p-1 w-20 justify-center flex items-center">
                  Edit
                </div>
                <div className="rounded-lg text-white font-medium bg-red-400 p-1 w-20 justify-center flex items-center ml-4">
                  Delete
                </div>
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
              <div className="ml-36 flex">
                <div className="rounded-lg text-white font-medium bg-green-400 p-1 w-20 justify-center flex items-center">
                  Edit
                </div>
                <div className="rounded-lg text-white font-medium bg-red-400 p-1 w-20 justify-center flex items-center ml-4">
                  Delete
                </div>
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
              <span className="text-red-700 my-4 underline">View All</span>{' '}
            </div>
            <div className="flex w-1/5 justify-between text-xl font-bold">
              <span className="text-gray-200 my-4">1</span>{' '}
              <span className="text-red-700 my-4">2</span>{' '}
              <span className="text-red-700 my-4">3</span>{' '}
              <span className="text-red-700 my-4">...</span>{' '}
              <span className="text-red-700 my-4">242</span>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
