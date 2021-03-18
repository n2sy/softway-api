exports.getAllPersons = (req, res) => {
    res.status(200).json({
        persons : [
            {
                prenom : "nidhal",
                nom : "jelassi"
            },
            {
                prenom : "bilel",
                nom : "Khelifi"
            }
        ]
    })
}

exports.createPerson = (req, res) => {
    
}