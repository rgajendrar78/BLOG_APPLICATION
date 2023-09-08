import Navbar from './components/Navbar';
import Authords from "./components/Authords";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Mostliked from './components/Mostliked';
import Mostcomments from "./components/Mostcomments";
const App=()=>{
    return (
        <>
        <BrowserRouter>
<Routes>
    <Route exact path="/" element ={<Navbar/>} />
    <Route exact path="/Authords" element ={<Authords/>} />
    <Route exact path="/mostliked" element={<Mostliked/>} />
    <Route exact path="/mostcomments" element={<Mostcomments/>} />
</Routes>
        </BrowserRouter>
        
        </>
    )
}
export default App;