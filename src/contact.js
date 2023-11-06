
function contact() {
    return (

<div class="container">
  <h1>Contact Us</h1>
  <div class="row">
    <div class="col-md-6">
      <form>
        <div class="form-group">
          <label for="name">Your Name</label>
          <input type="text" class="form-control" id="name" placeholder="Enter your name"></input>
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" placeholder="Enter your email"></input>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea class="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    <div class="col-md-6">
      <h2>Contact Information</h2>
      <p><strong>Address:</strong> 123 Main St, City, Country</p>
      <p><strong>Phone:</strong> (123) 456-7890</p>
      <p><strong>Email:</strong> info@example.com</p>
    </div>
  </div>
</div>

  );
}
export default contact;