import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

export default function StaffCalendar() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Staff Calendar | Mercer Fuels</title>
      </Helmet>
      
      <Header />
      
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <iframe 
              src="https://calendar.google.com/calendar/embed?src=mercerfuelsschedule%40gmail.com&ctz=America%2FHalifax" 
              style={{ border: 0 }} 
              width="800" 
              height="600" 
              frameBorder="0" 
              scrolling="no"
              title="Mercer Fuels Staff Calendar"
              data-testid="iframe-staff-calendar"
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
