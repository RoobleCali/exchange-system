import React from "react";

function Cards() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
      {/* left card crd 1 */}
      <div className="text-white bg-blue-400 rounded-xl">
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <p className="flex flex-col space-y-3">
              <span>Main Balance</span>
              <span className="text-xl font-bold">$88,455.12</span>
            </p>
            {/* master card icon */}
            <div className="w-16 -mt-5 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 48 48"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#f44336"
                  d="M18,24c0-4.903,2.363-9.243,6-11.98C21.491,10.132,18.382,9,15,9C6.716,9,0,15.716,0,24
c0,8.284,6.716,15,15,15c3.382,0,6.491-1.133,9-3.02C20.363,33.242,18,28.903,18,24z"
                />
                <path
                  fill="#ff9800"
                  d="M33,9c-3.382,0-6.491,1.132-9,3.02c3.637,2.737,6,7.077,6,11.98s-2.363,9.242-6,11.98
c2.509,1.888,5.618,3.02,9,3.02c8.284,0,15-6.716,15-15C48,15.716,41.284,9,33,9z"
                />
                <ellipse cx="24" cy="24" fill="#ff7300" rx="6" ry="11.98" />
              </svg>
            </div>
          </div>

          <div>
            <div className="flex justify-between mt-10">
              <p className="flex flex-col">
                <span className="text-sm text-gray-200">VALID THRU</span>
                <span className="text-sm">12/20</span>
              </p>
              <p className="flex flex-col">
                <span className="text-sm text-gray-200">VALID THRU</span>
                <span className="text-sm">12/20</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* left card crd 1 */}
      <div className="bg-[#FF9220] rounded-xl text-white">
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <p className="flex flex-col space-y-3">
              <span>Main Balance</span>
              <span className="text-xl font-bold">$88,455.12</span>
            </p>
            {/* master card icon */}
            <div className="w-16 -mt-5 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 48 48"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#f44336"
                  d="M18,24c0-4.903,2.363-9.243,6-11.98C21.491,10.132,18.382,9,15,9C6.716,9,0,15.716,0,24
c0,8.284,6.716,15,15,15c3.382,0,6.491-1.133,9-3.02C20.363,33.242,18,28.903,18,24z"
                />
                <path
                  fill="#ff9800"
                  d="M33,9c-3.382,0-6.491,1.132-9,3.02c3.637,2.737,6,7.077,6,11.98s-2.363,9.242-6,11.98
c2.509,1.888,5.618,3.02,9,3.02c8.284,0,15-6.716,15-15C48,15.716,41.284,9,33,9z"
                />
                <ellipse cx="24" cy="24" fill="#ff7300" rx="6" ry="11.98" />
              </svg>
            </div>
          </div>

          <div>
            <div className="flex justify-between mt-10">
              <p className="flex flex-col">
                <span className="w-auto text-sm text-gray-200 truncate xl:w-auto lg:w-14">
                  VALID THRU
                </span>
                <span className="text-sm">12/20</span>
              </p>
              <p className="flex flex-col">
                <span className="text-sm text-gray-200">VALID THRU</span>
                <span className="text-sm">12/20</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* left card crd 1 */}
      <div className="bg-[#BC1EE3] rounded-xl text-white">
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <p className="flex flex-col space-y-3">
              <span>Main Balance</span>
              <span className="text-xl font-bold">$88,455.12</span>
            </p>
            {/* master card icon */}
            <div className="w-16 -mt-5 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 48 48"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#f44336"
                  d="M18,24c0-4.903,2.363-9.243,6-11.98C21.491,10.132,18.382,9,15,9C6.716,9,0,15.716,0,24
c0,8.284,6.716,15,15,15c3.382,0,6.491-1.133,9-3.02C20.363,33.242,18,28.903,18,24z"
                />
                <path
                  fill="#ff9800"
                  d="M33,9c-3.382,0-6.491,1.132-9,3.02c3.637,2.737,6,7.077,6,11.98s-2.363,9.242-6,11.98
c2.509,1.888,5.618,3.02,9,3.02c8.284,0,15-6.716,15-15C48,15.716,41.284,9,33,9z"
                />
                <ellipse cx="24" cy="24" fill="#ff7300" rx="6" ry="11.98" />
              </svg>
            </div>
          </div>

          <div>
            <div className="flex justify-between mt-10">
              <p className="flex flex-col">
                <span className="text-sm text-gray-200">VALID THRU</span>
                <span className="text-sm">12/20</span>
              </p>
              <p className="flex flex-col">
                <span className="text-sm text-gray-200">VALID THRU</span>
                <span className="text-sm">12/2021</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* left card crd 1 */}
      <div className="bg-[#1EC090]  rounded-xl text-white">
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <p className="flex flex-col space-y-3">
              <span>Main Balance</span>
              <span className="text-xl font-bold">$88,455.12</span>
            </p>
            {/* master card icon */}
            <div className="w-16 -mt-5 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 48 48"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#f44336"
                  d="M18,24c0-4.903,2.363-9.243,6-11.98C21.491,10.132,18.382,9,15,9C6.716,9,0,15.716,0,24
c0,8.284,6.716,15,15,15c3.382,0,6.491-1.133,9-3.02C20.363,33.242,18,28.903,18,24z"
                />
                <path
                  fill="#ff9800"
                  d="M33,9c-3.382,0-6.491,1.132-9,3.02c3.637,2.737,6,7.077,6,11.98s-2.363,9.242-6,11.98
c2.509,1.888,5.618,3.02,9,3.02c8.284,0,15-6.716,15-15C48,15.716,41.284,9,33,9z"
                />
                <ellipse cx="24" cy="24" fill="#ff7300" rx="6" ry="11.98" />
              </svg>
            </div>
          </div>

          <div>
            <div className="flex justify-between mt-10">
              <p className="flex flex-col">
                <span className="text-sm text-gray-200">VALID THRU</span>
                <span className="text-sm">12/20</span>
              </p>
              <p className="flex flex-col">
                <span className="text-sm text-gray-200">VALID THRU</span>
                <span className="text-sm">12/20</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
