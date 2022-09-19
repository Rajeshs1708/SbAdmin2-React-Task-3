import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Buttons from './Components/Buttons';
import AllCards from './Components/AllCards';
import Tables from './Tables';
import AllCharts from './AllCharts';
import Colors from './Utilities/Colors';
import Borders from './Utilities/Borders';
import Animations from './Utilities/Animations';
import Other from './Utilities/Other';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import Page404 from './Pages/Page404';
import BlankPage from './Pages/BlankPage';

function App() {
  return (
    <BrowserRouter>

      <div id='wrapper'>
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />

            <div className="container-fluid">
              <Routes>
                <Route path="/" element={<Dashboard />} exact={true} />

                <Route path="/Components/Buttons" element={<Buttons />} exact={true} />
                <Route path="/Components/AllCards" element={<AllCards />} exact={true} />

                <Route path="/Utilities/Colors" element={<Colors />} exact={true} />
                <Route path="/Utilities/Borders" element={<Borders />} exact={true} />
                <Route path="/Utilities/Animations" element={<Animations />} exact={true} />
                <Route path="/Utilities/Other" element={<Other />} exact={true} />

                <Route path="/Pages/Register" element={<Register />} exact={true} />
                <Route path="/Pages/Login" element={<Login />} exact={true} />
                <Route path="/Pages/ForgotPassword" element={<ForgotPassword />} exact={true} />
                <Route path="/Pages/Page404" element={<Page404 />} exact={true} />
                <Route path="/Pages/BlankPage" element={<BlankPage />} exact={true} />

                <Route path="/Tables" element={<Tables />} exact={true} />
                <Route path="/AllCharts" element={<AllCharts />} exact={true} />
              </Routes>
            </div>
          </div>

          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; Your Website 2021</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
