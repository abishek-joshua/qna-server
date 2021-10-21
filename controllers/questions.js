const handleQuestions = (req, res, pool) => {
    const selectAllFromQuestions = {
        text: 'SELECT * FROM questions'
    }
    console.log(req);
    pool
        .query(selectAllFromQuestions)
        .then(result => res.json("HELLO"))
        .then(console.log("Sent."))
        .catch(err => {
            console.log(err)
            res.status(400).json("Error retriving Questions")
        });
}

export default handleQuestions;