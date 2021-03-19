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

exports.getPerson = (req, res) => {
    const pId = req.params.id;

    Personne.findById(pId).then(result => {
        if(!result) {
            const error = new Error("Couldn't found this person");
            error.statusCode = 404;
            throw error
        }
        res.status(200).json(result)
    })
    .catch(err => {
        console.log(err);
    })

}

exports.deletePerson = (req, res) => {
    const pId = req.params.id;
    Personne.findByIdAndRemove(pId)
    .then(p => {
        if(!p) {
            const error = new Error("Couldn't found this person");
            error.statusCode = 404;
            throw error
        }
        res.status(200).json({
            message : "Person successfully deleted !",
            result : p
        })
    })
    .catch(err => {
        console.log(err);
    })

}

exports.updatePerson = (req, res) => {
    const pId = req.params.id;

    const prenom = req.body.prenom;
    const nom = req.body.nom;
    const age = req.body.age;
    const profession = req.body.profession;
    const avatar = req.body.avatar;

    Personne.findById(pId).then(p => {
        if(!p) {
            const error = new Error("Couldn't found this person");
            error.statusCode = 404;
            throw error;
        }
        p.prenom = prenom;
        p.nom = nom;
        p.age = age;
        p.profession = profession;
        p.avatar = avatar;

        return p.save()
    })
    .then(result => {
        res.status(200).json({
            message : "Person successfully updated",
            result : result
        })
    })
    .catch(err => {
        console.log(err);
        //next(err)
    })


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