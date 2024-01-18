let passport = {
    name: "Petr",
    surname: "Petrov",
};

let belPassport = {};
for (let i = 0; i < passport.length; i++) {
    belPassport[i] = passport[i]
}

belPassport.name = "Ivan";

console.log (passport.name);
console.log (belPassport.name);