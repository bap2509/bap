
 ABOUT
 CONTACT US
 LINK PARTNER
 SITEMAP
 PRIVACY POLICY
 DISCLAIMER
 Alfa Arts

 
 HOME
 ANDROID
 LINUX
 WINDOWS
 GAME
 KOMPUTER
 BLOGGING

SEARCH...
?
Home » Tutorial Blogger » Cara Membuat Safelink dengan Blogger Work 100%
 Tutorial Blogger
Cara Membuat Safelink dengan Blogger Work 100%



 
ALFA ARTS - Cara Membuat Safelink dengan Blogger Work 100% - Safelink merupakan sebuah blog (web) yang digunakan untuk mengamankan sebuah link yang akan dikunjungi, biasanya safelink digunakan untuk mengamankan iklan pada blog atau web download, karena blog atau web downlaod rawan terkena ban dari adsense, jadi dengan sistem safelink kita bisa menaruh iklan adsense di blog kita, contoh sistem dari safelink adalah :

Blog > Safelink > Link Download

Jadi dengan sistem seperti diatas blog download kita aman dari ban adsense, dengan hasil yang lumayan besar. Sebenarnya banyak sekali tutorial membuat safelink di Google, namun kebanyakan sudah tidak work karena beberapa faktor, seperti file javascript yang error dan sebagainya, nah kali ini Alfa Arts akan memberikan tutorial yang fresh dan terbaru, tempalte nya pun cukup simple dan sudah saya modifikasi jadi aman dan 100% Work.

Cara Membuat Safelink dengan Blogger Work 100%

Sebelum beranjak ke tutorial nya lebih baik kita lihat terlebih dahulu bagaimana tampilan atau sistem sfalink yang akan kita buat nantinya, dan berikut adalah demonya.

DEMO

Cara Membuat Safelink dengan Blogger Work 100%
Demo Safelink
Nah itulah safelink yang akan kita buat nantinya, kelebihan dari safelink tersebut ada banyak sekali diantaranya sebagai berikut :
Custom Ads
Anti Ban Adsense
High CTR dan BPK
Mudah Dipahami untuk Pemula
Auto Generated
Visit Link dalam Artikel
Nah itu adalah beberapa kelebihan dari safelink ini, bagaimana ? tertarik untuk membuatnya ?, simak tutorial berikut ini.

Cara Membuat Safelink dengan Blogger Work 100%
Nah untuk mengawali tutorial kali ini, akan lebih baik jika sobat menyiapkan terlebih dahulu tempalte yang akan kita gunakan nantinya. dan berikut adalah templatenya, Link Template

#Langkah 1
Silahkan sobat buat blog baru dan gunakan template yang sudah saya berikan diatas tadi, jangan lupa alihkan blog ke mode https dengan cara :
Masuk ke Blogger > Setelan > Dasar > Pengalihan Https > ya atau seperti gambar dibawah ini :
Cara Membuat Safelink dengan Blogger Work 100%

