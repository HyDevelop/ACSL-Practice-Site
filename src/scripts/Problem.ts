
export default abstract class Problem
{
    question = "";
    answer: string | number = "";

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
