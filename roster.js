

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById("rosterGrid")
  const typeColors = {
    Normal: "#A8A77A",
    Fire: "#EE8130",
    Water: "#6390F0",
    Electric: "#F7D02C",
    Grass: "#7AC74C",
    Ice: "#96D9D6",
    Fighting: "#C22E28",
    Poison: "#A33EA1",
    Ground: "#E2BF65",
    Flying: "#A98FF3",
    Psychic: "#F95587",
    Bug: "#A6B91A",
    Rock: "#B6A136",
    Ghost: "#735797",
    Dragon: "#6F35FC",
    Dark: "#705746",
    Steel: "#B7B7CE",
    Fairy: "#D685AD",
  };


  const render = list => {
    grid.innerHTML = '';
    list.forEach((p, index) => {
      const col = document.createElement('div');
      col.className = 'col-6 col-md-4 col-lg-2';

      const cardColor = typeColors[p.type] || "#777";

      col.innerHTML = `
            <div class="card h-100 shadow-sm text-white" style="background-color: ${cardColor};">
              <img src="gymleaders/${p.name.toLowerCase().replace(/[ .]/g, '')}.png" class="card-img-top" alt="${p.name}">
              <div class="card-body text-center">
                <h5 class="card-title mb-1">${p.name}</h5>
                <div class="badge badge-position">${p.type} Type</div>
                <p class="small mb-0">${p.city} Gym</p>
                <p class="small">${p.badge} Badge</p>
                 <button class="btn btn-sm btn-primary show-info-btn" data-player-index="${index}" data-bs-toggle="modal" data-bs-target="#playerModal">
            More Info
          </button>

              </div>
            </div>
          `;
      grid.appendChild(col);
    });
  };

  render(players);
  grid.addEventListener('click', function (e) {
    if (e.target.classList.contains('show-info-btn')) {
      const index = e.target.getAttribute('data-player-index')
      const player = players[index]
      showPlayerModal(player)
    }
  })
  function showPlayerModal(player) {
    document.getElementById('modalPhoto').src = `/acepokemon/${player.Ace.toLowerCase()}.png`
    document.getElementById('modalName').textContent = `${player.firstName} ${player.lastName}`
    document.getElementById('modalPosition').textContent = player.position
    document.getElementById('modalAge').textContent = player.type
  }


});