const Headline = ({ title, dateRange }) => {
  return (
    <div className="flex flex-row justify-between items-baseline">
      <div className="text-xl font-semibold">{title}</div>
      {dateRange && <div className="text-sm">{dateRange}</div>}
    </div>
  );
};

export default Headline;
