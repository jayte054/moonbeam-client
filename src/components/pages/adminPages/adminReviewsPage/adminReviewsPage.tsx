import { useEffect, useState } from "react";
import { AdminStores } from "../../../../stores/adminStores";
import { AdminPageNavbar } from "../../../navbar/adminPageNavBar";
import DataTable, { TableColumn } from "react-data-table-component";
import { ReviewObject } from "../../../../types";
import './adminReviesPage.css'
import { toastify } from "../../../utilsComponent";

export const AdminReviewsPage = () => {
    const [reviews, setReviews] = useState<ReviewObject[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const { getReviews, updateReviewStatus } = AdminStores;

    useEffect(() => {
        setLoading(true)
        const fetchReviews = async () => {
            try {
              const _reviews = await getReviews(page, 10);
              console.log(_reviews.reviews)
              setReviews(() => _reviews.reviews);
            } catch (error) {
              console.error("Failed to load reviews:", error);
            } finally {
              setLoading(false);
            }
        }
        fetchReviews()
    }, [getReviews, page])

    const columns: TableColumn<ReviewObject>[] = [
      {
        name: "Customer Name",
        selector: (row: ReviewObject) => row.name,
        sortable: true,
      },
      {
        name: "Email",
        selector: (row: ReviewObject) => row.email,
      },
      {
        name: "Reviews",
        cell: (row: ReviewObject) => {
        return (
            <div>
                <textarea 
                    value={row.review}
                    readOnly={true}
                />
            </div>
        )
    },
      },
      {
        name: "Status",
        selector: (row: ReviewObject) => row.isActive,
        right: true,
      },
      {
        name: "Update",
        cell: (row: ReviewObject) => {
          const handleUpdate = async () => {
            try {
              const reviewStatus = await updateReviewStatus(row.reviewId);
              reviewStatus
                ? toastify.successful("successfully updated review")
                : toastify.error("an error occurred, please try again");
              const newReviews = await getReviews();
              console.log(newReviews);
              setReviews(() => newReviews.reviews);
              return reviewStatus;
            } catch (error) {
              toastify.error("failed to update review");
            }
          };
          return (
            <button 
                type="button" 
                onClick={handleUpdate}
                style={{
                    padding: "1rem",
                    fontWeight: 'bold',
                    color: "white",
                    backgroundColor: "purple",
                    borderRadius: '1rem',
                    cursor: "pointer"
                }}
                >
              UPDATE
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
        <div className="admin-reviewsPage-container">
          <h3>Reviews Page</h3>
          <div className="admin-customersPage-body">
            <DataTable
              columns={columns}
              data={reviews && reviews}
              pagination
              highlightOnHover
              pointerOnHover
              responsive
              customStyles={customStyles}
            />
          </div>
        </div>
      </div>
    );
}