import React, { useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from '../../contexts/AuthContext'

//components
import Signup from "../Auth/Signup";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import WorkInfo from "./WorkInfo";

import axios from "../../axiosCommonInstance";

//styles
import {Button} from 'react-bootstrap'

const MultiForm = () => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const { currentUser } = useAuth();

  /*const a = async () => {
    const token = await currentUser.getIdToken();
    //console.log(token)
  }
  a();*/

    const handleSubmit = async () => {
        const token = await currentUser.getIdToken();
        //console.log(token)
      const user = {...values, uid: currentUser.uid};

      //AXIOS POST REQUEST 
        axios.post('http://localhost:8080/user/add', JSON.stringify(user), {
          headers: {
            //TODO 
            'Content-Type': 'multipart/form-data',
            'Authorization': "Bearer " + token
          }
        })
      .then((res) => {
          console.log(res)
      }).catch(e => {
        console.error(e)
      })
  }

  const { signup } = useAuth()

  async function onSignUp (email, password, isNextStep) {
    try {
        setLoading(true)
        await signup(email, password)
        setLoading(false)

        isNextStep ? nextStep() : history.push('/');
    } catch {
        setError('Failed to create an account')
        setLoading(false)
    }
}

    
  const [values, setValues] = useState({

        photo: "",
        name: "",
        surname: "",
        birthdate: "",
        gender: "",

        address: "",
        city: "",
        country:"",
        phone: "",

        employmentdate: "",
        worklocation: "",
        department: "",

  });

  const handleChange = (value) => (e) => {
    setValues({ ...values, [value]: e.target.value });
  };

  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    } else if (step === 4) {
      handleSubmit();
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const buttonText = [
    'Sign up and next',
    'Next',
    'Next',
    'Submit'
  ][step - 1]

  return (
        <>
          {
            { 1: <Signup 
              handleChange={handleChange} 
              onSignUp={onSignUp} 
              loading={loading} 
              error={error}
              setError={setError}/>,
              2: <PersonalInfo handleChange={handleChange} />,
              3: <ContactInfo handleChange={handleChange} />,
              4: <WorkInfo handleChange={handleChange} />
            }[step]
          }
          
            {step > 1 && <div className='buttonsNewUser'>
                {step > 1 ? (
                <Button variant='light' onClick={prevStep}>
                    Back
                </Button>
                ) : null}
                    <Button onClick={nextStep}>
                    {buttonText}
                    </Button>
            </div>}
        </>
          
    );
};

export default MultiForm;