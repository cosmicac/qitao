import LinkOut from "@/components/icons/link-out";

const Headline = ({ title, titleUrl, dateRange }) => {
  const titleText = <div className="text-xl font-semibold">{title}</div>;
  const titleRow = titleUrl ? (
    <a href={titleUrl} target="_blank" rel="noreferrer">
      <div className="flex flex-row items-center gap-1 text-xl font-semibold">
        {title}
        <LinkOut />
      </div>
    </a>
  ) : (
    titleText
  );

  return (
    <div className="flex flex-row justify-between items-baseline">
      {titleRow}
      {dateRange && <div className="text-sm">{dateRange}</div>}
    </div>
  );
};

export default Headline;
