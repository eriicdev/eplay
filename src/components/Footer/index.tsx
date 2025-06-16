import {
  Container,
  FooterSection,
  Link,
  LinksList,
  SectionTitle,
} from "./styles";

//Ano atual
const currentYear = new Date().getFullYear();

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <LinksList>
          <li>
            <Link
              title="Clique aqui para acessar jogos de RPG"
              to="/categories#rpg"
            >
              RPG
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de Ação"
              to="/categories#action"
            >
              Ação
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de Esportes"
              to="/categories#sports"
            >
              Esportes
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de Simulação"
              to="/categories#simulation"
            >
              Simulação
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de Luta"
              to="/categories#fight"
            >
              Luta
            </Link>
          </li>
        </LinksList>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <LinksList>
          <li>
            <Link
              title="Clique aqui para acessar a seção de promoções"
              to="/#on-sale"
            >
              Promoções
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar a seção de em-breve"
              to="/#coming-soon"
            >
              Em breve
            </Link>
          </li>
        </LinksList>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
);

export default Footer;
