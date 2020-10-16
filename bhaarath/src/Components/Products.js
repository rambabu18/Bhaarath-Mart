import React from 'react'
import {BrowserRouter,Route,Link} from "react-router-dom"; 
import ProductScreen from './ProductScreen';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import SigninScreen from './SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './RegisterScreen';
import ProductsScreen from './ProductsScreen';
function Products(){

    const usersignin = useSelector(state=> state.userSignin);
    const {userInfo} = usersignin;

    const openMenu = ()=>{
        document.querySelector(".sidebar").classList.add("open")
      }
      const closeMenu =()=>{
        document.querySelector(".sidebar").classList.remove("open")
      }

    return(
        <BrowserRouter>
        <div className="grid-container" >
        <header className="header" >
        <div className="brand" > 
            <button onClick={openMenu}>
              &#9776;
              </button>
              <Link to='/'  > Bhaarath Mart</Link>
           
        </div>

            <div className='nav-fill'>
            <div id='nav-xshop-container'  >
            <div id='nav-xshop' >
            <a href ='true'  className="nav-a">Mens</a>
            <a href ='true'   className="nav-a" >Women</a>
            <a href ='true'   className="nav-a" >Children</a>
            <a href ='true'  className="nav-a" >Electronic</a>
            <a href ='true'   className="nav-a" >Mobile</a>
            <a href ='true'  className="nav-a" >TV</a>
            <a href ='true'  className="nav-a" >Accessories</a>
            
            </div>
            </div>
            </div>
            

        <div className="header-links" >
            <a href="cart.html">Cart</a>
            {
                userInfo ? <Link to='/profile'>{userInfo.name}</Link> :
                <Link to="/signin"> <a href="signin.html" >signin</a> </Link>

            }
            
            
        </div>

    </header>

    <aside className="sidebar" >
        <h3>Shopping Categories</h3>
        <button className="sidebar-closemenu" onClick={closeMenu} >x</button>
        <ul className='sidebar-menu' >
           <li>
                <a href='true'  >Home</a>
            </li>

            <li>
                <a href= 'true'> <div>Mens Fashion </div> </a>
            </li>

            <li>
                <a href ='index.html' > <div>Womens Fashion </div>  </a>
            </li>

            <li>
                <a href='true' > <div>Children Wear </div></a>
            </li>

            <li>
               <a href = 'true' > <div> Mobile & Accessories </div>
                </a>
            </li>
            <li>
               <a href ='true' > <div> Electronics & Computers </div>
                </a>
            </li>
            <li>
               <a href ='true'> <div> Home Appliances  </div>
                </a>
            </li>
            <li>
               <a href='true' > <div> Toys  </div>
                </a>
            </li>
            <li>
               <a href ='true' > <div> Books </div>
                </a>
            </li>
            <li>
               <a href ='true' > <div> More </div>
                </a>
            </li>


        </ul>
    </aside>

    <main className='main' >\
        <div className="content" >
            <Route path='/products' component={ProductsScreen} />
            <Route path='/register' component={RegisterScreen} />
            <Route path='/signin' component={SigninScreen} />
            <Route path='/product/:id' component={ProductScreen}/>
            <Route path='/cart/:id?' component={CartScreen} />
            <Route path='/' exact={true} component={HomeScreen}/>
        
          </div>
         
      </main>

     <footer className='footer' >
    All Bhaarath Rights reserved....
      </footer>
     </div>
     </BrowserRouter>
    
    )}

export default Products