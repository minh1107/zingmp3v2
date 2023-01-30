import axios from "../axios";

export const ApiChartHome  = async () => {
    try {
        const res = await axios.get(`/charthome`)
        return res
    } catch (error) {
        console.log(error);        
    }
}