import React from "react";

export default function CardComponent() {
  return (
    <div className="ml-2 mt-5 flex flex-row">
      <div>
        <div className="h-100">
          <div className="h-100 w-full p-4 shadow-md lg:max-w-lg bg-white ">
            <div className="space-y-2 ">
              <h3 className="text-2xl font-semibold">HTTPeek</h3>
              <div className="flex flex-row">
                <div>Sniffer is not enabled</div>
                <div className="pl-40 ">
                  <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Enable
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" w-full p-4 shadow-md lg:max-w-lg bg-white mt-5">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">URLs</h3>
              <p className="text-gray-600">
                react with tailwind css simple card It is a long established
                fact that a reader will be distracted.
              </p>
            </div>
          </div>
        </div>
        <div className=" w-full p-4 shadow-md lg:max-w-lg bg-white mt-5">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">Cookies</h3>
            <p className="text-gray-600">
              react with tailwind css simple card It is a long established fact
              that a reader will be distracted.
            </p>
          </div>
        </div>
        <div className=" w-full p-4 shadow-md lg:max-w-lg bg-white mt-5">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">Post Data</h3>
            <p className="text-gray-600">
              react with tailwind css simple card It is a long established fact
              that a reader will be distracted.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className=" w-full p-4 shadow-md lg:max-w-lg bg-white mt-0 ml-5">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">Images</h3>
            <p className="text-gray-600">
              react with tailwind css simple card It is a long established fact
              that a reader will be distracted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
