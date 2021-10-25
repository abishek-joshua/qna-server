const handleProfile = (req, res, pool) => {
    const { roll_number } = req.body;
    pool
        .query('SELECT * FROM users WHERE roll_number=$1', [roll_number])
        .then(result => res.json(result.rows[0]))
        .catch(err => {
            console.log(err);
            res.json('error')
        });
}

export default handleProfile;