import React from 'react'

export default function Contact() {
  return (
    <div style={{padding: '2rem', maxWidth: '800px', margin: '0 auto', minHeight: '70vh'}}>
      <h1>Contact Us</h1>
      
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '2rem'}}>
        <div>
          <h2>Get in Touch</h2>
          <div style={{marginBottom: '1rem'}}>
            <h3>📍 Address</h3>
            <p>123 E-Shop Street<br/>Commerce City, CC 12345</p>
          </div>
          
          <div style={{marginBottom: '1rem'}}>
            <h3>📞 Phone</h3>
            <p>+1-234-567-8900</p>
          </div>
          
          <div style={{marginBottom: '1rem'}}>
            <h3>📧 Email</h3>
            <p>info@eshop.com<br/>support@eshop.com</p>
          </div>
          
          <div>
            <h3>🕒 Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM<br/>Saturday: 10:00 AM - 4:00 PM<br/>Sunday: Closed</p>
          </div>
        </div>
        
        <div>
          <h2>Send us a Message</h2>
          <form style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <input type="text" placeholder="Your Name" style={{padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px'}} />
            <input type="email" placeholder="Your Email" style={{padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px'}} />
            <input type="text" placeholder="Subject" style={{padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px'}} />
            <textarea placeholder="Your Message" rows="5" style={{padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px', resize: 'vertical'}}></textarea>
            <button type="submit" style={{
              padding: '0.8rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}