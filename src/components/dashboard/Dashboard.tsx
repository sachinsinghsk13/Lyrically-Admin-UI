import { Col, Container, Row } from "react-bootstrap";
import DashboardCard from "./DashboardCard";

export const Dashboard = (props: any) => {
    console.log('dash')
    return (
        <Container fluid className="p-2">
            <Row>
                <Col lg="4" md="3">
                    <DashboardCard/>
                </Col>
                <Col lg="4" md="3">
                    <DashboardCard/>
                </Col>
                <Col lg="4" md="3">
                    <DashboardCard/>
                </Col>
                <Col lg="4" md="3">
                    <DashboardCard/>
                </Col>
                <Col lg="4" md="3">
                    <DashboardCard/>
                </Col>
                <Col lg="4" md="3">
                    <DashboardCard/>
                </Col>
                <Col lg="4" md="3">
                    <DashboardCard/>
                </Col>
            </Row>
        </Container>
    );
}