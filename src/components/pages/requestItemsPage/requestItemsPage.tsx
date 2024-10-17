import { useContext, useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/authcontext/authContext";
import { RequestContext } from "../../../context/customRequestContext/customRequestContext";
import { requestStores } from "../../../stores/requestStores";
import { RequestObject } from "../../../types";
import { Footer } from "../../footer/footer";
import { CustomButton } from "../../formComponents/customButton";
import { CartPageNav } from "../../navbar/cartPageNav";

export const RequestItemsPage = () => {
     const [requestItem, setRequestItem] = useState<RequestObject[]>([]);
     const { requestItems, requestCount, setRequestCount, setRequestItems } =
       useContext<any>(RequestContext);
     const { user } = useContext(AuthContext);
     const { deleteRequest } = requestStores;
     const navigate = useNavigate();

    const name = user ? `${user.firstname}'s Requests` : "Requests";


    useEffect(() => {
      const cart = async () => {
        const items = await requestItems;
        console.log(items);
        setRequestItem(() => items);
      };
      cart();
    }, [requestItems]);

     useEffect(() => {
       const cart = async () => {
         const items = await requestItems;

         // Assign images based on item type
         const updatedItems = items.map((item: RequestObject) => {
           if (item.orderType === "foilCake") {
             return { ...item, image: "/foilcake.png" };
           } else if (item.orderType === "cakeParfait") {
             return { ...item, image: "/cakeParfait.png" };
           }
           return item;
         });

         setRequestItem(updatedItems);
       };
       cart();
     }, [requestItems]);

     const columns: TableColumn<RequestObject>[] | any = [
       {
         name: "Item",
         selector: (row: RequestObject) => (
           <img
             src={row.imageUrl || "/request_image.png"}
             alt={row.requestTitle}
             style={{ width: "4rem", height: "4rem" }}
           />
         ),
       },
       {
         name: "Name",
         selector: (row: RequestObject) => row.requestTitle,
       },
       {
         name: "Quantity",
         selector: (row: RequestObject) => row.quantity,
       },
       {
         name: "Content",
         selector: (row: RequestObject) => {
           let content: any = row.content;

           // Check if content is a string and contains curly braces
           if (
             typeof content === "string" &&
             content.startsWith("{") &&
             content.endsWith("}")
           ) {
             // Replace curly braces with square brackets to make it an array
             content = content.replace(/{/g, "[").replace(/}/g, "]");

             try {
               // Parse the modified string into an array
               content = JSON.parse(content);
             } catch (e) {
               console.error("Error parsing content:", content);
             }
           }

           // If content is now an array, join it with ", ", otherwise return as is
           return Array.isArray(content) ? content.join(", ") : content;
         },
       },
       {
         name: "Type",
         selector: (row: RequestObject) => row.orderType,
       },
       {
         name: "Remove",
         cell: (row: RequestObject) => (
           <CustomButton
             type="button"
             label="cancel request"
             onClick={() => {
               handleRemoveItem(row.requestId);
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
           padding: "0.5rem auto",
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

      const handleRemoveItem = async (requestId: string) => {
        const updatedCart = requestItem.filter((item) => item.requestId !== requestId);
        await deleteRequest(user.accessToken, requestId);
        setRequestItem(updatedCart);
        setRequestItems(updatedCart);
        const quantity = updatedCart.reduce(
          (total: number, cartItem) => total + Number(cartItem.quantity),
          0
        );
        setRequestCount(quantity.toString());
        console.log(updatedCart);
        console.log(quantity);
      };

        const customOrderPage = () => navigate("/auth/customOrderPage");
        const checkoutPage = () => navigate("/auth/checkoutPage");


    return (
      <div>
        <CartPageNav />
        <div className="cartItemsPage-body">
          <div className="cartItemsPage-header">
            <span>{name}</span>
            <button type="button" onClick={customOrderPage}>
              custom order page
            </button>
          </div>
          <div className="cartItems-content">
            <DataTable
              columns={columns}
              data={requestItem}
              pagination
              responsive
              customStyles={customStyles}
            />
            <div>
              <h2>Total Requests: {requestCount} </h2>
              {/* <span>
                <CustomButton
                  type="button"
                  label="send Request"
                  onClick={checkoutPage}
                />
              </span> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}