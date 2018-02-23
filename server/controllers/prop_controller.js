module.exports = {
    addProperty: (req, res) => {
        const db = req.app.get('db');
        console.log(req.body);
        const { propName, propDescription, address, city, 
            listingState, zip, image, loanAmount, monthlyMortgage, 
            desiredRent, userid } = req.body;
        db.add_property([propName, propDescription, address, city, 
            listingState, zip, image, loanAmount, monthlyMortgage, 
            desiredRent, userid]).then(props => {
                res.status(200).send(props);
            })
    },
    getProperties: (req, res) => {
        console.log(req.query);
        const db = req.app.get('db');
        db.get_properties().then(props => {
            if (req.query.rent) {
                let filtered = props.filter((el) => Number(el.desiredrent) > Number(req.query.rent));
                res.status(200).send(filtered)
            } else {
                res.status(200).send(props);
            }
        })
    },
    deleteProperty: (req, res) => {
        console.log(req.params.id);
        const db = req.app.get('db');
        db.delete_property([req.params.id]).then(props => {
            res.status(200).send(props);
        })
    }

}