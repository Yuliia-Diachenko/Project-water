import css from './CalendarItem.module.css';

const CalendarItem = ({ feasibility = 0, day, isActive, onClick, isDisabled }) => {
  const containerStyle = {
    backgroundColor: isActive ? '#fff' : feasibility < 100 ? '#fff)' : '#FFFFFF',
    // backgroundColor: isActive ? '#fff' : feasibility < 100 ? '' : '#FFFFFF',
    // color: isActive ? '#000000' : '#000000',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    opacity: isDisabled ? 1 : 1,
    border: feasibility < 100 && !isDisabled  ? '1px solid #FF9D43' : ''  
  };

  const handleClick = (event) => {
    onClick(event); 
  };

  return (
    <div className={css.calendarItemContainer}>
      <button
        className={css.calendarItemButton}
         style={containerStyle}
        onClick={handleClick}
        disabled={isDisabled}
      >
        {day}
      </button>
      <p className={css.calendarItemText}>{feasibility}%</p>
    </div>
  );
};

export default CalendarItem;