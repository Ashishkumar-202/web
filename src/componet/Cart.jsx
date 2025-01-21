function Cart() {
    return (
        <>
            <div className="container-fluid">
                <img class="image3 " src="png30.png" />

                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="main-bg-1 mt-5">
                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-2">
                                        <p>Product</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p>Price</p>
                                    </div>
                                    <div className="col-md-2">
                                        <p>Quantity</p>
                                    </div>
                                    <div className="col-md-2">
                                        <p>Subtotal</p>

                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <img class=" imag " src="png32.png" />
                                </div>
                                <div className="col-md-2 mt-5">
                                    <p>Asgaard sofa</p>
                                </div>
                                <div className="col-md-3 mt-5">
                                    <p>Rs. 250,000.00</p>
                                </div>
                                <div className="col-md-2 mt-5">
                                    <button className="btn-8" type="button">1</button>
                                </div>
                                <div className="col-md-2 mt-5">
                                    <p>Rs. 250,000.00</p>

                                </div>
                                <div className="col-md-1 mt-5">
                                    <img class=" imag  " src="png31.png" />
                                </div>
                            </div>


                        </div>
                        <div className="col-md-4 mt-5 mb-5">
                            <div className="main-bg ">
                                <h2 className="text-center">Cart Totals</h2>
                                <div className="row">
                                    <div className="col-md-2"></div>
                                    <div className="col-md-3">
                                        <p className="ml-5">Subtotal</p>
                                        <p className="ml-5">Total</p>
                                    </div>
                                    <div className="col-md-7">
                                        <p>Rs. 250,000.00</p>
                                        <p>Rs. 250,000.00</p>
                                    </div>
                                </div>
                                <div className="text-center mb-5">
                                    <button className="btn-7">Check Out</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-4" >
                    <img class="image3 " src="png17.png" />
                </div>
            </div>
        </>
    )
}
export default Cart;