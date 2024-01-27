"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import UserList from "../components/UserList";

const AddUser = () => {
  const API_URI = "http://localhost:8080/api/v1/users";
  const [isOpen, setIsOpen] = useState(false);
  const [responseUser, setResponseUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });
  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  const handleChange = (event) => {
    const value = event.target.value;
    setUser({ ...user, [event.target.name]: value });
  };

  const saveUser = async (e) => {
    e.preventDefault();
    const response = await fetch(API_URI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Some Went Wrong");
    }
    const _user = await response.json();
    setResponseUser(_user);
    reset(e);
  };

  const reset = (e) => {
    e.preventDefault();
    setUser({
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
    });
    setIsOpen(false);
  };

  return (
    <>
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
                  Add New User
                </Dialog.Title>
                <div className="flex max-w-md max-auto">
                  <div className="py-2 px-2">
                    <div className="h-60 my-4">
                      <label className="block text-gray-600 text-sm font-normal">
                        FirstName
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        className="h-10 px-2 w-96 border py-3 mt-2"
                        placeholder="John"
                        value={user.firstName}
                        onChange={(e) => handleChange(e)}
                        required
                      ></input>
                      <label className="block text-gray-600 text-sm font-normal">
                        LastName
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        className="h-10 px-2 w-96 border py-3 mt-2"
                        placeholder="Doe"
                        value={user.lastName}
                        onChange={(e) => handleChange(e)}
                        required
                      ></input>
                      <label className="block text-gray-600 text-sm font-normal">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="emailId"
                        className="h-10 px-2 w-96 border py-3 mt-2"
                        value={user.emailId}
                        required
                        placeholder="example@examplemail.com"
                        onChange={(e) => handleChange(e)}
                      ></input>
                      <button
                        className="mt-3 rounded bg-green-600 text-white px-6 py-2 font-semibold hover:bg-green-950 hover:text-white absolute bottom-8 right-32"
                        type="button"
                        onClick={saveUser}
                      >
                        Save
                      </button>
                      <button
                        className="mt-3 rounded bg-red-600 text-white px-6 py-2 font-semibold hover:bg-red-950 hover:text-white absolute bottom-8 right-8"
                        type="button"
                        onClick={reset}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <UserList user={responseUser} />
    </>
  );
};

export default AddUser;
