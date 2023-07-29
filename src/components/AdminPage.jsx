import React from 'react';

const AdminPage = () => {
  return (
    <div className="">
      <div className="text-3xl font-bold text-center py-6">All News</div>
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
                  href="https://www.38north.org/2010/05/the-new-york-times-and-the-human-torpedo-a-close-second-place/"
                  title="Article: The New York Times and the Human Torpedo – A Close Second Place"
                  class="article__link"
                  itemprop="url"
                >
                  The New York Times and the Human Torpedo – A Close Second
                  Place{' '}
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
                  href="https://www.38north.org/author/38-north/"
                  title="Posts by 38 North"
                  class="author url fn ml-3"
                >
                  38 North
                </a>
              </div>

              <div className="article__topics">
                <span itemprop="about">
                  <a
                    href="https://www.38north.org/topics/james-church/"
                    rel="category tag"
                  >
                    James Church
                  </a>
                </span>
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
                <time datetime="2023-07-21">Jan 25 </time>
              </div>
              <div className="article__title" itemprop="name">
                <a
                  href="https://www.38north.org/2010/07/facing-reality-will-north-korea-adopt-a-more-rational-economic-policy/"
                  title="Article: Facing Reality: Will North Korea Adopt a More Rational Economic Policy?"
                  class="article__link"
                  itemprop="url"
                >
                  Facing Reality: Will North Korea Adopt a More Rational
                  Economic Policy?{' '}
                </a>
              </div>
              <div className="ml-20 flex">
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
                  title="Posts by 38 North"
                  className="author url fn"
                >
                  38 North
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
                <time datetime="2023-07-14">Jan 25 </time>
              </div>
              <div className="article__title" itemprop="name">
                <a
                  href="https://www.38north.org/2010/05/sanctions-an-important-component-of-u-s-north-korea-policy/"
                  title="Article: Sanctions: An Important Component of U.S. North Korea Policy"
                  class="article__link"
                  itemprop="url"
                >
                  Sanctions: An Important Component of U.S. North Korea Policy{' '}
                </a>
              </div>
              <div className="ml-[216px] flex">
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
                  href="https://www.38north.org/author/leon-v-sigal/"
                  title="Posts by Leon V. Sigal"
                  class="author url fn"
                  rel="author"
                >
                  Leon V. Sigal
                </a>
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
