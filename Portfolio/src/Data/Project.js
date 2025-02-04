import obesity from '../assets/images/projects/obesity.png';
import mushroom from '../assets/images/projects/Mushroom.png';
import ecom from '../assets/images/projects/e-commerce.png';
import guessflags from '../assets/images/projects/flag.png';
const project = [
  {
    name: 'Obesity Analysis via Synthetic Data Augmentation & Mobile Integration ',
    photo: obesity,
    category: 'swift',
    text:  `Built this project as i was learning more about synthetic data generation.
    Analyzed obesity status based on individuals' social and physical activities. The dataset was augmented
using CTGAN via YData to handle data scarcity. Developed a mobile app using SwiftUI and Core ML for on
device machine learning. Practiced data augmentation and mobile development with Core ML integration.
     `,
    tech: ['python', 'coreml', 'swift'],
    property: [ "Users of this application can see their obesity status based on their physical/social activities. This ML model is trained on a data of 1610 individuals' questionnaire answers. At the end of the form, program categorizes user into one of the 4 categories of : Obese, Overweight, Normal, Underweight. "
    ],
    date: '2025 Jan',
    link: 'https://github.com/eren9677/Learning-swift/tree/main/ObesityCheck/ObesityCheck',
    learn: [ "Synthetic Data Generation with CTGAN", 
      'Mobile Application Development with Swift & SwiftUI', 
      'CoreML integration in mobile apps', 
      'UI/UX design for forms',
      'Custom Views and View Modifiers',]
  },
    {
      name: 'Mushroom Edibility Prediction',
      photo: mushroom,
      category: 'Python',
      text: `
      Implemented a 3-layer MLP using PyTorch to classify mushrooms as edible or poisonous with the UCI
Mushroom Dataset. Integrated batch normalization and ReLU activations.
      
      `,
      tech: ['Pytorch', 'python'],
      property: ['Used Pytorch to build MLP model',
        "Applied randomized batch normalization to prevent covariate shift while training in batches.",
        "Adam optimizer is used for scalability.",
        "ReLU is used between the hidden layers and Sigmoid is used for final layer.",
      ],
      date: '2024 Dec',
      link: 'https://github.com/eren9677/CEN-451/tree/main',
      learn: [ 'Learned to create dataloaders for MLP model.', 
        'Learned to select the optimal batch size and neuron numbers', 
        'Tried multiple times to find the best hyperparameter. this includes using different activation functions to batch size, network depth, normalization techniques. regularization techniques']
    },
    {
      name: 'E-commerce Website',
      photo: ecom,
      category: 'php',
      text: `
      Created an e-commerce project using php for my univeristy lecture. This includes a user interface and an admin panel for store management.
      I've used Bootstrap modules and XAMPP for web hosting with MYSQL database. Check my GitHub for a detalied video introduction.
      `,
      tech: ['php','Bootstrap','javascript','html','mysql'],
      property: ['Admin panel has multiple functionalities such as adding a new admin, deleting one and password management.',
        'Admins can add/update/delete products and categories. ',
        'Users can see the stock of a product in real time',
        'Admins has a nice order management list as they wish to delete an order if they complete it.'
      ],
      date: '2024 May',
      link: 'https://github.com/eren9677/E-COM?tab=readme-ov-file',
      learn: [ 'Learned to create dataloaders for MLP model.', 
        'Learned to properly manage a Database system', 
        'Dynamically updating using Globals and GET/SET operations via PHP',
        'How to build a clean UI to improve user experience',
        'Learned to use CDNs.',
        'Updating client-side interface with javascript.'
  ]
    },
    {
      name: 'Guess Flags',
      photo: guessflags,
      category: 'Swift',
      text: `
      Created a mini Flag Guessing IOS game. It was created when i was learning about XCode asset catalog, alerts, views and timers.
      `,
      tech: ['Swift'],
      property: ['Users can have a score below the scene.',
        "A countdown is started when the game starts.",
        "Users are getting notified when they click the wrong flag",
        "A catalog of 45+ countires is available",
      ],
      date: '2024 Aug',
      link: 'https://github.com/eren9677/Learning-swift/tree/main/GuessFlags',
      learn: [ 'Learned to use Xcode Asset catalog', 
        'learned to use ZStack with custom views', 
        'Learned to use timer functionality in swift.']
    },

  ]

  export default project;