const Personne = require("../models/personne");

exports.getAllPersons = (req, res) => {
    Personne.find().then(result => {
        res.status(200).json(result)
    })
    .catch(err => console.log(err))
    // res.status(200).json({
    //     persons : [
    //         {
    //             prenom : "nidhal",
    //             nom : "jelassi"
    //         },
    //         {
    //             prenom : "bilel",
    //             nom : "Khelifi"
    //         }
    //     ]
    // })
}

exports.createPerson = (req, res) => {
    const prenom = req.body.prenom;
    const nom = req.body.nom;
    const age = req.body.age;
    const profession = req.body.profession;
    const avatar = req.body.avatar;

    console.log(prenom, nom, age);

    // res.status(201).json({
    //     message : "Person created !",
    //     person : {
    //         id : new Date().toISOString(),
    //         prenom : prenom,
    //         nom : nom
    //     }
    // });

    const person = new Personne({
        prenom : prenom,
        nom : nom,
        age : age,
        profession : profession,
        avatar : avatar
    });

    person.save()
    .then(
        result => {
            res.status(201).json({
                id : result['_id'],
                prenom : result.prenom,
                nom : result.nom
            })
        }
    )
    .catch(err => {
        console.log(err);
    })




}