import Card from '../UI/Card';
import cssClasses from '../Users/UsersList.module.css';

const UsersList = (props) => {
  return (
    <div>
      <Card className={cssClasses.users}>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};
export default UsersList;
