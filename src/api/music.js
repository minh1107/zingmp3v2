import axios from "../axios";

export const ApiGSong  = async (id) => {
    try {
        const res = await axios.get(`/song/${id}`)
        return res
    } catch (error) {
        console.log(error);        
    }
}

export const apiGetSong = (sid) => new Promise(async (resolve, reject) => {
    try {
        const res = await axios ({
            url: '/song',
            method: 'get',
            params: {id: sid}
        })
        resolve(res)
    } catch (error) {
        console.log(error);
    }
})


export const apiGetDetailSong = (sid) => new Promise(async (resolve, reject) => {
    try {
        const res = await axios ({
            url: '/infosong',
            method: 'get',
            params: {id: sid}
        })
        resolve(res)
    } catch (error) {
        console.log(error);
    }
})

export const apiGetDetailPlaylist = (sid) => new Promise(async (resolve, reject) => {
    try {
        const res = await axios ({
            url: '/detailPlaylist',
            method: 'get',
            params: {id: sid}
        })
        resolve(res)
    } catch (error) {
        console.log(error);
    }
})