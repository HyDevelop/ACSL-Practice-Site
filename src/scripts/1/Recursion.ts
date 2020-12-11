import Problem from "@/scripts/Problem";
import {rand, randIntInclusive} from "@/scripts/utils";
import dedent from 'dedent-js'

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
        for (let i = 0; i < recursions; i++)
        {
            initValue = inverseFunctions[gInside.op](initValue, gInside.val)
        }

        const code = dedent`
            function f(x) {
                if (x <= ${ending})
                    return x
                else
                    return f(x ${gInside.op} ${gInside.val}) ${gOutside.op} ${gOutside.val}
            }
            `
        this.question = dedent`
            What do you think f(${initValue}) is for the program below?<br>
            <br><pre><code class="language-js">${code}</code></pre>`

        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        setTimeout(() => Prism.highlightAll(), 100);
    }
}
