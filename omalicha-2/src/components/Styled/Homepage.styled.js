import styled from "styled-components";

const StyledHomepage = styled.div`
  .carousel {
    width: 100%;
    height: 90vh;
    overflow: hidden;
    position: relative;
    margin-bottom: 1rem;
  }

  .back-btn {
    position: absolute;
    left: 4rem;
    top: 50%;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.1);
    padding: 0.4rem;
    color: white;
    cursor: pointer;
  }
  .forward-btn {
    position: absolute;
    right: 4rem;
    top: 50%;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.1);
    padding: 0.4rem;
    color: white;
    cursor: pointer;
  }

  .shop {
    position: absolute;
    top: 50%;
    left: 50%;
  }
  .img-container {
    width: 100%;
    cursor: pointer;

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }

  .shop {
    width: 10%;
    position: absolute;
    top: 70%;
    right: 50%;
    transform: translate(-50%, -50%);
  }

  .hide {
    display: none;
  }

  .show {
    display: block;
  }

  @media only screen and (max-width: 600px) {
    .carousel {
      height: auto;
    }
    .forward-btn {
      right: 1rem;
      top: 50%;
    }
    .back-btn {
      left: 1rem;
      top: 50%;
    }

    .shop {
      width: 30%;
      position: absolute;
      top: 80%;
      right: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export default StyledHomepage;
