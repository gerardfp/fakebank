export default async function handler(req, res) {
    await sleep(5000);  
    
    res.send(Math.random()*30);
}
