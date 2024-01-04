import React, { useState } from "react";
// import CoursesCard from "./CoursesCard";

// function SearchingBar(prop) {
//   //   var dataList = [
//   //     {
//   //       id: 1,
//   //       topic: "HTML",
//   //       name: "Sarah Smith",
//   //       image: "html.png",
//   //       rating: 4.1,
//   //       category: "Web Development Languages",
//   //     },
//   //     {
//   //       id: 2,
//   //       topic: "CSS",
//   //       name: "David Lee",
//   //       image: "css.webp",
//   //       rating: 3.58,
//   //       category: "Web Development Languages",
//   //     },
//   //     {
//   //       id: 3,
//   //       topic: "JavaScript",
//   //       name: "Emily Chen",
//   //       image: "javascript.jpg",
//   //       rating: 4.09,
//   //       category: "Web Development Languages",
//   //     },
//   //     {
//   //       id: 4,
//   //       topic: "jQuery",
//   //       name: "John Johnson",
//   //       image: "jquery.png",
//   //       rating: 4.06,
//   //       category: "Frontend Frameworks and Libraries",
//   //     },
//   //     {
//   //       id: 5,
//   //       topic: "Angular",
//   //       name: "Jessica Davis",
//   //       image: "angular.png",
//   //       rating: 3.64,
//   //       category: "Frontend Frameworks and Libraries",
//   //     },
//   //     {
//   //       id: 6,
//   //       topic: "React",
//   //       name: "Daniel Brown",
//   //       image: "react.webp",
//   //       rating: 3.79,
//   //       category: "Frontend Frameworks and Libraries",
//   //     },
//   //     {
//   //       id: 7,
//   //       topic: "Vue.js",
//   //       name: "Ava Jones",
//   //       image: "vuejs.jpeg",
//   //       rating: 3.57,
//   //       category: "Frontend Frameworks and Libraries",
//   //     },
//   //     {
//   //       id: 8,
//   //       topic: "Node.js",
//   //       name: "Michael Kim",
//   //       image: "nodejs.webp",
//   //       rating: 3.97,
//   //       category: "Backend Frameworks and Libraries",
//   //     },
//   //     {
//   //       id: 9,
//   //       topic: "Express.js",
//   //       name: "Sophia Rodriguez",
//   //       image: "expressjs.webp",
//   //       rating: 4,
//   //       category: "Backend Frameworks and Libraries",
//   //     },
//   //     {
//   //       id: 10,
//   //       topic: "Ruby on Rails",
//   //       name: "William Lee",
//   //       image: "ruby.jpeg",
//   //       rating: 3.08,
//   //       category: "Backend Frameworks and Libraries",
//   //     },
//   //     {
//   //       id: 11,
//   //       topic: "Django",
//   //       name: "Olivia Martinez",
//   //       image: "django.jpeg",
//   //       rating: 4.18,
//   //       category: "Backend Frameworks and Libraries",
//   //     },
//   //     {
//   //       id: 12,
//   //       topic: "Flask",
//   //       name: "Ethan Thompson",
//   //       image: "flask.webp",
//   //       rating: 3.02,
//   //       category: "Backend Frameworks and Libraries",
//   //     },
//   //     {
//   //       id: 13,
//   //       topic: "SQL",
//   //       name: "Madison Davis",
//   //       image: "sql.png",
//   //       rating: 4.45,
//   //       category: "Databases and APIs",
//   //     },
//   //     {
//   //       id: 14,
//   //       topic: "NoSQL",
//   //       name: "Isabella Wilson",
//   //       image: "nosql.png",
//   //       rating: 4.46,
//   //       category: "Databases and APIs",
//   //     },
//   //     {
//   //       id: 15,
//   //       topic: "REST APIs",
//   //       name: "Jacob Garcia",
//   //       image: "restapi.jpeg",
//   //       rating: 3.26,
//   //       category: "Databases and APIs",
//   //     },
//   //     {
//   //       id: 16,
//   //       topic: "GraphQL",
//   //       name: "Mia Brown",
//   //       image: "graphql.png",
//   //       rating: 4.01,
//   //       category: "Databases and APIs",
//   //     },
//   //     {
//   //       id: 17,
//   //       topic: "OAuth",
//   //       name: "Evelyn Nguyen",
//   //       image: "oauth.png",
//   //       rating: 3.54,
//   //       category: "Web Development Concepts and Technologies",
//   //     },
//   //     {
//   //       id: 18,
//   //       topic: "JSON",
//   //       name: "Liam Hernandez",
//   //       image: "json.png",
//   //       rating: 3.52,
//   //       category: "Web Development Concepts and Technologies",
//   //     },
//   //     {
//   //       id: 19,
//   //       topic: "AJAX",
//   //       name: "Avery Perez",
//   //       image: "ajax.gif",
//   //       rating: 3.22,
//   //       category: "Web Development Concepts and Technologies",
//   //     },
//   //     {
//   //       id: 20,
//   //       topic: "Websockets",
//   //       name: "Victoria Kim",
//   //       image: "websockets.png",
//   //       rating: 3.76,
//   //       category: "Web Development Concepts and Technologies",
//   //     },
//   //     {
//   //       id: 21,
//   //       topic: "Responsive Design",
//   //       name: "Ryan Jones",
//   //       image: "responsive.gif",
//   //       rating: 3.93,
//   //       category: "Web Development Concepts and Technologies",
//   //     },
//   //     {
//   //       id: 22,
//   //       topic: "Accessibility",
//   //       name: "Samantha Martin",
//   //       image: "accessibility.png",
//   //       rating: 3.77,
//   //       category: "Web Development Concepts and Technologies",
//   //     },
//   //     {
//   //       id: 23,
//   //       topic: "User Experience (UX)",
//   //       name: "Luke Davis",
//   //       image: "ux.jpeg",
//   //       rating: 4.1,
//   //       category: "Web Development Concepts and Technologies",
//   //     },
//   //     {
//   //       id: 24,
//   //       topic: "User Interface (UI)",
//   //       name: "Grace Wilson",
//   //       image: "ui.png",
//   //       rating: 3.12,
//   //       category: "Web Development Concepts and Technologies",
//   //     },
//   //     {
//   //       id: 25,
//   //       topic: "Design Systems",
//   //       name: "Noah Martinez",
//   //       image: "design-systems.jpeg",
//   //       rating: 4.18,
//   //       category: "Web Development Concepts and Technologies",
//   //     },
//   //     {
//   //       id: 26,
//   //       topic: "Performance Optimization",
//   //       name: "Chloe Taylor",
//   //       image: "performance.png",
//   //       rating: 3.33,
//   //       category: "Web Development Concepts and Technologies",
//   //     },
//   //     {
//   //       id: 27,
//   //       topic: "Cross-Browser Compatibility",
//   //       name: "David Lee",
//   //       image: "cross-browser.jpeg",
//   //       rating: 4.41,
//   //       category: "Web Development Concepts and Technologies",
//   //     },
//   //     {
//   //       id: 28,
//   //       topic: "Search Engine Optimization (SEO)",
//   //       name: "Emily Kim",
//   //       image: "seo.jpeg",
//   //       rating: 3.81,
//   //       category: "Web Development Concepts and Technologies",
//   //     },
//   //     {
//   //       id: 29,
//   //       topic: "Web Security",
//   //       name: "Gabriel Hernandez",
//   //       image: "web-security.jpeg",
//   //       rating: 3.69,
//   //       category: "Web Development Concepts and Technologies",
//   //     },
//   //     {
//   //       id: 30,
//   //       topic: "Testing and Debugging",
//   //       name: "Avery Perez",
//   //       image: "testing.jpeg",
//   //       rating: 4.44,
//   //       category: "Web Development Concepts and Technologies",
//   //     },
//   //     {
//   //       id: 31,
//   //       topic: "Continuous Integration/Continuous Deployment (CI/CD)",
//   //       name: "Madison Davis",
//   //       image: "ci-cd.jpeg",
//   //       rating: 3.99,
//   //       category: "Web Development Concepts and Technologies",
//   //     },
//   //     {
//   //       id: 32,
//   //       topic: "DevOps",
//   //       name: "Isabella Wilson",
//   //       image: "devops.png",
//   //       rating: 4.27,
//   //       category: "Web Development Concepts and Technologies",
//   //     },
//   //     {
//   //       id: 33,
//   //       topic: "Cloud Computing",
//   //       name: "Jacob Garcia",
//   //       image: "cloud.jpeg",
//   //       rating: 4.38,
//   //       category: "Web Development Concepts and Technologies",
//   //     },
//   //     {
//   //       id: 34,
//   //       topic: "Docker",
//   //       name: "Mia Brown",
//   //       image: "docker.png",
//   //       rating: 3.9,
//   //       category: "Web Development Concepts and Technologies",
//   //     },
//   //     {
//   //       id: 35,
//   //       topic: "Microservices",
//   //       name: "Evelyn Nguyen",
//   //       image: "microservices.png",
//   //       rating: 3.73,
//   //       category: "Web Development Concepts and Technologies",
//   //     },
//   //     {
//   //       id: 36,
//   //       topic: "Progressive Web Apps (PWA)",
//   //       name: "Liam Hernandez",
//   //       image: "pwa.png",
//   //       rating: 3.14,
//   //       category: "Web Development Concepts and Technologies",
//   //     },
//   //     {
//   //       id: 37,
//   //       topic: "Web Accessibility Initiative (WAI)",
//   //       name: "Avery Perez",
//   //       image: "wai.jpeg",
//   //       rating: 3.59,
//   //       category: "Web Development Concepts and Technologies",
//   //     },
//   //     {
//   //       id: 38,
//   //       topic: "Content Management Systems (CMS)",
//   //       name: "Victoria Kim",
//   //       image: "cms.png",
//   //       rating: 4.03,
//   //       category: "Web Development Concepts and Technologies",
//   //     },
//   //     {
//   //       id: 39,
//   //       topic: "Web Analytics",
//   //       name: "Ryan Jones",
//   //       image: "analytics.png",
//   //       rating: 4.07,
//   //       category: "Web Development Concepts and Technologies",
//   //     },
//   //   ];
//   var dataList = [];
//   dataList = prop.data;
//   console.log("dataList");
//   console.log(dataList);
//   const [sordtedDataList, setSortedDataList] = useState([]);

