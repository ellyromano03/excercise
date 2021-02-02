const fs = require("fs")
const util = require("util")

const read = util.promisify(fs.readFile)
const write = util.promisify(fs.writeFile)
let p, q, r

Promise.all([
    p = read("./text1.txt", "utf8"),
    q = read("./text2.txt", "utf8"),
    r = read("./text3.txt", "utf8")
])

.then((data) => {
    write("./text4.txt", data.join(" "))
})