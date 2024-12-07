import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MessageQuestionIcon } from "hugeicons-react";

import { CartContext } from "../../context/cartContext/cartContext";
import { RequestContext } from "../../context/customRequestContext/customRequestContext";
import { CartObject, RequestObject } from "../../types";
import { CustomButton } from "../formComponents/customButton";
import "./requestPreview.css";

interface RequestObjectProps {
  requestItems: RequestObject[];
}

export const RequestPreview = () => {
  const { requestItems }: RequestObjectProps = useContext(RequestContext);
  const navigate = useNavigate();

  const viewCart = () => navigate("/auth/requestPage");

  const items = requestItems.filter((item) => item.status === "in progress");

  return (
    <div className="requestPreview-container">
      <div className="requestItem-body">
        {items.map((requestItem: RequestObject) => {
          const imageUrl =
            requestItem.orderType === "custom package"
              ? "/request_image.png"
              : requestItem.orderType
              ? "/request_image.png"
              : requestItem.imageUrl || "";
          return (
            <div className="requestItem-content" key={requestItem.requestId}>
              <div>
                <span>
                  <img src={imageUrl} alt={requestItem.requestTitle} />
                </span>
              </div>
              <div>
                <span style={{ fontSize: "1rem" }}>
                  {requestItem.requestTitle}
                </span>
                <span style={{ fontSize: "1rem" }}>{requestItem.quantity}</span>
              </div>
            </div>
          );
        })}
      </div>
      <span>
        <CustomButton type="button" label="checkout" onClick={viewCart} />
      </span>
    </div>
  );
};
