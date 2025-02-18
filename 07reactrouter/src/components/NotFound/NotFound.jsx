import React from 'react'
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='text-center py-18'>
    <b className="text-4xl">404</b>
    <br />
    <p className="text-3xl">Page not found!</p>
    <br />
    <br />
    <Link
        className="inline-flex text-white items-center px-6 py-2 font-medium bg-orange-700 rounded-lg hover:opacity-75"
        to="/"
    >
        Redirect to Home
    </Link>
    </div>
  )
}

export default NotFound;
