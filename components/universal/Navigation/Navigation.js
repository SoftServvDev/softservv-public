import Link from 'next/link'
import React from 'react'

export default function Navigation(props) {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/"><img src="/logos/SoftServv Interactive-Transparent-White-Gradient_Border.png" alt="SoftServv Interactive" height="25" width="25" className='mb-1'/> SoftServv</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${props.home}`} href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${props.about}`} href="/about">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${props.projects}`} href="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${props.skills}`} href="/skills">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${props.references}`} href="/references">References</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${props.testimonials}`} href="/testimonials">Testimonials</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${props.contact}`} href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
