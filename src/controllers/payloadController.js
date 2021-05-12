const Payload = require('../models/payload');


exports.createNewPayload = (req, res) => {
    //retrieve new payload details from req body
    Payload.create({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country
    }, (err, newPayload) => {
        if (err) {
            return res.status(500).json({message: err})
        } else {
            return res.status(200).json({ message: "new data created", newPayload })
        }
    })

}

exports.fetchPayloads =  (req, res) => {
    //fetch all payloads
    Payload.find({}, (err, payloads) => {
        if (err) {
            return res.status(500).json({ message: err });
        } else {
            return res.status(200).json({ payloads })
        }
    })

}

exports.fetchSinglePayload = (req, res) => {
    Payload.findById(req.params.id, (err, payload) => {
        if (err) {
            return res.status(500).json({ message: err})
        }
        else if (!payload) {
            return res.status(500).json({message:"data not found"})
        }

        else {
            return res.status(404).json({ payload })
        }
    })
}

exports.updateSinglePayload = (req, res) => {
    Payload.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        email: req.body.email,
        country: req.body.country

    }, (err, payload) => {
        if (err) {
            return res.status(500).json({message: err})
        } else if (!payload){
            return res.status(404).json({message:"data not found"})
        } else {
            Payload.save((err, savedPayload) => {
                if (err) {
                    return res.status(400).json({message: err})
                } else {
                    return res.status(200).json({message: "data updated successfully"})
                }
            })
        }
    })
}


exports.deleteSinglePayload = (req, res) => {
    Payload.findByIdAndDelete(req.params.id, (err, payload) => {
        if (err) {
            return res.status(500).json({ message: err })
        } else if (!payload) {
            return res.status(404).json({ message: "data not found"})
        } else {
            return res.status(200).json({message: "data deleted successfully"})
        }
    })
}
