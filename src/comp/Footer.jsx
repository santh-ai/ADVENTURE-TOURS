import React from 'react'

function Footer() {
  return (
    <>
    <div className="container-fluid bg-secondary">
  <div className="container text-white"><div className="row py-5">
      <div className="col-lg-3"><p className="fw-bold fs-5">ABOUT US</p><p>We are a small company based in San<br /> Francisco which delivers outstanding<br /> adventure travel experiences.</p><img src="http://cdn2-adventure-tours.themedelight.com/wp-content/uploads/2015/07/travel-awards.png" alt srcSet /></div>
      <div className="col-lg-3"><p className="fw-bold fs-5">FROM THE BLOG</p>
        <div className="row py-2">
          <div className="col-lg-3"><img className="rounded-circle" src="http://cdn2-adventure-tours.themedelight.com/wp-content/uploads/2015/07/packing-60x60.jpg" alt srcSet /></div> <div className="col-lg-9"><p><strong className="fw-bold">Before You Go</strong><br />July 17, 2015</p></div>
        </div>
        <div className="row border-top ">
          <div className="col-lg-3 py-2"><img className="rounded-circle" src="http://cdn2-adventure-tours.themedelight.com/wp-content/uploads/2015/07/costa-rica-volcano-60x60.jpg" alt srcSet /></div> <div className="col-lg-9 py-2"><p><strong className="fw-bold">Costa Rica Parks</strong><br />June 20, 2015</p></div>
        </div>
      </div>
      <div className="col-lg-3"><p className="fw-bold fs-5">LATEST TWEETS</p>
        <p>Please verify the settings in the Twitter<br /> widget.</p></div>
      <div className="col-lg-3"><p className="fw-bold fs-5">CONTACT US</p>
        <p className><i className="bi bi-geo-alt bg-secondary-subtle rounded-circle fs-5 text-primary" />777 Franklin St, San Francisco</p>
        <p className><i className="bi bi-telephone-fill bg-secondary-subtle rounded-circle fs-5 text-primary" />	+1 420-240-6000</p>
        <p className><i className="bi bi-envelope bg-secondary-subtle rounded-circle fs-5 text-primary" />contact@adventuretours.com</p>
        <p className><i className="bi bi-skype bg-secondary-subtle rounded-circle fs-5 text-primary" />adventure.tours</p>
      </div></div>
    <div className="row border-top py-2">
      <div className="col-lg-6">© Adventure Tours, 2022. Made with love and care by ThemeDelight</div>
      <div className="col-lg-6 "><ul className="d-flex list-unstyled gap-4">
          <li><a>Terms &amp; Conditions </a></li>
          <li><a>Cookies</a></li>
          <li><a>Privacy Policy</a></li></ul>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Footer