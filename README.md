# NextBite
AI-integrated web application that finds the closest hawker center in Singapore to you based on requests in Natural Language.

**Link to project**:[https://next-bite-nu.vercel.app/menu]

## How its made
**Tech Used**
- Frontend : React (TypeScript) , HTML, CSS, TailwindCSS, DaisyUI
- Backend : Node.js, Express.js, PostgreSQL (hosted on AWS), Firebase
- AI/ML : Pytorch, Hugging Face

Created the UI/UX using React and TailwindCSS. 
The UI/UX design was created with inspiration from the hawkers in Singapore. 

Used Express.js to serve a RESTful API and handle query requests to PostgreSQL database hosted on AWS. 
Used Firebase to handle authentication and secure the application.

Created a Named Entity Recognition model fine-tuned to include Singapore food names, using Hugging Face and Pytorch.
The model is hosted on Hugging Face spaces. 
