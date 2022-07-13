//components
import { CloseButton } from "../../atoms/closeButton";
import { CartItem } from "../../molecules/cartItem";
import Drawer from "react-modern-drawer";

//styles
import "react-modern-drawer/dist/index.css";
import * as S from "./styles";
import { useSelector } from "react-redux";
import { IState } from "../../../store";
import { ICartItem } from "../../../store/modules/cart/types";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";

interface CartDrawerProps {
  isOpen: boolean;
  closeModal: () => void;
}

export const CartDrawer = ({ isOpen, closeModal }: CartDrawerProps) => {
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);
  const { width } = useWindowDimensions();
  const isMobile = width > 1024 ? false : true;

  return (
    <Drawer
      open={isOpen}
      onClose={closeModal}
      direction="right"
      size={!isMobile ? "460px" : "300px"}
      style={{
        backgroundColor: "var(--brand-color)",
        cursor: "default",
      }}
    >
      <S.DrawerHeader>
        <h2>
          Carrinho <br /> de compras
        </h2>
        <CloseButton method={closeModal} padding="10px" />
      </S.DrawerHeader>
      <S.DrawerBody>
        {cart.map((item) => (
          <CartItem
            key={item.product.id}
            photo={item.product.photo}
            name={item.product.name}
            price={item.product.price}
            quantity={item.quantity}
          />
        ))}
      </S.DrawerBody>
      <S.DrawerFooter>
        <div>
          <h4>Total:</h4>
          <strong>R$399</strong>
        </div>

        <button onClick={closeModal}>Finalizar Compra</button>
      </S.DrawerFooter>
    </Drawer>
  );
};
