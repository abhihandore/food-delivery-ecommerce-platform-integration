import { useContext, useState } from "react";
import css from "./App.module.css";
import CartButton from "./components/Cart/CartButton/CartButton";
import CartModal from "./components/Cart/CartModal/CartModal";
import ProductsGrid from "./components/Common/ProductsGrid/ProductsGrid";
import SubHeaderForMenus from "./components/Common/SubHeaderForMenus/SubHeaderForMenus";
import PageLayout from "./components/PageLayout/PageLayout";
import { CartContext } from "./context/CartContext";

function App() {
  const [showModal, setShowModal] = useState(false);
  const { cartCount } = useContext(CartContext);

  return (
    <PageLayout>
      <SubHeaderForMenus />
      <ProductsGrid />
      <div className={css.cart__btn_wrap}>
        {showModal && <CartModal onCloseModal={() => setShowModal(false)} />}

        {/* If There is an available cart items, then only show modal */}
        {Boolean(cartCount) && !showModal && (
          <CartButton onModalOpen={() => setShowModal(true)} />
        )}
      </div>
    </PageLayout>
  );
}

export default App;
