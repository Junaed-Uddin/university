const Event = ({ event }) => {
  const { date, time, title } = event;
  return (
    <div className="flex flex-row gap-x-8 items-center">
      <div className="flex flex-col gap-y-2">
        <h2 className="text-xl lg:text-2xl font-semibold text-primary">
          {date.split(" ")[0]}
        </h2>
        <p className="text-md md:text-lg capitalize text-gray-600 w-2/3">
          {date.split(" ")[1]}
        </p>
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="capitalize text-2xl md:text-3xl">{title}</p>
        <p className="text-gray-500 mt-2">{time}</p>
      </div>
    </div>
  );
};

export default Event;
