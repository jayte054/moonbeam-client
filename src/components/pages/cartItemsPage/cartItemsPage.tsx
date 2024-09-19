import { useContext, useEffect, useState, useCallback } from "react";
import DataTable, {TableColumn} from "react-data-table-component";
import { AuthContext } from "../../../context/authcontext/authContext";
import { CartContext } from "../../../context/cartContext/cartContext";
import { CartStores } from "../../../stores/cartStores";
import { CartObject } from "../../../types";
import { Footer } from "../../footer/footer"
import { CustomButton } from "../../formComponents/customButton";
import { CartPageNav } from "../../navbar/cartPageNav"
import "./cartItemsPage.css";


export const CartItemsPage = () => {
 const [cartItem, setCartItem] = useState<CartObject[]>([])
 const {cartItems, cartTotal} = useContext<any>(CartContext)
 const {user} = useContext(AuthContext)
 const {deleteCartItem} = CartStores;
 const name = user ? `${user.firstname}'s Cart` : "Cart";

  // useEffect(() => {
  //   const cart = async() => {
  //     const items = await cartItems;
  //     console.log(items)
  //     setCartItem(() => items)
  //   }
  //   cart()
  // }, [cartItems])

  useEffect(() => {
    const cart = async () => {
      const items = await cartItems;

      // Assign images based on item type
      const updatedItems = items.map((item: CartObject) => {
        if (item.itemType === "foilCake") {
          return { ...item, image: "/foilcake.png" };
        } else if (item.itemType === "cakeParfait") {
          return { ...item, image: "/cakeParfait.png" };
        }
        return item;
      });

      setCartItem(updatedItems);
    };
    cart();
  }, [cartItems]);

  //  const fetchCartItems = useCallback(async () => {
  //    const items = await cartItems;

  //    // Assign images based on item type
  //    const updatedItems = items.map((item: CartObject) => {
  //      if (item.itemType === "foilCake") {
  //        return { ...item, image: "/foilcake.png" };
  //      } else if (item.itemType === "cakeParfait") {
  //        return { ...item, image: "/cakeParfait.png" };
  //      }
  //      return item;
  //    });

  //    setCartItem(updatedItems);
  //  }, [cartItems]);

  //  useEffect(() => {
  //    fetchCartItems();
  //  }, [fetchCartItems]);


  const columns: TableColumn<CartObject>[] | any = [
    {
      name: "Item",
      selector: (row: CartObject) => (
        <img
          src={row.imageUrl || row.image}
          alt={row.itemName}
          style={{ width: "4rem", height: "4rem" }}
        />
      ),
    },
    {
      name: "Name",
      selector: (row: CartObject) => row.itemName,
    },
    {
      name: "Quantity",
      selector: (row: CartObject) => row.quantity,
    },
    {
      name: "Price",
      selector: (row: CartObject) => row.price,
    },
    {
      name: "Type",
      selector: (row: CartObject) => row.itemType,
    },
    {
      name: "Remove",
      cell: (row: CartObject) => (
        <CustomButton
          type="button"
          label="remove"
          onClick={() => {
            handleRemoveItem(row.itemId);
          }}
        />
      ),
    },
  ];

    const customStyles = {
      headCells: {
        style: {
          fontWeight: "bold",
          fontSize: "1.3rem",
          margin: "1rem auto",
          textAlign: "center" as "center",
        },
      },
      cells: {
        style: {
          fontSize: "1rem",
          padding: "0.5rem",
          textAlign: "center" as "center",
        },
      },
      rows: {
        style: {
          fontSize: ".8rem",
          fontWeight: "bold",
          margin: "1rem auto",
          textAlign: "center" as "center",
        },
      },
    };

  const handleRemoveItem = async (itemId: string) => {
    const updatedCart = cartItem.filter(item => item.itemId !== itemId)
    await deleteCartItem(user.accessToken, itemId);
    setCartItem(updatedCart)
  }


    return (
      <div className="cartItemsPage-container">
        <CartPageNav />
        <div className="cartItemsPage-body">
          <div className="cartItemsPage-header">{name}</div>
          <div className="cartItems-content">
            <DataTable
              columns={columns}
              data={cartItem}
              pagination
              responsive
              customStyles={customStyles}
            />
            <div>
              <h2>Total : {cartTotal} </h2>
              <span>
                <CustomButton type="button" label="proceed to checkout" />
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}