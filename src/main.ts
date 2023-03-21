import dotenv from 'dotenv'

dotenv.config()

async function doJobs() {
    try {
        console.log("booting up")
        console.log("test")
    } catch (error) {
        console.log("error")
    }
}

void doJobs()