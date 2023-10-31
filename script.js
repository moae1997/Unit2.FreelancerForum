const averagePrice = document.getElementById("averagePrice");
const freelancerList = document.getElementById("freelancerList");

const names = ["John", "Mary", "David", "Sarah", "Michael", "Emily", "James", "Emma", "William", "Olivia", "Joseph", "Sophia", "Robert", "Ava", "Daniel", "Mia", "Charles", "Elizabeth", "Thomas", "Grace", "Benjamin", "Chloe", "Richard", "Lily", "Christopher", "Abigail", "Matthew", "Harper", "Andrew", "Sofia", "Anthony", "Ella", "Nicholas", "Victoria", "Elizabeth", "Amelia", "Daniel", "Scarlett", "Ryan", "Madison", "Justin", "Lily", "Henry", "Avery", "Jonathan", "Zoey", "Samuel", "Addison", "Edward", "Natalie", "Patrick", "Hannah", "George", "Mia", "Emma", "Charlotte", "Grace", "Claire", "Lucy", "Audrey", "Jack", "Stella", "Harper", "Sophia", "Oliver", "Riley", "Ava", "Aiden", "Layla", "Alexander", "Avery", "Joseph", "Zoey", "Jackson", "Scarlett", "Ethan", "Aria", "Gabriel", "Leah", "Noah", "Skylar", "Liam", "Aubrey", "Caleb", "Ellie", "Samuel", "Penelope", "Owen", "Paisley", "Isaac", "Nora", "Lucas", "Skylar", "Elijah", "Mackenzie", "Christian", "Hazel", "Landon", "Brooklyn", "Carter"];
const jobs = ["Accountant", "Actor", "Architect", "Artist", "Astronomer", "Author", "Baker", "Barista", "Bartender", "Biologist", "Carpenter", "Chef", "Chemist", "Civil Engineer", "Computer Programmer", "Dentist", "Doctor", "Economist", "Electrician", "Engineer", "Fashion Designer", "Firefighter", "Flight Attendant", "Graphic Designer", "Hairdresser", "Historian", "Interior Designer", "Journalist", "Judge", "Landscape Designer", "Lawyer", "Librarian", "Lifeguard", "Mechanic", "Musician", "Nurse", "Nutritionist", "Painter", "Pharmacist", "Photographer", "Physicist", "Pilot", "Plumber", "Police Officer", "Professor", "Psychologist", "Real Estate Agent", "Receptionist", "Sculptor", "Secretary", "Social Worker", "Software Developer", "Soldier", "Statistician", "Surgeon", "Teacher", "Translator", "Veterinarian", "Waiter/Waitress", "Web Developer", "Writer", "Zoologist", "Electrician", "Event Planner", "Flight Attendant", "Forester", "Gardener", "Geologist", "Hair Stylist", "Historian", "Housekeeper", "Human Resources Manager", "Insurance Agent", "Interpreter", "Janitor", "Jeweler", "Landscaper", "Librarian", "Lifeguard", "Makeup Artist", "Massage Therapist", "Mathematician", "Model", "News Anchor", "Occupational Therapist", "Park Ranger", "Pharmacist", "Physiotherapist", "Pilot", "Postal Worker", "Psychiatrist", "Radiologist", "Salesperson", "Social Worker", "Speech Therapist", "Taxi Driver", "Tour Guide", "Veterinarian", "Waiter/Waitress", "Yoga Instructor"];
const prices = [10, 25, 5, 90, 15, 45, 8, 120, 3, 65, 8, 35, 13, 50, 2, 80, 6, 100, 2, 60, 5, 70, 10, 40, 15, 30, 10, 55, 20, 75, 13, 45, 20, 30, 17, 80, 20, 100, 9, 50, 7, 60, 5, 70, 17, 110, 5, 90, 10, 40, 8, 120, 15, 60, 12, 70, 25, 75, 13, 50, 10, 80, 15, 55, 25, 110, 18, 65, 22, 90, 20, 85, 17, 60, 13, 45, 17, 50, 22, 80, 5, 100, 10, 35, 7, 70, 4, 55, 9, 30, 7, 45, 20, 75, 23, 95, 28, 65, 26, 120, 16, 75, 32, 105, 14, 50, 29, 90, 22, 65, 10, 40, 32, 115];
const freelancers = [
    {

    name: "Dr. Slice", 
    job: "gardener",
    price: 25,

    }  
];

const average = () => {
    let sum = 0;
    for (let i=0;i<freelancers.length; i++) {
        sum += freelancers[i]["price"];
    }
    
    const priceAverage = sum / freelancers.length;
    averagePrice.textContent = "Average Cost for a Freelancer is $" + Math.floor(priceAverage);
}


const render = ()=> {
    const freelancerLoop = freelancers.map(freelancer=> {
        const element = document.createElement("p");
        element.textContent = freelancer.name + " - " + freelancer.job + " - $" + freelancer.price;
        return element;
    });
    freelancerList.replaceChildren(...freelancerLoop);
}


function addlancer() {
    const name = names[Math.floor(Math.random() * names.length)];
    const job = jobs[Math.floor(Math.random() * jobs.length)];
    const price = prices[Math.floor(Math.random() * prices.length)];
  
    freelancers.push({ name, job, price });
  
    render();
    average();

  }

  const addShapeIntervalId = setInterval(addlancer, 5000);

  setTimeout(() => {
    clearInterval(addShapeIntervalId);
    console.log("Interval cleared");
}, 100000);

