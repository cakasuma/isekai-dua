## ISEKAI-DUA: Template untuk tugas Medium

### How to run: bagaimana cara memulai dengan proyek ini
- Install modul dependency dengan
```sh
npm install
```
- Jalankan aplikasi dengan
```sh
npm start
```

### Tugas
- Buat server menggunakan express module di aplikasi NodeJS, port bebas, asalkan menggunakan environment
- Server menerima request url
-- `/send-email` , metod `POST` , cari body di thunderclient, dan masukan JSON dengan format `{ "subject": "bebas", "message": "bebas" }` dengan tipe `JSON` , dan mengembalikan response `Email has been sent` tipe text, dengan status kode `201`
-- Memakai modul https://nodemailer.com/about/
-- Bisa coba mengikuti tutorial diatas utk hint