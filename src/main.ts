import axios from 'axios'
import dotenv from 'dotenv'
import { getAzureOBOToken } from './azure.js'

dotenv.config()

async function doJobs() {
    const accessToken = await getAzureOBOToken().then((accessToken) => accessToken.access_token)
    
    axios.delete(`${process.env.API_URL}/consent`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}

void doJobs()