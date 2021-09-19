import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import DashboardCard from "./DashboardCard";

export const Dashboard = (props: any) => {
    console.log('dash')
    return (
        <Container fluid className="p-2">
            <Row>
                <Col>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/dashboard" active>Dashboard</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row>
                <Col lg="12" className="p-2">
                    <h2>Dashboard</h2>
                </Col>
            </Row>
            <Row>
                <Col lg="4" md="3">
                    <DashboardCard />
                </Col>
                <Col lg="4" md="3">
                    <DashboardCard />
                </Col>
                <Col lg="4" md="3">
                    <DashboardCard />
                </Col>
                <Col lg="4" md="3">
                    <DashboardCard />
                </Col>
                <Col lg="4" md="3">
                    <DashboardCard />
                </Col>
                <Col lg="4" md="3">
                    <DashboardCard />
                </Col>
                <Col lg="4" md="3">
                    <DashboardCard />
                </Col>
            </Row>
        </Container>
    );
}