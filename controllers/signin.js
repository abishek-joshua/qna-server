const handleSignin = (req,res,pool,bcrypt) => {
    const {roll_number,password} = req.body;

    pool
        .query('SELECT password_hash FROM login_details WHERE roll_number=$1',[roll_number])
        .then(result => {
             return bcrypt.compare(password, result.rows[0].password_hash)
                    .then(result => {
                        if(result){
                            pool
                                .query('SELECT * FROM users WHERE roll_number=$1',[roll_number])
                                .then(result => res.status(302).json(result.rows))  
                            }
                        else{
                            throw new Error("Invalid Credentials");
                        }
                    })
            })  
        .catch(err => {
            res.status(404).json("Error Signing In...")
            console.log(err)
            }                                          
        ); 
}

export default handleSignin;