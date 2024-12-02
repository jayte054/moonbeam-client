import { useContext, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import DataTable, { TableColumn } from "react-data-table-component";
import { format } from "date-fns";
import { CustomButton } from "../../../formComponents/customButton";
import { AdminPageNavbar } from "../../../navbar/adminPageNavBar";
import "./adminSalesPage.css";
import { OrderRequestObject, PaidOrdersDto } from "../../../../types";
import { requestStores } from "../../../../stores/requestStores";
import { AdminStores } from "../../../../stores/adminStores";
import { AdminAuthContext } from "../../../../context/authcontext/adminAuthContext";
import { toastify } from "../../../utilsComponent";

interface SalesInterface {
  orderName: string;
  productType: string | undefined;
  date: Date| string | undefined;
  readableDate?: string;
  price: string | undefined;
  status: string | undefined;
}

interface SalesPerCategoryInterface {
  productType: string | undefined;
  date?: string | Date | undefined;
  month: string;
  year: string;
  totalSales: string;
}

export const AdminSalesPage = () => {
  // const [items, setItems] = useState<OrderedObject[]>([]);
  const [requests, setRequests] = useState<OrderRequestObject[]>([]);
  const [orders, setOrders] = useState<PaidOrdersDto[]>([]);
  const [salesPerCategoryData, setSalesPerCategoryData] = useState<
    SalesPerCategoryInterface[]
  >([]);
  const [salesObject, setSalesObject] = useState<SalesInterface[]>([]);
  const [salesData, setSalesData] = useState(false)
  const [chartData, setChartData] = useState<any>(null)
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('');
  const { admin } = useContext(AdminAuthContext);
  const { fetchUserOrders, fetchRequests} =AdminStores;

  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

  const toggleData = (setState: React.Dispatch<React.SetStateAction<boolean>>) => {
    setState((prev) => !prev);
  }

  const productTypeLabels: { [key: string]: string } = {
    rtgChops: "Ready To Go Chops",
    rtgCakes: "Ready To Go Cakes",
    budgetCake: "Budget Cake",
    chops: "Chops",
    bronzePackage: "Bronze Package",
    foilCake: "Foil Cake",
    cakeParfait: "Cake Parfait",
    customCake: "Custom Cake",
    customPackage: "Custom Package",
    customChops: "Custom Chops",
  };

  // const ordersSalesObject = () => {
  //   const itemsObject: SalesInterface[] = orders && orders?.map((item) => ({
  //     orderName: item.orderName,
  //     productType: item.category,
  //     date: new Date(item.deliveryDate),
  //     price: item.amount,
  //     status: item.deliveryStatus,
  //   }));
  //   const resolvedItems = itemsObject?.filter(
  //     (item) => item.status === "resolved"
  //   );
  //   if (Array.isArray(salesObject)) {
  //     resolvedItems?.forEach((item) => salesObject.push(item)); // Push each item individually
  //   } else {
  //     toastify.error("salesObject is not an array");
  //   }

  //   return resolvedItems;
  // }

  // const requestsSalesObject = () => {
  //   const requestObject: SalesInterface[] = requests && requests?.map((request) => ({
  //     orderName: request.requestTitle,
  //     productType: request.category,
  //     date: new Date(request.deliveryDate),
  //     price: request.price,
  //     status: request.status,
  //   }));
  //   const _requestObject = requestObject?.filter(
  //     (item) => item.status === "delivered"
  //   );
  //   if(Array.isArray(salesObject)) {
  //     _requestObject?.forEach(request => salesObject.push(request))
  //   } else {
  //     toastify.log('request object is empty')
  //   }
  //   return requestObject;
  // }

  // ordersSalesObject()
  // requestsSalesObject()


    useEffect(() => {
      const combineSales = () => {
        try {
          // Map over orders and transform to SalesInterface format
          const ordersSales = Array.isArray(orders)
            ? orders.map((item) => ({
                orderName: item.orderName,
                productType: item.category,
                date: item.deliveryDate
                  ? new Date(item.deliveryDate)
                  : undefined,
                price: item.amount,
                status: item.deliveryStatus,
              }))
            : [];

          // Map over requests and transform to SalesInterface format
          const requestsSales = Array.isArray(requests)
            ? requests.map((request) => ({
                orderName: request.requestTitle,
                productType: request.category,
                date: request.deliveryDate
                  ? new Date(request.deliveryDate)
                  : undefined,
                price: request.price,
                status: request.status,
              }))
            : [];

          // Filter for resolved or delivered sales only
          const resolvedSales = [
            ...ordersSales.filter((item) => item.status === "resolved"),
            ...requestsSales.filter((item) => item.status === "delivered"),
          ];

          setSalesObject(resolvedSales);
        } catch (error) {
          toastify.error("An error occured while computing data");
        }
      };

      combineSales();
    }, [orders, requests]);

const prepareChartData = (filterFn: (date: Date) => boolean) => {
  const filteredSales = salesObject.filter((sale) => {
    if (!sale.date) return false;
    const saleDate = new Date(sale.date)
    return filterFn(saleDate)
  })

  const salesByCategory = filteredSales.reduce((acc, sale) => {
    const category = sale.productType || 'unknown';
    const totalSales = parseFloat(sale.price || '0');

    if (!acc[category]) {
      acc[category] = totalSales;
    } else {
      acc[category] += totalSales;
    }

    return acc;
  }, {} as {[key: string]: number})

  setChartData({
    labels: Object.keys(salesByCategory).map(
      (key) => productTypeLabels[key] || key
    ),
    datasets: [
      {
        label: "Total Sales",
        data: Object.values(salesByCategory),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  });
}

const handleWeeklySales = () => {
  const now = new Date();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(now.getDate() - 7)

  prepareChartData((date) => date >= oneWeekAgo && date <= now)
}

const handleMonthlySales = () => {
  const now = new Date();
  const currentMonth = now.getMonth()
  const currentYear = now.getFullYear()

  prepareChartData((date) => date.getMonth() === currentMonth && date.getFullYear() === currentYear)
}

const handleYearlySales = () => {
  const currentYear = new Date().getFullYear();
  prepareChartData((date) => date.getFullYear() === currentYear);
}

const salesPerCategory: SalesPerCategoryInterface[] = salesObject && salesObject.map((sales) => ({
    productType: sales.productType,
    date: sales.date,
    month: sales.date ? new Date(sales.date).toLocaleString('default', { month: 'long' }) : 'N/A', // Get the month name
    year: sales.date ? new Date(sales.date).getFullYear().toString() : 'N/A', // Get the year
    totalSales: sales.price ? sales.price.toString() : '0',
  })); 

  const filterSalesByCategory= () => {
    return salesPerCategory
            .filter(sale => sale.month === month && sale.year=== year)
            .reduce((acc, sale) => {
              const existingCategory = acc.find(
                (item) => item.productType === sale.productType
              );

              if (existingCategory) {
                existingCategory.totalSales = (
                  parseFloat(existingCategory.totalSales) +
                  parseFloat(sale.totalSales)
                ).toString()
              } else {
                 acc.push({
                   productType: sale.productType,
                   month: sale.month,
                   year: sale.year,
                   totalSales: sale.totalSales,
                 });
              }
              return acc;
            }, [] as SalesPerCategoryInterface[])
  }

  const fetchSalesPerCategory = () => {
    console.log(salesPerCategory)
    const filteredSales = filterSalesByCategory()
    setSalesPerCategoryData(filteredSales)
    toggleData(setSalesData)
  };
  // console.log(salesPerCategory)

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
             console.log(requests);
             setRequests(() => requests);
             return requests;
           } catch (error) {
             console.log(error);
           }
         };
         fetchOrderRequests();
       }, [admin, fetchRequests]);

    const salesColumns: TableColumn<SalesInterface>[] = [
      {
        name: "Order Title",
        cell: (row: SalesInterface) => row?.orderName
      },
      {
        name: "Product Type",
        cell: (row: SalesInterface) => row?.productType && (productTypeLabels[row.productType] || row.productType)
      },
      {
        name: "Price",
        cell: (row: SalesInterface) => row?.price
      },
      {
        name: "Date",
        cell: (row: SalesInterface) => String(row?.readableDate)
      },
      {
        name: "Status",
        cell: (row: SalesInterface) => row?.status
      }
    ]

    const categorySalescolumn: TableColumn<SalesPerCategoryInterface>[] = [
      {
        name: "Product Type",
        cell: (row: SalesPerCategoryInterface) => row.productType && (productTypeLabels[row.productType] || row.productType)
      },
      {
        name: "Month",
        cell: (row: SalesPerCategoryInterface) => row.month
      },
      {
        name: "Year",
        cell: (row: SalesPerCategoryInterface) => row.year
      },
      {
        name: "Total Sales",
        cell: (row: SalesPerCategoryInterface) => row.totalSales
      }
    ]

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
      <div className="admin-salesPage-container">
        <h2> Sales </h2>
        <div className="admin-salesPage-body">
          <div className="admin-salesChart">
            <h3>Sales Chart</h3>
            <div className="admin-sales-button">
              <CustomButton
                label="Week"
                type="button"
                onClick={handleWeeklySales}
              />
              <CustomButton
                label="Month"
                type="button"
                onClick={handleMonthlySales}
              />
              <CustomButton
                label="Year"
                type="button"
                onClick={handleYearlySales}
              />
            </div>
            {chartData && (
              <div style= {{ width: "80%", margin: "0 auto"}}>
                <Bar 
                  data={chartData}
                  options={{
                    responsive: true,
                    plugins: {
                    legend: {position: "top"},
                    title: {display: true, text: "Sales Chart"},
                    }
                  }}
                />
              </div>
            )}
          </div>
          <div className="admin-salesTable">
            <h3>Sales</h3>
            <h4>Sales Per Category</h4>
            <div className="month-year">
              <div>
                <p>Month</p>
                <select
                  name="month"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                >
                  <option value="">Select Month</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </div>
              <div>
                <p>Year</p>
                <select
                  name="year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option value="">Select Year</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                  <option value="2031">2031</option>
                  <option value="2032">2032</option>
                  <option value="2033">2033</option>
                  <option value="2034">2034</option>
                  <option value="2035">2035</option>
                </select>
              </div>
              <div className="category-button">
                <button type="button" onClick={fetchSalesPerCategory}>
                  Fetch Sales
                </button>
              </div>
            </div>
            {salesData && (
              <div className="sales-category-data">
                <DataTable
                  columns={categorySalescolumn}
                  data={salesPerCategoryData}
                  pagination
                  highlightOnHover
                  pointerOnHover
                  responsive
                  customStyles={customStyles}
                />
              </div>
            )}
            <h4>Sales Per Customer</h4>
            <div className='sales-customer-data'>
              <DataTable
                columns={salesColumns}
                data={salesObject
                  .sort((a, b) => {
                    const dateA = a?.date ? new Date(a.date).getTime() : 0;
                    const dateB = b?.date ? new Date(b.date).getTime() : 0;
                    return dateB - dateA;
                  })
                  .map((item) => ({
                    ...item,
                    readableDate: item.date
                      ? format(new Date(item.date), "MMM dd, yyyy")
                      : "N/A", // Format date to 'MMM dd, yyyy'
                  }))}
                pagination
                highlightOnHover
                pointerOnHover
                responsive
                customStyles={customStyles}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
