/*

Copyright 2024 Himanshu Dinkar

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

interface Course {
  name: string;
  fullName: string;
  duration: string;
  specializations: string[];
}

interface Category {
  id: number;
  category: string;
  courses: Course[];
}

const courses: Category[] = [
  {
    id: 1,
    category: "Under Graduate",
    courses: [
      {
        name: "BBA",
        fullName: "Bachelor of Business Administration",
        duration: "3 years (6 Semesters)",
        specializations: ["Fintech", "Digital Marketing", "Aviation Management", "Global HR"],
      },
      {
        name: "B.Com",
        fullName: "Bachelor of Commerce",
        duration: "3 years (6 Semesters)",
        specializations: ["Banking & Finance", "Corporate Tax", "Strategic Financial Management", "Investment Management"],
      },
      {
        name: "BCA",
        fullName: "Bachelor of Computer Applications",
        duration: "3 years (6 Semesters)",
        specializations: ["Cyber Security", "Cloud Computing", "AI & Machine Learning", "Data Science"],
      },
    ],
  },
  {
    id: 2,
    category: "Post Graduate",
    courses: [
      {
        name: "MBA",
        fullName: "Master of Business Administration",
        duration: "2 years (4 Semesters)",
        specializations: [
          "Marketing",
          "HR",
          "Finance",
          "Supply Chain",
          "Hospital and Health Care Management",
          "Business Analytics",
          "Digital Marketing",
          "Fintech",
        ],
      },
      {
        name: "MCA",
        fullName: "Master of Computer Applications",
        duration: "2 years (4 Semesters)",
        specializations: ["Software Development", "Database Management", "Cloud Computing", "Artificial Intelligence", "Cybersecurity"],
      },
      {
        name: "M.Sc. Mathematics",
        fullName: "Master of Science in Mathematics",
        duration: "2 years (4 Semesters)",
        specializations: ["Algebra", "Calculus", "Statistics", "Computational Mathematics", "Real Analysis"],
      },
      {
        name: "MA English",
        fullName: "Master of Arts (English)",
        duration: "2 years (4 Semesters)",
        specializations: ["Literary Theory & Criticism", "Linguistics", "Indian English Literature", "Modern British Literature", "Shakespeare Studies"],
      },
      {
        name: "MA JMC",
        fullName: "Master of Arts (Journalism and Mass Communication)",
        duration: "2 years (4 Semesters)",
        specializations: [
          "Radio Production",
          "Television Production",
          "Print Media",
          "Public Relations",
          "Corporate Communication & Advertising",
        ],
      },
    ],
  },
];

export default courses;