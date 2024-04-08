import axios from "axios";

export const getAdminToken = async () => {
    try {
        const response =  await axios.post("http://localhost:4000/admin/login",{
            "username": "shopkeeper",
            "password": "adminShop1!"
        },);

        return response.data.token
    } catch (error) {
        console.error(error);
    }
}
