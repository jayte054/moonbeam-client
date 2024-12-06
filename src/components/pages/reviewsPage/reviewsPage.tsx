import { useState } from "react"
import './reviewsPage.css';
import { AdminStores } from "../../../stores/adminStores";
import { ReviewDto } from "../../../types";
import { toastify } from "../../utilsComponent";

export const ReviewsPage = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [review, setReview] = useState<string>("");
    const {writeReview} = AdminStores;


    const sendReview = async() => {
        const reviewDto: ReviewDto ={
            name, email, review
        }
        try{
        const postReview = await writeReview(reviewDto);
        if (!postReview){
            toastify.error('failed to send review')
        } else {
            toastify.successful("review successfully posted");
            return postReview;
        }
        
        } catch (error) {

        }
    };

    return (
      <div className='reviewPage-container'>
        <h3>Moonbeam Reviews</h3>
        <p>Name</p>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
          required
        />
        <p>Email</p>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          required
        />
        <p>Review</p>
        <textarea 
          name='review'
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder='write review'
          required
        />
        <button 
          type='submit'
          onClick={sendReview}
        >
            Post Review
        </button>
      </div>
    );
}