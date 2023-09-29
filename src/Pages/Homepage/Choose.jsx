import React from 'react'

function Choose() {
  return (
    <>
    <div className="container py-5">
    <h1>WHY CHOOSE US?</h1>
    <div className="row">
    <div className="col-lg-3 py-5 ">
  <div className="d-flex">
    <div className="background"><i className="bi bi-globe icon fs-2 text-white" /></div>
    <div className="px-4"><p className="fw-bold fs-5">Diverse Destinations</p><p className="text-secondary">Habitasse. Nunc mollis<br />
        erat dapibus in commodo <br />eu nisi. Odio purus<br /> magnis lorem.</p></div>
  </div>
  <div className="d-flex pt-3">
    <div className="background"><i className="bi bi-calendar-day-fill icon fs-2 text-white" /></div>
    <div className="px-4"><p className="fw-bold fs-5">Fast Booking</p><p className="text-secondary">Torquent egestas. Per<br /> integer placerat ipsum
        <br /> quam adipiscing vehicula<br /> nisi.</p></div>
  </div>
</div>
<div className="col-lg-3 py-5 ">
  <div className="d-flex">
    <div className="background"><i className="bi bi-coin icon fs-2 text-white" /></div>
    <div className="px-4"><p className="fw-bold fs-5">Value for Money</p><p className="text-secondary">Nulla imperdiet dictum<br />
        laoreet netus. Habitant<br />ullamcorper. Auctor<br />auctor cras.</p></div>
  </div>
  <div className="d-flex pt-3">
    <div className="background"><i className="bi bi-chat-dots-fill icon fs-2 text-white" /></div>
    <div className="px-4"><p className="fw-bold fs-5">Support Team</p><p className="text-secondary">Turpis accumsan. Proin id<br /> 
        ligula suspendisse.<br /> Aliquet fringilla, aptent eu <br /> dignissim.</p></div>
  </div>
</div>
<div className="col-lg-3 py-5 ">
  <div className="d-flex">
    <div className="background"><i className="bi bi-camera-fill icon fs-2 text-white" /></div>
    <div className="px-4"><p className="fw-bold fs-5">Beautiful Places</p><p className="text-secondary">Eu molestie Purus ac.<br />
        Facilisis hac in metus nunc <br />parturient ornare<br /> vehicula.</p></div>
  </div>
  <div className="d-flex pt-3">
    <div className="background"><i className="bi bi-heart icon fs-2 text-white" /></div>
    <div className="px-4"><p className="fw-bold fs-5">Passionate Travel</p><p className="text-secondary">Metus cubilia aenean.<br />Fusce, dapibus netus
        <br />nullam interdum ut<br /> nisi.</p></div>
  </div>
</div>
<div className="col-lg-3 bg-info text-white text-center">
  <div className="shadow p-4">
    <p className="fst-italic fw-bold">Search Tours</p><p>Find your dream tour today!</p>
    <input className="form-control" placeholder="Search Tour" /><br />
    <input className="form-control" placeholder="Destination" /><br />
    <input className="form-control" placeholder="Tour Type" /><br />
    <input className="form-control" placeholder="Month" /><br />
    <button type="button" className="btn btn-primary btn-lg">Find Tours</button>
  </div>
</div>



        </div>
    </div>
    </>
  )
}

export default Choose