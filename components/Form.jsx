export default function Form() {
  return (
    <>
      {/* main div wraps all content*/}
      <div className="flex items-center justify-center h-screen w-full">
        <div>
          <div className="md:grid md:grid-cols-2 md:gap-6">
            {/* <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <p className="mt-1 text-sm text-green-backgroundtext">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>
              </div>
            </div> */}
            {/* wrapper with media queries for screen sizes */}
            <div className="mt-5 md:mt-0 md:col-span-2 border">
              {/* form wrapper */}
              <form action="#" method="POST">
                {/* card effect wrapper */}
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  {/* wrapper to give padding inside card */}
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6 ">
                    {/* wrapper that sets the columns up to control form widths*/}
                    <div className="grid grid-cols-3 gap-6">
                      {/* media query to adjust the column size on a small screen */}
                      <div className="col-span-3 sm:col-span-3">
                        {/* wrapper around tutorial input and label */}
                        <div className="py-3">
                          <label
                            htmlFor="about"
                            className="block text-sm font-semibold font-sans text-green-backgroundtext"
                          >
                            Tutorial Title
                          </label>
                          <div className="mt-1">
                            <input
                              id="about"
                              name="about"
                              rows={3}
                              className="shadow-md px-2 focus:outline-none focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-lg"
                              placeholder="type here"
                              defaultValue={""}
                            />
                          </div>
                        </div>

                        {/* wrapper around materials input and label */}
                        <div className="py-3">
                          <label
                            htmlFor="about"
                            className="block text-sm font-semibold font-sans text-green-backgroundtext"
                          >
                            Materials Needed
                          </label>
                          <div className="mt-1">
                            <input
                              id="materials-input"
                              name="materials-input"
                              rows={3}
                              className="shadow-md px-2 focus:outline-none focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-lg"
                              placeholder="type here"
                              defaultValue={""}
                            />
                          </div>
                        </div>

                        {/* wrapper around description and input */}
                        <div className="py-3">
                          <label
                            htmlFor="description"
                            className="block text-sm font-semibold font-sans text-green-backgroundtext"
                          >
                            Brief description of your build
                          </label>
                          <div className="mt-1">
                            <input
                              id="description"
                              name="description"
                              rows={3}
                              className="shadow-md px-2 focus:outline-none focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-lg"
                              placeholder="type here"
                              defaultValue={""}
                            />
                          </div>
                        </div>

                        {/* wrapper around ability level and media query */}
                        <div className="col-span-6 sm:col-span-3 py-3">
                          <label
                            htmlFor="country"
                            className="block text-sm font-semibold font-sans text-green-backgroundtext"
                          >
                            Ability Level
                          </label>
                          <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="mt-1 block w-full py-2 px-2 border border-gray-300 bg-white rounded-lg shadow-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm font-sans"
                          >
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Advanced</option>
                          </select>
                        </div>

                        {/* wrapper around youtube URL and label */}
                        <div className="py-3">
                          <label
                            htmlFor="youtubeURL"
                            className="block text-sm font-semibold font-sans text-green-backgroundtext"
                          >
                            Youtube URL
                          </label>
                          <div className="mt-1">
                            <input
                              id="youtubeURL"
                              name="youtubeURL"
                              rows={3}
                              className="shadow-md px-2 focus:outline-none focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-lg"
                              placeholder="URL"
                              defaultValue={""}
                            />
                          </div>
                        </div>

                        {/* wrapper around Image input */}
                        <div className="py-3">
                          <label
                            htmlFor="instructions"
                            className="block text-sm font-semibold font-sans text-green-backgroundtext"
                          >
                            Tutorial Instructions
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="instructions"
                              name="instructions"
                              rows={3}
                              className="shadow-md px-2 focus:outline-none focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-lg"
                              placeholder="Please be as detailed as you can."
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* wrapper around upload */}
                    <div>
                      <label className="block text-sm font-semibold font-sans text-green-backgroundtext">
                        Upload thumbnail image
                      </label>
                      <div className="shadow-md mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600 font-sans">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 font-sans"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1 font-sans">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500 font-sans">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* wrapper around save button */}
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-backgroundtext hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 font-sans"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* <textarea
                          id="about"
                          name="about"
                          rows={3}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder="you@example.com"
                          defaultValue={""}
                        />*\

// border border-red-700

/* <p className="mt-2 text-sm text-gray-500">
                          Brief description for your profile. URLs are
                          hyperlinked.
                        </p> */

/* <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Personal Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Use a permanent address where you can receive mail.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Street address
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-gray-700"
                      >
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        ZIP / Postal code
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Notifications
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Decide which communications you would like to receive and how.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <fieldset>
                    <legend className="sr-only">By Email</legend>
                    <div
                      className="text-base font-medium text-gray-900"
                      aria-hidden="true"
                    >
                      By Email
                    </div>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="comments"
                            name="comments"
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="comments"
                            className="font-medium text-gray-700"
                          >
                            Comments
                          </label>
                          <p className="text-gray-500">
                            Get notified when someones posts a comment on a
                            posting.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="candidates"
                            name="candidates"
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="candidates"
                            className="font-medium text-gray-700"
                          >
                            Candidates
                          </label>
                          <p className="text-gray-500">
                            Get notified when a candidate applies for a job.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="offers"
                            name="offers"
                            type="checkbox"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="offers"
                            className="font-medium text-gray-700"
                          >
                            Offers
                          </label>
                          <p className="text-gray-500">
                            Get notified when a candidate accepts or rejects an
                            offer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="contents text-base font-medium text-gray-900">
                      Push Notifications
                    </legend>
                    <p className="text-sm text-gray-500">
                      These are delivered via SMS to your mobile phone.
                    </p>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="push-everything"
                          name="push-notifications"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label
                          htmlFor="push-everything"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Everything
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-email"
                          name="push-notifications"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label
                          htmlFor="push-email"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          Same as email
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-nothing"
                          name="push-notifications"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label
                          htmlFor="push-nothing"
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          No push notifications
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> */
