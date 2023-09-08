import Authordcard from "./Authordcard";

const styleAuthord = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", 
    gridGap: "1.5em"
  };
//   const username=[
//     {name:"Gajendra"},
//     {name:"Aunj"},
//     {name:"Amit"},
//   ]
const Authords=()=>{
 return ( 
 <>
 <div style={styleAuthord}>
 <Authordcard/>
 <Authordcard/>
 <Authordcard/>
 <Authordcard/>
 <Authordcard/>
 <Authordcard/>
 <Authordcard/>
 <Authordcard/>
 <Authordcard/>
 <Authordcard/>

 </div>

 
 </>
 )
}

export default  Authords;