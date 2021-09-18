import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { AnyAction } from "redux";
import authService from "../../services/auth-service";
const LogoutConfirmationModal = (props: any) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const handleLogout = () => {
        authService.logout();
        dispatch<AnyAction>({type: 'authentication/loggedOut'});
        history.push("/login");

    }

    return <Modal
        show={props.show}
        backdrop="static"
        onHide={props.onHide}
        keyboard={false}
        centered={true}
    >
        <Modal.Header closeButton>
            <Modal.Title>Logout?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Are you sure you want to logout?
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
                Cancel
            </Button>
            <Button variant="danger" onClick={handleLogout}>Confirm Logout</Button>
        </Modal.Footer>
    </Modal>
}

export default LogoutConfirmationModal;

