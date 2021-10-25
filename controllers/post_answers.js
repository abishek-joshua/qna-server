const handlePostAnswers = (req, res, pool) => {
    const { question_id,answer_text,roll_number } = req.body;
    const creation_date = new Date();
    const insertIntoAnswers = {
        text: `INSERT INTO 
        answers(question_id, answer_text, creation_date, roll_number) 
        VALUES($1, $2, $3,$4)
        `,
        values: [question_id, answer_text, creation_date, roll_number]
    }

    const insertIntoQuestions = {
        text : `UPDATE questions 
        SET answer_count = answer_count + 1 
        WHERE id=$1`,
        values :[question_id]
        
    }
   
    pool
        .query('BEGIN')
        .then(result =>
            pool
                .query(insertIntoAnswers)
                .then(result => pool
                    .query(insertIntoQuestions)
                    .then(result =>
                        pool
                            .query('COMMIT')
                            .then(result => res.json("success"))
                    )
                )
        )
        .catch(err => {
            pool.query('ROLLBACK')
            console.error(err.detail)
            res.json(err)
        })
}

export default handlePostAnswers;