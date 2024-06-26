import { MdEmail, MdLock } from 'react-icons/md'
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubTitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";
import { Button } from "../../components/Button";

const Login = () => {
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin> Faça seu cadastro </TitleLogin>
            <SubTitleLogin> Faça seu login e make the change._ </SubTitleLogin>
            <form>
              <Input placeholder="Email" leftIcon={<MdEmail />}/>
              <Input placeholder="Senha" type="password" leftIcon={<MdLock />}/>
              <Button title="Entrar" variant="secondary" />
            </form>
            <Row>
              <EsqueciText> Esqueci minha senha </EsqueciText>
              <CriarText> Criar Conta </CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Login;
