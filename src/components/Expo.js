import CarCard from "./Card";
import './Expo.css';

const cars = [
  { id: 1, model: "CHIRON", src: "https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-4f2e0fb9c4d429d4666b1d43a108c2f4.webp", description: "THE ULTIMATE GRAND TOURISME,DELIVERING BRUTAL PERFORMANCE IN TOTAL COMFORT" },
  { id: 2, model: "CHIRON SUPER SPORT", src: "https://www.bugatti.com/fileadmin/_processed_/sei/p469/se-image-d35ab442fad932a663edbef3870edff9.jpg", description: "The CHIRON super Sport shows the ferocious personality of a hyper sports car made for corners and lateral agility." },
  { id: 3, model: "CHIRON SPORT 300+", src: "https://www.bugatti.com/fileadmin/_processed_/sei/p469/se-image-8dfe70c693e665b82f8d56efaaf90370.jpg", description: "UNRIVALED THE RECORD-BREAKING BUGATTI" },
  { id: 4, model: "CHIRON SPORT 110 ANS", src: "https://www.bugatti.com/fileadmin/_processed_/sei/p469/se-image-715e1277768cdfea957d0ea0a7d3dc73.jpg", description: "The limited-edition CHIRON SPORT “110 ANS BUGATTI” ushers in the celebration of BUGATTI’s incomparable 110-year history." },
  { id: 5, model: "CHIRON SPORT", src: "https://www.bugatti.com/fileadmin/_processed_/sei/p469/se-image-c27ca5eac5b40bc4bcbde152e367d8f7.jpg", description: "THE ULTIMATE SUPER SPORTS CAR. REDEFINED." },
  { id: 6, model: "CHIRON EDITION NOIRE", src: "https://www.bugatti.com/fileadmin/_processed_/sei/p469/se-image-ef30221a7a855f5f5f7d6078e6ef99a4.jpg", description: "The story of BUGATTI’s La Voiture Noire is a renowned myth within the world of automotive." },
]; 


function Expo() {
    return (
      <div className="Expo">
        {cars.map((car) => (
        <CarCard key={car.id} model={car.model} src={car.src} description={car.description} />))}
      </div>
    );
  }
  
  export default Expo;