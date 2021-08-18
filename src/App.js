import logo from './logo.svg';
import './App.css';
//Cấu hình routing
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import About from './pages/About/About';
import Header from './components/HomePage/Header';
import UseStateDemo from './pages/Hooks/UseStateDemo/UseStateDemo';
import UseEffectDemo from './pages/Hooks/UseEffectDemo/UseEffectDemo';
import ReduxHookDemo from './pages/Hooks/ReduxHookDemo/ReduxHookDemo';
import AxiosDemo from './pages/AxiosDemo/AxiosDemo';
import AxiosDemoRFC from './pages/AxiosDemo/AxiosDemoRFC';
import ApiMiddleWare from './pages/AxiosDemo/ApiMiddleWare';
import Detail from './pages/Detail/Detail';
import Profile from './pages/Profile/Profile';
import HOC from './pages/HOC/HOC';


function App() {
  return (
    <BrowserRouter>
              <Header />
      
      <Switch>
        <Route exact path="/home" render={(propsRoute)=> {
            return <div>
              <Header />
              <Home {...propsRoute} />
            </div>
        }} />
           <Route exact path="/about" render={(propsRoute)=>{
          return <div>
              <Header />
              <About {...propsRoute} />
          </div>

        }} />

        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/usestate" component={UseStateDemo} />
        <Route exact path="/useeffect" component={UseEffectDemo} />
        <Route exact path="/reduxhook" component={ReduxHookDemo} />
        <Route exact path="/ajaxrcc" component={AxiosDemo} />
        <Route exact path="/ajaxrfc" component={AxiosDemoRFC} />
        <Route exact path="/apimiddleware" component={ApiMiddleWare} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/hoc" component={HOC} />

        <Route exact path="/" component={ApiMiddleWare} />
      </Switch>
    
    </BrowserRouter>
  );
}

export default App;
