import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import Button from '@mui/material/Button';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { AnyAction } from "redux";
import authService from "../../services/auth-service";
const LogoutConfirmationModal = (props: any) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const handleLogout = () => {
        authService.logout();
        dispatch<AnyAction>({ type: 'authentication/loggedOut' });
        history.push("/login");
    }

    return (
        <Dialog
            open={props.show}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onHide()}>Disagree</Button>
                <Button variant="contained" color="error" onClick={handleLogout} autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    );

    // return <Modal
    //     show={props.show}
    //     backdrop="static"
    //     onHide={props.onHide}
    //     keyboard={false}
    //     centered={true}
    // >
    //     <Modal.Header closeButton>
    //         <Modal.Title>Logout?</Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body>
    //         Are you sure you want to logout?
    //     </Modal.Body>
    //     <Modal.Footer>
    //         <Button variant="secondary" onClick={props.onHide}>
    //             Cancel
    //         </Button>
    //         <Button variant="danger" onClick={handleLogout}>Confirm Logout</Button>
    //     </Modal.Footer>
    // </Modal>
}

export default LogoutConfirmationModal;

