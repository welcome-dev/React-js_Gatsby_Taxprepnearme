import React from "react"
import {Formik} from "formik"
import * as Yup from "yup"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Service from "../helpers/service"

const loading = require("../images/loading.gif")
const Recaptcha = require('react-recaptcha')

const styles = {
  formLabel: {
    textAlign: 'left',
    marginTop: '.5rem',
    display: 'block'
  },
  noPadding: {
    paddingLeft: '0',
    paddingRight: '0'
  },
  centered: {
    textAlign: 'center',
    marginTop: '2rem',
    marginBottom: '2rem'
  }
}
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isCaptchaValid: false,
      isLoading: false,
      replyMessage: ''
    }
    this.service = new Service()
  }

  callback = () => {
  }

  verifyCallback = () => {
    this.setState({isCaptchaValid: true})
  }

  handleHttpResponse = data => {
    this.setState({
      isLoading: false,
      replyMessage: 'Your message has been delivered. We will get back to you soon.'
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Contact us" />
        <div>
          <div style={{textAlign: 'center'}}>
            <p>For any questions please contact us.</p>
          </div>

          <div style={{textAlign: 'center', display: this.state.isLoading ? '' : 'none'}}>
            <img src={loading} alt="loading" />
          </div>

          <div style={{display: this.state.isLoading ? 'none' : ''}}>
            <Formik
              initialValues={{name: '', email: '', phone: '', message: ''}}
              onSubmit={(values, {setSubmitting}) => {
                setSubmitting(false)

                if (this.state.isCaptchaValid) {
                  this.service.postContact(JSON.stringify(values, null, 2), this.handleHttpResponse.bind(this))
                  setSubmitting(true)
                  this.setState({isLoading: true})
                }
              }}
              validationSchema={Yup.object().shape({
                name: Yup.string().required('Required'),
                email: Yup.string().email().required('Required'),
                phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required'),
                message: Yup.string().required('Required')
              })}
            >
              {props => {
                const {
                  values,
                  touched,
                  errors,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                } = props
                return (
                  <form onSubmit={handleSubmit}>
                    <div className="grid-container halves" style={styles.noPadding}>
                      <div>
                        <label htmlFor="name" style={styles.formLabel}>Name :</label>
                        <input type="text" id="name" placeholder="Your name" value={values.name} onChange={handleChange} onBlur={handleBlur} className={errors.name && touched.name ? 'text-input error u-full-width' : 'text-input u-full-width'} />
                        {errors.name && touched.name && (
                          <div className="input-feedback">{errors.name}</div>
                        )}
                      </div>
                      <div>
                        <label htmlFor="phone" style={styles.formLabel}>Phone :</label>
                        <input type="tel" id="phone" placeholder="Your phone number" value={values.phone} onChange={handleChange} onBlur={handleBlur} className={errors.phone && touched.phone ? 'text-input error u-full-width' : 'text-input u-full-width'} />
                        {errors.phone && touched.phone && (
                          <div className="input-feedback">{errors.phone}</div>
                        )}
                      </div>
                    </div>

                    <div className="columns" style={{marginBottom: '10px'}}>
                      <div className="twelve columns">
                        <label htmlFor="email" style={styles.formLabel}>Email :</label>
                      </div>
                      <div className="twelve columns">
                        <input type="email" id="email" placeholder="test@mailbox.com" value={values.email} onChange={handleChange} onBlur={handleBlur} className={errors.email && touched.email ? 'text-input error u-full-width' : 'text-input u-full-width'} />
                        {errors.email && touched.email && (
                          <div className="input-feedback">{errors.email}</div>
                        )}
                      </div>
                    </div>

                    <div className="columns" style={{marginBottom: '2rem'}}>
                      <div className="twelve columns">
                        <label htmlFor="message" style={styles.formLabel}>Message :</label>
                      </div>
                      <div className="twelve columns">
                        <textarea id="message" placeholder="Hi Dave …" value={values.message} onChange={handleChange} onBlur={handleBlur} className={errors.message && touched.message ? 'text-input error u-full-width' : 'text-input u-full-width'} style={{height: '10rem'}}></textarea>
                        {errors.message && touched.message && (
                          <div className="input-feedback">{errors.message}</div>
                        )}
                      </div>
                    </div>

                    <div className="row recaptcha-container">
                      <Recaptcha
                        sitekey="6LdQrqYUAAAAABRlXazQTphZpwzq1Uxb14rlruD7"
                        render="explicit"
                        onloadCallback={this.callback.bind(this)}
                        verifyCallback={this.verifyCallback.bind(this)}
                      />
                    </div>

                    <div className="columns" style={styles.centered}>
                      <button type="submit" className="button-primary" disabled={isSubmitting}>Submit</button>
                    </div>

                    <br/><br/>
                  </form>
                )
              }
            }
            </Formik>
          </div>

          <div style={{textAlign: 'center', display: this.state.isLoading ? 'none' : ''}}>
            <p>
              {this.state.replyMessage}
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Contact
