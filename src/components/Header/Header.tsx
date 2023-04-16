import './Header.scss';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-left">
        <h2>DevOps Learning Platform</h2>
      </div>
      <div className="header-right">
        <button className="login-btn" type="button">
          Log In
        </button>
      </div>
    </header>
  );
};

export default Header;
