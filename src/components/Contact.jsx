import React from 'react';
import Title from './Title';

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form action="https://getform.io/f/266f5ada-1c88-43be-a30c-113268739ae4"
        method="POST"
        className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="name"
            name="name"
            placeholder="Name"
            required
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="name"
            name="email"
            placeholder="Email"
            pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
            required
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="message"
            placeholder="Message"
            cols="30"
            rows="10" 
            required
            className="mb-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <button
          type="submit"
          className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
          >
            Send a Message
          </button>
          
        </form>

      </div>
    </div>
  )
}

export default Contact