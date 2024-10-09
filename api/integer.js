export default async function handler(req, res) {
    res.send(Math.floor(Math.random() * 2000000));
}
