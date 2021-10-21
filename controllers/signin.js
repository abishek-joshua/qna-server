const signin = (req,res,pool,bcrypt) => {
    const {roll_number,password} = req.body;


    const authenticate =  {
        text : 'SELECT EXISTS(SELECT * FROM login_details WHERE roll_number=$1 AND PASSWORD)'
    }
}