import axios from 'axios'
export async function getUserById(userid: string){
    try {
        const res = await axios.get(`/api/users/getid/${userid}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}