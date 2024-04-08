import axios from "axios";

export const login = async (email, password) => {
    try {
        const response =  await axios.post("http://localhost:4000/auth/login",{
            email,
            password
        },);

        return response.data.token
    } catch (error) {
        console.error(error);
    }
}
