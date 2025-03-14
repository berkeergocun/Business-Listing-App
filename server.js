// server.js (Backend - Express.js)
const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Google Maps API anahtarı (gerçek bir anahtar ile değiştirilmeli)
const GOOGLE_MAPS_API_KEY = 'GOOGLE_MAPS_API_KEY';

// İl ve ilçe bazında işletmeleri getiren API endpoint'i
app.get('/api/businesses', async (req, res) => {
  try {
    const { il, ilce } = req.query;
    
    if (!il || !ilce) {
      return res.status(400).json({ error: 'İl ve ilçe bilgileri gereklidir' });
    }
    
    // Google Places API ile işletmeleri sorgulama
    const searchQuery = `${ilce}, ${il}, Türkiye`;
    const response = await axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json', {
      params: {
        query: searchQuery,
        key: GOOGLE_MAPS_API_KEY,
        type: 'business'
      }
    });
    
    // İşletme detaylarını hazırlama
    const businesses = await Promise.all(response.data.results.map(async (place) => {
      // Her işletme için detay bilgilerini alma
      const detailsResponse = await axios.get('https://maps.googleapis.com/maps/api/place/details/json', {
        params: {
          place_id: place.place_id,
          fields: 'name,formatted_address,formatted_phone_number,website',
          key: GOOGLE_MAPS_API_KEY
        }
      });
      
      const details = detailsResponse.data.result;
      
      return {
        name: details.name || place.name,
        phone: details.formatted_phone_number || 'Telefon bilgisi bulunamadı',
        address: details.formatted_address || place.formatted_address,
        hasWebsite: !!details.website,
        website: details.website || '',
        // WhatsApp mesajı için telefon numarasını düzenleme
        whatsappPhone: details.formatted_phone_number ? 
          details.formatted_phone_number.replace(/\D/g, '') : ''
      };
    }));
    
    res.json(businesses);
  } catch (error) {
    console.error('İşletmeleri getirirken hata oluştu:', error);
    res.status(500).json({ error: 'Sunucu hatası' });
  }
});

// WhatsApp mesajı oluşturma ve yönlendirme
app.get('/api/send-whatsapp', (req, res) => {
  const { phone } = req.query;
  
  if (!phone) {
    return res.status(400).send('Telefon numarası gereklidir');
  }
  
  // WhatsApp mesajı metni
  const message = encodeURIComponent(
    "Merhaba! Kurumsal kimliğinizi güçlendirecek, müşterilerinize 7/24 ulaşabileceğiniz " +
    "profesyonel bir web sitesine ihtiyacınız var mı? Size özel, mobil uyumlu ve SEO dostu " +
    "bir web sitesi oluşturabiliriz. Detaylı bilgi için iletişime geçebilirsiniz."
  );
  
  // WhatsApp Web API URL'i
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
  
  res.redirect(whatsappUrl);
});

// Ana sayfayı yönlendirme
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Sunucuyu başlatma
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});