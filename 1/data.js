const NamaSaya = "Nitay";
let Usia = 20;

function GenerateBiodata(){
    let generasi;
    if (Usia <= 10) {
        generasi = "Anak-Anak";
    }else if(Usia <= 20){
        generasi = "Remaja";
    }else {
        generasi = "Tua";
    }
    return Biodata.innerHTML = NamaSaya+' '+generasi;
}
let Biodata = document.getElementById('Biodata');
console.log(NamaSaya);
console.log(Usia);
GenerateBiodata();



