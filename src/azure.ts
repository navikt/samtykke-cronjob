export async function getAzureOBOToken() {
    const accessToken = await getAzureADToken().then((accessToken) => accessToken.access_token)

    const tokenOptions = {
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        client_id: process.env.AZURE_APP_CLIENT_ID,
        client_secret: process.env.AZURE_APP_CLIENT_SECRET,
        assertion: accessToken,
        scope: 'api://dev-gcp.team-researchops.samtykke-api/.default',
        requested_token_use: 'on_behalf_of',
    }

    return await fetch(
        `https://login.microsoftonline.com/${process.env.AZURE_APP_TENANT_ID}/oauth2/v2.0/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                authorization: `Bearer ${accessToken}`,
            },
            body: new URLSearchParams(tokenOptions as any).toString()
        }
    ).then(async (tokenSet) => {
        if (!tokenSet.ok) {
            const text = await tokenSet.text()
            throw new Error(text)
        }
        return Promise.resolve(tokenSet.json())
    }).catch((error) => {
        console.error('Error in exchange of token ', error)
        return Promise.reject(error)
    })
}

async function getAzureADToken() {
    const tokenOptions = {
        client_id: process.env.AZURE_APP_CLIENT_ID,
        grant_type: 'client_credentials',
        scope: 'api://dev-gcp.team-researchops.samtykke-api/.default',
        client_secret: process.env.AZURE_APP_CLIENT_SECRET
    }

    return await fetch(
        `https://login.microsoftonline.com/${process.env.AZURE_APP_TENANT_ID}/oauth2/v2.0/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(tokenOptions as any).toString()
        }
    ).then(async (tokenSet) => {
        if (!tokenSet.ok) {
            const text = await tokenSet.text()
            throw new Error(text)
        }
        return Promise.resolve(tokenSet.json())
    }).catch((error) => {
        console.error('Error in exchange of token ', error)
        return Promise.reject(error)
    })
}