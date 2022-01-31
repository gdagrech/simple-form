import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import {useState} from 'react';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid username and age (non-empty values).'
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age (Greater than 0).'
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUserName('');
    setEnteredAge('');
  };

  const userNameChangedHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangedHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={userNameChangedHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangedHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
