import Header from "../Components/Header";
// import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainNavigation() {
    return (
        <div>
            <Header />
            <Navbar />
            <Outlet />
        </div>
    );
}