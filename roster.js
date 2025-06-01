

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

    // ...existing code...
col.innerHTML = `
  <div class="card h-100 shadow rounded-4 border-0 overflow-hidden text-white" style="background: linear-gradient(135deg, ${cardColor} 80%, #fff2 100%);">
    <div class="leader-image-container p-2">
      <img src="gymleaders/${p.name.toLowerCase().replace(/[ .]/g, '')}.png" class="mx-auto d-block" alt="${p.name}">
    </div>
    <div class="card-body text-center pb-3">
      <h5 class="card-title mb-1 fw-bold">${p.name}</h5>
      <div class="badge badge-position mb-2" style="background:rgba(0,0,0,0.15);color:#fff;">${p.type} Type</div>
      <p class="small mb-0">${p.city} Gym</p>
      <p class="small mb-2">${p.badge} Badge</p>
      <button class="btn btn-sm btn-light show-info-btn px-3" data-player-index="${index}" data-bs-toggle="modal" data-bs-target="#playerModal">
        More Info
      </button>
    </div>
  </div>
`;
// ...existing code...
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
    const modalContent = document.querySelector('#playerModal .modal-content');
    if (modalContent && player.acetype) {
      const types = player.acetype.split('/');
      const color1 = typeColors[types[0]] || "#777";
      const color2 = types[1] ? (typeColors[types[1]] || "#777") : color1;
      modalContent.style.background = `linear-gradient(to right, ${color1} 50%, ${color2} 50%)`;
    }
  }
  const modal = new bootstrap.Modal(document.getElementById('playerModal'), {
    backdrop: 'static',
    keyboard: false
  });
  document.getElementById('playerModal').addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget; // Button that triggered the modal
    const index = button.getAttribute('data-player-index'); // Extract info from data-* attributes
    const player = players[index]; // Get the player data
    showPlayerModal(player); // Show the player info in the modal
  });
  document.getElementById('playerModal').addEventListener('hidden.bs.modal', function () {
    const modalContent = document.querySelector('#playerModal .modal-content');
    if (modalContent) {
      modalContent.style.background = ''; // Reset background
    }
  });


});