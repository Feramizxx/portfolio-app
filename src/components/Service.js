import React from "react";
import service1 from "./service1.jpg"
import service2 from "./service2.jpg"
import service3 from "./service3.jpg"
import service4 from "./service4.png"
import service5 from "./service5.png"
import service6 from "./service6.jpg"

export default function Service() {


    return (
        <>
            <div className="container service mt-3 mb-5">
                <div className="text-center  post-heading">
                    <h3 className="display-4 font-weight-bold">Projects</h3>
                    <hr className="w-50 mx-auto " />
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4 col-12 pb-5">
                        <div class="card">
                            <img class="card-img-top" src={service1} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-dark">Go somewhere</a>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-6 col-lg-4 col-12 pb-5">
                        <div class="card">
                            <img class="card-img-top" src={service2} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-dark">Go somewhere</a>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-6 col-lg-4 col-12 pb-5">
                        <div class="card">
                            <img class="card-img-top " src={service3} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-dark">Go somewhere</a>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-6 col-lg-4 col-12 pb-5">
                        <div class="card">
                            <img class="card-img-top" src={service4} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-dark">Go somewhere</a>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-6 col-lg-4 col-12 pb-5">
                        <div class="card">
                            <img class="card-img-top" src={service5} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-dark">Go somewhere</a>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-6 col-lg-4 col-12 pb-5">
                        <div class="card">
                            <img class="card-img-top" src={service6} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-dark">Go somewhere</a>
                            </div>
                        </div>

                    </div>
                    <button className='btn mx-auto button w-50'><a href='#' className='buttonContent '>KNOW MORE</a></button>
                </div>

            </div>

          

        </>
    );
}