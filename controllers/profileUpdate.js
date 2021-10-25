const handleProfileUpdate = (req, res, pool) => {
    console.log(req.body)
    const { roll_number, user_name, email, about_me } = req.body;
    const updateUsers = {
        text: `UPDATE users SET 
               user_name = $1, 
               email = $2,
               about_me = $3
               WHERE roll_number = $4`,
        values: [user_name, email, about_me, roll_number]
    }
    pool
        .query(updateUsers)
        .then(result => res.json("success"))
        .catch(err => {
            console.error(err)
            res.json(err)
        })
}

export default handleProfileUpdate;