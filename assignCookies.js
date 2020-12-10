const findContentChildren = (g, s) => {
    let result = 0
    let count = 0

    for (let i = 0; i < s.length; i++) {
        count += s[i]
    }

    for (let i = 0; i < g.length; i++) {
        if (count >= 0 && count - g[i] >= 0) {
            count -= g[i]
            result++
        } else {
            break
        }
    }

    return result
}