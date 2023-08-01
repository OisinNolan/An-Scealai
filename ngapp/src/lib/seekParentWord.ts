function reverseString(str) {
    return str.split("").reverse().join("");
}

function seekBoundary(text: string): number {
    const search = text.search(/\s/);
    if (search > -1) {
        return search;
    }
    return text.length; // If we don't find any space, then go to the start / end of the string
}

type SeekResult = {
    text: string,
    startIndex: number,
    endIndex: number
}

/* This function returns the word in 'text' that contains the index 'index'. */
export default function seekParentWord(text: string, index: number): SeekResult {
    const [before, after] = [text.slice(0, index), text.slice(index)];
    const startIndex = index - seekBoundary(reverseString(before));
    const endIndex = index + seekBoundary(after);
    return {
        text: text.slice(startIndex, endIndex),
        startIndex: startIndex,
        endIndex: endIndex
    }
}