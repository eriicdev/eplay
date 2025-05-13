import { HeaderBar, Links, LinksItem, LinkCart } from "./style";
import logo from "../../assets/images/logo.svg"
import carrinho from "../../assets/images/carrinho.svg"

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="EPLAY" />
      <nav>
        <Links>
          <LinksItem>
            <a href="#">Categorias</a>
          </LinksItem>
          <LinksItem>
            <a href="#">Novidades</a>
          </LinksItem>
          <LinksItem>
            <a href="#">Promoções</a>
          </LinksItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0 - produto(s)
      <img src={carrinho} alt="Carrinho" />
    </LinkCart>
  </HeaderBar>
)


export default Header;