#Langkah 2
Silahkan sobat buat postingan baru, untuk title kosongi terlebih dahulu, kemudian pastekan kode dibawah ini di mode HTML, dan dibawah kode ini sobat bisa beri sedikit artikel, agar tidak terdeteksi spam oleh google.
<center>
<h2 id="daplong" style="color: daplong;">
Please Wait...</h2>
<script src="Kode JavaScript" type="text/javascript"></script> 
<script type="text/javascript">
var currentURL=location.href;
var str = currentURL;
var res = str.replace("URL_Post?url=", "");
document.write('<button id="download" class="Visit_Link" onclick="changeLink();" style="display: 
none;text-align:justify;margin-bottom:2px;">Go To Download</button>')
</script>
</center>
Keterangan :
Kode JavaScript : Jangan dirubah, biarkan seperti itu dahulu
Url Post : Ganti dengan alamat dari postingan sobat
Atau lebih jelasnya lihat gambar dibawah ini :
Cara Membuat Safelink dengan Blogger Work 100%

#Langkah 3
Masuk ke Blogger > Tema > Edit Html, cari kode "URL_Post" dan ganti dengan alamat posting sobat tadi, selengkapnya bisa dilihat screenshot dibawah ini :
Cara Membuat Safelink dengan Blogger Work 100%

#Langkah 4
Langkah selanjutnya adalah membuat script JavaScript, silahkan copy kode dibawah ini ke notepad dan simpan dengan format js.
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(input){var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=Base64._utf8_encode(input);while(i<input.length){chr1=input.charCodeAt(i++);chr2=input.charCodeAt(i++);chr3=input.charCodeAt(i++);enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output=output+ this._keyStr.charAt(enc1)+ this._keyStr.charAt(enc2)+ this._keyStr.charAt(enc3)+ this._keyStr.charAt(enc4);}
return output;},decode:function(input){var output="";var chr1,chr2,chr3;var enc1,enc2,enc3,enc4;var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=this._keyStr.indexOf(input.charAt(i++));enc2=this._keyStr.indexOf(input.charAt(i++));enc3=this._keyStr.indexOf(input.charAt(i++));enc4=this._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+ String.fromCharCode(chr1);if(enc3!=64){output=output+ String.fromCharCode(chr2);}
if(enc4!=64){output=output+ String.fromCharCode(chr3);}}
output=Base64._utf8_decode(output);return output;},_utf8_encode:function(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}
else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}
else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;},_utf8_decode:function(utftext){var string="";var i=0;var c=c1=c2=0;while(i<utftext.length){c=utftext.charCodeAt(i);if(c<128){string+=String.fromCharCode(c);i++;}
else if((c>191)&&(c<224)){c2=utftext.charCodeAt(i+ 1);string+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2;}
else{c2=utftext.charCodeAt(i+ 1);c3=utftext.charCodeAt(i+ 2);string+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3;}}
return string;}}
var encode=document.getElementById('encode'),decode=document.getElementById('decode'),output=document.getElementById('output'),input=document.getElementById('input');var User_ID="";var protected_links="";var a_to_va=0;var a_to_vb=0;var a_to_vc="";function auto_safelink(){auto_safeconvert();}
function auto_safeconvert(){var a_to_vd=window.location.hostname;if(protected_links!=""&&!protected_links.match(a_to_vd)){protected_links+=", "+ a_to_vd;}else if(protected_links=="")
{protected_links=a_to_vd;}
var a_to_ve="";var a_to_vf=new Array();var a_to_vg=0;a_to_ve=document.getElementsByTagName("a");a_to_va=a_to_ve.length;a_to_vf=a_to_fa();a_to_vg=a_to_vf.length;var a_to_vh=false;var j=0;var a_to_vi="";for(var i=0;i<a_to_va;i++)
{a_to_vh=false;j=0;while(a_to_vh==false&&j<a_to_vg)
{a_to_vi=a_to_ve[i].href;if(a_to_vi.match(a_to_vf[j])||!a_to_vi||!a_to_vi.match("http"))
{a_to_vh=true;}
j++;}
if(a_to_vh==false)
{var encryptedUrl=Base64.encode(a_to_vi);a_to_ve[i].href="https://bap2509.blogspot.com/2017/10/menuju-link.html?url="+ encryptedUrl;a_to_ve[i].rel="nofollow";a_to_vb++;a_to_vc+=i+":::"+ a_to_ve[i].href+"\n";}}
var a_to_vj=document.getElementById("anonyminized");var a_to_vk=document.getElementById("found_links");if(a_to_vj)
{a_to_vj.innerHTML+=a_to_vb;}
if(a_to_vk)
{a_to_vk.innerHTML+=a_to_va;}}
function a_to_fa()
{var a_to_vf=new Array();protected_links=protected_links.replace(" ","");a_to_vf=protected_links.split(",");return a_to_vf;} 
Keterangan :
Url_Link : Ganti dengan alamat posting sobat tadi
Lebih jelasnya bisa dilihat pada gambar dibawah ini :
Cara Membuat Safelink dengan Blogger Work 100%

#Langkah 5
Upload script JavaScript yang telah dibauat tadi ke GitHub.com untuk tutorialnya bisa kunjungi artikel ini Cara Mengupload file ke github .

#Langkah 6
Setelah file terupload kembali lagi ke postingan yang telah dibuat tadi, edit dan ganti kode "Kode_JavaScript" dengan alamat js yang telah sobat upload tadi. contoh :
Cara Membuat Safelink dengan Blogger Work 100%

