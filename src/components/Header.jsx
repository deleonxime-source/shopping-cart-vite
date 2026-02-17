import "../styles/header.css";

const Header = ({ cartCount }) => {
  return (
    <header className="header">
    <img
        src="/ut-longhorn-icon.jpg"
        alt="UT Longhorn Logo"
        style={{ height: '60px', width: 'auto' }}
    />
      <h1>Shopping Cart Demo</h1>
      <span>🛒 Cart Items: {cartCount}</span>
    </header>
  );
};

export default Header;

