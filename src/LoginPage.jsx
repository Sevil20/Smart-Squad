// import React, { useState } from 'react'
// import {useDispatch} from "react-redux";
// import {login} from "../src/features/userSlice"

// const LoginPage = () => {
//     const [email,setEmail] = useState("");
//     const [password,setPassword] = useState("");

//     const dispatch = useDispatch();
//     const handleSubmit = (e) =>{
//         e.preventDefault();

//         dispatch(
//             login({
//             email:email,
//             password:password,
//             loggedIn:true
//         })
//         )
//     }
 
    
//   return (
//     //another accunt design
//     // <div>
//     //     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//     //     <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//     //       <img
//     //         className="mx-auto h-10 w-auto"
//     //         src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//     //         alt="Your Company"
//     //       />
//     //       <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//     //         Sign in to your account
//     //       </h2>
//     //     </div>

//     //     <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//     //       <form className="space-y-6" action="#" method="POST">
//     //         <div>
//     //           <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//     //             Email address
//     //           </label>
//     //           <div className="mt-2">
//     //             <input
//     //               id="email"
//     //               name="email"
//     //               type="email"
//     //               autoComplete="email"
//     //               required
//     //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//     //             />
//     //           </div>
//     //         </div>

//     //         <div>
//     //           <div className="flex items-center justify-between">
//     //             <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//     //               Password
//     //             </label>
//     //             <div className="text-sm">
//     //               <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
//     //                 Forgot password?
//     //               </a>
//     //             </div>
//     //           </div>
//     //           <div className="mt-2">
//     //             <input
//     //               id="password"
//     //               name="password"
//     //               type="password"
//     //               autoComplete="current-password"
//     //               required
//     //               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//     //             />
//     //           </div>
//     //         </div>

//     //         <div>
//     //           <button
//     //             type="submit"
//     //             className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//     //           >
//     //             Sign in
//     //           </button>
//     //         </div>
//     //       </form>

//     //       <p className="mt-10 text-center text-sm text-gray-500">
//     //         Not a member?{' '}
//     //         <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
//     //           Start a 14 day free trial
//     //         </a>
//     //       </p>
//     //     </div>
//     //   </div>
    
//     // </div>
//     <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
//             <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl" onSubmit={(e) => handleSubmit(e)}>
//                 <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
//                     Sign in to your account
//                 </h1>
//                 <form className="mt-6">
//                     <div className="mb-2">
//                         <label
//                             for="email"
//                             className="block text-sm font-semibold text-gray-800"
//                         >
//                             Email
//                         </label>
//                         <input
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             type="email"
//                             className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
//                         />
//                     </div>
//                     <div className="mb-2">
//                         <label
//                             for="password"
//                             className="block text-sm font-semibold text-gray-800"
//                         >
//                             Password
//                         </label>
//                         <input
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             type="password"
//                             className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
//                         />
//                     </div>
//                     <a
//                         href="#"
//                         className="text-xs text-purple-600 hover:underline"
//                     >
//                         Forget Password?
//                     </a>
//                     <div className="mt-6">
//                         <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
//                             Login
//                         </button>
//                     </div>
//                 </form>
//                 <div className="relative flex items-center justify-center w-full mt-6 border border-t">
//                     <div className="absolute px-5 bg-white">Or</div>
//                 </div>
//                 <div className="flex mt-4 gap-x-2">
//                     <button
//                         type="button"
//                         className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
//                     >
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 32 32"
//                             className="w-5 h-5 fill-current"
//                         >
//                             <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
//                         </svg>
//                     </button>
//                     <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 32 32"
//                             className="w-5 h-5 fill-current"
//                         >
//                             <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
//                         </svg>
//                     </button>
//                     <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600" type="submit">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 32 32"
//                             className="w-5 h-5 fill-current"
//                         >
//                             <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z" ></path>
//                         </svg>
//                     </button>
//                 </div>

//                 <p className="mt-8 text-xs font-light text-center text-gray-700">
//                     {" "}
//                     Don't have an account?{" "}
//                     <a
//                         href="#"
//                         className="font-medium text-purple-600 hover:underline"
//                     >
//                         Sign up
//                     </a>
//                 </p>
//             </div>
//         </div>
//     );

// }

// export default LoginPage

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import {useDispatch} from "react-redux";
import {login} from "../src/features/userSlice"

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function LoginPage() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
