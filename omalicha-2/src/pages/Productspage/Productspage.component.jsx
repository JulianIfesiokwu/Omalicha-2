import React from "react";
import StyledProductsPage from "../../components/Styled/ProductsPage.styled";

const ProductsPage = () => {
  return (
    <StyledProductsPage>
      <div className="filter-controls">
        <h2 className="filter-title">Categories</h2>
        <p className="category">Hair</p>
        <p className="category">Nails</p>
        <p className="category">Wigs</p>
      </div>
      <div className="products"></div>
    </StyledProductsPage>
  );
};

export default ProductsPage;
