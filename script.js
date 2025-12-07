const data = {
  players: ["Noyan", "Bliss"],
  tracks: [
    { type: "tier", id: "A", collapsed: false },

    { name: "A01-Race", tier: "A", records: { Noyan: "0:00.00", Bliss: "0:00.00" } },
    { name: "A02-Race", tier: "A", records: { Noyan: "0:00.00", Bliss: "0:00.00" } },

    { type: "tier", id: "B", collapsed: true },

    { name: "B01-Race", tier: "B", records: { Noyan: "0:00.00", Bliss: "0:00.00" } },
    { name: "B02-Race", tier: "B", records: { Noyan: "0:00.00", Bliss: "0:00.00" } },

    { type: "tier", id: "C", collapsed: true },
    { name: "C01-Race", tier: "C", records: { Noyan: "0:00.00", Bliss: "0:00.00" } }
  ]
};

const app = document.getElementById("app");

function render() {
  app.innerHTML = "";
  let collapsed = false;

  data.tracks.forEach((item, index) => {
    if (item.type === "tier") {
      collapsed = item.collapsed;

      const header = document.createElement("div");
      header.className = "tier-header";
      header.innerHTML = `
        <span>${item.collapsed ? "▶" : "▼"} Tier ${item.id}</span>
        <div class="tier-line"></div>
      `;

      header.onclick = () => {
        item.collapsed = !item.collapsed;
        render();
      };

      app.appendChild(header);
      return;
    }

    if (collapsed) return;

    const track = document.createElement("div");
    track.className = "track";

    const recordText = Object.entries(item.records)
      .map(([p, t]) => `${p}: ${t}`)
      .join(" | ");

    track.innerHTML = `
      <div>${item.name}</div>
      <div class="records">${recordText}</div>
    `;

    app.appendChild(track);
  });
}

render();
