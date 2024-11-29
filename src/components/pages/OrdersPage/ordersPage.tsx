import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/authcontext/authContext";
import { OrderContext } from "../../../context/orderContext/orderContext";
import { OrderStores } from "../../../stores/orderStores";
import { OrderedObject, OrderRequestObject } from "../../../types";
import { CheckoutPageNav } from "../../navbar/checkoutPageNav";

import "./ordersPage.css";
import { requestStores } from "../../../stores/requestStores";

export const OrdersPage = () => {
  const [items, setItems] = useState<OrderedObject[]>([]);
  const [requests, setRequests] = useState<OrderRequestObject[]>([]);
  const { orderedItems, setOrderedItems } = useContext(OrderContext);
  const { user } = useContext(AuthContext);
  const { fetchOrders } = OrderStores;
  const { fetchUserRequests } = requestStores;

  useEffect(() => {
    const newItems = async () => {
      const newOrder = await fetchOrders(user.accessToken);
      const fetchResolvedRequests = await fetchUserRequests(user.accessToken);
      setOrderedItems(() => newOrder);
      setRequests(() => fetchResolvedRequests)
      setItems(() => newOrder);
    };
    newItems();
  }, [fetchOrders, user.accessToken, setOrderedItems, fetchUserRequests]);

  const resolvedRequests = requests.filter(request => request.status === 'delivered')
  

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
                {resolvedRequests.map((req) => (
                  <div
                    key={req.requestId}
                    className="orderBody-quickOrders-container"
                  >
                    <div className="orderBody-quickOrders-content">
                      <span>
                        <img src={req.imageUrl} alt={req.requestTitle} />
                      </span>
                      <br />
                      <span>Order Name: {req.requestTitle}</span>
                      <br />
                      <span>Status: {req.status}</span>
                      <br />
                      <span>Delivery Date: {req.deliveryDate}</span>
                    </div>
                    <div className="orderBody-quickOrders-price">
                      <span>Price: ₦{req.price}</span>
                    </div>
                  </div>
                ))}
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
