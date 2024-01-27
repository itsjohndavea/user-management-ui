import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { signOut } from "next-auth/react";
const Logout = () => {
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <div className="container mx-auto my-8">
        <div className="h-12">
          <button
            onClick={openModal}
            type="button"
            className="rounded bg-slate-600 text-white px-6 py-2 font-semibold hover:bg-slate-950 hover:text-white"
          >
            Add User
          </button>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Panel className=" inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-black"
                >
                  LOGOUT
                </Dialog.Title>
                <div className="flex max-w-md max-auto">
                  <div className="py-2 px-2">
                    <div className="h-60 my-4">
                      <h1>Are you sure you want to download?</h1>
                      <button
                        className="mt-3 rounded bg-green-600 text-white px-6 py-2 font-semibold hover:bg-green-950 hover:text-white absolute bottom-8 right-32"
                        type="button"
                        onClick={signOut}
                      >
                        Yes
                      </button>
                      <button
                        className="mt-3 rounded bg-red-600 text-white px-6 py-2 font-semibold hover:bg-red-950 hover:text-white absolute bottom-8 right-8"
                        type="button"
                        onClick={reset}
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
export default Logout;
