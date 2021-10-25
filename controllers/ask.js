const handleAsk = (req, res, pool) => {
    const { roll_number, question_text } = req.body;
    const creation_date = new Date();
    const insertIntoQuestions = {
        text: `INSERT INTO 
        questions(creation_date, question_text, roll_number, answer_count)
        VALUES($1, $2, $3, $4)
        `,
        values: [creation_date, question_text, roll_number, 0]
    }
    pool
        .query(insertIntoQuestions)
        .then(result => res.json("asked"))
        .catch(err => {
            console.log(err)
            res.json("error asking")
        });
}

export default handleAsk;