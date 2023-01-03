import { React, useState } from 'react'
import axios from 'axios'
import ContactFormLoading from './components/ContactFormLoading'

import styles from '../../../styles/contact/contact.module.css'

export default function ContactForm() {
    // State for handling form submission
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [waiting, setWaiting] = useState(false)
    const [responseMessage, setResponseMessage] = useState('')
    const [statusResponse, setStatusResponse] = useState(null)
    const [handleError, setHandleError] = useState(false)

    // handles submitting the http request via axios
    async function handleSubmit(e, email, message) {
        e.preventDefault()
        setWaiting(true)
        // try-catch block for handling a hanging or uncooperative server
        try {
            const json = JSON.stringify({ email, message })
            console.log(process.env.API_KEY)
            const res = await axios.post(process.env.API_URL, json, {
                headers: {
                    'Content-Type': "application/json",
                    "x-access": process.env.API_KEY
                }
            }
            )
                // This promise is set up to receive data given by the softservv api reponse.
                .then((response) => {
                    setResponseMessage(response.data[0].message)
                    setStatusResponse(response.data[1])
                    setWaiting(false)
                }
                )
        }
        catch (error) {
            setWaiting(false)
            setHandleError(true)
        }
    }

    // displays the loading wheel when awaiting server response
    const displayLoading = (waiting) => {
        if (waiting == true) {
            return (
                <ContactFormLoading />
            )
        }
    }

    // displays the server responses
    const displayMessage = (statusResponse, responseMessage) => {
        if (statusResponse === 200) {
            // This timeout gives the message 3 seconds before clearing all data
            setTimeout(() => {
                setEmail('')
                setMessage('')
                setResponseMessage('')
                setStatusResponse(null)
            }, 3000)
            return (
                <div className={`${styles.server_response_good} row justify-content-center`}>
                    <p className={`${styles.message}`}><i class="fa-solid fa-check"></i> Message Sent!</p>
                </div>
            )
        }
        else if (statusResponse != null && statusResponse != 200 ) {
            // This timeout gives the message 6 seconds before clearing all data
            setTimeout(() => {
                setEmail('')
                setMessage('')
                setResponseMessage('')
                setStatusResponse(null)
            }, 6000)
            return (
                <div className={`${styles.server_response_bad}`}>
                    <span className={`${styles.message}`}>
                        <p>There was an issue...</p>
                        <p>Status Code: {statusResponse}</p>
                        <p>Message: {responseMessage}</p>
                        <p>
                            Please try sending the message again, if the issue persists contact me
                            via any other method and let me know!
                        </p>
                    </span>
                </div>
            )
        }
        else if (handleError === true) {
            // This timeout gives the message 6 seconds before clearing all data
            setTimeout(() => {
                setEmail('')
                setMessage('')
                setResponseMessage('')
                setStatusResponse(null)
                setHandleError(false)
            }, 6000)
            return (
                <div className={`${styles.server_response_bad}`}>
                    <span className={`${styles.message}`}>
                        <p>There was an issue...</p>
                        <p>The Server is not responding</p>
                        <p>
                            If the issue persists contact me
                            via any other method and let me know!
                        </p>
                    </span>
                </div>
            )
        }
    }

    return (
        <section className={`${styles.contact_form_container} row justify-content-center`}>
            <form className={`${styles.contact_form} card col-xl-8 col-sm-7 col-xs-10`}>
                {displayMessage(statusResponse, responseMessage)}
                {displayLoading(waiting)}
                <h3>Send me a message</h3>
                <div className="mb-3">
                    <label htmlFor="ReturnEmail" className="form-label">Return Email address</label>
                    <input type="email" className="form-control" id="ReturnEmail" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div id="emailHelp" className="form-text">I don't share this information.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="Message" className="form-label">Message</label>
                    <textarea className="form-control" id="Message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <button type="submit" onClick={(e) => handleSubmit(e, email, message)} className={`${styles.contact_form_submit_button} btn btn-primary`}>Submit</button>
            </form>
        </section>
    )
}
