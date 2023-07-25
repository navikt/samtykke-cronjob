import axios from 'axios'
import dotenv from 'dotenv'
import { getAzureOBOToken } from './azure.js'

dotenv.config()

const needAuth = process.env.NEED_AUTH || 'ja'

async function doJobs() {
    try {
        console.log('######## Starting jobs! ########')
        console.log('')

        console.log('Request consents that has expired to be deleted')
        await axios.delete(`${process.env.API_URL}/employee/consent`, {
            headers: {
                Authorization: needAuth === 'ja' ? `Bearer ${await getAzureOBOToken().then((accessToken) => accessToken.access_token)}` : ''
            }
        })
    } catch (error) {
        console.log(error)
    }

    console.log('')
    console.log('######## Done with jobs, exiting application ########')

    process.exit(0)
}

void doJobs()
