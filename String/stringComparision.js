function compress(chars) {

    let index = 0;
    let i = 0;

    while (i < chars.length) {

        let count = 0;
        let current = chars[i];

        while (
            i < chars.length &&
            chars[i] === current
        ) {
            i++;
            count++;
        }

        chars[index++] = current;

        if (count > 1) {

            let str = count.toString();

            for (let ch of str) {
                chars[index++] = ch;
            }
        }
    }

    return index;
}
console.log(compress(["a","a","b","b","c","c","c"]))