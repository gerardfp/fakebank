export default async function handler(req, res) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for(let i = 0; i < characters.length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    res.send(result);
}