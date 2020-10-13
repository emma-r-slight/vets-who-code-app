import React from 'react'
import PageHeader from '../components/PageHeader'
import { ApplyForm } from '../components/Forms'

export default function Apply() {
  return (
    <>
      <PageHeader />
      <section id="contact" className="small-top-pad section bg-default">
        <div className="container">
          <div className="row">
            <div className="col-md-12 lead-in">
              <h1 className="story-title">Apply</h1>
              <p>
                <i>Submit an application to be considered for the next cohort.</i>
              </p>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <div className="contactus-brief">
                  <p className="section-description">
                    Thank you for choosing to apply to Vets Who Code. Your first step in this
                    journey will be to visit our&nbsp;
                    <a href="https://github.com/Vets-Who-Code/prework">prework repository</a>
                    &nbsp;on <a href="http://github.com">github.com</a>. We ask that, prior to
                    applying to our program, you complete a small series of tutorial assignments
                    that will introduce you to the basics of HTML5, CSS3 and JavaScript. The prework
                    reading assignment will also guide you through setting up your development
                    environment to work with the Vets Who Code program. After finishing the reading,
                    we ask that you complete the capstone project&nbsp;(a short one-page website
                    which will allow us to gauge your initial skill levels and help us assign an
                    appropriate mentor), and fill out the following application form.
                  </p>
                  <ApplyForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
