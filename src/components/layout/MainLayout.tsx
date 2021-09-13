import { ReactPropTypes, useState } from "react";
import '../../styles/layout-style.css';
import Sidebar from "../navigation/Sidebar";
import MainContent from "./MainContent";
export default function MainLayout(props: ReactPropTypes) {
    const [mainOffset, setMainOffset] = useState(78);

    return (
        <div className="main-layout d-flex">
            <Sidebar onSidebarToggle={(state: string) => {
                let offset: number = state === 'close' ? 78 : 260;
                setMainOffset(offset);
            }} />
            <MainContent offsetWidth={mainOffset}/>
        </div>
    );
}