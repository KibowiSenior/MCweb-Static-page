// Mock server data - replace with real API calls
const mockServers = [
    {
        name: 'Survival World',
        address: 'play.example.com',
        players: 45,
        maxPlayers: 100,
        ping: 24,
        status: 'online'
    },
    {
        name: 'Creative Mode',
        address: 'creative.example.com',
        players: 28,
        maxPlayers: 50,
        ping: 18,
        status: 'online'
    },
    {
        name: 'PvP Arena',
        address: 'pvp.example.com',
        players: 67,
        maxPlayers: 128,
        ping: 32,
        status: 'online'
    },
    {
        name: 'Mini Games',
        address: 'games.example.com',
        players: 12,
        maxPlayers: 64,
        ping: 21,
        status: 'online'
    },
    {
        name: 'Hardcore Survival',
        address: 'hardcore.example.com',
        players: 5,
        maxPlayers: 20,
        ping: 28,
        status: 'online'
    },
    {
        name: 'Skyblock',
        address: 'skyblock.example.com',
        players: 33,
        maxPlayers: 80,
        ping: 26,
        status: 'online'
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadServers();
    updateStats();
    updateLastUpdate();
    setInterval(updateLastUpdate, 60000); // Update every minute
});

// Load and display servers
function loadServers() {
    const serversGrid = document.getElementById('serversGrid');
    serversGrid.innerHTML = '';

    mockServers.forEach(server => {
        const serverCard = createServerCard(server);
        serversGrid.appendChild(serverCard);
    });
}

// Create server card element
function createServerCard(server) {
    const card = document.createElement('div');
    card.className = 'server-card';
    
    const playersPercent = (server.players / server.maxPlayers) * 100;
    const statusClass = getStatusClass(server.status);
    
    card.innerHTML = `
        <div class="server-name">${server.name}</div>
        <div class="server-details">
            <div class="server-detail">
                <span class="server-detail-label">Address:</span>
                <span>${server.address}</span>
            </div>
            <div class="server-detail">
                <span class="server-detail-label">Players:</span>
                <span>${server.players}/${server.maxPlayers}</span>
            </div>
            <div class="server-detail">
                <span class="server-detail-label">Ping:</span>
                <span>${server.ping}ms</span>
            </div>
            <div class="server-detail">
                <span class="server-detail-label">Load:</span>
                <span>${playersPercent.toFixed(0)}%</span>
            </div>
        </div>
        <div class="server-status ${statusClass}">
            ${getStatusText(server.status)}
        </div>
    `;
    
    card.addEventListener('click', () => showServerDetails(server));
    return card;
}

// Get status class for styling
function getStatusClass(status) {
    switch(status) {
        case 'online':
            return 'online';
        case 'offline':
            return 'offline';
        case 'maintenance':
            return 'maintenance';
        default:
            return 'online';
    }
}

// Get status text
function getStatusText(status) {
    switch(status) {
        case 'online':
            return '● Online';
        case 'offline':
            return '● Offline';
        case 'maintenance':
            return '◆ Maintenance';
        default:
            return '● Online';
    }
}

// Update network statistics
function updateStats() {
    let totalPlayers = 0;
    let totalMaxPlayers = 0;
    let totalPing = 0;
    let onlineServers = 0;

    mockServers.forEach(server => {
        if (server.status === 'online') {
            totalPlayers += server.players;
            totalMaxPlayers += server.maxPlayers;
            totalPing += server.ping;
            onlineServers++;
        }
    });

    const avgPing = onlineServers > 0 ? (totalPing / onlineServers).toFixed(0) : 0;

    document.getElementById('playerCount').textContent = totalPlayers;
    document.getElementById('serverCount').textContent = onlineServers;
    document.getElementById('avgPing').textContent = avgPing + 'ms';
    document.getElementById('uptime').textContent = '99.9%';
}

// Update last update timestamp
function updateLastUpdate() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById('lastUpdate').textContent = `${hours}:${minutes}:${seconds}`;
}

// Show server details (can be expanded to show modal)
function showServerDetails(server) {
    console.log('Server Details:', server);
    alert(`
Server: ${server.name}
Address: ${server.address}
Players: ${server.players}/${server.maxPlayers}
Ping: ${server.ping}ms
Status: ${server.status}
    `);
}

// Optional: Add refresh button functionality
window.refreshStatus = function() {
    console.log('Refreshing server status...');
    loadServers();
    updateStats();
    updateLastUpdate();
    
    // Visual feedback
    const grid = document.getElementById('serversGrid');
    grid.style.opacity = '0.7';
    setTimeout(() => {
        grid.style.opacity = '1';
    }, 300);
};

// Optional: Auto-refresh every 30 seconds
setInterval(() => {
    // Simulate server status changes (optional)
    console.log('Auto-refreshing status...');
    // Uncomment below to enable auto-refresh:
    // loadServers();
    // updateStats();
}, 30000);
