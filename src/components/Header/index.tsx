import { useState } from "react";
import { HashLink } from "react-router-hash-link";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import * as S from "./style";

import logo from "../../assets/images/logo.svg";
import cartIcon from "../../assets/images/carrinho.svg";

import { open } from "../../store/reducers/cart";
import { RootReducer } from "../../store";

const Header = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openCart = () => {
    dispatch(open());
  };

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>
          <nav>
            <S.Links>
              <S.LinksItem>
                <Link
                  title="Clique aqui para acessar a página de categorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </S.LinksItem>
              <S.LinksItem>
                <HashLink
                  title="Clique aqui para acessar a seção em-breve"
                  to="/#coming-soon"
                >
                  Em breve
                </HashLink>
              </S.LinksItem>
              <S.LinksItem>
                <HashLink
                  title="Clique aqui para acessar a seção de promoções"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </S.LinksItem>
            </S.Links>
          </nav>
        </div>
        <S.CartButton onClick={openCart}>
          {items.length}
          <span> - produto(s)</span>
          <img src={cartIcon} alt="Carrinho" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? "is-open" : ""}>
        <S.Links>
          <S.LinksItem>
            <Link
              onClick={() => setIsMenuOpen(false)}
              title="Clique aqui para acessar a página de categorias"
              to="/categories"
            >
              Categorias
            </Link>
          </S.LinksItem>
          <S.LinksItem>
            <HashLink
              title="Clique aqui para acessar a seção em-breve"
              to="/#coming-soon"
              onClick={() => setIsMenuOpen(false)}
            >
              Em breve
            </HashLink>
          </S.LinksItem>
          <S.LinksItem>
            <HashLink
              title="Clique aqui para acessar a seção de promoções"
              to="/#on-sale"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </S.LinksItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  );
};

export default Header;
