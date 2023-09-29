import React from 'react'

function Banner() {
  return (
    <>
    <div className=" position-relative">
        <img className='w-100' src="http://cdn2-adventure-tours.themedelight.com/wp-content/uploads/2015/07/lake-tahoe.jpg" alt="" srcset="" />
        <div className='position-absolute banner-text'>
        <div className="text-center text-white"><p className="fs-5">Find your specical tour today </p> <h1 className="fs-1">With Adventure Tours</h1>
  <button type="button" className="btn btn-info text-white"><i className="bi bi-eye-fill" />View Tours</button></div>

        </div>
    </div>
    </>
  )
}

export default Banner