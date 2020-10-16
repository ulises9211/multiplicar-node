const fs = require('fs');

let listarTabla = (base, limite) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if ( !Number(base) ) {
            reject('No es un número');
        }
        let data = '';
        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base * i}\n`
        }
    
        fs.writeFile(`multiplicar/message${base}.txt`, data, (err) => {
            if (err) 
                reject(err)
            else
                resolve('message.txt')
            console.log('The file has been saved!');
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}