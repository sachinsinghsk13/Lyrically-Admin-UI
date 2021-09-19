import { Link } from "react-router-dom";

const PageNotFound = (props: any) => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12 p-3 mt-4">
                    <h1 className="text-center text-dark" style={{fontSize: '10rem'}}>404</h1>
                    <p className="text-center display-4">Oops! The page you're looking for is not found</p>
                </div>
                <div className="col d-flex justify-content-center">
                    <Link className="btn btn-primary btn-lg m-3" to="/dashboard">Dashboard</Link>
                    <Link className="btn btn-secondary btn-lg m-3" to="/dashboard">Contact Us</Link>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;