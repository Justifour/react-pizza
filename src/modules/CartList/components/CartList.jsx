import {CartListBottom} from "../../../components/CartListBottom";
import {CartListItem} from "../../../components/CartListItem";
import {CartListTop} from "../../../components/CartListTop";

const CartList = () => {
  return (
    <div class="content">
      <div class="container container--cart">
        <div class="cart">
          <CartListTop />
          <div class="content__items">
            <CartListItem />
          </div>
          <CartListBottom />
        </div>
      </div>
    </div>
  );
};

export {CartList};
