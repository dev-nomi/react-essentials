function TabButton({ children, active, ...props }) {
  return (
    <li>
      <button className={active ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
