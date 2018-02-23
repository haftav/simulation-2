module.exports = { 
    login: (req, res) => {
        const db = req.app.get('db');
        const { username, password } = req.body;
        db.get_user([username, password]).then(user => {
            if (user[0]) {
                req.session.user = { id: user[0].userid, username: user[0].username }
                res.status(200).send(req.session.user);
            } else {
                res.status(500).send('User is not registered');
            }
        })
    },
    register: (req, res) => {
        const db = req.app.get('db');
        const { username, password } = req.body;
        console.log(username, password);
        db.get_username([username, password]).then(result => {
            if (!result[0]) {
                    db.add_user([username, password]).then((user) => {
                        req.session.user = { id: user[0].userid, username: user[0].username }
                        res.status(200).send(req.session.user);
                    })
            } else {
                res.status(500).send('User is already registered');
            }
        })
    },
    logout: (req, res) => {
        const { session } = req;
        session.destroy();
        res.status(200).send(req.session);
    }
}