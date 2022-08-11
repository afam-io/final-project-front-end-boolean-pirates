import { useState } from "react";
import { useRouter } from "next/router"

export default function Form({ user }) {
  const router = useRouter()
  const [error, setError] = useState("")
  const [imageSelected, setImageSelected] = useState("");
  const [formData, setFormData] = useState({creator: user?.name, favourites:[user?.picture], ability: "Beginner"});
  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  //handles the submits on the form post request
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.imageUrl) {
    const data = await fetch('https://backend-soc.herokuapp.com/tutorials', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type':'application/json'
      },
      });
      const response = await data.json()
      const id = response._id
      router.push(`/specifictutorial?cardId=${id}`)}
      setError('Please click here')
  };

  //post request which uploads image to cloudinary 
  const uploadImage = async (e) => {
    e.preventDefault();
    const imageData = new FormData();
    imageData.append("file", imageSelected);
    imageData.append("upload_preset", "redeemdefault");

        const data = await fetch('https://api.cloudinary.com/v1_1/dcyovjaom/image/upload', {
        method: 'POST',
        body: imageData
        });
        const response = await data.json()
        setError('')
        setFormData ({
          ...formData, 
          "imageUrl" : response.url
      }
    );
  };
  //function that selects the image
  const selectImage = (e) => {
    setImageSelected(e.target.files[0]);
  };

  return (
    <>
      {/* main div wraps all content*/}
      <div className="flex items-center justify-center w-full">
        <div>
          <div className="md:grid md:grid-cols-2 md:gap-6">
            {/* wrapper with media queries for screen sizes */}
            <div className="mt-5 md:mt-0 md:col-span-2 border">
              {/* form wrapper action="#" method="POST"*/}
              <form onSubmit={handleSubmit}>
                {/* card effect wrapper  WIDTH TO BE ADJUSTED*/}
                <div className="shadow w-screen lg:max-w-3xl rounded-md xl:max-w-4xl">
                  {/* wrapper to give padding inside card */}
                  <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                    {/* wrapper that sets the columns up to control form widths*/}
                    <div className="grid grid-cols-3 gap-6">
                      {/* media query to adjust the column size on a small screen */}
                      <div className="col-span-3 sm:col-span-3">
                        {/* wrapper around tutorial input and label */}
                        <div className="py-3">
                          <div className="pb-4">
                            <label
                              htmlFor="FormTitle"
                              className="alignContent: text-center block text-lg font-semibold font-sans text-green-backgroundtext"
                            >
                              Upload Tutorial Form
                            </label>
                          </div>
                          <label
                            htmlFor="about"
                            className="block text-sm font-semibold font-sans text-green-backgroundtext"
                          >
                            Tutorial Title
                          </label>
                          <div className="mt-1">
                            <input
                              onChange={handleInput}
                              id="title"
                              name="title"
                              rows={3}
                              className="shadow-md px-2 py-1 focus:outline-none focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-lg"
                              placeholder="type here"
                              defaultValue={""}
                              required
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
                              onChange={handleInput}
                              id="materials"
                              name="materials"
                              rows={3}
                              className="shadow-md px-2 py-1 focus:outline-none focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-lg"
                              placeholder="type here"
                              defaultValue={""}
                              required
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
                            onChange={handleInput}
                            id="ability"
                            name="ability"
                            autoComplete="country-name"
                            className="mt-1 block w-full py-1 px-2 border border-gray-300 bg-white rounded-lg shadow-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm font-sans"
                            required
                          >
                            <option value="beginner">Beginner</option>
                            <option>Intermediate</option>
                            <option>Advanced</option>
                          </select>
                        </div>

                        {/* wrapper around youtube URL and label */}
                        <div className="py-3">
                          <label
                            htmlFor="videoUrl"
                            className="block text-sm font-semibold font-sans text-green-backgroundtext"
                          >
                            Video URL
                          </label>
                          <div className="mt-1">
                            <input
                              onChange={handleInput}
                              id="videoUrl"
                              name="videoUrl"
                              rows={3}
                              className="shadow-md py-1 px-2 focus:outline-none focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-lg"
                              placeholder="URL"
                              defaultValue={""}
                              required
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
                              onChange={handleInput}
                              id="instructions"
                              name="instructions"
                              rows={3}
                              className="shadow-md px-2 py-1 focus:outline-none focus:ring-green-500 focus:border-green-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-lg"
                              placeholder="Please be as detailed as you can."
                              defaultValue={""}
                              required
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
                          {!imageSelected ?
                          <div className="flex flex-col text-s text-gray-600 font-sans">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 font-sans"
                            >
                              <span className="border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-backgroundtext hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 font-sans p-2">Select Your Image Here</span>
                              <input
                                onChange={selectImage}
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only "
                                required
                              />
                            </label>
                          <p className="text-s text-gray-500 font-sans p-4">
                            PNG, JPG, GIF up to 10MB
                          </p>
                          </div>

                          :
                          <div className="border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-backgroundtext hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 font-sans p-2">
                            {(!formData.imageUrl) ?
                            <button onClick={uploadImage}>
                              Click to Upload Image
                            </button>
                            : 
                            <p className="hover:none">Image Uploaded Successfully</p>
                            }
                            <p>{error}</p>
                          </div>}
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
                      Submit
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
