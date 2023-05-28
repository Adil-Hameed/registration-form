import React from 'react'

export default function SuccessPage() {
    return (

        <>
            <div className='container-fluid  pb-4'>
                <div className='row w-90 justify-content-md-between justify-content-around mx-auto rounded  '>
                    <div className="row w-80 mx-auto text-white">
                        <div className='col-xxl-10  col-12 text-center mx-auto px-0 '>

                            <img src="asset/Group 1000006678.svg" className='img-fluid ms-4' alt='' />

                            <h2 className='fw-bolder dark-blue-text'>
                                Congratulations!
                            </h2>
                            <p className='mb-0 fs-24 formgray-text'>
                                You're almost there! We've sent a confirmation email to your inbox.
                            </p>

                        </div>

                    </div>
                </div>

            </div>

            <div className='container-fluid dark-blue py-5'>
                <div className='row w-90  justify-content-md-between justify-content-around mx-auto rounded'>
                    <div className="row w-80 mx-auto text-white">
                        <div className='col-xxl-10  col-12 text-center mx-auto px-0 '>
                            <h3 className='fw-semibold fs-33 mb-0 '>
                                Please check your email and <span style={{ color: "#2CAAE6" }}>confirm</span> your subscription to join our exclusive network of real estate agents.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid py-5'>
                <div className='row w-90  justify-content-md-between justify-content-around mx-auto rounded'>
                    <div className="row w-80 mx-auto text-white">
                        <div className='col-lg-8 col-md-10  col-12 text-center mx-auto px-0 '>
                            <p className='mb-0 fs-24 formgray-text'>
                                Thank you for choosing <span style={{ color: "#40FF62" }}>Sell2Rent</span>, we look forward to working with you!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
