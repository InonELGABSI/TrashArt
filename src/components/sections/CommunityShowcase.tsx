import { VerticalCar } from '../carousel/VerticalCar';
import car1 from '../../assets/car1.jpg';
import car2 from '../../assets/car2.jpg';
import car3 from '../../assets/car3.jpg';
import car4 from '../../assets/car4.jpg';
import car5 from '../../assets/car5.jpg';
import car6 from '../../assets/car6.jpg';

const carouselImages = [car1, car2, car3, car4, car5, car6];

export const CommunityShowcase = () => {
  return (
    <section className="community-showcase my-16 px-6 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 text-right">
          <h2 className="text-4xl font-bold mb-5">
הקהילה שלנו יוצרת שינוי
          </h2>
          <p className="leading-relaxed mb-8">
שתפו גם את היצירה שלכם והצטרפו לעשייה
          </p>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors duration-200">
            שתפו יצירה
          </button>
        </div>
        <div className="w-full lg:w-1/2">
          <VerticalCar images={carouselImages} speed={22} />
        </div>
      </div>
    </section>
  );
};
