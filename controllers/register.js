const handleRegister = (req, res, pool, bcrypt) => {
    const { roll_number, email, password } = req.body;
    var hash = bcrypt.hashSync(password, 3);

    const creation_date = new Date();


    const insertIntoUsers = {
        text: 'INSERT INTO users(roll_number,creation_date,email) VALUES($1,$2,$3)',
        values: [roll_number, creation_date, email],

    }

    const insertIntoLogin = {
        text: 'INSERT INTO login_details VALUES($1,$2)',
        values: [roll_number, hash]
    }


    pool.query('BEGIN')
        .then(result => pool
            .query(insertIntoUsers)
            .then(result => pool
                .query(insertIntoLogin)
                .then(result => pool
                    .query('COMMIT')
                    .then(result => res.json("Succesfully Registered. Login NOW"))
                )
            )
        )
        .catch(err => {
            console.error(err.detail)
            pool.query('ROLLBACK')
            res.status(400).json("Registration Unsuccessful")
        })

}

export default handleRegister;