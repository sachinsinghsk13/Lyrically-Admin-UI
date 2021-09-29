import { Grid, Typography } from "@mui/material";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
const PageNotFound = (props: any) => {
    return (
        <Grid container>
            <Grid item lg={12} pt={5}>
            <Typography sx={{textAlign: 'center'}} variant="h1" color="#212529"><SentimentVeryDissatisfiedIcon sx={{fontSize:"10rem"}}/></Typography>
                <Typography sx={{textAlign: 'center'}} variant="h1" fontSize="10rem" color="#212529">404</Typography>
                <Typography sx={{textAlign: 'center'}} variant="h3" color="#212529">Page Not Found</Typography>
                <Typography sx={{textAlign: 'center'}}>The resource you're looking for is not found</Typography>
            </Grid>
        </Grid>

        // <div className="container">
        //     <div className="row justify-content-center">
        //         <div className="col-lg-12 p-3 mt-4">
        //             <h1 className="text-center text-dark" style={{fontSize: '10rem'}}>404</h1>
        //             <p className="text-center display-4">Oops! The page you're looking for is not found</p>
        //         </div>
        //         <div className="col d-flex justify-content-center">
        //             <Link className="btn btn-primary btn-lg m-3" to="/dashboard">Dashboard</Link>
        //             <Link className="btn btn-secondary btn-lg m-3" to="/dashboard">Contact Us</Link>
        //         </div>
        //     </div>
        // </div>
    );
}

export default PageNotFound;