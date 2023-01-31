import axios from "axios"


export const getFollowing = async () => {
    try {
        const res = await axios.get('https://zingmp3.vn/api/v2/feed/get/list-by-genre?id=IWZ9Z08O&page=1&count=10&ctime=1675156622&version=1.8.26&sig=5f21f741d5eb4dbb0ae1464dfce31287b7a16b2237a0fe5d0c87dba1bae7ccda1c2997b0d43051fef1abec4e9b557ab3d4d054e91f72cfd385093a1a8fe1f545&apiKey=X5BM3w8N7MKozC0B85o4KMlzLZKhV00y')
        // const res = await axios.get('http://localhost:5000/api/home')
        return res
    } catch (error) {
        console.log(error)
    }    
}