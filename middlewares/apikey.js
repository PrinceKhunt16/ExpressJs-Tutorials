function apiKey(req, res, next){
    const apikey = '123123'
    const userApiKey = req.query.apikey;

    if (userApiKey && (userApiKey === apikey)) {
        next();
    } else {
        res.json({ message: 'Not allowed!'});
    }
} 

module.exports = apiKey