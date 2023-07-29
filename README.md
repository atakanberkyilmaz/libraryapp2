# Kütüphane Uygulaması

Bu proje, Typescript, React Native, Expo ve Redux Toolkit teknolojilerini kullanarak geliştirilen bir kütüphane uygulamasıdır.

## Gereksinimler

Uygulamayı çalıştırabilmek için aşağıdaki gereksinimlerin sağlanmış olması gerekmektedir:

- Node.js ve npm: Node.js ve npm paket yöneticisi, uygulamanın çalışması için gereklidir. Node.JS'i kurduktan sonra npm otomatik olarak yüklenir   
  [Node.js](https://nodejs.org/)
- Expo CLI: Expo projesini yönetmek ve uygulamayı çalıştırmak için kullanılacak olan Expo CLI'nin yüklü olması gerekmektedir.

## Kurulum

1. Yeni bir terminal açın ve şu komutu yazın

    ```bash
    expo init KutuphaneUygulamasi2


2. Proje dizinine gidin:

   ```bash
   cd KutuphaneUygulamasi2

3. Gerekli bağımlılıkları yükleyin:

    ```bash
    npm install


## Çalıştırma
Uygulamayı başlatmak için aşağıdaki komutu çalıştırın:
       ```bash
       expo start

Bu komut, Expo CLI ile uygulamayı başlatacak ve QR kodu ile tarayıcınıza veya Expo Go uygulamasına bağlantı vererek uygulamayı çalıştıracaktır.

## Diğer kullandığım komutlar
    ```bash
    npm install -> npm paketini kurmak için
    yarn install -> yukarıdaki komut çalışmazsa
    expo start -> Bu komutla beraber açtığınız emulatorde metro bundler başlar
    yarn start -> Bu komut ile beraber emulator ve yazdığımız kodlar arasında metro aracılığı ile bağlantı sağlıyoruz
## Teknik Seçimler ve Gerekçelendirmeler
- Farklı ekranlar arasında gezinmek için React Navigation kütüphanesi kullanılmıştır.
- Kitap verilerini uygulamanın durumu dışında saklamak için AsyncStorage kullanılmıştır.
- Minimalist bir UI tasarımı ile kullanıcı dostu bir arayüz oluşturulmuştur.

## Kitap Nesnesi
- Kitap Adı
- Kitap Tanımı
- ISBN numarası
- Yazarlar (birden fazla olabilir)
- Tür
- Kitap Kapağı

## Özellikler
- Kitap adı, ISBN numarası, yazarlar ile arama, filtreleme ve sıralama yapılabilir.
- Sisteme yeni bir kitap eklenip mevcut kitaplar düzenlenebilir ve silinebilir.
- Kitaplar bir sayfada liste halinde görüntülenebilir ve bir kitabın detay bilgileri incelenebilir.
