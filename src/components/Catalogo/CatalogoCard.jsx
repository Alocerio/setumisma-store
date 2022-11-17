import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ModalRopa from "./ModalRopa";

const CatalogoCard = ({ name, stock, tipo, precio }) => {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full justify-center flex hover:shadow-xl  rounded border-black">
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 ">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="container px-5 py-24 mx-auto">
                      <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <img
                          alt="ecommerce"
                          class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                          src="https://dummyimage.com/400x400"
                        />
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                          <h2 class="text-sm title-font text-gray-500 tracking-widest">
                            {tipo.toUpperCase()}
                          </h2>
                          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                            {name}
                          </h1>
                          <div class="flex mb-4">
                            <span class="flex items-center">
                              <svg
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-4 h-4 text-indigo-500"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                              <svg
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-4 h-4 text-indigo-500"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                              <svg
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-4 h-4 text-indigo-500"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                              <svg
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-4 h-4 text-indigo-500"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                              <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-4 h-4 text-indigo-500"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                              </svg>
                              <span class="text-gray-600 ml-3">4 Reviews</span>
                            </span>
                            <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                              <a class="text-gray-500">
                                <svg
                                  fill="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  class="w-5 h-5"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                              </a>
                              <a class="text-gray-500">
                                <svg
                                  fill="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  class="w-5 h-5"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                              </a>
                              <a class="text-gray-500">
                                <svg
                                  fill="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  class="w-5 h-5"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>
                              </a>
                            </span>
                          </div>
                          <p class="leading-relaxed">
                            Fam locavore kickstarter distillery. Mixtape
                            chillwave tumeric sriracha taximy chia microdosing
                            tilde DIY. XOXO fam indxgo juiceramps cornhole raw
                            denim forage brooklyn. Everyday carry +1 seitan
                            poutine tumeric. Gastropub blue bottle austin
                            listicle pour-over, neutra jean shorts keytar banjo
                            tattooed umami cardigan.
                          </p>
                          <div class="flex sm:flex-row flex-col mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div class="flex">
                              <span class="mr-3">Color</span>
                              <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                              <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                              <button class="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                            </div>
                            <div class="flex ml-6 items-center">
                              <span class="mr-3">Size</span>
                              <div class="relative">
                                <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                  <option>SM</option>
                                  <option>M</option>
                                  <option>L</option>
                                  <option>XL</option>
                                </select>
                                <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                  <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    class="w-4 h-4"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M6 9l6 6 6-6"></path>
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="flex">
                            <span class="title-font font-medium text-2xl text-gray-900">
                              ${precio}
                            </span>
                            <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                              Agregar
                            </button>
                            <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                              <svg
                                fill="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-5 h-5"
                                viewBox="0 0 24 24"
                              >
                                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cerrar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="https://dummyimage.com/420x260"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {tipo.toUpperCase()}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {name}
          </h2>
          <p className="mt-1">${precio}</p>
        </div>
      </button>
    </div>
  );
};

export default CatalogoCard;
