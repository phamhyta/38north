import React, { useState } from 'react';
import NoteViewerCrawl from './NoteViewerCrawl';

const CrawlPage = () => {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  function addInput() {
    document.getElementById(
      'listInput'
    ).innerHTML += `<div class="flex w-full mt-4">
    <div class="w-1/2 mr-4">
      <label
        for="first_name"
        class="block mb-2 text-sm font-medium text-gray-900"
      >
        Enter URL:
      </label>
      <input
        type="text"
        id="first_name"
        class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="URL"
      />
    </div>
    <div class="w-1/2 flex">
      <div class="w-1/2 mr-4">
        <label
          for="first_name"
          class="block mb-2 text-sm font-medium text-gray-900"
        >
          Start day:
        </label>
        <input
          type="date"
          id="first_name"
          class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="URL"
        />
      </div>
      <div class="w-1/2">
        <label
          for="first_name"
          class="block mb-2 text-sm font-medium text-gray-900"
        >
          End day:
        </label>
        <input
          type="date"
          id="first_name"
          class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="URL"
        />
      </div>
    </div>
  </div>`;
  }

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const Crawl = async () => {
    document.getElementById('loading').classList.remove('hidden');
    await delay(3000);
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
  };

  console.log(value1, value2);

  return (
    <div className="">
      <div className="text-3xl font-bold text-center py-6">Crawl Page</div>
      <div className="flex justify-center items-center">
        <div className="w-2/3 mb-8 mt-6" id="listInput">
          <div className="flex w-full">
            <div className="w-1/2 mr-4">
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Enter URL:
              </label>
              <input
                type="text"
                id="first_name"
                class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="URL"
              />
            </div>
            <div className="w-1/2 flex">
              <div className="w-1/2 mr-4">
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Start day:
                </label>
                <input
                  type="date"
                  id="first_name"
                  class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="URL"
                  value={value1}
                  onChange={(e) => setValue1(e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  End day:
                </label>
                <input
                  type="date"
                  id="first_name"
                  class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="URL"
                  value={value2}
                  onChange={(e) => setValue2(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex w-full mt-4">
            <div className="w-1/2 mr-4">
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Enter URL:
              </label>
              <input
                type="text"
                id="first_name"
                class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="URL"
              />
            </div>
            <div className="w-1/2 flex">
              <div className="w-1/2 mr-4">
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Start day:
                </label>
                <input
                  type="date"
                  id="first_name"
                  class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="URL"
                  value={value1}
                />
              </div>
              <div className="w-1/2">
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  End day:
                </label>
                <input
                  type="date"
                  id="first_name"
                  class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="URL"
                  value={value2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <div class="flex items-center mb-4 w-1/4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            defaultChecked
            class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
          />
          <label
            for="default-checkbox"
            class="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
          >
            Apply date to all
          </label>
        </div>
      </div>
      <div className="flex justify-center items-center mb-10 mt-6">
        <div
          className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
          onClick={addInput}
        >
          Add more URL
        </div>
        <div
          className="bg-green-600 text-white px-4 py-2 rounded ml-6 cursor-pointer"
          onClick={Crawl}
        >
          Crawl
        </div>
      </div>
      <div
        className="justify-center items-center flex hidden mb-10"
        id="result"
      >
        <NoteViewerCrawl />
      </div>
      <div
        id="loading"
        class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center hidden"
      >
        <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        <h2 class="text-center text-white text-xl font-semibold">Loading...</h2>
        <p class="w-1/3 text-center text-white">
          This may take a few seconds, please don't close this page.
        </p>
      </div>
    </div>
  );
};

export default CrawlPage;
