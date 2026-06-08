function FilterBar({
  selectedType,
  setSelectedType,
}) {
  return (
    <div style={{ margin: "20px 0" }}>
      <select
        value={selectedType}
        onChange={(e) =>
          setSelectedType(e.target.value)
        }
      >
        <option value="">All</option>
        <option value="Placement">
          Placement
        </option>
        <option value="Result">
          Result
        </option>
        <option value="Event">
          Event
        </option>
      </select>
    </div>
  );
}

export default FilterBar;