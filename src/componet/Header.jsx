import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
      <div className='container-fluid'>
          <div className='row'>
              <div className='col-md-3 pad'>
                <div className='des'>
                <img class="imagepp img-1 m-0" src="Meubel House_Logos-05.png" />
                <  h1 className='text-fl'>Furniro</h1>
                </div>
              
              </div>
              <div className='col-md-1'></div>
              <div className='col-md-4 mt-3'>
                <ul className=' list'>
                
                  <li><p><Link className=" text-decoration-none colour-89"to="/">Home </Link></p></li>
                  <li><p><Link className=" text-decoration-none colour-89"to="/Shop">Shop</Link></p></li>
                  <li><p><Link className=" text-decoration-none colour-89"to="/About">About</Link></p></li>
                  <li><p><Link className=" text-decoration-none colour-89"to="/Contact">Contact</Link></p></li>
                
                  
                </ul>
              </div>
              <div className=' col-md-3  mt-3 pad1'>
                <ul className='list2'>
                  <li><Link to="/Contact"><i class="fa fa-user" aria-hidden="true"></i></Link></li>
                  <li><i class="fa fa-search" aria-hidden="true"></i></li>
                  <li><Link to="/Singleproduct"><i class="fa fa-heart" aria-hidden="true"></i></Link></li>
                  <li><Link to="/Cart"><i class="fa fa-shopping-basket" aria-hidden="true"></i></Link></li>
                </ul>
              </div>
              <div className='col-md-1'/>
            </div>
      </div>

    </>
  )
}
export default Header;