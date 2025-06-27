import MainLayout from "../layouts/MainLayout";

const Task_Manager = () => {
  return (
    <MainLayout>
      <div className="text-sm text-gray-500 mb-2">
        Dashboard &gt; <span>ToDoshnik</span>
      </div>

      <h1 className="text-2xl font-medium mb-4">Project name</h1>

      {/* Info boxes */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-card p-4 rounded-xl text-sm ">
          <p>
            <span className="font-medium">Date added:</span> 12/04/2021
          </p>
          <p>
            <span className="font-medium">Deadline:</span> 24/04/2021
          </p>
          <p>
            <span className="font-medium">Participants:</span> Adyl, Azhar,
            Arthur
          </p>
        </div>
        <div className="bg-card p-4 rounded-xl col-span-2 text-sm">
          Менеджер для внутреннего пользования, предназначенный для учета
          статистики и трекинга задач.
        </div>
        <div className="bg-card p-4 rounded-xl text-sm">
          <p>
            <span className="font-medium">All tasks:</span> 6
          </p>
          <p>
            <span className="font-medium">Done:</span> 0
          </p>
          <p>
            <span className="font-medium">Frozen:</span> 1
          </p>
        </div>
      </div>

      {/* Columns */}
      <div className="grid grid-cols-4 gap-4">
        {/* To Do */}
        <div className="bg-card rounded-xl p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-medium">To do</h2>
            <button className="text-green-600 text-xl font-medium">+</button>
          </div>

          <TaskCard
            title="CRM system design"
            priority="Medium"
            participant="Azhar"
          />
          <TaskCard title="Statistics" priority="Low" participant="Artur" />
          <TaskCard
            title="Priorities"
            priority="High"
            participant="Adyl, Artur"
          />
        </div>

        {/* In progress */}
        <div className="bg-card rounded-xl p-4">
          <h2 className="font-medium mb-4">In progress</h2>
          <TaskCard title="Notifications" priority="Low" participant="Artur" />
          <TaskCard title="Task types" priority="Low" participant="Adyl" />
        </div>

        {/* Closed */}
        <div className="bg-card rounded-xl p-4">
          <h2 className="font-medium mb-4">Closed</h2>
        </div>

        {/* Frozen */}
        <div className="bg-card rounded-xl p-4">
          <h2 className="font-medium mb-4">Frozen</h2>
          <TaskCard
            title="Todoshnik design"
            priority="Low"
            participant="Azhar"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Task_Manager;

// Reusable task card
const TaskCard = ({
  title,
  priority,
  participant,
}: {
  title: string;
  priority: "Low" | "Medium" | "High";
  participant: string;
}) => {
  const priorityColor = {
    Low: "bg-btn-green text-white",
    Medium: "bg-btn-orange text-white",
    High: "bg-btn-red text-white",
  };

  return (
    <div className="bg-project rounded-xl p-3 mb-3 text-sm shadow-sm">
      <div className="flex justify-between items-center mb-1">
        <span className="font-medium">{title}</span>
        <span
          className={`text-xs px-2 py-0.5 rounded-full ${priorityColor[priority]}`}
        >
          {priority}
        </span>
      </div>
      <p className="text-xs mb-1 text-search">
        Participant: <span className="text-black">{participant}</span>
      </p>
      <p className="text-xs text-search">
        Date added: <span className="text-black">12/04/2021</span>
      </p>
    </div>
  );
};
