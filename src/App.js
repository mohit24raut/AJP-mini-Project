import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from './Component/AboutUs';
import AdminNavbar from './Component/AdminNavbar';
import AdminPage from './Component/AdminPage';
import AdminRegistration from './Component/AdminRegistration';
import { HomePage } from './Component/HomePage';
import Login from './Component/Login';
import PendingCon from './Component/PendingCon';
import Registration from './Component/Registration';
import Stock from './Component/Stock';
import UserRegister from './Component/UserRegister';
import TotalConn from "./Component/TotalConn";
import ContactUs from "./Component/ContactUs";
import UserPage from "./Component/UserPage";
import Booking from "./Component/Booking";
import BookingHistory from "./Component/BookingHistory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/About" element={<About />} />
            <Route path="/AdminPage" element={<AdminPage />} />
            <Route path="/AdminRegistration" element={<AdminRegistration />} />
            <Route path="/PendingCon" element={<PendingCon />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/Stock" element={<Stock />} />
            <Route path="/UserRegister" element={<UserRegister />} />
            <Route path="/TotalConn" element={<TotalConn/>} />
            <Route path="/ContactUs" element={<ContactUs/>} />
            <Route path="/UserPage" element={<UserPage/>} />
            <Route path="/Booking" element={<Booking/>} />
            <Route path="/BookingHistory" element={<BookingHistory/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
