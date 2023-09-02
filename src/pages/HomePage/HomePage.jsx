import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <h1>Welcome to PhoneBook!</h1>
      <h3>
        Here you can easily create a new user account and organizing your
        contacts.
      </h3>
    </div>
  );
};
export default HomePage;
