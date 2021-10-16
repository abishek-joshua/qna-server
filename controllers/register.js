

 export const handleRegister = (req,res,db,bcrypt) => {
    const {roll_number,email,password} = req.body;


var hash = bcrypt.hashSync(password);

db.query('BEGIN',err => {
    if(shouldAbort(err)) return;
    const insertIntoUsers = {
        text : "INSERT INTO users(roll_number,email) VALUES($1,$2)",
        values : [roll_number,email]
    }
    db.query(insertIntoUsers,(err,res) => {
        if(shouldAbort(err)) return;
        const insertIntoLogin = {
            text : "INSERT INTO login_details(roll_number,password_hash) VALUES($1,$2)",
            values : [roll_number,hash]
        }
        db.query(insertIntoLogin,(res,err) => {
            if(shouldAbort(err)) return;
            db.query('COMMIT',err => {
                if(err)
                {
                    console.error('Error committing transaction',err.details)
                }
                done()
            })
        })
    })
    

})


} 