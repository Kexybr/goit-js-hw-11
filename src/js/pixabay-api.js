import axios from "axios";

export default function getImagesByQuery(query) {
const API_KEY = "50767734-ec8f632e6fcf50a626b02f32f";


const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
});

return axios.get(`https://pixabay.com/api/`, { params })
        .then(response => response.data)
}