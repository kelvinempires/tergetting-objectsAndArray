const complexObject = {
  person: {
    name: "Chinedu",
    age: 32,
    hobbies: ["reading", "coding", "football"],
    address: {
      street: "123 Igbo Road",
      city: "Lagos",
      country: "Nigeria",
      contacts: [
        {
          type: "mobile",
          number: "+2348012345678",
        },
        {
          type: "home",
          number: "+2348098765432",
        },
      ],
    },
  },
  education: {
    degrees: [
      {
        level: "Bachelor's",
        major: "Computer Science",
        year: 2010,
        institution: {
          name: "University of Lagos",
          location: "Lagos",
        },
      },
      {
        level: "Master's",
        major: "Software Engineering",
        year: 2014,
        institution: {
          name: "Covenant University",
          location: "Ogun State",
        },
      },
    ],
    certifications: [
      "AWS Certified Solutions Architect",
      "Google Cloud Professional",
    ],
  },
  workExperience: [
    {
      company: "Tech Innovations",
      role: "Frontend Developer",
      yearsWorked: 3,
      technologiesUsed: ["React", "Tailwind CSS", "Next.js"],
    },
    {
      company: "Global Solutions",
      role: "Full Stack Developer",
      yearsWorked: 5,
      technologiesUsed: ["Node.js", "Express", "MongoDB", "React"],
    },
  ],
  family: {
    spouse: {
      name: "Ngozi",
      age: 30,
      occupation: "Doctor",
    },
    children: [
      {
        name: "Amara",
        age: 5,
      },
      {
        name: "Kelechi",
        age: 3,
      },
    ],
  },
};

console.log(complexObject.person.address.contacts[0]);
console.log(complexObject.education.degrees[1].institution.name);
console.log((complexObject.family.children[1].name = "kelvin"));
console.log(complexObject.family.children[1].name);
