import React from 'react';

function Cards() {
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card text-white bg-primary mb-3" style={{ maxWidth: '18rem' }}>
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Primary card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card text-white bg-secondary mb-3" style={{ maxWidth: '18rem' }}>
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Secondary card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card text-white bg-success mb-3" style={{ maxWidth: '18rem' }}>
          <div className="card-header">Header</div>
          <div className="card-body">
            <h5 className="card-title">Success card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;