import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';


function SigninScreen(props) {
    const [ email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const userSignin = useSelector(state=> state.userSignin);
    const {loading, userInfo, error} = userSignin;

    const dispatch = useDispatch()

    useEffect(() => {
        if(userInfo){
            props.history.push('/');
        }
        return () => { 
            //
        }
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email,password))
    }
            
    return <div className='form'>
        <form onSubmit={submitHandler} >

            <ul className='form-container' >
                <li>
                    <h2>SignIn</h2>
                </li>
                <li>
                    {loading && <div>Loading....</div>}
                    {error && <div>Invalid Email or Password</div>}
                </li>

                <li>
                    <label htmlFor='email' > Email  </label>
                    <input type='email' name='email' id='email' onChange={(e) => setEmail(e.target.value)}>
                    </input>
                </li>

                <li>
                    <label htmlFor='password' >Password</label>
                    <input type='password' name='password' id='pwd' onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </li>

                <li>
                    <button type='submit' className='button primary' >Signin</button>
                </li>

                <li>
                    New Customer ?
            </li>

                <li>
                    <Link to='/register' className='button secondary text-center ' > Create your Account</Link>
                </li>

            </ul>
        </form>
    </div>

}
export default SigninScreen