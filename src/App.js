import logo from './logo.svg';
import './App.css';
//Cấu hình routing
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
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
import { HomeTemplate } from './templates/HomeTemplate';
import { UserTemplate } from './templates/UserTemplate';
import AntDemo from './pages/AntDemo/AntDemo';
import { AdminTemplate } from './templates/AdminTemplate';
//Thư viện giúp chuyển hướng trang ở các file không phải là component
import {createBrowserHistory} from 'history'

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      {/* <Header /> */}
      <Switch>
        {/* <Route exact path="/home" render={(propsRoute) => {
          return <div>
            <Header />
            <Home {...propsRoute} />
          </div>
        }} />
        <Route exact path="/about" render={(propsRoute) => {
          return <div>
            <Header />
            <About {...propsRoute} />
          </div>
        }} /> */}
        
        {/* <Route component={Home} />  // props ( history,location, match) */}
        <HomeTemplate path="/home" component={Home} />
        <HomeTemplate path="/about" component={About} />

        <UserTemplate  path="/login" component={Login} />
        <UserTemplate  path="/register" component={Register} />

        <HomeTemplate exact path="/usestate" component={UseStateDemo} />
        <HomeTemplate exact path="/useeffect" component={UseEffectDemo} />
        <HomeTemplate exact path="/reduxhook" component={ReduxHookDemo} />
        <HomeTemplate exact path="/ajaxrcc" component={AxiosDemo} />
        {/* <HomeTemplate exact path="/antd" component={AntDemo} /> */}
        <HomeTemplate exact path="/ajaxrfc" component={AxiosDemoRFC} />
        <HomeTemplate exact path="/apimiddleware" component={ApiMiddleWare} />
        <HomeTemplate exact path="/detail/:id" component={Detail} />
        <HomeTemplate exact path="/profile" component={Profile} />
        <HomeTemplate exact path="/hoc" component={HOC} />



        <AdminTemplate path='/admin/antd' component={AntDemo} />


      <HomeTemplate exact path="/" component={ApiMiddleWare} />
      </Switch>

    </Router>
  );
}

export default App;
