// FALCON 2022 CATFISH ORDER SYSTEM

const quantityInput = document.getElementById("quantity");
const totalPrice = document.getElementById("totalPrice");

const pricePerKg = 50;


// Calculate total price

if (quantityInput) {

    quantityInput.addEventListener("input", function () {

        let quantity = Number(quantityInput.value);

        if (quantity < 1) {
            quantity = 1;
        }

        const total = quantity * pricePerKg;

        totalPrice.textContent =
            "GH₵" + total.toFixed(2);

    });

}


// WhatsApp order

const orderForm = document.getElementById("orderForm");

if (orderForm) {

    orderForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("customerName").value;

        const phone =
            document.getElementById("phone").value;

        const fishType =
            document.getElementById("fishType").value;

        const quantity =
            document.getElementById("quantity").value;

        const deliveryMethod =
            document.getElementById("deliveryMethod").value;

        const location =
            document.getElementById("location").value;

        const message =
            document.getElementById("message").value;


        const total =
            Number(quantity) * pricePerKg;


        const whatsappMessage =

`Hello Falcon 2022 👋

I would like to place an order.

Name: ${name}

Phone: ${phone}

Product: ${fishType}

Quantity: ${quantity} kg

Price per kg: GH₵50

Total: GH₵${total.toFixed(2)}

Order Method: ${deliveryMethod}

Location: ${location}

Additional Message:
${message}

Thank you.`;


        const whatsappNumber =
            "233539599236";


        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);


        window.open(whatsappURL, "_blank");

    });

}
// GALLERY IMAGE POPUP

const galleryImages =
    document.querySelectorAll(".gallery-item img");

const imageModal =
    document.getElementById("imageModal");

const modalImage =
    document.getElementById("modalImage");

const closeModal =
    document.querySelector(".close-modal");


if (galleryImages.length > 0) {

    galleryImages.forEach(function(image) {

        image.addEventListener("click", function() {

            imageModal.style.display = "flex";

            modalImage.src = image.src;

        });

    });

}


if (closeModal) {

    closeModal.addEventListener("click", function() {

        imageModal.style.display = "none";

    });

}


if (imageModal) {

    imageModal.addEventListener("click", function(event) {

        if (event.target === imageModal) {

            imageModal.style.display = "none";

        }

    });

}
// CONTACT FORM

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("contactName").value;

        const phone =
            document.getElementById("contactPhone").value;

        const subject =
            document.getElementById("contactSubject").value;

        const message =
            document.getElementById("contactMessage").value;


        const whatsappMessage =

`Hello Falcon 2022 👋

I would like to contact you.

Name: ${name}

Phone: ${phone}

Subject: ${subject}

Message:
${message}

Thank you.`;


        const whatsappNumber =
            "233539599236";


        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);


        window.open(
            whatsappURL,
            "_blank"
        );

    });

}
// MOBILE MENU

const menuToggle =
    document.getElementById("menuToggle");

const mainNav =
    document.getElementById("mainNav");


if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function() {

        mainNav.classList.toggle("active");

    });


    // Close menu after clicking a link

    const navLinks =
        mainNav.querySelectorAll("a");

    navLinks.forEach(function(link) {

        link.addEventListener("click", function() {

            mainNav.classList.remove("active");

        });

    });

}