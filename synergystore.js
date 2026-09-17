const phoneNumber = "201227224423"; 

function buyItem(item, price) {
    const message = `Hi! I want to buy ${item} for EGP ${price}.`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}
