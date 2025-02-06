interface ToggleProps {
  title: string;
  id: string;
  onHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Toggle({ title, id, onHandleChange }: ToggleProps) {
  return (
    <>
      <div className="input-container">
        <span>{title}</span>
        <input
          type="checkbox"
          name={id}
          id={id}
          title={`Toggle for ${id}`}
          onChange={(e) => onHandleChange(e)}
        />
        <label htmlFor={id} className="label-checkbox"></label>
      </div>
    </>
  );
}
