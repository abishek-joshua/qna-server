const handleQuestions = (req, res, pool) => {
    const selectAllFromQuestions = {
        text: 'SELECT * FROM questions ORDER BY (creation_date)'
    }
    pool
        .query(selectAllFromQuestions)
        .then(result => res.json(result.rows))
        .then(console.log("Sent."))
        .catch(err => {
            console.log(err)
            res.status(400).json("Error retriving Questions")
        });
}

export default handleQuestions;