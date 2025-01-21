import { useState } from "react";

function Singleproduct() {
    const [quantity, setQuantity] = useState(1);
    const handleMinus = () => {
        if (quantity == 1) { }
        else {
            const newQunatity = quantity - 1;
            setQuantity(newQunatity)
        }
    }
    const handleAdd = () => {
        const newQunatity = quantity + 1;
        setQuantity(newQunatity)
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-1">
                        <div className="pic">
                            <div>
                                <img class="image-7 " src="Group 94.png" />
                            </div>
                            <div>
                                <img class="image-7 " src="Group 96.png" />
                            </div>
                            <div>
                                <img class="image-7 " src="Group 97.png" />
                            </div>
                            <div>
                                <img class="image-7 " src="Group 98.png" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div>
                            <img class="image8 mt-3" src="Group 95.png" />
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div>
                            <h2 className="mt-2">Asgaard sofa</h2>
                            <p>Rs. 250,000.00</p>
                            <div>
                                <img class="" src="Group 88.png" />
                            </div>
                            <div>
                                <p className="mt-2">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                                </p>
                            </div>
                            <p>Size</p>

                            <div >
                                <button className="button4" type="button">L</button>
                                <button className="button4" type="button">XL</button>
                                <button className="button4" type="button">XS</button>
                            </div>
                            <p className="mt-3">Colour</p>
                            <div >
                                <button className="color-btn btn-color1" type="button"></button>
                                <button className="color-btn btn-color2" type="button"></button>
                                <button className="color-btn btn-color3" type="button"></button>
                            </div>
                            <div className="row mt-4">
                                <button className="col-md-3 btn-size" type="button">
                                    <div className="row">
                                        <div className="col-md-4" onClick={handleMinus}>
                                            <p>-</p>
                                        </div>
                                        <div className="col-md-4">
                                            <p>{quantity}</p>
                                        </div>
                                        <div className="col-md-4" onClick={handleAdd}>
                                            <p>+</p>
                                        </div>

                                    </div>
                                </button>
                                <div className="col-md-3 ">
                                     <button className=" btn-size-1" type="button">Add To Cart </button>
                                </div>
                                <div className="col-md-3">
                                    <button className="btn-size-1" type="button">+ Compare</button>
                                </div>
                                <div className="col-md-3"></div>

                            </div>


                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">

                    </div>
                    <div className="col-md-6 ">
                        <div className="bg-9"></div>
                        <div className="row mt-3">
                            <div className="col-md-3">
                                <div>
                                    <p className='text-muted'>SKU</p>
                                    <p className='text-muted'>Category</p>
                                    <p className='text-muted'>Tags</p>
                                    <p className="text-muted"> Share</p>

                                </div>

                            </div>
                            <div className="col-md-9">

                                <div >
                                    <p className='text-muted'>SS001</p>
                                    <p className='text-muted'>Sofas</p>
                                    <p className='text-muted'>Sofa, Chair, Home, Shop</p>
                                    <img class="im" src="i.png" />
                                    <img class="img " src="ii.png" />
                                    <img class="img" src="iii.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-9 mt-5 mb-5"></div>
                <div className="width ">
                    <div className="display">
                        <p className='text-6'>Description</p>
                        <p className='text-muted text-6'>Additional Information</p>
                        <p className='text-muted text-6'>Reviews [5]</p>
                    </div>
                    <div>
                        <p className="text-muted">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                        <p className=" text-muted">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className=" col-md-6">
                        <img class="img-2" src="png28.png" />
                    </div>
                    <div className="col-md-6">
                        <img class="img-2" src="png29.png" />
                    </div>

                </div>
                <div className="bg-9"></div>
                <div>
                    <h2 className="text-center mt-5 mb-4">Related Products</h2>
                    <div className="row">
                        <div className="col-md-3">
                            <img class="image  " src="png4.png" />
                            <div className="texbox">
                                <h5>Muggo</h5>
                                <p>Small mug</p>
                                <h5>Rp 150.000</h5>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <img class="image " src="png12.png" />
                            <div className="texbox">
                                <h5>Lolito</h5>
                                <p>Luxury big sofa</p>
                                <h5>Rp 7.000.000</h5>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <img class="image " src="png6.png" />
                            <div className="texbox">
                                <h5>Respira</h5>
                                <p>Outdoor bar table and stool</p>
                                <h5>Rp 500.000</h5>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <img class="image" src="png7.png" />
                            <div className="texbox">
                                <h5>Syltherine</h5>
                                <p>Stylish cafe chair</p>
                                <h5>Rp 2.500.000</h5>
                            </div>
                        </div>

                    </div>
                    <div className="text-center mb-5 ">
                        <button className="button2" type="button">Show More</button>
                    </div>
                </div>


            </div>
        </>
    )
}
export default Singleproduct;