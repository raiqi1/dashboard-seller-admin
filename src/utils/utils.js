import io from 'socket.io-client'
export const overrideStyle = {
    display: 'flex',
    margin: '0 auto',
    height: '24px',
    justifyContent: 'center',
    alignItems: "center"
}

export const socket = io('https://ecom-api-production-9723.up.railway.app', {
    withCredentials: true,
    extraHeaders: {
        "Access-Control-Allow-Origin": "https://dashboard-seller-admin.vercel.app"
    }
});