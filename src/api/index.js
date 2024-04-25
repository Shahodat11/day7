import axios from "axios";

const mainURL = axios.create({
    boseURL: "https://dummyjson.com/products"
})

export default mainURL