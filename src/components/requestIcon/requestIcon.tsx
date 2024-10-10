import { MessageOutgoing02Icon } from "hugeicons-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RequestContext } from "../../context/customRequestContext/customRequestContext";
import { RequestPreview } from "../requestView/requestPreview";

interface RequestCountInt {
    requestCount: string
}
export const RequestIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { requestCount }: RequestCountInt = useContext(RequestContext);
  const navigate = useNavigate();

  const toggleCart = () => setIsOpen((prev) => !prev);

  return (
    <>
      <MessageOutgoing02Icon
        style={{ cursor: "pointer", color: "rgb(78, 51, 104)" }}
        onClick={toggleCart}
      />
      <span style={{ fontSize: "1rem", color: "rgb(78, 51, 104)" }}>
        {requestCount}
      </span>
      {isOpen && <RequestPreview />}
    </>
  );
};
