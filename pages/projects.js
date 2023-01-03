import React from 'react'
import Head from 'next/head'
import Navigation from '../components/universal/Navigation/Navigation'
import Footer from '../components/universal/Footer/Footer'
import Headline from '../components/universal/Headline/Headline'
import Projects from '../components/projects/Projects/Projects'
import ProjectCards from '../components/projects/Projects/components/ProjectCards'
import Project_Data from '../components/projects/Projects/data/Project_Data'

const headline_info = {
  headline_header: "Projects"
}

export default function projects() {
  return (
    <>
      <Head>
        <title>SoftServv Interactive (Chase Quinn)</title>
        <meta name="description" content="SoftServv Interactive (Chase Quinn) - Senior IT Customer Support Specialist & Software Engineer. Support specializations in ticketing systems, troubleshooting, SaaS environments, educational environments, and more. Engineering specializations include single-page applications (SPAs), NextJS, React, Vanilla (HTML/CSS/JS), and Python (Flask/Django). Let's build together!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logos/SoftServv Interactive-Transparent.png" />
      </Head>
      <Navigation projects='active' />
      <main>
        <Headline headline_header={headline_info.headline_header}>
          I should have started keeping up with a portfolio years ago. Now, due to customers either not using platforms anymore so I can't request permission from them,
          or just the fact that I didn't keep any code I created I am starting from scratch with a few things that I have created recently. If you have any questions,
          please don't hesitate to reach out!
        </Headline>
        <hr />
        <Projects projects_header="Books">
          {
            Project_Data.projects.books.map((project) => (
              <ProjectCards
                key={project.id}
                img_src={project.img_src}
                img_alt={project.img_src}
                project_header={project.project_header}
                project_link={project.project_link}
                project_body={project.project_body}
              >
              </ProjectCards>
            ))
          }
        </Projects>
        <Projects projects_header="Front-End Projects">
          {
            Project_Data.projects.front_end.map((project) => (
              <ProjectCards
                key={project.id}
                img_src={project.img_src}
                img_alt={project.img_src}
                project_header={project.project_header}
                project_link={project.project_link}
                project_body={project.project_body}
              >
              </ProjectCards>
            ))
          }
        </Projects>
        <Projects projects_header="Back-End Projects">
          {
            Project_Data.projects.back_end.map((project) => (
              <ProjectCards
                key={project.id}
                img_src={project.img_src}
                img_alt={project.img_src}
                project_header={project.project_header}
                project_link={project.project_link}
                project_body={project.project_body}
              >
              </ProjectCards>
            ))
          }
        </Projects>
      </main>
      <Footer />
    </>
  )
}
