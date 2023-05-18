import React from 'react';




function ProductCard() {
  return (
    <section className="product-card">
      <img src="https://http2.mlstatic.com/D_861072-MLA46114578434_052021-I.jpg" alt="product" className="card__image"/>

      <div className="card__infos">
        <h2 className="card__price">R$  2.479.00</h2>
        <h2 className="card__title">Apple iPhone 11 (64 Gb) - Verde</h2>
      </div>

      <button type="button" className="button__add-cart">+</button>
    </section>

  );
}

export default ProductCard;
