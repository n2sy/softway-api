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
    const prenom = req.body.prenom;
    const nom = req.body.nom;

    res.status(201).json({
        message : "Person created !",
        person : {
            id : new Date().toISOString(),
            prenom : prenom,
            nom : nom
        }
    });

}