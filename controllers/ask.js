const handleAsk = (req, res, pool) => {
    const { question_text, roll_number } = req.body;
    const creation_date = new Date();
    console.log("wkwgwgwv : ", creation_date);
    const insertIntoQuestions = {
        text: `INSERT INTO 
        questions(creation_date, question_text, roll_number, answer_count)
        VALUES($1, $2, $3, $4)
        `,
        values: [creation_date, question_text, roll_number, 0]
    }
    pool
        .query(insertIntoQuestions)
        .then(result => res.json("Question Posted Successfully"))
        .catch(err => {
            console.log(err)
            res.json("Error Posting Question")
        });
}

export default handleAsk;