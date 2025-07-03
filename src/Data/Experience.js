import etruscai from '../assets/career/etruscai.png';
import teknolojiliderleri from '../assets/career/teknoloji_liderleri.png';
import maltepe from '../assets/career/maltepeuni.png';
const experience = [

    {
      title: 'Maltepe University',
      image: maltepe,
      position: 'Undergraduate Researcher',
      year: 'Sep 2024 - Jun 2025',
      descriptions: [
        `• Conducted machine learning research on obesity prediction using artificial intelligence techniques
under the supervision of Dr. Muhammed Burak Alver.`,

`• Developed data augmentation methods to address limited healthcare data challenges and improve
model performances by up to 12.5%.`,

`• Presented research findings at SIU 2025, Turkey's leading signal processing conference and the
work was accepted for publication in IEEE Xplore proceedings. Applied Pytorch, Ydata based
machine learning frameworks throughout the research process.`,
        
      ]
    },
  
    {
      title: 'Teknoloji Liderleri',
      image: teknolojiliderleri,
      position: 'Volunteer Engineer',
      year: 'Jul - Aug 2024',
      descriptions:
        [
`• Assisted with special events and programs. `,

`• Attended seminars on funding mechanisms for sustainable tech projects.`,

`• Explored robotics (Python/ROS) and drone systems.`,

`• Developed a SwiftUI based Mini Flag Guessing Game as part of application workshop.`,

`• I joined meetings with tech mentors. We shared ideas for EU projects that need funding.`,

`• Helped run our team's booth and talked to students and visitors about supporting Teknofest
projects.`
]
    },
    {
      title: 'Etruscai',
      image: etruscai,
      position: 'ML R&D Intern',
      year: 'May - Aug 2023',
      descriptions: [
                `• Collaborated in a team to design and experiment on model improvement techniques.`,
                `• Applied principal component analysis (PCA) to improve regression model's accuracy by 4%.(Sklearn,
Python, Scipy).`,
                `• Applied the pmdarima, prophet and tensorflow libraries to perform exploratory data analysis (EDA) on
time series data.`,
                `• Authored technical reports for improved ML models (Matplotlib, Excel, LaTeX).`
        ],
    }
  ]

  export default experience;