const handleSignin = (req, res, pool, bcrypt) => {
    const { roll_number, password } = req.body;
    pool
        .query('SELECT password_hash FROM login_details WHERE roll_number=$1', [roll_number])
        .then(result =>
            bcrypt.compare(password, result.rows[0].password_hash)
                .then(result => {
                    if (result)
                        res.json("success");
                    else
                        throw new Error("invalid credentials");
                }))
        .catch(err => {
            console.log(err)
            res.json(err)
        });
}

export default handleSignin;