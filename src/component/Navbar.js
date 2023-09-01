import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "/Users/suraj.rawat/Documents/sabak/src/navbar.css";
import { useState } from 'react';
const Navbar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false); // Set this based on user authentication

    const menuStyles = {
        listStyle: 'none',
        padding: '0',
        display: 'flex',
        alignItems: 'center',
    };

    const linkStyles = {
        textDecoration: 'none',
        padding: '10px',
        fontSize: '20px',
        color: 'black',
    };

    const selectedLinkStyles = {
        ...linkStyles,
        fontWeight: 'bold',
    };
    const handleLogout = () => {
        // Handle logout logic here
        // For example, clear user authentication token and update isLoggedIn state
        setIsLoggedIn(false);
    };

            return (
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <a className="navbar-brand" href="/">Brand Name</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/loan">Loan</a>
                            </li>
                            {isLoggedIn ? (
                                
                                <div>
                               <p className='nav-item'> 
                               <a className='nav-link'>Paragraph</a></p>

                                </div>
                                // <li className="dropdown">
                                //     <a href="#">Account Options</a>
                                //     <ul className="dropdown-content">
                                //         <li><a href="/account-details">Account Details</a></li>
                                //         <li><a href="/withdraw">Withdraw</a></li>
                                //         <li><a href="/deposit">Deposit</a></li>
                                //         <li><a href="/change-password">Change Password</a></li>
                                //         <li><button onClick={handleLogout}>Logout</button></li>
                                //     </ul>
                                // </li>
                                 ) : (
                                       <>
                            <li className="nav-item">
                                    <a className="nav-link" href="/signup">Sign Up</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/login">Login</a>
                                </li> 
                                </>)
                        }
                        </ul>
                    </div>
                </nav>
            );
        };
        


export default Navbar;
