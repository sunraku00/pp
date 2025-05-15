document.getElementById('birthdayGreeting').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value.trim();
    const greetingEl = document.getElementById('greetingMessage');

       if (greetingEl.style.display === 'block') {
        greetingEl.style.display = 'none';
    } else {
        greetingEl.innerText = `Hallo selamat datang, ${name}! 🎉`;
        greetingEl.style.display = 'block';
    }
});


// Tombol klaim hadiah
document.getElementById('changeColorButton').addEventListener('click', function() {
    const body = document.body;
    const currentColor = body.style.backgroundColor;
    // Alternatif beberapa warna lucu
    const colors = ['#a6edff', '#ffe5ec', '#d5f4e6', '#f9f7d9', '#e0bbf4'];
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = newColor;
});


// Tampilkan Playlist Lagu
document.getElementById('showPlaylistButton').addEventListener('click', function () {
    const playlist = document.getElementById('playlistContainer');
    if (playlist.style.display === "none") {
        playlist.style.display = "block";
    } else {
        playlist.style.display = "none";
    }
});