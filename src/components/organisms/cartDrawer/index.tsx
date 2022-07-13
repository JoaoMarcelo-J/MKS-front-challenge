//components
import { CloseButton } from "../../atoms/closeButton";
import { CartItem } from "../../molecules/cartItem";
import Drawer from "react-modern-drawer";

//styles
import "react-modern-drawer/dist/index.css";
import * as S from "./styles";

interface CartDrawerProps {
  isOpen: boolean;
  closeModal: () => void;
}

export const CartDrawer = ({ isOpen, closeModal }: CartDrawerProps) => {
  return (
    <Drawer
      open={isOpen}
      onClose={closeModal}
      direction="right"
      size="400px"
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
        <CartItem />
        <CartItem />
        <CartItem />
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