//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleFilterdDropDownChange = (event) => {
//     console.log("inside handleFilterdDropDownChange");
//     setSelectedOption(event.target.value);
//     setSortedDataList(dataList);

//     if (selectedOption == "Default") {
//       console.log("inside Default");
//       const Temp = [...sordtedDataList].sort((a, b) => a.id - b.id);
//       setSortedDataList(Temp);
//     } else if (selectedOption == "Topic-Title") {
//       console.log("inside Topic Title");
//       const Temp = [...sordtedDataList].sort((a, b) => {
//         const nameA = a.topic.toUpperCase();
//         const nameB = b.topic.toUpperCase();

//         if (nameA < nameB) {
//           return -1;
//         }
//         if (nameA > nameB) {
//           return 1;
//         }
//         return 0;
//       });
//       setSortedDataList(Temp);

//       //Author Name (option3)
//     } else if (selectedOption == "Author-Name") {
//       const Temp = [...sordtedDataList].sort((a, b) => {
//         const nameA = a.name.toUpperCase();
//         const nameB = b.name.toUpperCase();

//         if (nameA < nameB) {
//           return -1;
//         }
//         if (nameA > nameB) {
//           return 1;
//         }
//         return 0;
//       });
//       setSortedDataList(Temp);
//       console.log("temp is ");
//     }
//   };
//   return (
//     <div>
//       <div className="search-container flex justify-center">
//         <div className="search-bar">
//           <div className="input-part flex align-center">
//             <label
//               for="search-input"
//               className="search-input flex align-center"
//             >
//               <ion-icon
//                 className="search-icon"
//                 name="search-outline"
//               ></ion-icon>
//             </label>
//             <input
//               className="search-engine"
//               placeholder="Search the website..."
//               // onChange="handleSearch()"
//               id="searchInput"
//             />
//           </div>
//           <div className="sort-filter-parts sort">
//             <label className="dropdown-label">&nbsp;Sort by:</label>
//             <select
//               className="dropdown-btn"
//               id="mySortDropdown"
//               name="filter-options"
//               onChange={handleFilterdDropDownChange}
//             >
//               <option value="Default">Default</option>
//               <option value="Topic-Title">Topic Title</option>
//               <option value="Author-Name">Author Name</option>
//               <option value="Author-Name">B1</option>
//               <option value="Author-Name">A2</option>
//             </select>
//           </div>

