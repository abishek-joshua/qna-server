const handleProfile = (req, res, pool) => {
    const { roll_number } = req.body;
    pool
        .query('SELECT * FROM users WHERE roll_number=$1', [roll_number])
        .then(console.log)
        .catch(console.log);
}

export default handleSignin;