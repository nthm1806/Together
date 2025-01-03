// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import RouterHome from './router/Home'
import RouterLogin from './router/Login'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RouterHome/>} />
                <Route path='/login' element={<RouterLogin/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
