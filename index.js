import axios from 'axios';
import {getAdminToken} from "./auth/admin.js";

async function getUsers() {
    try {
        const token  =  await getAdminToken()
        const response = await axios.get("http://localhost:4000/users",{
            headers: {
                'Content-Type': 'application/json',
                 token
            }
        });

        return response.data

    } catch (error) {
        console.error(error);
    }
}

getUsers()
