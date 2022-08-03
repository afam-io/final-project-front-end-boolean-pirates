import { useState } from 'react';

export default function Form() {
  const [imageSelected, setImageSelected] = useState('');
  const [formData, setFormData] = useState({});
  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const uploadImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', imageSelected);
    formData.append('upload_preset', 'redeemdefault');

    const data = await fetch(
      'https://api.cloudinary.com/v1_1/dcyovjaom/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    );
    const response = await data.json();
    setFormData({
      ...formData,
      url: response.url,
    });
  };

  const selectImage = (e) => {
    setImageSelected(e.target.files[0]);
    console.log(imageSelected);
  };

  return (
    <>
      {/* main div wraps all content*/}
      <div className='flex items-center justify-center w-full h-screen'>
        <div>
          <div className='md:grid md:grid-cols-2 md:gap-6'>
            {/* <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <p className="mt-1 text-sm text-green-backgroundtext">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>
              </div>
            </div> */}
            {/* wrapper with media queries for screen sizes */}
            <div className='mt-5 border md:mt-0 md:col-span-2'>
              {/* form wrapper */}
              <form action='#' method='POST'>
                {/* card effect wrapper  WIDTH TO BE ADJUSTED*/}
                <div className='shadow sm:rounded-md sm:overflow-hidden md:max-w-xl lg:max-w-xl xl:w-screen xl:w-xl'>
                  {/* wrapper to give padding inside card */}
                  <div className='px-4 py-5 space-y-6 bg-white sm:p-6'>
                    {/* wrapper that sets the columns up to control form widths*/}
                    <div className='grid grid-cols-3 gap-6'>
                      {/* media query to adjust the column size on a small screen */}
                      <div className='col-span-3 sm:col-span-3'>
                        {/* wrapper around tutorial input and label */}
                        <div className='py-3'>
                          <div className='pb-4'>
                            <label
                              htmlFor='FormTitle'
                              className='block font-sans text-lg font-semibold text-center alignContent: text-green-backgroundtext'>
                              Upload Tutorial Form
                            </label>
                          </div>
                          <label
                            htmlFor='about'
                            className='block font-sans text-sm font-semibold text-green-backgroundtext'>
                            Tutorial Title
                          </label>
                          <div className='mt-1'>
                            <input
                              onChange={handleInput}
                              id='title'
                              name='title'
                              rows={3}
                              className='block w-full px-2 py-1 mt-1 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm'
                              placeholder='type here'
                              defaultValue={''}
                            />
                          </div>
                        </div>

                        {/* wrapper around materials input and label */}
                        <div className='py-3'>
                          <label
                            htmlFor='about'
                            className='block font-sans text-sm font-semibold text-green-backgroundtext'>
                            Materials Needed
                          </label>
                          <div className='mt-1'>
                            <input
                              onChange={handleInput}
                              id='materials'
                              name='materials'
                              rows={3}
                              className='block w-full px-2 py-1 mt-1 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm'
                              placeholder='type here'
                              defaultValue={''}
                            />
                          </div>
                        </div>

                        {/* wrapper around description and input */}
                        <div className='py-3'>
                          <label
                            htmlFor='description'
                            className='block font-sans text-sm font-semibold text-green-backgroundtext'>
                            Brief description of your build
                          </label>
                          <div className='mt-1'>
                            <input
                              onChange={handleInput}
                              id='description'
                              name='description'
                              rows={3}
                              className='block w-full px-2 py-1 mt-1 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm'
                              placeholder='type here'
                              defaultValue={''}
                            />
                          </div>
                        </div>

                        {/* wrapper around ability level and media query */}
                        <div className='col-span-6 py-3 sm:col-span-3'>
                          <label
                            htmlFor='country'
                            className='block font-sans text-sm font-semibold text-green-backgroundtext'>
                            Ability Level
                          </label>
                          <select
                            onChange={handleInput}
                            id='level'
                            name='level'
                            autoComplete='country-name'
                            className='block w-full px-2 py-1 mt-1 font-sans bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm'>
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Advanced</option>
                          </select>
                        </div>

                        {/* wrapper around youtube URL and label */}
                        <div className='py-3'>
                          <label
                            htmlFor='youtubeURL'
                            className='block font-sans text-sm font-semibold text-green-backgroundtext'>
                            Youtube URL
                          </label>
                          <div className='mt-1'>
                            <input
                              onChange={handleInput}
                              id='youtubeURL'
                              name='youtubeURL'
                              rows={3}
                              className='block w-full px-2 py-1 mt-1 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm'
                              placeholder='URL'
                              defaultValue={''}
                            />
                          </div>
                        </div>

                        {/* wrapper around Image input */}
                        <div className='py-3'>
                          <label
                            htmlFor='instructions'
                            className='block font-sans text-sm font-semibold text-green-backgroundtext'>
                            Tutorial Instructions
                          </label>
                          <div className='mt-1'>
                            <textarea
                              onChange={handleInput}
                              id='instructions'
                              name='instructions'
                              rows={3}
                              className='block w-full px-2 py-1 mt-1 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm'
                              placeholder='Please be as detailed as you can.'
                              defaultValue={''}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* wrapper around upload */}
                    <div>
                      <label className='block font-sans text-sm font-semibold text-green-backgroundtext'>
                        Upload thumbnail image
                      </label>
                      <div className='flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-lg shadow-md'>
                        <div className='space-y-1 text-center'>
                          <svg
                            className='w-12 h-12 mx-auto text-gray-400'
                            stroke='currentColor'
                            fill='none'
                            viewBox='0 0 48 48'
                            aria-hidden='true'>
                            <path
                              d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                          <div className='flex font-sans text-sm text-gray-600'>
                            <label
                              htmlFor='file-upload'
                              className='relative font-sans font-medium text-green-600 bg-white rounded-md cursor-pointer hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'>
                              <span>Attach Image</span>
                              <input
                                onChange={selectImage}
                                id='file-upload'
                                name='file-upload'
                                type='file'
                                className='sr-only'
                              />
                            </label>
                            <p className='relative pl-1 font-sans text-black cursor-pointer hover:text-grey-400'>
                              or Drag and Drop
                            </p>
                          </div>

                          <p className='font-sans text-xs text-gray-500'>
                            PNG, JPG, GIF up to 10MB
                          </p>

                          <p className='font-sans text-xs text-red-500'>
                            {imageSelected
                              ? 'Image is selected'
                              : 'Image is NOT selected'}
                          </p>
                          <div className='font-sans text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-green-backgroundtext hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'>
                            <button onClick={uploadImage}>
                              {' '}
                              Click to Upload Image{' '}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* wrapper around save button */}
                  <div className='px-4 py-3 text-right bg-gray-50 sm:px-6'>
                    <button
                      onClick={handleSubmit}
                      type='submit'
                      className='inline-flex justify-center px-4 py-2 font-sans text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-green-backgroundtext hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'>
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
