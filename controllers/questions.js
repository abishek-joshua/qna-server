const handleQuestions = (req, res, pool) => {
    const selectAllFromQuestions = {
        text: 'SELECT * FROM questions ORDER BY (creation_date)'
    }
    pool
        .query(selectAllFromQuestions)
        .then(result => res.json(result.rows))
        .catch(err => {
            console.log(err)
            res.json(err)
        });
}

export default handleQuestions;