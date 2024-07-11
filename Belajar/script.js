const KhodamList = [
    "Khodam Macan Putih",
    "Khodam Naga", 
    "Khodam Beruang",
    "Khodam Singa",
    "Khodam Macan Kumbang",
    "Khodam Buaya Putih",
    "Khodam Ular Kobra",
    "Khodam Kudanil",
    "Tidak Ada"
];

function pilihKhodamAcak(event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value;
    const resultDiv = document.getElementById("result");
    const notificationDiv = document.getElementById("notification");
    resultDiv.textContent = "";
    notificationDiv.style.display = "none";
    
    if (nama) {
        const randomIndex = Math.floor(Math.random() * KhodamList.length);
        const khodamTerpilih = KhodamList[randomIndex];
        notificationDiv.textContent = `Nama Anda adalah ${nama} dan Khodam Anda adalah ${khodamTerpilih}`;
        notificationDiv.style.display = "block";
        
        setTimeout(() => {
            resultDiv.textContent = "";
            notificationDiv.style.display = "none";
        }, 5000);
    } else {
        resultDiv.textContent = "Nama Tidak Boleh Kosong";
    }
}

document.getElementById("KhodamForm").addEventListener("submit", pilihKhodamAcak);
