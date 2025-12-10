import React from 'react'

export default function Footer() {
  return (
    <footer style={{backgroundColor: '#333', color: 'white', padding: '2rem', textAlign: 'center', marginTop: 'auto'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '1rem'}}>
          <div>
            <h3>E-Shop</h3>
            <p>Your trusted online shopping destination</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <p>Home | Products | About | Contact</p>
          </div>
          <div>
            <h4>Contact Info</h4>
            <p>📧 info@eshop.com</p>
            <p>📞 +1-234-567-8900</p>
          </div>
        </div>
        <hr style={{border: '1px solid #555', margin: '1rem 0'}} />
        <p>&copy; 2024 E-Shop. All rights reserved.</p>
      </div>
    </footer>
  )
}