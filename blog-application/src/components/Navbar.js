import React from 'react'
import ReactDOM from 'react-dom'
// import { Link } from 'react-router-dom'
const styleNavbar={
    height:'80px',
    background:"grey",
}
const StyleButton={
    float: "right", 
    align:"left",
    marginRight:"10px"
}
const btn={
    marginRight:"10px"
}
const Navbar=()=>{
    return (
        <>
        <div>
        <div style={styleNavbar}><h1>JSOM</h1>
         {/* <div style={StyleButton}>
             <Link to="/authords">authors </Link>
             <Link to="/mostliked">mostlikedpost  </Link>
             <Link to="/mostcomments">mostcommentpost</Link>
         </div>   */}
         <div style={StyleButton}>
            <a style={btn} href="/Authords">authord</a>
            <a style={btn} href="/mostliked">mostlikedpost</a>
            <a style={btn} href="/mostcomments">mostcommentpost</a>
         </div>
        </div>
        </div>  
        </>
    )
}
ReactDOM.render(<Navbar />,document.getElementById('root'));
export default Navbar;