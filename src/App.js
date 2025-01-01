// import logo from './logo.svg';
import './App.css';
import FhasaHeader from './components/layout/components/FhasaHeader';
import FahasaFooter from './components/layout/components/FhasaFooter';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './router/Home'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
