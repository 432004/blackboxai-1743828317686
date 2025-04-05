const courses = [
    {
        id: 1,
        title: "Web Development Fundamentals",
        description: "Learn HTML, CSS, and JavaScript from scratch and build your first website.",
        instructor: "Sarah Johnson",
        duration: "6 weeks",
        modules: 12,
        image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
        category: "Development"
    },
    {
        id: 2,
        title: "Data Science Essentials",
        description: "Introduction to Python, Pandas, and data visualization techniques.",
        instructor: "Michael Chen",
        duration: "8 weeks",
        modules: 15,
        image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg",
        category: "Data Science"
    },
    {
        id: 3,
        title: "Mobile App Design",
        description: "Master UI/UX principles for creating beautiful mobile applications.",
        instructor: "Emma Rodriguez",
        duration: "4 weeks",
        modules: 8,
        image: "https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg",
        category: "Design"
    },
    {
        id: 4,
        title: "Digital Marketing Strategy",
        description: "Learn SEO, content marketing, and social media advertising.",
        instructor: "David Wilson",
        duration: "5 weeks",
        modules: 10,
        image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
        category: "Marketing"
    },
    {
        id: 5,
        title: "Cloud Computing Basics",
        description: "Introduction to AWS, Azure, and Google Cloud platforms.",
        instructor: "Lisa Park",
        duration: "7 weeks",
        modules: 14,
        image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg",
        category: "IT & Cloud"
    },
    {
        id: 6,
        title: "Business Analytics",
        description: "Learn to make data-driven decisions using Excel and Tableau.",
        instructor: "Robert Taylor",
        duration: "6 weeks",
        modules: 12,
        image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
        category: "Business"
    }
];

// Function to get all courses
function getAllCourses() {
    return courses;
}

// Function to get a single course by ID
function getCourseById(id) {
    return courses.find(course => course.id === id);
}