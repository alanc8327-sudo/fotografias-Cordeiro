document.getElementById("whatsappBtn").addEventListener("click", function () {
    // Substitua pelo seu número de WhatsApp
    const numero = "519999404069";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
});

document.getElementById("instagramBtn").addEventListener("click", function () {
    // Substitua pelo seu nome de usuário do Instagram
    const instagramUsername = "fotografiascordeiro";    
    const url = `https://www.instagram.com/fotografiascordeiro?igsh=MXBraDNxa3ppdzM2NQ%3D%3D&utm_source=qr`;
    window.open(url, "_blank");
});