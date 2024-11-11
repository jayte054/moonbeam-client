import { AdminPageNavbar } from "../../../navbar/adminPageNavBar";
import "./adminSalesPage.css";

export const AdminSalesPage = () => {
  return (
    <div>
      <AdminPageNavbar />
      <div className="admin-salesPage-container">
        <h2> Sales </h2>
        <div className="admin-salesPage-body"></div>
      </div>
    </div>
  );
};
