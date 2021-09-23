import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer,MDBBtn  } from "mdbreact";

const Dashboard = () => {
return (
  <>
<MDBContainer>
  <MDBCard className="card-body" style={{ width: "22rem", marginTop: "1rem" }}>
    <MDBCardTitle>Account #123456 Balance</MDBCardTitle>
    <MDBCardText>
      <h1>Total $: 12,500</h1>
    </MDBCardText>
    <div className="flex-row">
      <a href="#!">See history</a>
      <a href="#!" style={{ marginLeft: "1.25rem" }}>Create movement</a>
      
    </div>
  </MDBCard>
  <MDBCard className="card-body" style={{ width: "22rem", marginTop: "1rem" }}>
    <MDBCardTitle>Account #999999 Balance</MDBCardTitle>
    <MDBCardText>
    <h1>Total $: 1,500</h1>
    </MDBCardText>
    <div className="flex-row">
      <a href="#!">See history</a>
      <a href="#!" style={{ marginLeft: "1.25rem" }}>Create movement</a>
    </div>
  </MDBCard>
  <MDBCard className="card-body" style={{ width: "22rem", marginTop: "1rem" }}>
    <MDBCardTitle>Account #123456 Balance</MDBCardTitle>
    <MDBCardText>
      <h1>Total $: 12,500</h1>
    </MDBCardText>
    <div className="flex-row">
      <a href="#!">See history</a>
      <a href="#!" style={{ marginLeft: "1.25rem" }}>Create movement</a>
      
    </div>
  </MDBCard>
  
</MDBContainer>





</ >
);
};
export default Dashboard;