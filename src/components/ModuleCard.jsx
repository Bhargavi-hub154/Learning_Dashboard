import "../styles/Modules.css";

export default function ModuleCard({ module, onClick }) {
  const percent = Math.round(
    (module.completed / module.lessons) * 100
  );

  return (
    <div className="module-card" onClick={onClick}>
      <div className="module-top">
        <h2>{module.title}</h2>
        <span className="module-badge">{module.course}</span>
      </div>

      <div className="module-info">
        <span>
          {module.completed} / {module.lessons} lessons
        </span>
        <span>•</span>
        <span>{module.minutes} min</span>
        <span>•</span>
        <span
          className={
            percent === 100
              ? "complete-green"
              : percent > 0
              ? "complete-purple"
              : "complete-gray"
          }
        >
          {percent}% complete
        </span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}