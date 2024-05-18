const readlineSync = require("readline-sync")
const fs = require("fs")
const path = require("path");
const filePath = path.join(__dirname, "users.json");


function cesarCipher(str, idx){
    let result = "";
    let alphabet ="abcdefghijklmnopqrstuvwxyz"

    for(letter of str){
        letter = letter.toLowerCase();
        let index = alphabet.indexOf(letter)
        if(index != -1){
            let newIndex = (index + idx)%26;
            result += alphabet[newIndex]
        }
    }
    return result;
}

function registerUser(){
    let userName = readlineSync.question("Enter your name: ")
    let password = readlineSync.question("Enter your password: ", {
        hideEchoBack: true,
        mask: '*'
    });
    password = cesarCipher(password, 3)
    addUser(userName, password);
}

function addUser(uN, p){
    let users = [];
    fs.readFile(filePath,(err, data) =>{
        if(err){
            users;
        }else{
            users = JSON.parse(data);
        }
        users.push({uN, p});
        fs.writeFile(filePath, JSON.stringify(users),(err) =>{
            if(err){
                console.log("Error adding user");
            }else{
                console.log("User added");
            }
        })
    })
}

function login(){
    let userName = readlineSync.question("Enter your name: ")
    let password = readlineSync.question("Enter your password: ", {
        hideEchoBack: true,
        mask: '*'
    });
    

    fs.readFile(filePath, (err, data) => {
        if(err){
            console.log("Error reading")
        }else{
            for(let userNames of JSON.parse(data)){
                if(userNames.uN == userName && cesarCipher(userNames.p, 
23) == password){
                    console.log("Welcome")
                }else{
                    console.log("Create an account")
                }
            }

        }
    })
}
console.log("Base de datos")
while(true){
    console.log("1.- Agregar usuario")
    console.log("2.- Login")
    console.log("3.- Salir del programa")
    let dec = readlineSync.question("¿Qué deseas hacer?: ")

    if(dec == 1){
        registerUser();
        break;
    }
    else if(dec == 2){
        login();
        break;
    }
    else if(dec == 3){
        console.log("Nos vemos!")
        break;
    }
    else{
        continue
    }
        
}
