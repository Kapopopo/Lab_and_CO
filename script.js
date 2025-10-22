let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.carousel-dot');

function showSlide(n) {
  slides.forEach((s) => s.classList.remove('active'));
  dots.forEach((d) => d.classList.remove('active'));

  currentSlide = (n + slides.length) % slides.length;

  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function goToSlide(n) {
  showSlide(n);
}

setInterval(nextSlide, 5000);

function openModal(model) {
  document.getElementById('modal-' + model).classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(model) {
  document.getElementById('modal-' + model).classList.remove('active');
  document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal').forEach((m) => {
      m.classList.remove('active');
    });
    document.body.style.overflow = 'auto';
    
    const checkoutPage = document.getElementById('checkout-page');
    if (checkoutPage && checkoutPage.classList.contains('active')) {
      closeCheckout();
    }
  }
});

let currentProduct = {
  name: '',
  price: 0,
  image: '',
  model: '',
};

function openCheckout(model, name, price, image) {
  currentProduct = { model, name, price, image };

  document.getElementById('summary-name').textContent = name;
  document.getElementById('summary-img').src = image;
  document.getElementById('summary-subtotal').textContent = price + ' €';
  document.getElementById('summary-total').textContent = price + ' €';
  document.getElementById('btn-total').textContent = price + ' €';

  document.getElementById('checkout-page').classList.add('active');
  document.body.style.overflow = 'hidden';

  closeModal(model);
  window.scrollTo(0, 0);
}

function closeCheckout() {
  document.getElementById('checkout-page').classList.remove('active');
  document.body.style.overflow = 'auto';
  
  const form = document.querySelector('.checkout-form');
  if (form) {
    const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]');
    inputs.forEach(input => {
      input.value = '';
      input.style.borderColor = '';
    });
    
    const checkbox = document.getElementById('cgu');
    if (checkbox) checkbox.checked = false;
    
    const promoInput = document.getElementById('promo-code');
    if (promoInput) promoInput.value = '';
  }
}

function applyPromo() {
  const code = document.getElementById('promo-code').value.trim().toUpperCase();
  const subtotal = currentProduct.price;
  let discount = 0;

  if (code === 'TRAIL100') {
    discount = 100;
    alert('✅ Code promo appliqué : -100 € !');
  } else if (code === 'WELCOME50') {
    discount = 50;
    alert('✅ Code promo appliqué : -50 € !');
  } else if (code === '') {
    alert('⚠️ Veuillez entrer un code promo');
    return;
  } else {
    alert('❌ Code promo invalide');
    return;
  }

  const newTotal = subtotal - discount;
  document.getElementById('summary-total').textContent = newTotal + ' €';
  document.getElementById('btn-total').textContent = newTotal + ' €';
  
  const discountLine = document.querySelector('.summary-line.discount');
  if (discountLine) {
    discountLine.style.display = 'flex';
    discountLine.querySelector('span:last-child').textContent = '-' + discount + ' €';
  }
}

function validateCheckout() {
  const form = document.querySelector('.checkout-form');
  const inputs = form.querySelectorAll('input[required], select[required]');
  let valid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      valid = false;
      input.style.borderColor = '#ef4444';
      input.addEventListener('input', function() {
        this.style.borderColor = '';
      }, { once: true });
    } else {
      input.style.borderColor = '';
    }
  });

  const cgu = document.getElementById('cgu');
  if (!cgu.checked) {
    valid = false;
    alert('⚠️ Veuillez accepter les Conditions Générales de Vente');
    return;
  }

  if (!valid) {
    alert('⚠️ Veuillez remplir tous les champs obligatoires');
    return;
  }

  const email = document.getElementById('email').value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('⚠️ Email invalide');
    document.getElementById('email').style.borderColor = '#ef4444';
    return;
  }

  const tel = document.getElementById('tel').value;
  if (tel.length < 10) {
    alert('⚠️ Numéro de téléphone invalide');
    document.getElementById('tel').style.borderColor = '#ef4444';
    return;
  }

  const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
  if (paymentMethod === 'card') {
    const cardNumber = document.getElementById('card-number').value.replace(/\s/g, '');
    const cardExpiry = document.getElementById('card-expiry').value;
    const cardCVV = document.getElementById('card-cvv').value;

    if (cardNumber.length !== 16) {
      alert('⚠️ Numéro de carte invalide (16 chiffres requis)');
      document.getElementById('card-number').style.borderColor = '#ef4444';
      return;
    }

    if (!cardExpiry.match(/^\d{2}\/\d{2}$/)) {
      alert('⚠️ Date d\'expiration invalide (MM/AA)');
      document.getElementById('card-expiry').style.borderColor = '#ef4444';
      return;
    }

    if (cardCVV.length !== 3) {
      alert('⚠️ CVV invalide (3 chiffres)');
      document.getElementById('card-cvv').style.borderColor = '#ef4444';
      return;
    }
  }

  const btn = document.querySelector('.checkout-btn');
  btn.disabled = true;
  btn.innerHTML = '<span>⏳ Traitement en cours...</span>';

  setTimeout(() => {
    alert(
      '✅ Commande validée !\n\n' +
      'Produit : ' + currentProduct.name + '\n' +
      'Montant : ' + document.getElementById('summary-total').textContent + '\n\n' +
      'Vous allez recevoir un email de confirmation à ' + email
    );
    closeCheckout();
    btn.disabled = false;
    btn.innerHTML = '<span>Valider la commande</span><span id="btn-total">' + currentProduct.price + ' €</span>';
  }, 2000);
}

document.addEventListener('DOMContentLoaded', () => {
  const cardInput = document.getElementById('card-number');
  if (cardInput) {
    cardInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
      let formatted = value.match(/.{1,4}/g)?.join(' ') || value;
      e.target.value = formatted;
    });
  }

  const expiryInput = document.getElementById('card-expiry');
  if (expiryInput) {
    expiryInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
      }
      e.target.value = value;
    });
  }

  const cvvInput = document.getElementById('card-cvv');
  if (cvvInput) {
    cvvInput.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '').slice(0, 3);
    });
  }

  const radios = document.querySelectorAll('.payment-method input[type="radio"]');
  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('active'));
      radio.closest('.payment-method').classList.add('active');
    });
  });
});
