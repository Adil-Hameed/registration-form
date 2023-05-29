import React from 'react'
import { Link } from 'react-router-dom'

export default function AgentType() {
    return (
        <div className='container-fluid'>


            <div className='row w-90 justify-content-md-between justify-content-around mx-auto rounded mt-5 '>
                <div className="row w-80 mx-auto text-white">
                    <div className="text-center mx-auto col-md-6 px-md-4 px-0 formgray-text">
                        <label htmlFor="type-agent">Type of Agent:</label>
                        <select id="type-agent" className='rounded p-2 mt-3 mb-5 w-100 credit-card-input formgray-text'>
                            <option>Select</option>
                            <option>Broker</option>
                            <option>Agent</option>
                            <option>Wholesaler</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="col-lg-10 mx-auto col-12  px-0 formgray-text text-center">
                        <h3 className='fs-33 fw-bold text-center mb-3 dark-blue-text'>
                            Do You Have the License to Sell? Enter your Real Estate License Number:
                        </h3>
                        <input type='text' className='rounded p-2 mt-3 mb-5  w-100 credit-card-input formgray-text' />
                    </div>
                    <div className="text-start col-md-6 px-md-4 px-0 formgray-text">
                        <label htmlFor="volume">Average Transaction volume (yearly):</label>
                        <select id='volume' className='rounded p-2 mt-3 mb-5 w-100 credit-card-input formgray-text'>
                            <option>Select</option>
                            <option>0-1 Million</option>
                            <option>1-5 Million</option>
                            <option>5-25 Million</option>
                            <option>+25 Million</option>
                        </select>
                    </div>
                    <div className="text-start col-md-6 px-md-4 px-0 formgray-text">
                        <label htmlFor="experience">Number of years of experience:</label>
                        <select id="experience" className='rounded p-2 mt-3 mb-5 w-100 credit-card-input formgray-text'>
                            <option>Select</option>
                            <option>Less than 1 year</option>
                            <option>1-3 Years</option>
                            <option>3-5 Years</option>
                            <option>5-10 Years</option>
                            <option>10+ Years</option>

                        </select>
                    </div>
                    <div className="text-start col-md-6 px-md-4 px-0 formgray-text">
                        <label htmlFor="company-name">Company Name (Optional):</label>
                        <input type='text' id="company-name" className='rounded p-2 my-3 w-100 credit-card-input formgray-text' />
                    </div>
                    <div className="text-start col-md-6 px-md-4 px-0 formgray-text">
                        <label htmlFor="company-web">Company’s Website:</label>
                        <input type='text' id="company-web" className='rounded p-2 my-3 w-100 credit-card-input formgray-text' />
                    </div>
                </div>
                <div className='text-center py-5'>
                    <Link to="/">
                        <p className='me-2 pointer d-inline-block border p-3 px-md-5 px-4 fw-semibold dark-blue-text mb-0 fw-normal rounded roboto'>
                            &lt; &lt; Back
                        </p>
                    </Link>
                    <Link to="/step3">
                        <p className='ms-2 pointer d-inline-block light-green p-3 px-md-5 px-4 fw-semibold dark-blue-text mb-0 fw-normal rounded roboto'>
                            Next &gt; &gt;
                        </p>
                    </Link>
                </div>
            </div>
        </div>

    )
}
