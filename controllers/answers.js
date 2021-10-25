const handleAnswers = (req,res,pool) => {
    const { question_id } = req.body;
    const selectAllFromAnswers = {
        text: 'SELECT * FROM answers WHERE question_id = $1',
        values:[question_id]
    }
    pool
        .query(selectAllFromAnswers)
        .then(result => res.json(result.rows))
        .catch(err => {
            console.log(err)
            res.json(err)
        });
}

export default handleAnswers;