export const handleRegister = (req,res,pool,bcrypt) => {
    const {roll_number,email,password} = req.body;
    var hash = bcrypt.hashSync(password,3);
    console.log(hash);

    const creation_date = new Date();
    
    
    const insertIntoUsers = {
        text : 'INSERT INTO users(roll_number,creation_date,email) VALUES($1,$2,$3)',
        values : [roll_number,creation_date,email],
        
    }

    const displayUsers = {
        text : 'SELECT * FROM users'
    }

    pool
        .query(insertIntoUsers)
        .then(res => {
            console.log(res)
            pool.query(displayUsers)
            .then(res => {
                console.log(res)
            })
        })

        .catch(err => console.error(err))



}  