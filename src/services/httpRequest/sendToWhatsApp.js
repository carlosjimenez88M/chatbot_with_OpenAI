import axios from "axios";
import config from '../../config/env.js';
import dotenv from "dotenv";
dotenv.config();
const GRAPH_API_URL = process.env.GRAPH_API_URL;
const sendToWhatsApp = async (data) => {
    const baseUrl = `${config.GRAPH_API_URL}/${config.API_VERSION}/${config.BUSINESS_PHONE}/messages`;
    const headers = {
        Authorization: `Bearer ${config.API_TOKEN}`
    };

    try {
        const response = await axios({
            method: 'POST',
            url: baseUrl,
            headers: headers,
            data,
        })
        return response.datal;
    } catch (error) {
        console.error(error)
    }
};

export default sendToWhatsApp;