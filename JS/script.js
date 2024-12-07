// FUNCTION

function rollDice() {
    const jumlahDadu = document.getElementById("jumlahDadu").value;
    const hasilDadu = document.getElementById("hasilDadu");
    const gambarDadu = document.getElementById("gambarDadu");

    const hasilSeluruh = [];
    const gambar = [];

    for (let i = 0; i < jumlahDadu; i++ ) {
        const hasil = Math.floor(Math.random() * 6) + 1;
        hasilSeluruh.push(hasil);
        gambar.push(`<img src="Assets/dice-${hasil}.png" alt="Dadu-${hasil}">`);
    };

    hasilDadu.textContent = `DADU YANG DI DAPAT : ${hasilSeluruh.join(" - ")}`;
    gambarDadu.innerHTML =  gambar.join("")
};