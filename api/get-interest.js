export default async function handler(req, res) {
    const {
        query: { capital, plazo }
    } = req

    res.send(Math.random()*30);
}