#Langkah 7
Nah pembuatan safelink suda jadi, langkah selanjutnya adalah masuk ke bog utama, dan kita akan menghubungkan dengan blog safelink, dengan cara :
Masuk ke Blog utama pilih Tata letak > Tambahkan Gedet > Html JavaScript dan pastekan kode berikut kesana.
<script type="text/javascript" src="Kode_JavaScript"></script>
<script type="text/javascript">
protected_links = "Protect_Url";
auto_safelink();
</script> 
Keterangan :
Kode_JavaScript : Ganti dengan alamat javascript yang di upload sobat tadi
Protect Url : Isikan dengan alamat website yang tidak ingin dilewati oleh safelink, contohnya google.com, facebook.com, youtube.com, blogger.com dan perlu di ingat untuk memisahkanya menggunakan tanda koma.
Selebihnya bisa dilihat contoh gambar dibawah ini :
Cara Membuat Safelink dengan Blogger Work 100%
!!! Penting : 
Tempatkan gedet penghubung tadi tepat dibwah widget posting blog, atau bisa dilihat gambar dibwah ini :
Cara Membuat Safelink dengan Blogger Work 100%

Info Tambahan :
Pemilihan Protect Link :
Pemlihan protect link sebaiknya adalah website social media seperti facebook, twitter, google plus, dam instagram adapun selain social media adalah website penting seperti google, youtube, blogger, dan yahoo ini berguna agar pengunjung tidak terlalu banyak menemui safelink yang tentunya membuat bosan. Dan yang perlu dihindari adalah website tempat sobat mengupload file seperti zippyshare, 4shared, kbagi dan sebagainya.
Error yang Sering Terjadi :
Visit Link tidak berfungsi
Kejadian ini biasanya terjadi karena kesalahan pada file js, atau alamat file js, jadi pastikan keduanya telah benar.
Selain itu penyebab lainya adalah kesalahan pada url posting, jadi silahkan lebih teliti dalam membuat url.
Muncul Tulisan Mandarin dan 404 Not Found
Kesalahan ini biasanya terjadi karena alamat yang kita tulis buka https tetapi http, jadi pastikan semua yang kita tuliskan baik di template maupun di postingan adalah https.
Note : Jika masih terdapat error dan tidak bisa mengatasi lagi, bisa menggunakan jasa dari Admin dengan harga yang terjangkau, silahkan hubungi admin saja.

Nah itulah tadi tutorial cara membuat safelink di blogger dengan mudah, tutorial ini 100% work dan aman jika sobat mempraktekanya dengan teliti dan mengikuti tutorial dari saya saja. Selebihnya jika ada pertanyaan bisa ditanyakan di komentar atau bisa menghbungi admin. Terimakasih sudah berkunjung.


 
Share on FacebookShare on TwitterShare on Google+Share on LinkedIn
RELATED POSTS :

Cara Submit Blog ke Search Engine Google,Yahoo dan Bing
Blogging adalah semangat baru untuk anak muda saat ini.Terutama anak anak muda bangsa ini. Banyak anak muda yang beralih karier mereka menja… Read More...
Cara Mendapatkan Backlink Gratis
ALFA ARTS - Cara Mendapatkan Backlink Gratis - Apa itu backlink? Backlink adalah sebuah link di sebuah website yang menunjuk ke situs Anda. … Read More...
Download Kumpulan Ebook SEO Terbaru
ALFA ARTS - Download Kumpulan Ebook SEO Trbaru Hallo semua, kembali lagi bersama alfa arts, di episode kali ini saya akan membagikan beberap… Read More...
Cara Mendapatkan Uang dari Blogger, 5 Step Sederhana
ALFA ARTS - Cara Mendapatkan Uang dari Blogger, 5 Step Sederhana Bahkan dari perspektif pribadi saya, apa yang saya ingin berbagi secara i… Read More...
Cara Mendapatkan Domain TLD Gratis
Siapa sih yang ngak pengen domain gratis? hampir semua orang yang tau apa itu domain pasti mau ya di kasih gratis apa lagi itu domain TLD, … Read More...


Newer PostOlder PostHome
POPULAR POSTSLABELARSIP
Cara Bypass Login Wifi.id (Login Tanpa Akun) Gratis 100%
Cara Membuat Portal The End dan Cara Mengalahkan Ender Dragon di Minecraft
Cara Membuat Android Selalu 4G (Always 4G LTE)
Cara Mining Bitcoin Gratis Tanpa Deposit atau Investasi
Cara Mendapatkan Followers Instagram Gratis (Auto Followers Instagram)
Contoh Proposal Pameran Seni
Update Terbaru Minecraft 1.12 (Narator, Fitur Baru, Rahasia, Mob Baru)
Contoh Makalah Tentang HIV/AIDS
Cara Mengatasi E: Unable To Locate package pada Linux
Cara Mengatasi Error Saat Menginstal CorelDraw x8
LIKE US


STATS

Copyright 2017 Alfa Arts Powered by Blogger