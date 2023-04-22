const keterangan1 = document.getElementById("keterangan1");
const keterangan2 = document.getElementById("keterangan2");
const keterangan3 = document.getElementById("keterangan3");
const lampu1 = document.getElementById("lampu1");
const lampu2 = document.getElementById("lampu2");
const lampu3 = document.getElementById("lampu3");
let t1 = document.getElementById('t1');
let t2 = document.getElementById('t2');
let t3 = document.getElementById('t3');
let t4 = document.getElementById('t4');



function saklar(){
    if (t1.checked==true) {
        keterangan1.innerHTML = 'NYALA';
        lampu1.src = '../ASET/IMG/on.gif';
    } else {
        keterangan1.innerHTML = 'PADAM';
        lampu1.src = '../ASET/IMG/off.gif';
    }

    if (t2.checked) {
        keterangan2.innerHTML = 'NYALA';
        lampu2.src = '../ASET/IMG/on.gif';
    } else {
        keterangan2.innerHTML = 'PADAM';
        lampu2.src = '../ASET/IMG/off.gif';
    }

    if (t3.checked) {
        keterangan3.innerHTML = 'NYALA';
        lampu3.src = '../ASET/IMG/on.gif';
    } else {
        keterangan3.innerHTML = 'PADAM';
        lampu3.src = '../ASET/IMG/off.gif';
    }
}
function semua(){
    if (t4.checked ) {
        keterangan1.innerHTML = 'NYALA';
        lampu1.src = '../ASET/IMG/on.gif';
        keterangan2.innerHTML = 'NYALA';
        lampu2.src = '../ASET/IMG/on.gif';
        keterangan3.innerHTML = 'NYALA';
        lampu3.src = '../ASET/IMG/on.gif';
        t1.checked = true;
        t2.checked = true;
        t3.checked = true;
        t4.checked = true;

    } else {
        keterangan1.innerHTML = 'PADAM';
        lampu1.src = '../ASET/IMG/off.gif';
        keterangan2.innerHTML = 'PADAM';
        lampu2.src = '../ASET/IMG/off.gif';
        keterangan3.innerHTML = 'PADAM';
        lampu3.src = '../ASET/IMG/off.gif';
        t1.checked = false;
        t2.checked = false;
        t3.checked = false;
    }
}

