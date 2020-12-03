import React  from 'react';
import Footer from './Components/Footer';
import HeaderMenu from './Components/HeaderMenu';

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

import Workshop from './Pages/Workshop/Index';
import Products from './Pages/Product/Index';
import ProductDetail from './Pages/Product/Detail';
import About from './Pages/About/Index';
import Login from './Pages/Login/Index';
import './App.css';


function App() {
    return (
        <Router>
            <div>
                <Route path="/:id?" component={PageRoute}/>
                <Route exact path="/" component={Workshop}/>
                <Route path="/products" component={Products}/>
                <Route path="/product/:id" component={ProductDetailRoute}/>
                <Route path="/login" component={LoginRoute}/>
                <Route path="/about" component={About}/>
                <Footer/>
            </div>
        </Router>
    );
}

const PageRoute = ({match}) => (
    <div>
        <HeaderMenu activeItem={match.params.id != null ? match.params.id : "home"}/>
    </div>
)

const ProductDetailRoute = ({match}) => (
    <div>
        <ProductDetail id={match.params.id}/>
    </div>
)

const LoginRoute = () => (
    <div>
        <Login title="Hello" />
    </div>
)

export default App;
