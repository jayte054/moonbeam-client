import { useContext, useEffect, useState } from "react";
import { AdminPageNavbar } from "../../../navbar/adminPageNavBar";
import "./adminOrdersPage.css";
import { AdminStores } from "../../../../stores/adminStores";
import { AdminAuthContext } from "../../../../context/authcontext/adminAuthContext";
import { PaidOrdersDto } from "../../../../types";

export const AdminOrdersPage = () => {
  const [rtg, setRtg] = useState(false)
  const [_rtg, _setRtg] = useState(false);
  const [quick, setQuick] = useState(false)
  const [_quick, _setQuick] = useState(false);
  const [custom, setCustom] = useState(false)
  const [_custom, _setCustom] = useState(false);
  const [variant, setVariant] = useState(false)
  const [_variant, _setVariant] = useState(false);
  const [orders, setOrders] = useState<PaidOrdersDto[]>([]);
  const {admin} = useContext(AdminAuthContext);
  const { fetchUserOrders } = AdminStores;

  const toggleRtg = () => {
    setRtg(prev => !prev)
  }

   const _toggleRtg = () => {
     _setRtg((prev) => !prev);
   };

  const toggleQuick = () => {
    setQuick((prev) => !prev);
  };

  const _toggleQuick = () => {
    _setQuick((prev) => !prev);
  };

  const toggleCustom = () => {
    setCustom((prev) => !prev);
  };

  const _toggleCustom = () => {
    _setCustom((prev) => !prev);
  };

  const toggleVariant = () => {
    setVariant((prev) => !prev);
  };

   const _toggleVariant = () => {
     _setVariant((prev) => !prev);
   };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const orders = await fetchUserOrders(admin.accessToken);
        setOrders(() => orders);
        return orders;
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrders();
  }, [admin, fetchUserOrders]);
  
  return (
    <div>
      <AdminPageNavbar />
      <div className="admin-ordersPage-container">
        <h2> Orders </h2>
        <div className="admin-ordersPage-body">
          <div className="admin-ordersPage-unresolved">
            <h3>Unresolved Orders</h3>
            <p onClick={toggleRtg} className="orderPage-title">
              Ready To Go Orders
            </p>
            {rtg && (
              <div>
                <ul>
                  <li>Cakes Orders</li>
                  <li>Chops Orders</li>
                </ul>
              </div>
            )}
            <p></p>
            <p onClick={toggleQuick} className="orderPage-title">
              Quick Orders
            </p>
            {quick && (
              <div>
                <ul>
                  <li>Budget Cakes Orders</li>
                  <li>Special Cakes Orders</li>
                  <li>Bronze Package Orders</li>
                  <li>Silver Package Orders</li>
                  <li>Gold Package Orders</li>
                  <li>Diamond Package Orders</li>
                  <li>Chops Orders</li>
                  <li>Pastries Orders</li>
                </ul>
              </div>
            )}
            <p></p>
            <p onClick={toggleCustom} className="orderPage-title">
              Custom Orders
            </p>
            {custom && (
              <div>
                <ul>
                  <li>Custom Cake Orders</li>
                  <li>Custom Package Orders</li>
                  <li>Custom Chops Orders</li>
                </ul>
              </div>
            )}
            <p></p>
            <p onClick={toggleVariant} className="orderPage-title">
              Cake Variants
            </p>
            {variant && (
              <div>
                <ul>
                  <li>Foil Cakes Orders</li>
                  <li>Cake Parfait Orders</li>
                </ul>
              </div>
            )}
          </div>
          <p></p>
          <div className="admin-ordersPage-resolved">
            <h3>Resolved Orders</h3>
          <p onClick={_toggleRtg} className="orderPage-title">
            Ready To Go Orders
          </p>
          {_rtg && (
            <div>
              <ul>
                <li>Cakes Orders</li>
                <li>Chops Orders</li>
              </ul>
            </div>
          )}
          <p></p>
          <p onClick={_toggleQuick} className="orderPage-title">
            Quick Orders
          </p>
          {_quick && (
            <div>
              <ul>
                <li>Budget Cakes Orders</li>
                <li>Special Cakes Orders</li>
                <li>Bronze Package Orders</li>
                <li>Silver Package Orders</li>
                <li>Gold Package Orders</li>
                <li>Diamond Package Orders</li>
                <li>Chops Orders</li>
                <li>Pastries Orders</li>
              </ul>
            </div>
          )}
          <p></p>
          <p onClick={_toggleCustom} className="orderPage-title">
            Custom Orders
          </p>
          {_custom && (
            <div>
              <ul>
                <li>Custom Cake Orders</li>
                <li>Custom Package Orders</li>
                <li>Custom Chops Orders</li>
              </ul>
            </div>
          )}
          <p></p>
          <p onClick={_toggleVariant} className="orderPage-title">
            Cake Variants
          </p>
          {_variant && (
            <div>
              <ul>
                <li>Foil Cakes Orders</li>
                <li>Cake Parfait Orders</li>
              </ul>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};
