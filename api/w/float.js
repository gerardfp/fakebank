export default async function handler(req, res) {
    await new Promise(r => setTimeout(r, 5000))
    res.send(Math.random());
}
