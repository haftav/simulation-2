module.exports = { 
    login: (req, res) => {
        console.log(req.body);
    },
    register: (req, res) => {
        console.log('here');
        res.status(200).send('lmfao');
    },
    logout: (req, res) => {
        console.log(req.body);
    }
}