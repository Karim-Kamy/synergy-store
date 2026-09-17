const phoneNumber = "201XXXXXXXXX"; // put your WhatsApp number here

function buyItem(item, price) {
    const message = `Hi! I want to buy ${item} for EGP ${price}.`;
    const whatsappURL = `https://wa.me/${01227224423}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}