import React, { useState } from 'react';
import styled from 'styled-components';

//components
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredName: '',
  //   enteredEmail: '',
  //   enteredMessage: '',
  // })

  const nameChangeHandler = (e) => {
    setName(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // })
    //
    // // OR if you need to access/return to prevState
    //
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value }
    // })
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const messageChangeHandler = (e) => {
    setMessage(e.taget.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <FormContainer>
        <form onSubmit={submitHandler}>
          <h1>Contact</h1>
          <div>
            <label>Name / Organization</label>
            <input type='text' onChange={nameChangeHandler} required />
          </div>
          <div>
            <label>Email</label>
            <input type='email' onChange={emailChangeHandler} required />
          </div>
          <div>
            <label>Message</label>
            <input type='text' onChange={messageChangeHandler} required />
          </div>
          <div>
            <label>Submit</label>
            <button type='submit'>Send</button>
          </div>
        </form>
      </FormContainer>
      <Footer />
    </>
  );
};

export default Contact;

const FormContainer = styled.div`
  width: 100%;
  height: 70vh;
`;
