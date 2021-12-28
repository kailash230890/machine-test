import React from 'react'
import { Link } from 'react-router-dom';


const UserPage = () => {
    return (

        <div class="m-4">
            <form action="/examples/actions/confirmation.php" method="post">
                <div class="row mb-3">
                    <label for="inputEmail" class="col-sm-2 col-form-label">Username:</label>
                    <div class="col-sm-4">
                        <label for="inputEmail" class="col-sm-2 col-form-label">DummyName</label>
                        {/* <input type="email" class="form-control" id="inputEmail" placeholder="Email" required> */}
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password:</label>
                    <div class="col-sm-3">
                        <input type="password" class="form-control" id="inputPassword" placeholder="Password" required />
                    </div>
                </div>
            </form>
            <div className='mt-5'>
            <Link className='btn btn-outline-dark mt-5 m-3'  >Change Password</Link>
            <Link className='btn btn-outline-dark mt-5 m-3' to="/loginPage" >Logout</Link>
            </div>
        </div>
    )

}

export default UserPage;

