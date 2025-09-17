// index.js

const userInfoDiv = document.getElementById('user-info');
const fetchButton = document.getElementById('fetch-button');

// Butona tıklanıldığında çalışacak olay dinleyicisi
fetchButton.addEventListener('click', fetchRandomUserData);

// Sayfa yüklendiğinde ilk veriyi çek
document.addEventListener('DOMContentLoaded', fetchRandomUserData);

// API'den veri çekme işlemini gerçekleştiren asenkron fonksiyon
async function fetchRandomUserData() {
    // Yükleme durumunu göster
    userInfoDiv.innerHTML = '<p class="loading">Yükleniyor...</p>';
    
    try {
        const randomUserId = Math.floor(Math.random() * 10) + 1;
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${randomUserId}`);
        
        if (!response.ok) {
            throw new Error(`HTTP Hata! Durum kodu: ${response.status}`);
        }
        
        const userData = await response.json();
        
        // Gelen veriyi HTML'e yazdır
        displayUserData(userData);
        
    } catch (error) {
        userInfoDiv.innerHTML = `<p class="error">Veri çekme işleminde bir hata oluştu: ${error.message}</p>`;
        console.error("Hata:", error);
    }
}

// Gelen kullanıcı verisini işleyip HTML'e yazdıran fonksiyon
function displayUserData(user) {
    userInfoDiv.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Kullanıcı Adı:</strong> ${user.username}</p>
        <p><strong>E-posta:</strong> ${user.email}</p>
        <p><strong>Telefon:</strong> ${user.phone}</p>
        <p><strong>Şirket:</strong> ${user.company.name}</p>
        <p><strong>Web Sitesi:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
    `;
}
