import axios from 'axios'
import dotenv from 'dotenv'
import { getAzureOBOToken } from './azure.js'

dotenv.config()

async function doJobs() {
    try {
        console.log('######## Starting jobs! ########')
        console.log('')
        
        const accessToken = await getAzureOBOToken().then((accessToken) => accessToken.access_token)

        console.log('Request consents that has expired to be deleted')
        await axios.delete(`${process.env.API_URL}/consent`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
    } catch (error) {
        console.log(error)
    }

    console.log('')
    console.log('######## Done with jobs, exiting application ########')

    process.exit(1)
}

void doJobs()
