import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/authcontext/authContext";
import { OrderContext } from "../../../context/orderContext/orderContext";
import { OrderStores } from "../../../stores/orderStores";
import { OrderedObject } from "../../../types";
import { CheckoutPageNav } from "../../navbar/checkoutPageNav";

import "./ordersPage.css";

export const OrdersPage = () => {
  const [items, setItems] = useState<OrderedObject[]>([]);
  const [requests, setRequests] = useState<OrderedObject[]>([]);
  const { orderedItems, setOrderedItems } = useContext(OrderContext);
  const { user } = useContext(AuthContext);
  const { fetchOrders } = OrderStores;

  useEffect(() => {
    const newItems = async () => {
      const newOrder = await fetchOrders(user.accessToken);
      setOrderedItems(() => newOrder);
      setItems(() => newOrder);
    };
    newItems();
  }, [fetchOrders, user.accessToken, setOrderedItems]);

  return (
    <div>
      <CheckoutPageNav />

      <div className="orderBody-container">
        <h1>Orders</h1>

        {orderedItems && orderedItems.length > 0 ? (
          <>
            {requests.length > 0 && (
              <div className="orderBody-customRequests">
                <h3>Custom Requests</h3>
              </div>
            )}

            {items.length > 0 && (
              <div className="orderBody-quickOrders">
                <h3>Quick Orders</h3>
                {items.map((item) => (
                  <div
                    key={item.orderId}
                    className="orderBody-quickOrders-container"
                  >
                    <div className="orderBody-quickOrders-content">
                      <span>
                        <img src={item.imageUrl} alt={item.orderName} />
                      </span>
                      <br />
                      <span>Order Name: {item.orderName}</span>
                      <br />
                      <span>Order Date: {item.orderDate}</span>
                      <br />
                      <span>Delivery Date: {item.deliveryDate}</span>
                    </div>
                    <div className="orderBody-quickOrders-price">
                      <span>Price: ₦{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <h2>No Orders</h2>
        )}
      </div>
    </div>
  );
};
