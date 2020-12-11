type ProblemOptions = { [key: string]: string };

export default abstract class Problem
{
    options: ProblemOptions = {}
    question = ""
    answer: string | number = ""

    /**
     * Generate a new question
     */
    abstract newQuestion(): void;

    /**
     * Check answer
     *
     * @param ans Answer
     * @return boolean Correct or not
     */
    checkAnswer(ans: string): boolean
    {
        if (typeof(this.answer) == 'string')
        {
            return ans.trim().toLowerCase() == this.answer.trim().toLowerCase()
        }
        else
        {
            // Compare to two decimal places
            return (+ans).toFixed(2) == this.answer.toFixed(2);
        }
    }
}
