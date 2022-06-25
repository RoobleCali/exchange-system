export default function index() {
  const handleChange = (event) => {
    if (event.target.checked) {
      console.log("✅ Checkbox is checked");
    } else {
      console.log("⛔️ Checkbox is NOT checked");
    }
  };

  return (
    <div>
      <label htmlFor="subscribe">
        <input
          type="checkbox"
          onChange={handleChange}
          id="subscribe"
          name="subscribe"
        />
        Subscribe
      </label>
    </div>
  );
}
