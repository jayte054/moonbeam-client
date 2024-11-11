import { AdminPageNavbar } from "../../../navbar/adminPageNavBar";
import "./adminOrdersPage.css";

export const AdminOrdersPage = () => {
  return (
    <div>
      <AdminPageNavbar />
      <div className="admin-ordersPage-container">
        <h2> Orders </h2>
        <div className="admin-ordersPage-body"></div>
      </div>
    </div>
  );
};
