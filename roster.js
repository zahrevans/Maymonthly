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
      col.className = 'col-6 col-md-4 col-lg-3';
      const cardColor = typeColors[p.type] || "#777";
      let id = p.name.split(" ");
      id = id[id.length - 1];
      col.innerHTML = `
  <div class="card shadow rounded-4 border-0 overflow-hidden text-white" style="background: linear-gradient(135deg, ${cardColor} 80%, #fff2 100%);" id="${id}">
    <div class="leader-image-container p-2">
      <img src="gymleaders/${p.name.toLowerCase().replace(/[ .]/g, '')}.png" class="mx-auto d-block" alt="${p.name}">
    </div>
    <div class="card-body text-center pb-3">
      <h5 class="card-title mb-1 fw-bold">${p.name}</h5>
      <div class="badge badge-position mb-2" style="background:rgba(0,0,0,0.15);color:#fff;">${p.type} Type</div>
      <p class="small mb-0">${p.city} Gym</p>
      <p class="small mb-2">${p.badge} Badge</p>
      <button class="btn btn-sm btn-light show-info-btn px-3" data-player-index="${index}" data-bs-toggle="modal" data-bs-target="#playerModal">
        More Info, ${index}
      </button>
    </div>
  </div>
`;
      grid.appendChild(col);
    });
  };
  const searchInput = document.getElementById('searchInput');
  const generationSelect = document.getElementById('generationSelect');
  const typeFilter = document.getElementById('typeFilter');
  // Filtering function
  function filterPlayers() {
    const search = searchInput.value.trim().toLowerCase();
    const gen = generationSelect.value;
    const type = typeFilter.value;

    const filtered = players.filter(p => {
      const matchesSearch =
        p.name.toLowerCase().includes(search) ||
        (p.id && p.id.toString().includes(search));
      const matchesGen = !gen || p.gen == gen;
      const matchesType = !type || p.type === type;
      return matchesSearch && matchesGen && matchesType;
    });
    // render(filtered);
    const hideFiltered = filtered => {
      players.forEach(e => {
        let id = e.name.split(" ");
        id = id[id.length - 1];
        const el = document.querySelector(`#${id}`);
        if (el) el.parentElement.classList.add("d-none");
      });
      filtered.forEach(e => {
        let id = e.name.split(" ");
        id = id[id.length - 1];
        const el = document.querySelector(`#${id}`);
        if (el) el.parentElement.classList.remove("d-none");
      });
      // Remove row hiding logic
    }
    hideFiltered(filtered)
  }

  // Event listeners for filters
  searchInput.addEventListener('input', filterPlayers);
  generationSelect.addEventListener('change', filterPlayers);
  typeFilter.addEventListener('change', filterPlayers);

  render(players);
  grid.addEventListener('click', function (e) {
    if (e.target.classList.contains('show-info-btn')) {
      const index = e.target.getAttribute('data-player-index')
      const player = players[index]
      showPlayerModal(player)
    }
  })
  function showPlayerModal(player) {
    document.getElementById('modalPhoto').src = `acepokemon/${player.Ace.toLowerCase()}.png`
    document.getElementById('modalName').textContent = `${player.Ace}`;
    document.getElementById('modalPosition').textContent = `${player.dexnumber}`;
    document.getElementById('modalSpecies').textContent = `${player.species}`;
    document.getElementById('modalAge').textContent = `${player.acetype}`;
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
// back to top button 
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#scroll').fadeIn();
    } else {
      $('#scroll').fadeOut();
    }
  });
  $('#scroll').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});