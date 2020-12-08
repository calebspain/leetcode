const rotateString = (A, B) => {
    let answer = false
    let usedCharacters = ''

    if (A.length === B.length) {
        if (!A && !B) {
            answer = true
        } else {
            for (let i = 0; i < A.length; i++) {
                if (A.slice(i, A.length) + usedCharacters === B) {
                    answer = true
                    break
                }

                usedCharacters += A.slice(i, i + 1)
            }
        }
    }

    return answer
}