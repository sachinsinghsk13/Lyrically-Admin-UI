import axios from "axios"
import Constants from "../../utils/Constants"

export default function Home() {
    axios.get(`${Constants.BASE_URL}/admin/test`).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });
    return <h1>Hello World, Logged In Successfully</h1>
}