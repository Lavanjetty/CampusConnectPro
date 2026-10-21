/**
 * CampusConnect Pro - Shopping Cart & Checkout System
 * Dynamic payment field visibility, cart calculations, and validation
 */

class CampusCheckout {
  constructor() {
    this.cart = [
      { id: 1, name: 'Campus Developer Pro Ultrabook', price: 95000, qty: 1, img: 'images/product-laptop.svg' },
      { id: 2, name: 'Studio ANC Wireless Headset', price: 4500, qty: 1, img: 'images/product-headphones.svg' },
      { id: 3, name: 'Campus Health Tracker Pro', price: 2999, qty: 1, img: 'images/product-watch.svg' }
    ];

    this.taxRate = 0.18; // 18% GST demonstration
    this.shippingFee = 0; // Free delivery

    this.init();
  }

  init() {
    this.renderCart();
    this.bindPaymentToggle();
    this.bindFormActions();
  }

  renderCart() {
    const container = document.getElementById('cart-items-tbody');
    if (!container) return;

    let subtotal = 0;
    container.innerHTML = '';

    this.cart.forEach((item, index) => {
      const itemTotal = item.price * item.qty;
      subtotal += itemTotal;

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <div style="display:flex;align-items:center;gap:0.75rem;">
            <img src="${item.img}" alt="${item.name}" style="width:48px;height:36px;object-fit:cover;border-radius:4px;border:1px solid #e2e8f0;">
            <div>
              <strong style="color:#0f2b48;">${item.name}</strong>
              <div style="font-size:0.8rem;color:#64748b;">SKU: CCP-2026-${item.id}</div>
            </div>
          </div>
        </td>
        <td>₹${item.price.toLocaleString()}</td>
        <td>
          <div style="display:flex;align-items:center;gap:0.35rem;">
            <button type="button" class="btn btn-sm btn-outline qty-btn" data-action="dec" data-index="${index}">-</button>
            <span style="min-width:28px;text-align:center;font-weight:600;">${item.qty}</span>
            <button type="button" class="btn btn-sm btn-outline qty-btn" data-action="inc" data-index="${index}">+</button>
          </div>
        </td>
        <td><strong>₹${itemTotal.toLocaleString()}</strong></td>
      `;
      container.appendChild(tr);
    });

    const tax = Math.round(subtotal * this.taxRate);
    const grandTotal = subtotal + tax + this.shippingFee;

    // Update totals
    const subtotalEl = document.getElementById('summary-subtotal');
    const taxEl = document.getElementById('summary-tax');
    const shippingEl = document.getElementById('summary-shipping');
    const totalEl = document.getElementById('summary-total');

    if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString()}`;
    if (taxEl) taxEl.textContent = `₹${tax.toLocaleString()}`;
    if (shippingEl) shippingEl.textContent = this.shippingFee === 0 ? 'FREE' : `₹${this.shippingFee}`;
    if (totalEl) totalEl.textContent = `₹${grandTotal.toLocaleString()}`;

    // Re-bind quantity buttons
    container.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        const action = btn.getAttribute('data-action');
        if (action === 'inc') {
          this.cart[idx].qty += 1;
        } else if (action === 'dec' && this.cart[idx].qty > 1) {
          this.cart[idx].qty -= 1;
        }
        this.renderCart();
      });
    });
  }

  bindPaymentToggle() {
    const paymentRadios = document.querySelectorAll('input[name="paymentMethod"]');
    const cardFields = document.getElementById('card-fields-group');
    const upiFields = document.getElementById('upi-fields-group');
    const netbankingFields = document.getElementById('netbanking-fields-group');
    const codNotice = document.getElementById('cod-notice-group');

    const updateVisibility = (selected) => {
      if (cardFields) cardFields.style.display = (selected === 'credit' || selected === 'debit') ? 'block' : 'none';
      if (upiFields) upiFields.style.display = (selected === 'upi') ? 'block' : 'none';
      if (netbankingFields) netbankingFields.style.display = (selected === 'netbanking') ? 'block' : 'none';
      if (codNotice) codNotice.style.display = (selected === 'cod') ? 'block' : 'none';
    };

    paymentRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        if (radio.checked) updateVisibility(radio.value);
      });
      if (radio.checked) updateVisibility(radio.value);
    });
  }

  bindFormActions() {
    const form = document.getElementById('checkout-form');
    const resetBtn = document.getElementById('btn-cancel-checkout');
    const modal = document.getElementById('checkout-modal');
    const modalClose = document.getElementById('btn-modal-close');

    if (resetBtn && form) {
      resetBtn.addEventListener('click', () => {
        form.reset();
        this.renderCart();
        const errs = form.querySelectorAll('.error-feedback');
        errs.forEach(e => e.classList.remove('show'));
      });
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (this.validateCheckout(form)) {
          this.showOrderConfirmation();
        }
      });
    }

    if (modalClose && modal) {
      modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }
  }

  validateCheckout(form) {
    let isValid = true;

    // Helper
    const checkRequired = (name, errId, msg) => {
      const el = form.querySelector(`[name="${name}"]`);
      const err = document.getElementById(errId);
      if (!el || !el.value.trim()) {
        if (err) { err.textContent = msg; err.classList.add('show'); }
        if (el) el.classList.add('is-invalid');
        isValid = false;
      } else {
        if (err) { err.textContent = ''; err.classList.remove('show'); }
        if (el) el.classList.remove('is-invalid');
      }
    };

    checkRequired('customerName', 'err-cust-name', 'Full Name is required.');
    checkRequired('emailAddress', 'err-cust-email', 'Email Address is required.');
    checkRequired('mobileNumber', 'err-cust-phone', '10-digit mobile number is required.');
    checkRequired('deliveryAddress', 'err-cust-address', 'Delivery street address is required.');
    checkRequired('city', 'err-cust-city', 'City is required.');
    checkRequired('state', 'err-cust-state', 'Please select a state.');
    checkRequired('pinCode', 'err-cust-pin', 'Valid 6-digit PIN code is required.');
    checkRequired('deliveryDate', 'err-cust-date', 'Please choose a preferred delivery date.');

    const paymentMethod = form.querySelector('input[name="paymentMethod"]:checked');
    if (!paymentMethod) {
      isValid = false;
      alert('Please select a payment method.');
      return false;
    }

    if (paymentMethod.value === 'credit' || paymentMethod.value === 'debit') {
      checkRequired('cardHolderName', 'err-card-name', 'Card holder name is required.');
      checkRequired('cardNumber', 'err-card-number', '16-digit card number is required.');
      checkRequired('expiryMonth', 'err-card-expiry', 'Expiry date is required.');
      checkRequired('cvv', 'err-card-cvv', '3-digit CVV is required.');
    } else if (paymentMethod.value === 'upi') {
      checkRequired('upiId', 'err-upi-id', 'Valid UPI ID (e.g., student@okaxis) is required.');
    }

    const terms = form.querySelector('[name="termsAccept"]');
    const termsErr = document.getElementById('err-terms');
    if (terms && !terms.checked) {
      if (termsErr) { termsErr.textContent = 'You must accept the terms and conditions.'; termsErr.classList.add('show'); }
      isValid = false;
    } else if (termsErr) {
      termsErr.textContent = ''; termsErr.classList.remove('show');
    }

    return isValid;
  }

  showOrderConfirmation() {
    const modal = document.getElementById('checkout-modal');
    const orderDetails = document.getElementById('modal-order-summary');
    if (!modal || !orderDetails) return;

    const totalEl = document.getElementById('summary-total');
    const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);

    orderDetails.innerHTML = `
      <div style="text-align:center;margin-bottom:1.5rem;">
        <div style="width:64px;height:64px;border-radius:50%;background:#dcfce7;color:#16a34a;display:inline-flex;align-items:center;justify-content:center;font-size:2rem;margin-bottom:1rem;">✓</div>
        <h3 style="color:#0f2b48;">Order Placed Successfully!</h3>
        <p style="color:#64748b;font-size:0.95rem;">Order Reference: <strong>${orderId}</strong></p>
      </div>
      <div style="background:#f8fafc;padding:1rem;border-radius:8px;border:1px solid #e2e8f0;margin-bottom:1.5rem;">
        <p><strong>Total Billed:</strong> ${totalEl ? totalEl.textContent : '₹0'}</p>
        <p><strong>Payment Status:</strong> Demonstration Authorized</p>
        <p><strong>Estimated Delivery:</strong> Within 3 Business Days</p>
        <p style="font-size:0.8rem;color:#b45309;margin-top:0.5rem;"><em>Notice: This is an academic demonstration transaction. No real payment has been processed.</em></p>
      </div>
    `;

    modal.style.display = 'flex';
  }
}

window.CampusCheckout = CampusCheckout;
