import {Header} from "../../../modules/Header";
import {Wrapper} from "../../../modules/Wrapper";
import {EmptyCart} from "../../../modules/EmptyCart";
import {CartList} from "../../../modules/CartList";

const Cart = () => (
  <Wrapper>
    <Header />
    <CartList />
    <EmptyCart />
  </Wrapper>
);

export {Cart};
