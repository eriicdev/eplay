import styled from "styled-components";
import { colors } from "../../styles";

export const ItensList = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s ease;
`;

export const Iten = styled.li`
  position: relative;
  cursor: zoom-in;

  > img {
    //esse '>' diz ao css que essas regras são exclusivas da img que ta dentro do iten
    border: 2px solid ${colors.white};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover; //serve igual um background-size, porem com essa regra nova podemos estilizar diretamente a tag img
  }

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  justify-content: center;
  align-items: center;

  &.is-visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`;

export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;

  header {
    display: flex;
    margin-bottom: 24px;
    justify-content: space-between;

    h4 {
      font-size: 18px;
      font-weight: bold;
    }

    img {
      height: 16px;
      width: 16px;
      cursor: pointer;
    }
  }

  > img {
    width: 100%;
  }

  img,
  iframe {
    display: block;
    max-width: 100%;
  }

  iframe {
    width: 100%;
    height: 480px;
    border: none;
  }
`;
