
import React,{useState,useContext} from 'react'
import './booking.css'
import { Form, FormGroup, ListGroup,ListGroupItem,Button} from 'reactstrap'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { BASE_URL } from '../../utils/config'
import jsPDF from 'jspdf';
const Booking = ({tour,avgRating}) => {
    const {price,reviews,title,  maxGroupSize}=tour;
   const navigate=useNavigate()

   const {user}=useContext(AuthContext)

    const [booking,setBooking]=useState({
        userId:user && user._id,
        userEmail:user && user.email,
        tourName:title,
        fullName:"",
        phone:'',
        guestSize:1,
        bookAt:'',

    })
 const handleChange=(e)=>{
     setBooking(prev=>({...prev,[e.target.id]:e.target.value}))
 };

 const serviceFee=10
 const totalAmount=(Number(price)*Number(booking.guestSize))+Number(serviceFee)



const generatePdf = () => {
  const pdf = new jsPDF();
  pdf.setFontSize(30);
  pdf.text(20, 20, 'Booking Invoice');

  // User Information
  pdf.setFontSize(14);
  pdf.text(20, 40, `Name: ${booking.fullName}`);
  pdf.text(20, 50, `Email: ${booking.userEmail}`);
  pdf.text(20, 60, `Phone: ${booking.phone}`);

  // Tour Information
  pdf.setFontSize(14);
  pdf.text(20, 80, `Tour Name: ${booking.tourName}`);
  pdf.text(20, 90, `Booking Date: ${booking.bookAt}`);
  pdf.text(20, 110, `Number of Guests: ${booking.guestSize}`);
  pdf.text(20, 120, `Price per person: $${price}`);

  // Invoice Details
  pdf.setFontSize(14);
  pdf.text(20, 130, `Service Charge: $${serviceFee}`);
  pdf.text(20, 140, `Total Amount: $${totalAmount}`);
  pdf.text(20, 160, `Booked at: ${new Date()}`);


  // Save the PDF
  const fileName = `Booking Invoice.pdf`;
  pdf.save(fileName);
};


//  const { id } = useParams();

const handleClick = async (e) => {
  e.preventDefault();

  try {
    if (!user || user === undefined || user === null) {
      return alert('Please sign in');
    }
  

    const currentDate = new Date();
    const bookingDate = new Date(booking.bookAt);

    if (bookingDate <= currentDate) {
      return alert('Invalid booking date. Please select a date in the future.');
    }
    // Check if all required information is provided
    if (
      booking.fullName.trim() === '' ||
      booking.phone.trim() === '' ||
      booking.bookAt.trim() === '' ||
      isNaN(booking.guestSize) ||
      booking.guestSize < 1 ||
      booking.guestSize >= maxGroupSize
    ) {
      
      return alert('Please provide all information, and ensure number of guest are less than or equal to respective tour.');
    }

    // If all conditions are met, proceed with booking
    const res = await fetch(`${BASE_URL}/booking`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(booking),
    });

    const result = await res.json();

    if (!res.ok) {
      return alert(result.message);
    }
    generatePdf();
    navigate('/thank-you');
  } catch (err) {
    console.error(err);
  }
};




  return (
    <div className='booking'>
      <div className='.booking_top d-flex align-items-center justify-content-between'>
    <h3>${price}<span>/per person</span></h3>
    <span className="tour_rating d-flex align-items-center">
            <i class="ri-star-s-fill" >
                </i> {avgRating===0?null:avgRating} ({reviews?.length})
            </span>

      </div>

     <div className="booking_form">
    <h5>Information</h5>
      <Form onSubmit={handleClick} className='booking_info-form'>
        <FormGroup >
          <input type="text" placeholder='Full Name' id='fullName' 
          required onChange={handleChange}
          />
        </FormGroup>
        <FormGroup >
          <input type="number" placeholder='Phone' id='phone' 
          required onChange={handleChange}
          />
        </FormGroup>
        <FormGroup  className='d-flex align-items-center gap-3'>
          <input type="date" placeholder='' id='bookAt' 
          required onChange={handleChange}
          />
          <input type="number" placeholder='Guest' id='guestSize' 
          required onChange={handleChange}
          />
        </FormGroup>
        </Form>
     </div>

     <div className="booking_bottom">
   <ListGroup>
    <ListGroupItem className='border-0 px-0'>
        <h5 className='d-flex align-items-center gap-1'>${price} <i className='ri-close-line'></i> 1 person</h5>
        <span>${price}</span>
    </ListGroupItem>
    
    <ListGroupItem className='border-0 px-0'>
        <h5>Service charge</h5>
        <span>${serviceFee}</span>
    </ListGroupItem>
    
    <ListGroupItem className='border-0 px-0 total'>
        <h5>Total</h5>
        <span>${totalAmount}</span>
    </ListGroupItem>
    
   </ListGroup>



   <Button className='btn primary__btn w-100 mt-4' 
   onClick={handleClick}>Book Now</Button>
     </div>


    </div>
  )
}

export default Booking
