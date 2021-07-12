import React from "react";
import ReusableForm from "./ReusableForm";
import { v4 } from 'uuid';
import PropTypes from "prop-types"; //import PropTypes

function NewTicketForm(props){ // Make sure to add props as a parameter.

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: v4()});
  }
  
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewTicketFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}

// We also need to add PropTypes for our new prop.

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;