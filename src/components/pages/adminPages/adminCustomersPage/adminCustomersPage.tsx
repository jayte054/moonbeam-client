// import { useContext, useEffect, useState } from "react";
// import { AdminPageNavbar } from "../../../navbar/adminPageNavBar";
// import "./adminCustomersPage.css"
// import { CustomerObject, UserDto } from "../../../../types";
// import { AdminStores } from "../../../../stores/adminStores";
// import { AdminAuthContext } from "../../../../context/authcontext/adminAuthContext";
// import { TableColumn } from "react-data-table-component";

// export const AdminCustomersPage = () => {
//     const [customers, setCustomers] = useState<CustomerObject[]>([])
//     const {admin} = useContext(AdminAuthContext)
//     const { getAllUsers } = AdminStores;

//     const accessToken = admin.accessToken;


//     useEffect(() => {
//         const users = async () => {
//             const allUsers: UserDto[] = await getAllUsers(accessToken);

//             const customers: CustomerObject[] = allUsers && allUsers.map((user) => ({
//               name: user.firstname + " " + user.lastname,
//               phoneNumber: user.phoneNumber,
//               email: user.email,
//               orders: user.orders,
//             })); 
//             setCustomers(() => customers)
//         }
//         users()
//     }, [])

//     const columns: TableColumn<CustomerObject>[] | any = [
//         {
//             name: "Customer Name",
//             selector: (row: CustomerObject) => row.name
//         }
//     ]


//     return (
//       <div>
//         <AdminPageNavbar />
//         <div className="admin-customersPage-container">
//           <h2> Customers</h2>
//           <div className="admin-customersPage-body">
//             {customers}
//           </div>
//         </div>
//       </div>
//     );
// }

import { useContext, useEffect, useState } from "react";
import { AdminPageNavbar } from "../../../navbar/adminPageNavBar";
import { CustomerObject, UserDto } from "../../../../types";
import { AdminStores } from "../../../../stores/adminStores";
import { AdminAuthContext } from "../../../../context/authcontext/adminAuthContext";
import { TableColumn } from "react-data-table-component";
import DataTable from "react-data-table-component"; // Import DataTable component

import "./adminCustomersPage.css";

export const AdminCustomersPage = () => {
  const [customers, setCustomers] = useState<CustomerObject[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  const { admin } = useContext(AdminAuthContext);
  const { getAllUsers } = AdminStores;
  const accessToken = admin.accessToken;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const allUsers: UserDto[] = await getAllUsers(accessToken);
        const customerList: CustomerObject[] =
          allUsers?.map((user) => ({
            name: `${user.firstname} ${user.lastname}`,
            phoneNumber: user.phoneNumber,
            email: user.email,
            orders: user.orders,
          })) || [];
        setCustomers(customerList);
      } catch (error) {
        setError("Failed to fetch customers");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [accessToken, getAllUsers]);

  const columns: TableColumn<CustomerObject>[] = [
    {
      name: "Customer Name",
      selector: (row: CustomerObject) => row.name,
      sortable: true,
    },
    {
      name: "Phone Number",
      selector: (row: CustomerObject) => row.phoneNumber,
    },
    {
      name: "Email",
      selector: (row: CustomerObject) => row.email,
    },
    {
      name: "Orders",
      selector: (row: CustomerObject) => row.orders,
      right: true,
    },
  ];

  if (loading) {
    return (
      <div>
        <AdminPageNavbar />
        <div className="admin-customersPage-container">
          <h2>Customers</h2>
          <div className="admin-customersPage-body">
            <p>Loading customers...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <AdminPageNavbar />
        <div className="admin-customersPage-container">
          <h2>Customers</h2>
          <div className="admin-customersPage-body">
            <p>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <AdminPageNavbar />
      <div className="admin-customersPage-container">
        <h2>Customers</h2>
        <div className="admin-customersPage-body">
          <DataTable
            columns={columns}
            data={customers}
            pagination
            highlightOnHover
            pointerOnHover
          />
        </div>
      </div>
    </div>
  );
};
