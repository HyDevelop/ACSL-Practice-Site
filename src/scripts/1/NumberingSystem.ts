import Problem from "@/scripts/Problem";
import {randInt} from "@/scripts/utils";

export default class NumberingSystem extends Problem
{
    title = "Numbering Systems Practice"
    options = [
        {description: "From Bases", value: "2, 8, 10, 16"},
        {description: "To Bases", value: "2, 8, 10, 16"},
        {description: "Minimum Value", value: "0"},
        {description: "Maximum Value", value: "512"},
    ]

    n = -1;

    newQuestion(): void
    {
        // Generate target number
        this.n = randInt(+this.options[2].value, +this.options[3].value)

        const fb = this.options[0].value.split(',').map(it => +it);
        const tb = this.options[1].value.split(',').map(it => +it);
        const fromBase = fb[Math.floor(Math.random() * fb.length)]
        const toBase = tb[Math.floor(Math.random() * tb.length)]

        const fromText = this.n.toString(fromBase).toUpperCase()
        const toText = this.n.toString(toBase).toUpperCase()

        // Set question and answer
        this.question = `Can you convert base-${fromBase} number "${fromText}" to base-${toBase}?`
        this.answer = toText;
    }
}
