const bcrypt = require("bcrypt");

async function run() {
    const pass = "1623ar";
    const hash = await bcrypt.hash(pass,10)
    console.log("original pass: ",pass);
    console.log("hashed pass: ",hash);

    const result = await bcrypt.compare("1623ar",hash);
    console.log("result: ",result);
} 

run()