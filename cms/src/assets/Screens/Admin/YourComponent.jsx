import React, { useState, useRef } from 'react';
import style from '../../css/style.module.css';
function YourComponent() {
  const [agent, setAgent] = useState({
    name: '',
    email: '',
    password: '',
    city: '',
    address: '',
  });

  const modalRef = useRef(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setAgent({ ...agent, [name]: value });
  };

  const agent_inserted = (e) => {
    e.preventDefault();
    // Your logic to handle the agent data submission (e.g., API call)
    console.log('Agent data submitted:', agent);
    // After successful submission, close the modal:
    closeModal();
    //reset the form.
    setAgent({
        name: '',
        email: '',
        password: '',
        city: '',
        address: '',
      })
  };

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.classList.add('show');
      modalRef.current.style.display = 'block';
      document.body.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
      //create a backdrop
      let backdrop = document.createElement('div');
      backdrop.className = 'modal-backdrop fade show';
      document.body.appendChild(backdrop);
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
        modalRef.current.classList.remove('show');
        modalRef.current.style.display = 'none';
        document.body.classList.remove('modal-open');
        document.body.style.overflow = '';
        //remove backdrop
        let backdrop = document.querySelector('.modal-backdrop');
        if(backdrop){
            backdrop.remove();
        }
    }
  };

  return (
    <div>
      <button className={style.btn1} onClick={openModal}>
        Add Agent
      </button>

      <div className="modal fade" id="addPassengerModal" ref={modalRef}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className={`${style.customHeader} modal-header`}>
              <h5 className={`${style.modaltitle} modal-title`} id="addPassengerModalLabel">
                Add New Agent
              </h5>
            </div>
            <div className="modal-body">
              <form onSubmit={agent_inserted}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    name="name"
                    type="text"
                    value={agent.name}
                    onChange={handleInput}
                    className="form-control"
                    id="name"
                    required
                    placeholder="Enter name"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    type="text"
                    value={agent.email}
                    onChange={handleInput}
                    className="form-control"
                    id="email"
                    required
                    placeholder="Enter email"
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    name="password"
                    type="password"
                    value={agent.password}
                    onChange={handleInput}
                    className="form-control"
                    id="password"
                    required
                    placeholder="Enter password"
                  />
                </div>
                <div>
                  <label htmlFor="city">City</label>
                  <input
                    name="city"
                    type="text"
                    value={agent.city}
                    onChange={handleInput}
                    className="form-control"
                    id="city"
                    required
                    placeholder="Enter city"
                  />
                </div>
                <div>
                  <label htmlFor="address">Address</label>
                  <input
                    name="address"
                    value={agent.address}
                    type="text"
                    onChange={handleInput}
                    className="form-control"
                    id="address"
                    required
                    placeholder="Enter address"
                  />
                </div>
                <button type="submit" className={`${style.btnblock} bt2 btn1`}>
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourComponent;