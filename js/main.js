// RAM PRICE MANAGEMENT
let rmemory = 0;
let ssd = 0;
let deli = 0;


// 8gb Ram Action
document.getElementById('ram8gb').addEventListener('click', function () {
    rmemory = 0;
    const ram8 = document.getElementById('xtra-mem-price');
    ram8.innerText = rmemory;
    totalcalc();
    document.getElementById('total-price').innerText = totalcalc();

})
// 16gb Ram Action

document.getElementById('ram16gb').addEventListener('click', function () {
    rmemory = 180;
    const ram16 = document.getElementById('xtra-mem-price');
    ram16.innerText = rmemory;
    totalcalc();
    document.getElementById('total-price').innerText = totalcalc();
})




// STROAGE PRICE MANAGEMENT

// 256GB SSD
document.getElementById('hd256gb').addEventListener('click', function () {
    ssd = 0
    const storage256 = document.getElementById('xtra-storage-price');
    storage256.innerText = ssd;
    totalcalc();
    document.getElementById('total-price').innerText = totalcalc();
})

// 512GB SSD
document.getElementById('hd512gb').addEventListener('click', function () {
    ssd = 100
    const storage512 = document.getElementById('xtra-storage-price');
    storage512.innerText = ssd;
    totalcalc();
    document.getElementById('total-price').innerText = totalcalc();
})

// 1012GB SSD
document.getElementById('hd1024gb').addEventListener('click', function () {
    ssd = 180
    const storage1024 = document.getElementById('xtra-storage-price');
    storage1024.innerText = ssd;
    totalcalc();
    document.getElementById('total-price').innerText = totalcalc();
})





// DELIVARY PRICE MANAGEMENT

// FREE
document.getElementById('freeDeli').addEventListener('click', function () {
    deli = 0
    const freeDe = document.getElementById('deli-price');
    freeDe.innerText = deli;
    totalcalc();
    document.getElementById('total-price').innerText = totalcalc();
})

// PAID
document.getElementById('paidDeli').addEventListener('click', function () {
    deli = 20
    const paidDe = document.getElementById('deli-price');
    paidDe.innerText = deli;
    totalcalc();
    document.getElementById('total-price').innerText = totalcalc();
})



// TOTAL PRICE MANAGEMENT FUNCTION
function totalcalc() {
    let total = 1299 + rmemory + ssd + deli;
    return total;;
}