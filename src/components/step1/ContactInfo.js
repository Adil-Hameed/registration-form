import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactInfo() {
    return (
        <div className='container-fluid'>


            <div className='row w-90 justify-content-md-between justify-content-around mx-auto rounded  py-3 '>
                <h3 className='fs-33 fw-bold text-center mb-3 dark-blue-text'>
                Confirm your contact details
                </h3>
            </div>
            <div className="row w-80 mx-auto text-white">
                <div className="text-start col-md-6 px-md-4 px-0 dark-blue-text">
                    <label htmlFor="first-name">First name:</label>
                    <input type='text' id="first-name" className='rounded p-2 my-3 w-100 credit-card-input dark-blue-text' />
                </div>
                <div className="text-start col-md-6 px-md-4 px-0 dark-blue-text">
                    <label htmlFor="Last-name">Last name:</label>
                    <input type='text' id="Last-name" className='rounded p-2 my-3 w-100 credit-card-input dark-blue-text' />
                </div>
                <div className="text-start col-md-6 px-md-4 px-0 dark-blue-text">
                    <label htmlFor="mobile">Mobile: </label>
                    <input type='text' id="mobile" className='rounded p-2 my-3 w-100 credit-card-input dark-blue-text' />
                </div>
                <div className="text-start col-md-6 px-md-4 px-0 dark-blue-text">
                    <label htmlFor="email">Email: </label>
                    <input type='text' id="email" className='rounded p-2 my-3 w-100 credit-card-input dark-blue-text' />
                </div>
            </div>

         
            <div className='text-center py-5'>
                <Link to="/step2">
                    <p className='pointer d-inline-block light-green p-3 px-5 fw-semibold dark-blue-text mb-0 fw-normal rounded roboto'>
                        Next &gt; &gt;
                    </p>
                </Link>
            </div>
        </div>
    )
}
