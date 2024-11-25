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
  const [rtgCakes, setRtgCakes] = useState < PaidOrdersDto[]>([]);
  const [rtgChops, setRtgChops] = useState<PaidOrdersDto[]>([]);
  const [budgetCake, setBudgetCake] = useState<PaidOrdersDto[]>([]);
  const [specialCake, setSpecialCake] = useState<PaidOrdersDto[]>([]);
  const [chops, setChops] = useState<PaidOrdersDto[]>([]);
  const [pastry, setPastry] = useState<PaidOrdersDto[]>([]);
  const [bronzePackage, setBronzePackage] = useState<PaidOrdersDto[]>([]);
  const [silverPackage, setSilverPackage] = useState<PaidOrdersDto[]>([]);
  const [goldPackage, setGoldPackage] = useState<PaidOrdersDto[]>([]);
  const [diamondPackage, setDiamondPackage] = useState<PaidOrdersDto[]>([]);
  const [cakeParfait, setCakeParfait] = useState<PaidOrdersDto[]>([]);
  const [foilCake, setFoilCake] = useState<PaidOrdersDto[]>([]);
  const [customCake, setCustomCake] = useState<OrderRequestObject[]>([]);
  const [customChops, setCustomChops] = useState<OrderRequestObject[]>([]);
  const [customPackage, setCustomPackage] = useState<OrderRequestObject[]>([]);
  const [_rtgCakes, _setRtgCakes] = useState(false);
  const [_rtgChops, _setRtgChops] = useState(false);
  const [_chops, _setChops] = useState(false);
  const [_pastry, _setPastry] = useState(false);
  const [_budgetCake, _setBudgetCake] = useState(false);
  const [_specialCake, _setSpecialCake] = useState(false);
  const [_bronzePackage, _setBronzePackage] = useState(false);
  const [_silverPackage, _setSilverPackage] = useState(false);
  const [_goldPackage, _setGoldPackage] = useState(false);
  const [_diamondPackage, _setDiamondPackage] = useState(false);
  const [_cakeParfait, _setCakeParfait] = useState(false);
  const [_foilCake, _setFoilCake] = useState(false);
  const [_customCake, _setCustomCake] = useState(false);
  const [_customPackage, _setCustomPackage] = useState(false);
  const [_customChops, _setCustomChops] = useState(false);
  const [orders, setOrders] = useState<PaidOrdersDto[]>([]);
  const [requests, setRequests] = useState<OrderRequestObject[]>([]);
  const [orderResolved, setOrderResolved] = useState(false);
  const [requestResolved, setRequestResolved] = useState(false);
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

  //  const toggleResolved = 

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

  const fetchRtgCakeOrders = async (category: string) => {
    console.log('ioio')
    const saidOrders = await orders.filter(
      (order) =>
        order.category === category && order.deliveryStatus === "unresolved"
    );
    return setRtgCakes(() => saidOrders);
  }

  const fetchRtgChopOrders = async (category: string) => {
    console.log(category);
    const saidOrders = await orders.filter(
      (order) =>
        order.category === category && order.deliveryStatus === "unresolved"
    );
    return setRtgChops(() => saidOrders);
  };

    const fetchBudgetCakeOrders = async (category: string) => {
      console.log(category);
      const saidOrders = await orders.filter(
        (order) =>
          order.category === category && order.deliveryStatus === "unresolved"
      );
      return setBudgetCake(() => saidOrders);
    };  

    const fetchSpecialCakeOrders = async (category: string) => {
      console.log(category);
      const saidOrders = await orders.filter(
        (order) =>
          order.category === category && order.deliveryStatus === "unresolved"
      );
      return setSpecialCake(() => saidOrders);
    };  

    const fetchChopOrders = async (category: string) => {
      console.log(category);
      const saidOrders = await orders.filter(
        (order) =>
          order.category === category && order.deliveryStatus === "unresolved"
      );
      return setChops(() => saidOrders);
    };  

    const fetchPastryOrders = async (category: string) => {
    console.log(category);
    const saidOrders = await orders.filter(
      (order) =>
        order.category === category && order.deliveryStatus === "unresolved"
    );
    return setPastry(() => saidOrders);
  };  
  
  const fetchBonzeOrders = async (category: string) => {
    console.log(category);
    const saidOrders = await orders.filter(
      (order) =>
        order.category === category && order.deliveryStatus === "unresolved"
    );
    return setBronzePackage(() => saidOrders);
  };  
  const fetchSilverOrders = async (category: string) => {
    console.log(category);
    const saidOrders = await orders.filter(
      (order) =>
        order.category === category && order.deliveryStatus === "unresolved"
    );
    return setSilverPackage(() => saidOrders);
  };  
  
  const fetchGoldOrders = async (category: string) => {
    console.log(category);
    const saidOrders = await orders.filter(
      (order) =>
        order.category === category && order.deliveryStatus === "unresolved"
    );
    return setGoldPackage(() => saidOrders);
  };

    const fetchDiamondOrders = async (category: string) => {
      console.log(category);
      const saidOrders = await orders.filter(
        (order) =>
          order.category === category && order.deliveryStatus === "unresolved"
      );
      return setDiamondPackage(() => saidOrders);
    };

      const fetchCakeParfaitOrders = async (category: string) => {
        console.log(category);
        const saidOrders = await orders.filter(
          (order) =>
            order.category === category && order.deliveryStatus === "unresolved"
        );
        return setCakeParfait(() => saidOrders);
      };

      const fetchFoilCakeOrders = async (category: string) => {
        console.log(category);
        const saidOrders = await orders.filter(
          (order) =>
            order.category === category && order.deliveryStatus === "unresolved"
        );
        return setFoilCake(() => saidOrders);
      };
      
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

      // const fetchRtgChopOrders = async (category: string) => {
      //   console.log(category);
      //   const saidOrders = await orders.filter(
      //     (order) =>
      //       order.category === category && order.deliveryStatus === "unresolved"
      //   );
      //   return setRtgChops(() => saidOrders);
      // };

  

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
              row.deliveryStatus === "resolved" || resolvingRowId === row.id
            } // Disable if already resolved or in progress
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              backgroundColor:
                row.status === "resolved"
                  ? "#28a745"
                  : resolvingRowId === row.id
                  ? "#ffc107"
                  : "#007bff",
              color: "#fff",
              border: "none",
              cursor:
                row.status === "resolved" ||
                resolvingRowId === row.id
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
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            backgroundColor:
              row.status === "delivered"
                ? "#28a745"
                : resolvingRowId === row.requestId
                ? "#ffc107"
                : "#007bff",
            color: "#fff",
            border: "none",
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
                      if (rtgCakes[0] === undefined) {
                        fetchRtgCakeOrders("rtgCakes");
                      } else {
                        return;
                      }
                    }}
                  >
                    Cakes Orders
                  </li>
                  {
                    _rtgCakes && rtgCakes && (
                      <div className="orderTable">
                        <DataTable
                          columns={columns}
                          data={rtgCakes}
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
                      if (rtgChops[0] === undefined) {
                        fetchRtgChopOrders("rtgChops");
                      } else {
                        return;
                      }
                    }}
                  >
                    Chops Orders
                  </li>
                  {_rtgChops && rtgChops && (
                    <div className="orderTable">
                      <DataTable
                        columns={columns}
                        data={rtgChops}
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
                      if (budgetCake[0] === undefined) {
                        fetchBudgetCakeOrders("budgetCake");
                      } else {
                        return;
                      }
                    }}
                  >
                    Budget Cakes Orders
                  </li>
                  {_budgetCake && budgetCake && (
                    <div className="orderTable">
                      <DataTable
                        columns={columns}
                        data={budgetCake}
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
                      if (specialCake[0] === undefined) {
                        fetchSpecialCakeOrders("specialCake");
                      } else {
                        return;
                      }
                    }}
                  >
                    Special Cakes Orders
                  </li>
                  {_specialCake && specialCake && (
                    <div className="orderTable">
                      <DataTable
                        columns={columns}
                        data={specialCake}
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
                      if (bronzePackage[0] === undefined) {
                        fetchBonzeOrders("bronzePackage");
                      } else {
                        return;
                      }
                    }}
                  >
                    Bronze Package Orders
                  </li>
                  {_bronzePackage && bronzePackage && (
                    <div className="orderTable">
                      <DataTable
                        columns={columns}
                        data={bronzePackage}
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
                      if (silverPackage[0] === undefined) {
                        fetchSilverOrders("silverPackage");
                      } else {
                        return;
                      }
                    }}
                  >
                    Silver Package Orders
                  </li>
                  {_silverPackage && silverPackage && (
                    <div className="orderTable">
                      <DataTable
                        columns={columns}
                        data={silverPackage}
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
                      if (goldPackage[0] === undefined) {
                        fetchGoldOrders("goldPackage");
                      } else {
                        return;
                      }
                    }}
                  >
                    Gold Package Orders
                  </li>
                  {_goldPackage && goldPackage && (
                    <div className="orderTable">
                      <DataTable
                        columns={columns}
                        data={goldPackage}
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
                      if (diamondPackage[0] === undefined) {
                        fetchDiamondOrders("diamondPackage");
                      } else {
                        return;
                      }
                    }}
                  >
                    Diamond Package Orders
                  </li>
                  {_diamondPackage && diamondPackage && (
                    <div className="orderTable">
                      <DataTable
                        columns={columns}
                        data={diamondPackage}
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
                      if (chops[0] === undefined) {
                        fetchChopOrders("chops");
                      } else {
                        return;
                      }
                    }}
                  >
                    Chops Orders
                  </li>
                  {_chops && chops && (
                    <div className="orderTable">
                      <DataTable
                        columns={columns}
                        data={chops}
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
                      if (pastry[0] === undefined) {
                        fetchPastryOrders("pastry");
                      } else {
                        return;
                      }
                    }}
                  >
                    Pastries Orders
                  </li>
                  {_pastry && pastry && (
                    <div className="orderTable">
                      <DataTable
                        columns={columns}
                        data={pastry}
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
                      if (customCake[0] === undefined) {
                        fetchCustomCakeOrders("customCake");
                      } else {
                        return;
                      }
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
                      if (customPackage[0] === undefined) {
                        fetchCustomPackageOrders("customPackage");
                      } else {
                        return;
                      }
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
                      if (customChops[0] === undefined) {
                        fetchCustomChopOrders("customChops");
                      } else {
                        return;
                      }
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
                      if (foilCake[0] === undefined) {
                        fetchFoilCakeOrders("foilCake");
                      } else {
                        return;
                      }
                    }}
                  >
                    Foil Cakes Orders
                  </li>
                  {_foilCake && foilCake && (
                    <div className="orderTable">
                      <DataTable
                        columns={columns}
                        data={foilCake}
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
                      if (cakeParfait[0] === undefined) {
                        fetchCakeParfaitOrders("cakeParfait");
                      } else {
                        return;
                      }
                    }}
                  >
                    Cake Parfait Orders
                  </li>
                  {_cakeParfait && cakeParfait && (
                    <div className="orderTable">
                      <DataTable
                        columns={columns}
                        data={cakeParfait}
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
                  <li>Cakes Orders</li>
                  <li>Chops Orders</li>
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
            <p
              onClick={() => toggleOrder(_setCustom)}
              className="orderPage-title"
            >
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
            <p
              onClick={() => toggleOrder(_setVariant)}
              className="orderPage-title"
            >
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
