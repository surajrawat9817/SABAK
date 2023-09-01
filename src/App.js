import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import SignupForm from './component/SignupForm';
import LoginForm from './component/LoginForm';
// import LoginForm from '/Users/suraj.rawat/Documents/sabak/src/component/LoginForm.js';
// import SignupForm from '/Users/suraj.rawat/Documents/sabak/src/component/SignupForm.js';

export default function App() {
  const styles = {
    backgroundColor: 'lightblue',
    color: 'white',
    padding: '10px',
    display: "flex",
    justifyContent: 'flex-end',
    alignItems: 'center'
};
const linkStyles = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 10px',
}
  return(
  <Router>
      <div >
       
        {/* 👇️ Wrap your Route components in a Routes component */}
        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
    );


}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

  //     <Routers>
  //     <div>
  //         <nav>
  //             <ul>
  //                 <li>
  //                     <Link to="/login">Login</Link>
  //                 </li>
  //                 <li>
  //                     <Link to="/signup">Signup</Link>
  //                 </li>
  //             </ul>
  //         </nav>

  //         <Route path="/login" component={LoginForm} />
  //         <Route path="/signup" component={SignupForm} />
  //     </div>
  // </Routers>
  
