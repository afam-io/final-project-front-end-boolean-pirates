export default function SpecificTutorialCard({
  cardId,
  title,
  likes,
  videoUrl,
  ability,
  materials,
  instructions,
}) {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div className=" mt-10 max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">

          <h1 className="text-xl pb-3 float-left text-green-backgroundtext font-semibold font-sans">
            {tutorialData.title}

          </h1>
          <h1 className="text-xl float-right text-green-backgroundtext font-semibold font-sans">
            {likes.length} Likes
          </h1>
          <img
            className="rounded-t-lg text-green-backgroundtext"
            src={videoUrl}
            alt="image of the youtube thumbnail"
          />
        </a>

        <h1 className="text-xl pt-3 text-green-backgroundtext font-semibold font-sans">
          Level:{" "}

        </h1>
        <p className="font-semibold text-green-backgroundtext">
          {tutorialData.ability}
        </p>

        <h1 className="text-xl text-green-backgroundtext font-semibold font-sans mt-2">

          Materials:{" "}

        </h1>
        <p className="font-semibold text-green-backgroundtext">
          {tutorialData.materials}
        </p>
        <div className="mt-2">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-backgroundtext">
              Instructions:
            </h5>
          </a>
          <p className="mb-3 font-normal text-green-backgroundtext">
            {instructions}
          </p>
        </div>
      </div>

      {/* Comment component */}
      <div className="flex items-center justify-center shadow-lg mt-5 mx-5 mb-4 max-w-lg">
        <form className="w-full max-w-xl bg-white rounded-lg border px-4 pt-2 border-gray-200 shadow-md">
          <div className="flex flex-wrap -mx-3 mb-6">
            <h2 className="px-4 pt-3 pb-2 text-green-backgroundtext">
              Add a new comment
            </h2>
            <div className="w-full md:w-full px-3 mb-2 mt-2">
              <textarea
                className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium text-green-backgroundtext focus:outline-none focus:bg-white"
                name="body"
                placeholder="Type Your Comment"
                required
              ></textarea>
            </div>
            <div className="w-full flex items-start md:w-full px-3">
              <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                <svg
                  fill="none"
                  className="w-5 h-5 text-gray-600 mr-1"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                ></svg>
              </div>
              <div className="-mr-1">
                <input
                  type="submit"
                  className="bg-green-backgroundtext text-white-text font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1  hover:bg-green-700"
                  value="Post Comment"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
