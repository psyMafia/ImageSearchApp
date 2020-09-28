import Axios from "axios";

export default Axios.create({
    headers: {
        Authorization: "Client-ID 8m2YSdJ9iILZWgBneeeU58Cs7WxezHc6pdfVyfa1_6Y"
    },
    baseURL: "https://api.unsplash.com",

});