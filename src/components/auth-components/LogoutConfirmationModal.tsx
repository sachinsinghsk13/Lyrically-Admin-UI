import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
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
                {"Are you sure you want to logout?"}
            </DialogTitle>
            <DialogActions>
                <Button onClick={props.onHide} variant="text" color="secondary">Cancel</Button>
                <Button variant="contained" color="error" onClick={handleLogout} autoFocus endIcon={<LogoutIcon/>}>
                    Logout
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

