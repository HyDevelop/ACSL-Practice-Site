import Problem from "@/scripts/Problem";
import {rand, randIntInclusive} from "@/scripts/utils";

// const functions: {[key: string]: (n: number, val: number) => number} = {
//     '+': (n: number, val: number) => n + val,
//     '-': (n: number, val: number) => n - val,
//     '*': (n: number, val: number) => n * val,
//     '/': (n: number, val: number) => n / val,
// }

const inverseFunctions: {[key: string]: (n: number, val: number) => number} = {
    '+': (n: number, val: number) => n - val,
    '-': (n: number, val: number) => n + val,
    '*': (n: number, val: number) => n / val,
    '/': (n: number, val: number) => n * val,
}

export default class Recursion extends Problem
{
    title = "General Recursion Practice";
    options = [];

    newQuestion(): void
    {
        const recursions = randIntInclusive(2, 4);
        const ending = randIntInclusive(1, 10);

        // g stands for greater (x > ending)
        // g(x / val) or g(x - val)
        const gInside = rand([
            {op: '/', val: randIntInclusive(2, 4)},
            {op: '-', val: randIntInclusive(2, 10)},
        ])

        // g(...) + val, g(...) - val, or g(...) * val
        const gOutside = rand([
            {op: '+', val: randIntInclusive(1, 10)},
            {op: '*', val: randIntInclusive(1, 5)},
            {op: '-', val: randIntInclusive(1, 10)},
        ])

        let initValue = ending - randIntInclusive(0, 2)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for (const i in Array(recursions))
        {
            initValue = inverseFunctions[gInside.op](initValue, gInside.val)
        }

        this.question =
            `What do you think f(${initValue}) is for the program below?<br>` +
            `<br><pre><code class="language-python">` +
            `def f(x):\n` +
            `    if x <= ${ending}:\n` +
            `        return x\n` +
            `    return f(x ${gInside.op} ${gInside.val}) ${gOutside.op} ${gOutside.val}\n` +
            `</code></pre><el-switch></el-switch>`
        this.answer = ""
    }
}
