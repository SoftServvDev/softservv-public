// This file is a static information object to pull for the projects page

const Project_Data = {
    projects: {
        books: [
            {
                id: 1,
                img_src: '/books/All About HTML.png',
                img_alt: 'All About HTML - A Full Understanding',
                project_header: 'All About HTML - A Full Understanding',
                project_link: 'https://www.amazon.com/All-About-HTML-Full-Understanding-ebook/dp/B09Q5RJ6JK',
                project_body: "In January 2022, I wrote a book on HTML. This was more of a reference book to all non-deprecated HTML elements, how to use them, and when you should use them. Even " +
                "though it is more of a reference book, it was tailored to help everyone across all levels of knowledge learn HTML. I published this book " +
                "on Amazon's <a href='https://www.amazon.com/All-About-HTML-Full-Understanding-ebook/dp/B09Q5RJ6JK' target='_blank'>Kindle Store</a>."
            }
        ],
        front_end: [
            {
                id: 1,
                img_src: '/front_end_projects/softservv.png',
                img_alt: 'SoftServv Website',
                project_header: "SoftServv Website",
                project_link: "#",
                project_body: "I made a publicly available version of this website. It is created with NextJS and React. The API for it is built with Python using the Flask framework, however " +
                    "this is the code for the front-end specifically. I removed my API keys and anything that should be kept personal. The repo is " +
                    "located <a href='#' target='_blank'>here</a>."
            }
        ],
        back_end: [
            {
                id: 1,
                img_src: '/back_end_projects/api.png',
                img_alt: 'SoftServv API',
                project_header: "SoftServv API",
                project_link: "#",
                project_body: "I made a publicly available version of this website's API. This project is built using Flask and since it is only used for myself, I regularly change the API key. " +
                "I did leave out the API Keys in this specific repo. The repo is located <a href='#'>here</a>."
            }
        ]
    }
}

export default Project_Data