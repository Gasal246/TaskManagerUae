import axios from "axios"
const axiosInstance = axios.create({
    baseURL: process.env.NEXTAUTH_URL,
    timeout: 10000, // Timeout after 10 seconds
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});


export async function getUserById(userid: string){
    try {
        const res = await axiosInstance.get(`/api/users/getid/${userid}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}