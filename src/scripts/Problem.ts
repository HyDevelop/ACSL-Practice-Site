
export default abstract class Problem
{
    question = "";
    answer = "";

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
    abstract checkAnswer(ans: string): boolean;
}
