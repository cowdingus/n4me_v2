export default function Badge({text}) {
  return (
    <div className="badge" style={{
      border: "1px solid gray",
      fontSize: "0.8em",
      fontWeight: "bold",
      padding: "0.3em",
      lineHeight: "0.9",
      borderRadius: "5px",
      color: "#202020"
    }}>{text}</div>
  );
}
