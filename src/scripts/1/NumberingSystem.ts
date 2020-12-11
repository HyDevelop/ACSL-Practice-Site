import Problem from "@/scripts/Problem";
import {randInt} from "@/scripts/utils";

export default class NumberingSystem extends Problem
{
    options = {
        fromBases: "2, 8, 10, 16",
        toBases: "2, 8, 10, 16",
        min: "0",
        max: "512"
    }

    n = -1;

    newQuestion(): void
    {
        // Generate target number
        this.n = randInt(+this.options.min, +this.options.max)

        const fb = this.options.fromBases.split(',').map(it => +it);
        const tb = this.options.toBases.split(',').map(it => +it);
        const fromBase = fb[Math.floor(Math.random() * fb.length)]
        const toBase = tb[Math.floor(Math.random() * tb.length)]

        const fromText = this.n.toString(fromBase).toUpperCase()
        const toText = this.n.toString(toBase).toUpperCase()

        // Set question and answer
        this.question = `Can you convert base-${fromBase} number "${fromText}" to base-${toBase}?`
        this.answer = toText;
    }
}
