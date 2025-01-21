import { Link } from 'react-router-dom';
function Footer() {
    return (
        <>
            <div className="container-fluid">
                <div className="border"></div>

                <div className="container  mt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <h2 className='mb-4'>Funiro</h2>
                            <p className='text-muted mb-0'>400 University Drive Sulite 200 Corol</p>
                            <p className='text-muted mb-0'>Gables,</p>
                            <p className='text-muted mb-0'>FL 33134 USA</p>
                        </div>
                        <div className="col-md-2">
                            <p className='text-muted'>Links</p>
                            <p><Link className=" text-decoration-none colour-89 mb-4 fw-bold" to="/">Home </Link></p>
                            <p><Link className=" text-decoration-none colour-89 mb-4 fw-bold" to="/Shop">Shop</Link></p>
                            <p><Link className=" text-decoration-none colour-89 mb-4 fw-bold" to="/Contact">about</Link></p>
                            <p><Link className=" text-decoration-none colour-89 mb-4 fw-bold" to="/Contact">Contact</Link></p>

                        </div>
                        <div className="col-md-2">
                            <p className='text-muted mb-4'>Help</p>
                            <p className='mb-4 fw-bold fw-bold'>Payment Option</p>
                            <p className='mb-4 fw-bold'>Returns</p>
                            <p className='mb-4 fw-bold'>Privacy</p>

                        </div>
                        <div className="col-md-4">
                            <div className='row'>
                            <p className='text-muted'>Newsletter</p>
                            </div>
                            <div className='row'>
                                <div className='col-md-8 p-0'>
                                    <input className='main-news' type="email" placeholder=" Email" onClick="msg()"></input>
                                </div>
                                <div className='col-md-4 p-0'>
                                    <button className='main-news'>Subscribe</button>
                                </div>
                            </div>                                         
                        </div>
                    </div>
                    <div className="border"></div>
                    <h4 className="bn-2">2023 furino. All right reverved</h4>
                </div>
            </div>
        </>
    )
}
export default Footer