//           <div className="sort-filter-parts end-of-search-bar">
//             <label className="dropdown-label">&nbsp;Filter by:</label>
//             <select
//               className="dropdown-btn"
//               id="myFilterdDropdown"
//               name="filter-options"
//             >
//               <option value="Default">Default</option>
//             </select>
//           </div>
//         </div>
//       </div>
//       <CoursesCard data={sordtedDataList} />
//     </div>
//   );
// }
// // export default SearchingBar;

// function SearchingBar({ onSortChange }) {
//   return (
//     <div>
//       <div className="search-container flex justify-center">
//         <div className="search-bar">
//           <div className="input-part flex align-center">
//             <label
//               htmlFor="search-input"
//               className="search-input flex align-center"
//             >
//               <ion-icon
//                 className="search-icon"
//                 name="search-outline"
//               ></ion-icon>
//             </label>
//             <input
//               className="search-engine"
//               placeholder="Search the website..."
//               // onChange="handleSearch()"
//               id="searchInput"
//             />
//           </div>
//           <div className="sort-filter-parts sort">
//             <label className="dropdown-label">&nbsp;Sort by:</label>
//             <select
//               className="dropdown-btn"
//               id="mySortDropdown"
//               name="filter-options"
//               value={selectedOption || ""}
//               onChange={() => {
//                 onSortChange("String");
//               }}
//             >
//               <option value="Default">Default</option>
//               <option value="Topic-Title">Topic Title</option>
//               <option value="Author-Name">Author Name</option>
//             </select>
//           </div>

//           <div className="sort-filter-parts end-of-search-bar">
//             <label className="dropdown-label">&nbsp;Filter by:</label>
//             <select
//               className="dropdown-btn"
//               id="myFilterdDropdown"
//               name="filter-options"
//             >
//               <option value="Default">Default</option>

//               {dynamicCategories.map((category) => (
//                 <option key={category} value={category}>
//                   {category}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default SearchingBar;
