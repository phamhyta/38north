import React from 'react';
import NoteViewer from './NoteViewer';
import NoteViewerNew from './NoteViewerNew';

const AdminPage = () => {
  function showModal() {
    document.getElementById('defaultModal').classList.toggle('hidden');
  }

  function showModalEdit() {
    document.getElementById('defaultModalEdit').classList.toggle('hidden');
  }

  function showModalDelete() {
    document.getElementById('defaultModalDelete').classList.toggle('hidden');
  }

  return (
    <div className="">
      <div className="text-3xl font-bold text-center py-6">All News</div>

      <div className="flex justify-end mx-36 cursor-pointer">
        <a
          className="rounded-lg bg-blue-600 text-white font-bold px-4 py-2 mr-4"
          href="/admin/crawl"
        >
          + Crawl data from url
        </a>
        <div
          className="rounded-lg bg-blue-600 text-white font-bold px-4 py-2"
          onClick={showModal}
        >
          + Create
        </div>
      </div>
      <div className="mx-32">
        <div className="ajax-target">
          <article className="article article--compact ajax-item">
            <div className="flex">
              <div className="article__date">
                <time datetime="2023-07-27">May 14 </time>
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
              <div className="ml-[150px] flex">
                <div
                  className="rounded-lg text-white font-medium bg-green-400 p-1 w-20 justify-center flex items-center cursor-pointer"
                  onClick={showModalEdit}
                >
                  Edit
                </div>
                <div
                  className="rounded-lg text-white font-medium bg-red-400 p-1 w-20 justify-center flex items-center ml-4 cursor-pointer"
                  onClick={showModalDelete}
                >
                  Delete
                </div>
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
          </article>
          <article
            className="article article--compact ajax-item"
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
              <div className="ml-[102px] flex">
                <div
                  className="rounded-lg text-white font-medium bg-green-400 p-1 w-20 justify-center flex items-center cursor-pointer"
                  onClick={showModalEdit}
                >
                  Edit
                </div>
                <div
                  className="rounded-lg text-white font-medium bg-red-400 p-1 w-20 justify-center flex items-center ml-4 cursor-pointer"
                  onClick={showModalDelete}
                >
                  Delete
                </div>
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
          </article>
          <article
            className="article article--compact ajax-item"
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
              <div className="ml-[167px] flex">
                <div
                  className="rounded-lg text-white font-medium bg-green-400 p-1 w-20 justify-center flex items-center cursor-pointer"
                  onClick={showModalEdit}
                >
                  Edit
                </div>
                <div
                  className="rounded-lg text-white font-medium bg-red-400 p-1 w-20 justify-center flex items-center ml-4 cursor-pointer"
                  onClick={showModalDelete}
                >
                  Delete
                </div>
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

      <div
        id="defaultModal"
        tabindex="-1"
        aria-hidden="true"
        class="fixed justify-center items-center top-96 left-96 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative w-full max-w-[1200px] max-h-full flex justify-center items-center">
          <div class="relative bg-gray-100 rounded-lg shadow mt-16 ml-[500px]">
            <div class="flex items-start justify-between p-4 border-b rounded-t">
              <h3 class="text-xl font-semibold text-gray-900 text-center w-full">
                Create a new article
              </h3>
            </div>
            <NoteViewerNew />
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
              <button
                data-modal-hide="defaultModal"
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Create
              </button>
              <button
                data-modal-hide="defaultModal"
                type="button"
                onClick={showModal}
                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        id="defaultModalEdit"
        tabindex="-1"
        aria-hidden="true"
        class="fixed justify-center items-center top-96 left-96 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative w-full max-w-[1200px] max-h-full flex justify-center items-center">
          <div class="relative bg-gray-100 rounded-lg shadow mt-16 ml-[500px]">
            <div class="flex items-start justify-between p-4 border-b rounded-t">
              <h3 class="text-xl font-semibold text-gray-900 text-center w-full">
                Edit article
              </h3>
            </div>
            <NoteViewer />
            {/* <div class="p-6 space-y-6">
              <div>
                <div>
                  <label htmlFor="title" className="my-2">
                    Title
                  </label>
                </div>
                <input
                  type="text"
                  name="title"
                  id="title"
                  defaultValue="The New York Times and the Human Torpedo – A Close Second
                  Place"
                  className="py-3 px-4 mt-2 rounded-md outline-none w-[750px]"
                />
              </div>
              <div>
                <div>
                  <label htmlFor="url" className="my-2">
                    URL
                  </label>
                </div>
                <input
                  type="text"
                  name="url"
                  id="url"
                  defaultValue="https://www.38north.org/2010/05/the-new-york-times-and-the-human-torpedo-a-close-second-place/"
                  className="py-3 px-4 mt-2 rounded-md outline-none w-[750px]"
                />
              </div>
              <div>
                <div>
                  <label htmlFor="date" className="my-2">
                    Date
                  </label>
                </div>
                <input
                  type="date"
                  name="date"
                  id="date"
                  defaultValue="2023-07-27"
                  className="py-3 px-4 mt-2 rounded-md outline-none w-[750px]"
                />
              </div>
              <div>
                <div>
                  <label htmlFor="authors" className="my-2">
                    Authors
                  </label>
                </div>
                <input
                  type="text"
                  name="authors"
                  id="authors"
                  defaultValue="38 North"
                  className="py-3 px-4 mt-2 rounded-md outline-none w-[750px]"
                />
              </div>
              <div>
                <div>
                  <label htmlFor="topics" className="my-2">
                    Topics
                  </label>
                </div>
                <input
                  type="text"
                  name="topics"
                  id="topics"
                  defaultValue="James Church"
                  className="py-3 px-4 mt-2 rounded-md outline-none w-[750px]"
                />
              </div>
            </div> */}
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
              <button
                data-modal-hide="defaultModal"
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Create
              </button>
              <button
                data-modal-hide="defaultModal"
                type="button"
                onClick={showModalEdit}
                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        id="defaultModalDelete"
        tabindex="-1"
        aria-hidden="true"
        class="fixed justify-center items-center top-96 left-96 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative w-full max-w-[1200px] max-h-full flex justify-center items-center">
          <div class="relative bg-gray-100 rounded-lg shadow mt-16 ml-[500px]">
            <div class="flex items-start justify-between p-4 border-b rounded-t">
              <h3 class="text-xl font-semibold text-gray-900 text-center w-full">
                Delete article
              </h3>
            </div>
            <div class="p-6 space-y-6">
              This article will be deleted, are you sure you want to delete it?
            </div>
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
              <button
                data-modal-hide="defaultModal"
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Delete
              </button>
              <button
                data-modal-hide="defaultModal"
                type="button"
                onClick={showModalDelete}
                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
