const isSubsequence = (s, t) => {
    let filteredT = t.split('').filter(char => s.indexOf(char) > -1)

    if (filteredT.length === s.length) {
        return filteredT.join('') === s
    }

    return filteredT.length >= s.length
}