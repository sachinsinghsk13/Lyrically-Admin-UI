import { ReactPropTypes } from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../../styles/layout-style.css';
import Sidebar from "../navigation/Sidebar";
import MainContent from "./MainContent";
export default function MainLayout(props: ReactPropTypes) {
    return (
        <div className="main-layout d-flex">
            <Sidebar/>
            <MainContent/>
        </div>
    );
}