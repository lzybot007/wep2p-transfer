document.getElementById("sendButton").onclick = () => {
  const file = document.getElementById("fileInput").files[0];
  if (!file) return alert("No file selected");

  alert(`This is where you'd start the P2P send for: ${file.name} (${file.size} bytes)`);
};
