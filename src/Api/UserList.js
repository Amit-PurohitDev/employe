import axios from 'axios';

export default axios.create({
    baseURL: "https://emplyedetail.firebaseio.com/"
})