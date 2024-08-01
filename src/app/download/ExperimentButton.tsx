export default function ExperimentButton() {
  return (
    <button
      id="linux-button"
      tabIndex={0}
      type="button"
      hx-swap="outerHTML"
      hx-post="/api/ssevents/download/experiment"
      name="download-hide-menu"
      style={{
        borderRadius: "1rem",
        border: "none",
        padding: "0.5rem 1rem",
        color: "white",
        backgroundColor: "black",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <span>Download Public Test Build</span>
        <div style={{ width: "1rem", marginLeft: "0.5rem" }}>
          <svg
            role="img"
            aria-label="Open Menu"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="white"
              d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
            ></path>
          </svg>
        </div>
      </div>
    </button>
  );
}
