import {v2 as cloudinary} from "cloudinary";

const {CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINRY_API_SECRET} = process.env;

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINRY_API_SECRET,
})

export default cloudinary;