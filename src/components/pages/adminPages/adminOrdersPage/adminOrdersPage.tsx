import { useContext, useEffect, useState } from "react";
import { AdminPageNavbar } from "../../../navbar/adminPageNavBar";
import "./adminOrdersPage.css";
import { AdminStores } from "../../../../stores/adminStores";
import { AdminAuthContext } from "../../../../context/authcontext/adminAuthContext";
import { OrderRequestObject, PaidOrdersDto, UpdateRequestDto, UpdateUserOrderDto } from "../../../../types";
import DataTable, { TableColumn } from "react-data-table-component";
import { CustomInput } from "../../../formComponents/customInput";

export const AdminOrdersPage = () => {
  const [rtg, setRtg] = useState(false)
  const [_rtg, _setRtg] = useState(false);
  const [quick, setQuick] = useState(false)
  const [_quick, _setQuick] = useState(false);
  const [custom, setCustom] = useState(false)
  const [_custom, _setCustom] = useState(false);
  const [variant, setVariant] = useState(false)
  const [_variant, _setVariant] = useState(false);
  const [customCake, setCustomCake] = useState<OrderRequestObject[]>([]);
  const [customChops, setCustomChops] = useState<OrderRequestObject[]>([]);
  const [customPackage, setCustomPackage] = useState<OrderRequestObject[]>([]);
  const [_rtgCakes, _setRtgCakes] = useState(false);
  const [resolvedRtgCakes, setResolvedRtgCakes] = useState(false);
  const [_rtgChops, _setRtgChops] = useState(false);
  const [resolvedRtgChops, setResolvedRtgChops] = useState(false);
  const [_chops, _setChops] = useState(false);
  const [resolvedChops, setResolvedChops] = useState(false);
  const [_pastry, _setPastry] = useState(false);
  const [resolvedPastry, setResolvedPastry] = useState(false);
  const [_budgetCake, _setBudgetCake] = useState(false);
  const [resolvedBudgetCake, setResolvedBudgetCake] = useState(false);
  const [_specialCake, _setSpecialCake] = useState(false);
  const [resolvedSpecialCake, setResolvedSpecialCake] = useState(false);
  const [_bronzePackage, _setBronzePackage] = useState(false);
  const [resolvedBronzePackage, setResolvedBronzePackage] = useState(false);
  const [_silverPackage, _setSilverPackage] = useState(false);
  const [resolvedSilverPackage, setResolvedSilverPackage] = useState(false);
  const [_goldPackage, _setGoldPackage] = useState(false);
  const [resolvedGoldPackage, setResolvedGoldPackage] = useState(false);
  const [_diamondPackage, _setDiamondPackage] = useState(false);
  const [resolvedDiamondPackage, setResolvedDiamondPackage] = useState(false);
  const [_cakeParfait, _setCakeParfait] = useState(false);
  const [resolvedCakeParfait, setResolvedCakeParfait] = useState(false);
  const [_foilCake, _setFoilCake] = useState(false);
  const [resolvedFoilCake, setResolvedFoilCake] = useState(false);
  const [_customCake, _setCustomCake] = useState(false);
  const [resolvedCustomCake, setResolvedCustomCake] = useState(false);
  const [_customPackage, _setCustomPackage] = useState(false);
  const [resolvedCustomPackage, setResolvedCustomPackage] = useState(false);
  const [_customChops, _setCustomChops] = useState(false);
  const [resolvedCustomChops, setResolvedCustomChops] = useState(false);
  const [orders, setOrders] = useState<PaidOrdersDto[]>([]);
  const [requests, setRequests] = useState<OrderRequestObject[]>([]);
  const [orderResolved, setOrderResolved] = useState(false);
  const [requestResolved, setRequestResolved] = useState(false);
  const [resolved, setResolved] = useState<PaidOrdersDto[]>([])
  const [unresolved, setUnresolved] = useState<PaidOrdersDto[]>([]);
  const [resolvedRequests, setResolvedRequests] = useState<
    OrderRequestObject[]
  >([]);
  const [resolvingRowId, setResolvingRowId] = useState<string | null>(null);
  const [requestPrice, setRequestPrice] = useState<Record<string, string>>({})
  const [file, setFile] = useState<File | any>();
  const [requestStatus, setRequestStatus] = useState<string>('')
  const {admin} = useContext(AdminAuthContext);
  const { fetchUserOrders, fetchRequests, updateUserOrder, updateUserRequest } =
    AdminStores;

   const toggleOrder = (
     setState: React.Dispatch<React.SetStateAction<boolean>>
   ) => {
     setState((prev) => !prev);
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

    useEffect(() => {
      const fetchOrderRequests = async () => {
        try {
          const requests = await fetchRequests(admin.accessToken);
          console.log(requests)
          setRequests(() => requests);
          return requests;
        } catch (error) {
          console.log(error);
        }
      };
      fetchOrderRequests();
    }, [admin, fetchRequests]);
      
      const fetchCustomCakeOrders = async (category: string) => {
        console.log(category);
        const saidOrders = await requests.filter(
          (order) =>
            order.category === category && order.status === "in progress"
        );
        return setCustomCake(() => saidOrders);
      };

      const fetchCustomPackageOrders = async (category: string) => {
        console.log(category);
        const saidOrders = await requests.filter(
          (order) =>
            order.category === category && order.status === "in progress"
        );
        return setCustomPackage(() => saidOrders);
      };

      const fetchCustomChopOrders = async (category: string) => {
        console.log(category);
        const saidOrders = await requests.filter(
          (order) =>
            order.category === category && order.status === "in progress"
        );
        return setCustomChops(() => saidOrders);
      };

      const fetchUnresolvedOrders = async (category: string) => {
        console.log(category);
        const saidOrders = await orders.filter(
          (order) =>
            order.category === category && order.deliveryStatus === "unresolved"
        );
        return setUnresolved(() => saidOrders);
      };

      const fetchResolvedOrder = async (category: string) => {
        const saidOrders = await orders.filter(order => order.category === category && order.deliveryStatus === 'resolved')
        return setResolved(() => saidOrders)
      }

       const fetchResolvedRequests = async (category: string) => {
         const saidRequests = await requests.filter(
           (request) =>
             request.category === category &&
             request.status === "delivered"
         );
         return setResolvedRequests(() => saidRequests);
       };

  const columns: TableColumn<PaidOrdersDto>[] = [
    {
      name: "Customer Name",
      selector: (row: PaidOrdersDto) => row.orderName,
      sortable: true,
    },
    {
      name: "Image",
      cell: (row: PaidOrdersDto) => (
        <div>
          <img
            src={row?.imageUrl}
            alt={row?.orderName}
            style={{
              height: "4rem",
              width: "4rem",
            }}
          />
        </div>
      ),
    },
    {
      name: "Price",
      selector: (row: PaidOrdersDto) => row?.amount,
    },
    {
      name: "Order Date",
      selector: (row: PaidOrdersDto) => row.date,
    },
    {
      name: "Delivery Date",
      selector: (row: PaidOrdersDto) => row.deliveryDate,
    },
    {
      name: "Status",
      selector: (row: PaidOrdersDto) => row.status,
    },
    {
      name: "Delivery",
      cell: (row: PaidOrdersDto) => {
        const handleResolveOrder = async () => {
          const updateOrderDto: UpdateUserOrderDto = {
            deliveryStatus: "resolved",
          };

          try {
            // Set the resolving state for this row
            setResolvingRowId(row.id);

            const resolveOrder = await updateUserOrder(
              admin.accessToken,
              row.id,
              updateOrderDto
            );

            if (resolveOrder) {
              row.deliveryStatus = "resolved"; // Update the row's deliveryStatus locally
              toggleOrder(setOrderResolved); // Optional: Trigger any global updates
            }
          } catch (error) {
            console.error( error);
          } finally {
            // Clear the resolving state for this row
            setResolvingRowId(null);
          }
        };

        return (
          <button
            type="button"
            onClick={handleResolveOrder}
            disabled={
              row.deliveryStatus === "Resolved" || resolvingRowId === row.id
            } // Disable if already resolved or in progress
            className="admin-ordersPae-orderButton"
            style={{
              backgroundColor:
                row.status === "resolved"
                  ? "#28a745"
                  : resolvingRowId === row.id
                  ? "#ffc107"
                  : "#007bff",
              cursor:
                row.status === "resolved" || resolvingRowId === row.id
                  ? "not-allowed"
                  : "pointer",
            }}
          >
            {row.deliveryStatus === "resolved"
              ? "Resolved" // Show "Resolved" if already resolved
              : resolvingRowId === row.id
              ? "Resolving..." // Show feedback while resolving
              : row.deliveryStatus}
          </button>
        );
      },
    },
  ];

  const resolvedOrdersColumns: TableColumn<PaidOrdersDto>[] = [
    {
      name: "Customer Name",
      selector: (row: PaidOrdersDto) => row.orderName,
      sortable: true,
    },
    {
      name: "Image",
      cell: (row: PaidOrdersDto) => (
        <div>
          <img
            src={row?.imageUrl}
            alt={row?.orderName}
            style={{
              height: "4rem",
              width: "4rem",
            }}
          />
        </div>
      ),
    },
    {
      name: "Price",
      selector: (row: PaidOrdersDto) => row?.amount,
    },
    {
      name: "Order Date",
      selector: (row: PaidOrdersDto) => row.date,
    },
    {
      name: "Delivery Date",
      selector: (row: PaidOrdersDto) => row.deliveryDate,
    },
    {
      name: "Status",
      selector: (row: PaidOrdersDto) => row.status,
    },
    {
      name: "Delivery",
      cell: (row: PaidOrdersDto) => row.deliveryStatus,
    },
  ];

const RequestColumns: TableColumn<OrderRequestObject>[] = [
  {
    name: "Customer Name",
    selector: (row: OrderRequestObject) => row.requestTitle,
    sortable: true,
  },
  {
    name: "Image",
    cell: (row: OrderRequestObject) => {
      const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
          setFile(file);
        }
      };
      return (
        <div>
          {row.imageUrl ? (
            <img
              src={row?.imageUrl}
              alt={row?.requestTitle}
              style={{
                height: "4rem",
                width: "4rem",
              }}
            />
          ) : (
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{
                display: "block",
                marginTop: "0.5rem",
              }}
            />
          )}
        </div>
      );
    },
  },
  {
    name: "Price",
    cell: (row: OrderRequestObject) => {
      const handlePriceChange = (requestId: string, value: string) => {
        setRequestPrice((prev) => ({
          ...prev,
          [requestId]: value,
        }));
      };

      return (
        <input
          type="text"
          value={requestPrice[row.requestId] || row.price}
          onChange={(e) => handlePriceChange(row.requestId, e.target.value)}
          style={{
            width: "4rem",
          }}
          required
        />
      );
    },
  },
  {
    name: "Content",
    cell: (row: OrderRequestObject) => {
      try {
        const contentArray: string[] = Array.isArray(row.content)
          ? row.content
          : JSON.parse(row.content.replace(/{/g, "[").replace(/}/g, "]"));

        return contentArray.join(", ");
      } catch (error) {
        console.error("Failed to parse content:", error);
        return "Invalid content format";
      }
    },
  },
  {
    name: "Status",
    cell: (row: OrderRequestObject) => {
      const handleStatusChange = (
        event: React.ChangeEvent<HTMLSelectElement>
      ) => {
        setRequestStatus(event.target.value);
      };

      return (
        <select
          name="status"
          value={requestStatus || row.status}
          onChange={handleStatusChange}
          style={{
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">
            Select Status
          </option>
          <option value="canceled">Canceled</option>
          <option value="delivered">Delivered</option>
        </select>
      );
    },
  },
  {
    name: "Delivery Date",
    selector: (row: OrderRequestObject) => row.deliveryDate,
  },
  {
    name: "Delivery",
    cell: (row: OrderRequestObject) => {
      const handleRequestResolve = async () => {
        const updateRequestDto: UpdateRequestDto = {
          price: requestPrice[row.requestId] || row.price,
          status: requestStatus || row.status,
          imageUrl: row.imageUrl,
        };
        try {
          setResolvingRowId(row.requestId);
          const updateRequest = await updateUserRequest(
            admin.accessToken,
            row.requestId,
            file,
            updateRequestDto
          );

          if (updateRequest) {
            row.status = updateRequestDto.status; // Update locally for immediate feedback
            toggleOrder(setRequestResolved);
          }
        } catch (error) {
          console.error(error);
        } finally {
          setResolvingRowId(null);
        }
      };

      return (
        <button
          type="button"
          onClick={handleRequestResolve}
          disabled={
            row.status === "delivered" ||
            row.status === "canceled" ||
            resolvingRowId === row.requestId
          }
          className= "admin-ordersPae-requestButton"
          style={{
            
            backgroundColor:
              row.status === "delivered"
                ? "#28a745"
                : resolvingRowId === row.requestId
                ? "#ffc107"
                : "#007bff",
            cursor:
              row.status === "delivered" ||
              row.status === "canceled" ||
              resolvingRowId === row.requestId
                ? "not-allowed"
                : "pointer",
          }}
        >
          {row.status === "delivered"
            ? "Resolved"
            : resolvingRowId === row.requestId
            ? "Resolving..."
            : "Resolve"}
        </button>
      );
    },
  },
];

const ResolvedRequestColumns: TableColumn<OrderRequestObject>[] = [
  {
    name: "Customer Name",
    selector: (row: OrderRequestObject) => row.requestTitle,
    sortable: true,
  },
  {
    name: "Image",
    cell: (row: OrderRequestObject) => (
    <img 
      src ={row.imageUrl} 
      alt={row.requestTitle} 
      style={{width: '4rem', height: "4rem"}}
      />)
  },
  {
    name: "Price",
    cell: (row: OrderRequestObject) => row.price
  },
  {
    name: "Content",
    cell: (row: OrderRequestObject) => {
      try {
        const contentArray: string[] = Array.isArray(row.content)
          ? row.content
          : JSON.parse(row.content.replace(/{/g, "[").replace(/}/g, "]"));

        return contentArray.join(", ");
      } catch (error) {
        console.error("Failed to parse content:", error);
        return "Invalid content format";
      }
    },
  },
  {
    name: "Status",
    cell: (row: OrderRequestObject) => row.status
  },
  {
    name: "Delivery Date",
    selector: (row: OrderRequestObject) => row.deliveryDate,
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
         fontSize: ".9rem",
         textAlign: "center" as "center",
       },
     },
     rows: {
       style: {
         margin: "1rem auto",
         textAlign: "center" as "center",
       },
     },
   };
  
  return (
    <div>
      <AdminPageNavbar />
      <div className="admin-ordersPage-container">
        <h2> Orders </h2>
        <div className="admin-ordersPage-body">
          <div className="admin-ordersPage-unresolved">
            <h3>Unresolved Orders</h3>
            <p onClick={() => toggleOrder(setRtg)} className="orderPage-title">
              Ready To Go Orders
            </p>
            {rtg && (
              <div>
                <ul>
                  <li
                    onClick={() => {
                      toggleOrder(_setRtgCakes);
                        fetchUnresolvedOrders("rtgCakes");
                    }}
                  >
                    Cakes Orders
                  </li>
                  {
                    _rtgCakes && unresolved && (
                      <div className="orderTable">
                        <DataTable
                          columns={columns}
                          data={unresolved}
                          pagination
                          highlightOnHover
                          pointerOnHover
                          responsive
                          customStyles={customStyles}
                        />
                      </div>
                    )
                    // ))
                  }
                  <li
                    onClick={() => {
                      toggleOrder(_setRtgChops);
                        fetchUnresolvedOrders("rtgChops");
                    }}
                  >
                    Chops Orders
                  </li>
                  {_rtgChops && unresolved && (
                    <div className="orderTable">
                      <DataTable
                        columns={columns}
                        data={unresolved}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        responsive
                        customStyles={customStyles}
                      />
                    </div>
                  )}
                </ul>
              </div>
            )}
            <p></p>
            <p
              onClick={() => toggleOrder(setQuick)}
              className="orderPage-title"
            >
              Quick Orders
            </p>
            {quick && (
              <div>
                <ul>
                  <li
                    onClick={() => {
                      toggleOrder(_setBudgetCake);
                      fetchUnresolvedOrders("budgetCake");
                    }}
                  >
                    Budget Cakes Orders
                  </li>
                  {_budgetCake && unresolved && (
                    <div className="orderTable">
                      <DataTable
                        columns={columns}
                        data={unresolved}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        responsive
                        customStyles={customStyles}
                      />
                    </div>
                  )}
                  <li
                    onClick={() => {
                      toggleOrder(_setSpecialCake);
                      fetchUnresolvedOrders("specialCake");
                    }}
                  >
                    Special Cakes Orders
                  </li>
                  {_specialCake && unresolved && (
                    <div className="orderTable">
                      <DataTable
                        columns={columns}
                        data={unresolved}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        responsive
                        customStyles={customStyles}
                      />
                    </div>
                  )}
                  <li
                    onClick={() => {
                      toggleOrder(_setBronzePackage);
                      fetchUnresolvedOrders("bronzePackage");
                    }}
                  >
                    Bronze Package Orders
                  </li>
                  {_bronzePackage && unresolved && (
                    <div className="orderTable">
                      <DataTable
                        columns={columns}
                        data={unresolved}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        responsive
                        customStyles={customStyles}
                      />
                    </div>
                  )}
                  <li
                    onClick={() => {
                      toggleOrder(_setSilverPackage);
                      fetchUnresolvedOrders("silverPackage");
                    }}
                  >
                    Silver Package Orders
                  </li>
                  {_silverPackage && unresolved && (
                    <div className="orderTable">
                      <DataTable
                        columns={columns}
                        data={unresolved}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        responsive
                        customStyles={customStyles}
                      />
                    </div>
                  )}
                  <li
                    onClick={() => {
                      toggleOrder(_setGoldPackage);
                      fetchUnresolvedOrders("goldPackage");
                    }}
                  >
                    Gold Package Orders
                  </li>
                  {_goldPackage && unresolved && (
                    <div className="orderTable">
                      <DataTable
                        columns={columns}
                        data={unresolved}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        responsive
                        customStyles={customStyles}
                      />
                    </div>
                  )}
                  <li
                    onClick={() => {
                      toggleOrder(_setDiamondPackage);
                      fetchUnresolvedOrders("diamondPackage");
                    }}
                  >
                    Diamond Package Orders
                  </li>
                  {_diamondPackage && unresolved && (
                    <div className="orderTable">
                      <DataTable
                        columns={columns}
                        data={unresolved}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        responsive
                        customStyles={customStyles}
                      />
                    </div>
                  )}
                  <li
                    onClick={() => {
                      toggleOrder(_setChops);
                      fetchUnresolvedOrders("chops");
                    }}
                  >
                    Chops Orders
                  </li>
                  {_chops && unresolved && (
                    <div className="orderTable">
                      <DataTable
                        columns={columns}
                        data={unresolved}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        responsive
                        customStyles={customStyles}
                      />
                    </div>
                  )}
                  <li
                    onClick={() => {
                      toggleOrder(_setPastry);
                      fetchUnresolvedOrders("pastry");
                    }}
                  >
                    Pastries Orders
                  </li>
                  {_pastry && unresolved && (
                    <div className="orderTable">
                      <DataTable
                        columns={columns}
                        data={unresolved}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        responsive
                        customStyles={customStyles}
                      />
                    </div>
                  )}
                </ul>
              </div>
            )}
            <p></p>
            <p
              onClick={() => toggleOrder(setCustom)}
              className="orderPage-title"
            >
              Custom Requests
            </p>
            {custom && (
              <div>
                <ul>
                  <li
                    onClick={() => {
                      toggleOrder(_setCustomCake);
                        fetchCustomCakeOrders("customCake");
                    }}
                  >
                    Custom Cake Orders
                  </li>
                  {_customCake && customCake && (
                    <div className="orderTable">
                      <DataTable
                        columns={RequestColumns}
                        data={customCake}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        responsive
                        customStyles={customStyles}
                      />
                    </div>
                  )}
                  <li
                    onClick={() => {
                      toggleOrder(_setCustomPackage);
                        fetchCustomPackageOrders("customPackage");
                    }}
                  >
                    Custom Package Orders
                  </li>
                  {_customPackage && customPackage && (
                    <div className="orderTable">
                      <DataTable
                        columns={RequestColumns}
                        data={customPackage}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        responsive
                        customStyles={customStyles}
                      />
                    </div>
                  )}
                  <li
                    onClick={() => {
                      toggleOrder(_setCustomChops);
                        fetchCustomChopOrders("customChops");
                    }}
                  >
                    Custom Chops Orders
                  </li>
                  {_customChops && customChops && (
                    <div className="orderTable">
                      <DataTable
                        columns={RequestColumns}
                        data={customChops}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        responsive
                        customStyles={customStyles}
                      />
                    </div>
                  )}
                </ul>
              </div>
            )}
            <p></p>
            <p
              onClick={() => toggleOrder(setVariant)}
              className="orderPage-title"
            >
              Cake Variants
            </p>
            {variant && (
              <div>
                <ul>
                  <li
                    onClick={() => {
                      toggleOrder(_setFoilCake);
                        fetchUnresolvedOrders("foilCake");
                    }}
                  >
                    Foil Cakes Orders
                  </li>
                  {_foilCake && unresolved && (
                    <div className="orderTable">
                      <DataTable
                        columns={columns}
                        data={unresolved}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        responsive
                        customStyles={customStyles}
                      />
                    </div>
                  )}
                  <li
                    onClick={() => {
                      toggleOrder(_setCakeParfait);
                        fetchUnresolvedOrders("cakeParfait");
                    }}
                  >
                    Cake Parfait Orders
                  </li>
                  {_cakeParfait && unresolved && (
                    <div className="orderTable">
                      <DataTable
                        columns={columns}
                        data={unresolved}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        responsive
                        customStyles={customStyles}
                      />
                    </div>
                  )}
                </ul>
              </div>
            )}
          </div>
          <p></p>
          <div className="admin-ordersPage-resolved">
            <h3>Resolved Orders</h3>
            <p onClick={() => toggleOrder(_setRtg)} className="orderPage-title">
              Ready To Go Orders
            </p>
            {_rtg && (
              <div>
                <ul>
                  <li
                    onClick={() => {
                      toggleOrder(setResolvedRtgCakes);
                      fetchResolvedOrder("rtgCakes");
                    }}
                  >
                    Cakes Orders
                  </li>
                  {resolvedRtgCakes && resolved && (
                    <div>
                      <DataTable
                        columns={resolvedOrdersColumns}
                        data={resolved}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        responsive
                        customStyles={customStyles}
                      />
                    </div>
                  )}
                  <li
                    onClick={() => {
                      toggleOrder(setResolvedRtgChops);
                      fetchResolvedOrder("rtgChops");
                    }}
                  >
                    Chops Orders
                  </li>
                  {resolvedRtgChops && resolved && (
                    <div>
                      <DataTable
                        columns={resolvedOrdersColumns}
                        data={resolved}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        responsive
                        customStyles={customStyles}
                      />
                    </div>
                  )}
                </ul>
              </div>
            )}
            <p></p>
            <p
              onClick={() => toggleOrder(_setQuick)}
              className="orderPage-title"
            >
              Quick Orders
            </p>
            {_quick && (
              <div>
                <ul>
                  <li
                    onClick={() => {
                      toggleOrder(setResolvedBudgetCake);
                      fetchResolvedOrder("budgetCake");
                    }}
                  >
                    Budget Cakes Orders
                  </li>
                  {resolvedBudgetCake && resolved && (
                    <div>
                      <DataTable
                        columns={resolvedOrdersColumns}
                        data={resolved}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        responsive
                        customStyles={customStyles}
                      />
                    </div>
                  )}
                  <li
                    onClick={() => {
                      toggleOrder(setResolvedSpecialCake);
                      fetchResolvedOrder("specialCake");
                    }}
                  >
                    Special Cakes Orders
                  </li>
                  {resolvedSpecialCake && resolved && (
                    <div>
                      <DataTable
                        columns={resolvedOrdersColumns}
                        data={resolved}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        responsive
                        customStyles={customStyles}
                      />
                    </div>
                  )}
                  <li
                    onClick={() => {
                      toggleOrder(setResolvedBronzePackage);
                      fetchResolvedOrder("bronzePackage");
                    }}
                  >
                    Bronze Package Orders
                  </li>
                  {resolvedBronzePackage && resolved && (
                    <div>
                      <DataTable
                        columns={resolvedOrdersColumns}
                        data={resolved}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        responsive
                        customStyles={customStyles}
                      />
                    </div>
                  )}
                  <li
                    onClick={() => {
                      toggleOrder(setResolvedSilverPackage);
                      fetchResolvedOrder("silverPackage");
                    }}
                  >
                    Silver Package Orders
                  </li>
                  {resolvedSilverPackage && resolved && (
                    <div>
                      <DataTable
                        columns={resolvedOrdersColumns}
                        data={resolved}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        responsive
                        customStyles={customStyles}
                      />
                    </div>
                  )}
                  <li
                    onClick={() => {
                      toggleOrder(setResolvedGoldPackage);
                      fetchResolvedOrder("goldPackage");
                    }}
                  >
                    Gold Package Orders
                  </li>
                  {resolvedGoldPackage && resolved && (
                    <div>
                      <DataTable
                        columns={resolvedOrdersColumns}
                        data={resolved}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        responsive
                        customStyles={customStyles}
                      />
                    </div>
                  )}
                  <li
                    onClick={() => {
                      toggleOrder(setResolvedDiamondPackage);
                      fetchResolvedOrder("diamondPackage");
                    }}
                  >
                    Diamond Package Orders
                  </li>
                  {resolvedDiamondPackage && resolved && (
                    <div>
                      <DataTable
                        columns={resolvedOrdersColumns}
                        data={resolved}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        responsive
                        customStyles={customStyles}
                      />
                    </div>
                  )}
                  <li
                    onClick={() => {
                      toggleOrder(setResolvedChops);
                      fetchResolvedOrder("chops");
                    }}
                  >
                    Chops Orders
                  </li>
                  {resolvedChops && resolved && (
                    <div>
                      <DataTable
                        columns={resolvedOrdersColumns}
                        data={resolved}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        responsive
                        customStyles={customStyles}
                      />
                    </div>
                  )}
                  <li
                    onClick={() => {
                      toggleOrder(setResolvedPastry);
                      fetchResolvedOrder("chops");
                    }}
                  >
                    Pastries Orders
                  </li>
                  {resolvedPastry && resolved && (
                    <div>
                      <DataTable
                        columns={resolvedOrdersColumns}
                        data={resolved}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        responsive
                        customStyles={customStyles}
                      />
                    </div>
                  )}
                </ul>
              </div>
            )}
            <p></p>
            <p
              onClick={() => toggleOrder(_setCustom)}
              className="orderPage-title"
            >
              Custom Orders
            </p>
            {_custom && (
              <div>
                <ul>
                  <li
                    onClick={() => {
                      toggleOrder(setResolvedCustomCake);
                      fetchResolvedRequests("customCake");
                    }}
                  >
                    Custom Cake Orders
                  </li>
                  {resolvedCustomCake && resolvedRequests && (
                    <div>
                      <DataTable
                        columns={ResolvedRequestColumns}
                        data={resolvedRequests}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        responsive
                        customStyles={customStyles}
                      />
                    </div>
                  )}
                  <li
                    onClick={() => {
                      toggleOrder(setResolvedCustomPackage);
                      fetchResolvedRequests("customPackage");
                    }}
                  >
                    Custom Package Orders
                  </li>
                  {resolvedCustomPackage && resolvedRequests && (
                    <div>
                      <DataTable
                        columns={ResolvedRequestColumns}
                        data={resolvedRequests}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        responsive
                        customStyles={customStyles}
                      />
                    </div>
                  )}
                  <li
                    onClick={() => {
                      toggleOrder(setResolvedCustomChops);
                      fetchResolvedRequests("customChops");
                    }}
                  >
                    Custom Chops Orders
                  </li>
                  {resolvedCustomChops && resolvedRequests && (
                    <div>
                      <DataTable
                        columns={ResolvedRequestColumns}
                        data={resolvedRequests}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        responsive
                        customStyles={customStyles}
                      />
                    </div>
                  )}
                </ul>
              </div>
            )}
            <p></p>
            <p
              onClick={() => toggleOrder(_setVariant)}
              className="orderPage-title"
            >
              Cake Variants
            </p>
            {_variant && (
              <div>
                <ul>
                  <li
                    onClick={() => {
                      toggleOrder(setResolvedFoilCake);
                      fetchResolvedOrder("foilCake");
                    }}
                  >
                    Foil Cakes Orders
                  </li>
                  {resolvedFoilCake && resolved && (
                    <div>
                      <DataTable
                        columns={resolvedOrdersColumns}
                        data={resolved}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        responsive
                        customStyles={customStyles}
                      />
                    </div>
                  )}
                  <li
                    onClick={() => {
                      toggleOrder(setResolvedCakeParfait);
                      fetchResolvedOrder("cakeParfait");
                    }}
                  >
                    Cake Parfait Orders
                  </li>
                  {resolvedCakeParfait && resolved && (
                    <div>
                      <DataTable
                        columns={resolvedOrdersColumns}
                        data={resolved}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        responsive
                        customStyles={customStyles}
                      />
                    </div>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
