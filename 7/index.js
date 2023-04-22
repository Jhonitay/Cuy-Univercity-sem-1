const http = require('http');
const rupiah = require('rupiah-format');
const fs = require('fs');
const host = '127.0.0.1';
const port = 3002;


// REQUEST = DATA MASUK DARI LUAR 
// RESPONSE = DATA KELUAR DARI SISTEM
const server = http.createServer(function(request,response){
    const nama = "jhonitay";
    let uang = 500000;
    let jajan = 300000;
    let sisa = uang - jajan;

    uang = rupiah.convert(uang);
    jajan = rupiah.convert(jajan);
    sisa = rupiah.convert(sisa);

    console.log(sisa);
    const hasil = 'halo nama saya '+nama+'. Saya jajan sebanyak '+jajan+' tadinya uang saya '+uang+' sekarang sisa '+sisa; 

    fs.appendFile('sisauang.txt',sisa,()=>{
        console.log('berhasil nyimpan data')
    });

    response.statusCode = 203;
    response.end(hasil);
});

server.listen(port, host,'', function(){
    console.log('server menyala di host',host,':', port);
})