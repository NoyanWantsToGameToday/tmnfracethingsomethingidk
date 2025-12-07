fetch("records.json")
  .then(res => res.json())
  .then(data => {
    const head = document.getElementById("tableHead");
    const body = document.getElementById("tableBody");

    head.innerHTML = "<th>Track</th>";
    data.players.forEach(p => {
      head.innerHTML += `<th>${p}</th>`;
    });

    data.tracks.forEach(track => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${track.name}</td>`;

      data.players.forEach(p => {
        tr.innerHTML += `<td>${track.records[p] || "-"}</td>`;
      });

      body.appendChild(tr);
    });
  });
