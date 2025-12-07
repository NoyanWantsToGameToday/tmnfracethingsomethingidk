// load
data.tracks.forEach(item => {
  if (item.type === "tier") {
    item.collapsed = JSON.parse(localStorage.getItem("tier_" + item.id)) ?? item.collapsed;
  }
});

// save
header.onclick = () => {
  item.collapsed = !item.collapsed;
  localStorage.setItem("tier_" + item.id, item.collapsed);
  render();
};
