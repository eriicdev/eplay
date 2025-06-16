import { useState } from "react";
import { HashLink } from "react-router-hash-link";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  HeaderBar,
  NavMobile,
  Links,
  LinksItem,
  CartButton,
  Hamburguer,
  HeaderRow,
} from "./style";

import logo from "../../assets/images/logo.svg";
import carrinho from "../../assets/images/carrinho.svg";

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
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburguer>
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>
          <nav>
            <Links>
              <LinksItem>
                <Link
                  title="Clique aqui para acessar a página de categorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </LinksItem>
              <LinksItem>
                <HashLink
                  title="Clique aqui para acessar a seção em-breve"
                  to="/#coming-soon"
                >
                  Em breve
                </HashLink>
              </LinksItem>
              <LinksItem>
                <HashLink
                  title="Clique aqui para acessar a seção de promoções"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </LinksItem>
            </Links>
          </nav>
        </div>
        <CartButton onClick={openCart}>
          {items.length}
          <span> - produto(s)</span>
          <img src={carrinho} alt="Carrinho" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? "is-open" : ""}>
        <Links>
          <LinksItem>
            <Link
              onClick={() => setIsMenuOpen(false)}
              title="Clique aqui para acessar a página de categorias"
              to="/categories"
            >
              Categorias
            </Link>
          </LinksItem>
          <LinksItem>
            <HashLink
              title="Clique aqui para acessar a seção em-breve"
              to="/#coming-soon"
              onClick={() => setIsMenuOpen(false)}
            >
              Em breve
            </HashLink>
          </LinksItem>
          <LinksItem>
            <HashLink
              title="Clique aqui para acessar a seção de promoções"
              to="/#on-sale"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </LinksItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  );
};

export default Header;
