// index.js

// API'den veri çekme işlemini gerçekleştiren asenkron fonksiyon
async function fetchRandomUserData() {
  try {
    // 1 ile 10 arasında rastgele bir kullanıcı ID'si oluştur
    const randomUserId = Math.floor(Math.random() * 10) + 1;
    
    // Oluşturulan ID ile API'ye istek gönder
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${randomUserId}`);
    
    // Eğer istek başarısız olursa hata fırlat
    if (!response.ok) {
      throw new Error(`HTTP Hata! Durum kodu: ${response.status}`);
    }
    
    // Gelen JSON verisini ayrıştır
    const userData = await response.json();
    
    // İşlenmiş veriyi konsola yazdır
    displayUserData(userData);
    
  } catch (error) {
    // Hata oluşursa konsola yazdır
    console.error("Veri çekme işleminde bir hata oluştu:", error);
  }
}

// Gelen kullanıcı verisini işleyip konsola yazdıran fonksiyon
function displayUserData(user) {
  console.log("--- Rastgele Kullanıcı Bilgileri ---");
  console.log(`Ad: ${user.name}`);
  console.log(`Kullanıcı Adı: ${user.username}`);
  console.log(`E-posta: ${user.email}`);
  console.log(`Şirket: ${user.company.name}`);
  console.log(`Web Sitesi: ${user.website}`);
  console.log("----------------------------------");
}

// Uygulama başladığında fonksiyonu çağır
fetchRandomUserData();
