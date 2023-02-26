function sleep(milliseconds) {  
    return new Promise(resolve => setTimeout(resolve, milliseconds));  
}  

export default async function handler(req, res) {
    await sleep(5000);  
    
    res.send(Math.random()*30);
}
