// Author: Kyle Angeles
// File: About.jsx
// Date-Written: 4/29/26
// Description: This file will render in the about me section for the users to view 
// about myself and what i do.
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card.jsx";

const skills = [

    {
        title: "Frontend",
        description: 
            "Built responsive UI's using React, TailWindCSS, and Javascript" +
            "including small project to medium scaled projects and component based layouts.",
    },
    {
        title: "Backend",
        description: " Written backend logic in Java, Python, C#, PHP, and Javascript" + " building short api's, handling business logic, and working with rest APIs.",
    },
    {
        title: "Database",
        description: "MySQL, PSQL, AuroraDB(AWS) - building database schema's, writing queries, and working with different database management systems to store and retrieve data for applications.",
    },
    {
        title: "Tools",
        description: "Git, Github, GitLab, AWS, Docker, Vercel - version control and deployment tools to manage codebases and deploy applications."
    },

]

function About() {


    return(


        <div className="max-w-5xl mx-auto px-6 pt-16 pb-16">
        
        
        {/* Heading */}
        <h2 className="text-4xl font-medium text-white mb-4">About me</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-xl">
            Hi, I'm a computer Programming and Analysis student at Durham College
            passionate about building projects and functional software across the full stack.
        </p>
        


      

       
     {/* Skills Grid */}
      <div className="grid grid-cols-2 gap-6">
        {skills.map((skill) => (
          <Card key={skill.title}>
            <CardHeader>
              <CardTitle>{skill.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 text-base leading-relaxed">
                {skill.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

    </div>
  )
}


export default About;