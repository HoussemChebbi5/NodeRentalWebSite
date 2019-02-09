const Rental = require('../models/rental');

module.exports = {
    getAllRentals: (req, res) => {
        Rental.find({}, (error, rentals) => {
            if (error) return res.status(430).json({error});
            return res.json({rentals});
        });
    },
    getRentalById: (req, res) => {
        const id = req.params.id;
        Rental.findById(id, (error, rental) => {
            if (error) return res.status(422).json({error});
            return res.json({rental});
        });
    }
};
