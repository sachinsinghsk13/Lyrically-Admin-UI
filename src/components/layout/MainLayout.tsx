import { ReactPropTypes, useState } from "react";
import { useSelector } from "react-redux";
import '../../styles/layout-style.css';
import AppNavbar from "../navigation/Navbar";
import Sidebar from "../navigation/Sidebar";
import MainContent from "./MainContent";
export default function MainLayout(props: ReactPropTypes) {
    const sidebar = useSelector<any, any>(state => state.sidebar);
    const [mainOffset, setMainOffset] = useState(78);
    return (
        <div className="main-layout d-flex">
            <Sidebar onSidebarToggle={(state: string) => {
                let offset: number = state === 'close' ? 78 : 260;
                setMainOffset(offset);
            }} />
            <div style={{ transform: `translateX(${sidebar.sidebarWidth})`}} className="main-content">
                <AppNavbar/>
                <MainContent offsetWidth={mainOffset} />
            </div>
        </div>
    );
}