# 🏙️ İşletme Listesi & WhatsApp İletişim Uygulaması

![İşletme Listesi Uygulaması](/api/placeholder/1200/600 "İşletme Listesi Uygulaması")

## 📋 Proje Açıklaması

Bu uygulama, belirli bir il ve ilçedeki işletmeleri Google Maps API aracılığıyla listeleyip, WhatsApp Web API üzerinden doğrudan iletişim kurmanızı sağlayan modern bir web uygulamasıdır. Özellikle web sitesi olmayan işletmelere hizmet sunmak isteyenler için tasarlanmıştır.

### ✨ Temel Özellikler

- **İl ve İlçe Bazlı Arama:** Kullanıcılar istedikleri il ve ilçeyi seçerek bölgedeki işletmeleri listeleyebilirler
- **Detaylı İşletme Bilgileri:** Her işletme için ad, telefon, adres ve web sitesi durumu görüntülenir
- **Web Sitesi Durumu Kontrolü:** İşletmelerin web sitesi olup olmadığını hızlıca görebilirsiniz
- **Tek Tıkla WhatsApp İletişimi:** "Mesaj Gönder" butonu ile işletmelere önceden hazırlanmış profesyonel bir mesaj gönderilebilir
- **Duyarlı Tasarım:** Mobil cihazlar dahil tüm ekran boyutlarında sorunsuz çalışır
- **Kullanıcı Dostu Arayüz:** Sade ve şık tasarım ile kolay kullanım

## 🖼️ Ekran Görüntüleri

### Ana Sayfa ve Arama Formu
![Ana Sayfa](/api/placeholder/800/400 "Ana Sayfa")

### İşletme Listesi
![İşletme Listesi](/api/placeholder/800/400 "İşletme Listesi")

### WhatsApp Mesaj Ön İzleme
![WhatsApp Mesaj](/api/placeholder/400/800 "WhatsApp Mesaj")

## 🛠️ Teknolojiler

- **Backend:** Node.js, Express.js
- **Frontend:** HTML5, CSS3, JavaScript, Bootstrap 5
- **API:** Google Maps Places API, WhatsApp Web API
- **Paket Yöneticisi:** npm

## ⚙️ Kurulum

1. Projeyi klonlayın
```bash
git clone https://github.com/yourusername/business-listing-app.git
cd business-listing-app
```

2. Gerekli paketleri yükleyin
```bash
npm install
```

3. Google Maps API anahtarını ayarlayın
- `server.js` dosyasındaki `GOOGLE_MAPS_API_KEY` değişkenini kendi API anahtarınızla değiştirin
```javascript
const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';
```

4. Uygulamayı başlatın
```bash
npm start
```

5. Tarayıcınızda uygulamaya erişin
```
http://localhost:3000
```

## 🚀 Kullanım

1. Ana sayfadaki formu kullanarak bir il ve ilçe girin
2. "Ara" butonuna tıklayarak işletmeleri listeleyin
3. Listeden web sitesi olmayan işletmeleri tespit edin
4. "Mesaj Gönder" butonuna tıklayarak WhatsApp üzerinden iletişime geçin
5. Hazır mesaj şablonu otomatik olarak doldurulacaktır

## 📝 Lisans

Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

Katkılarınızı memnuniyetle karşılıyoruz. Lütfen bir pull request göndermekten çekinmeyin.

## 📞 İletişim

Sorularınız için [email@example.com](mailto:email@example.com) adresinden iletişime geçebilirsiniz.