import EventCard from './EventCard';

const events = [
  {
    title: 'Ice Cream Truck',
    date: 'Aug 29',
    time: '11:00 AM - 1:00 PM',
    location: '558 E 191st Street',
    type: 'icecream',
  },
  {
    title: 'Workout Session',
    date: 'Sept 11',
    time: '9:00 AM - 11:00 AM',
    location: 'Gym @ 2507 Hughes Ave',
    type: 'workout',
  },
  {
    title: 'Movie Night',
    date: 'Sept 26',
    time: '6:00 PM - 8:00 PM',
    location: '2503 Hughes Ave',
    type: 'movie',
  },
  {
    title: 'Yoga & Mindfulness',
    date: 'Oct 8',
    time: '9:00 AM - 10:00 AM',
    location: '548 East 183rd Street',
    type: 'yoga',
  },
  {
    title: 'Live Music Night',
    date: 'Oct 15',
    time: '7:00 PM - 9:00 PM',
    location: 'Auditorium @ 123 Music Lane',
    type: 'music',
  },
  {
    title: 'Tech Talk',
    date: 'Oct 20',
    time: '3:00 PM - 4:30 PM',
    location: 'Hall B @ 112 Innovation Dr',
    type: 'tech',
  },
  {
    title: 'Pizza Party',
    date: 'Oct 25',
    time: '12:00 PM - 2:00 PM',
    location: 'Cafeteria @ 456 Food Ave',
    type: 'food',
  },
  {
    title: 'Board Game Bash',
    date: 'Nov 7',
    time: '5:00 PM - 7:00 PM',
    location: 'Lounge @ 321 Play Zone',
    type: 'game',
  },
  {
    title: 'Poetry Reading',
    date: 'Nov 18',
    time: '6:00 PM - 7:30 PM',
    location: 'Library @ 222 Culture Blvd',
    type: 'book',
  },
];


const Events = () => {
  return (
      <section className="py-12 bg-white dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-blue-500 mb-8">
        Upcoming Events
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </section>
  );
};

export default Events;
