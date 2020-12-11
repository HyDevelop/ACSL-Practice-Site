
export function randInt(min: number, max: number)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export function randIntInclusive(min: number, maxInclusive: number)
{
    return randInt(min, maxInclusive + 1)
}

export function randBool()
{
    return Math.random() < 0.5
}

export function rand<T>(a: T[])
{
    return a[Math.floor(Math.random() * a.length)]
}
