import classes from './SectionButton.module.css';

function SectionButton({ isSelected, children, ...props }) {
  return (
    <button
      className={`${classes.button} ${
        isSelected ? classes.selected : classes.unselected
      }`}
      {...props}
    >
      {children}
    </button>
  );
}

export default SectionButton;
