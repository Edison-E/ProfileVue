import Booking from "@/assets/image/proyect/Booking.gif";
import Profile from "@/assets/image/proyect/profile.gif";
import Book from "@/assets/image/proyect/Book.gif";
import Auth from "@/assets/image/proyect/Auth.gif";

function returnImgProyect(proyect) {
    switch (proyect) {
        case "Authentication C#":
            return Auth;
        case "ProfileVue":
            return Profile;
        case "BookingNet":
            return Booking;
        case "BookNet":
            return Book;
    }
}


export default returnImgProyect;