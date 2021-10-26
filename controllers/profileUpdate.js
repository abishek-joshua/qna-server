const handleProfileUpdate = (req, res, pool) => {
    console.log(req.body)
    let { roll_number, user_name, email, about_me } = req.body;
    if (user_name === '')
        user_name = null;
    if (email === '')
        email = null;
    if (about_me === '')
        about_me = null;
    const updateUsers = {
        text: `UPDATE users SET 
               user_name = COALESCE($1, user_name), 
               email =  COALESCE($2, email),
               about_me =  COALESCE($3, about_me)
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