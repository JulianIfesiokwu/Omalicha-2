import React from "react";
import StyledProductsPage from "../../components/Styled/ProductsPage.styled";

const ProductsPage = () => {
  return (
    <StyledProductsPage>
      <div className="filter-controls"></div>
      <div className="products"></div>
    </StyledProductsPage>
  );
};

export default ProductsPage;
