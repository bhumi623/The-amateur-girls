// Sample data for vehicle listing (normally fetched from server)
const vehicles = [
    { id: 1, type: 'car', name:'Audi' },
    { id: 2, type: 'bike', name: 'Hero Honda'},
    { id: 3, type: 'scooter', name: 'Yamaha'},
    { id: 4, type: 'bicycle', name: 'Decathlon' },
];

// Display the vehicles on the page
function displayVehicles(vehicleList) {
    const vehicleListing = document.getElementById('vehicleListing');
    vehicleListing.innerHTML = ''; // Clear previous content

    vehicleList.forEach(vehicle => {
        const vehicleCard = document.createElement('div');
        vehicleCard.classList.add('vehicle-card');
        vehicleCard.innerHTML = `
            <h3>${vehicle.name}</h3>
            <p>Type: ${vehicle.type.charAt(0).toUpperCase() + vehicle.type.slice(1)}</p>
            
        `;
        vehicleListing.appendChild(vehicleCard);
    });
}

// Filter vehicles based on type and price
function filterVehicles() {
    const vehicleType = document.getElementById('vehicleType').value;
    const minPrice = document.getElementById('minPrice').value || 0;
    const maxPrice = document.getElementById('maxPrice').value || Infinity;

    const filteredVehicles = vehicles.filter(vehicle => {
        return (
            (vehicleType === '' || vehicle.type === vehicleType) &&
            vehicle.price >= minPrice &&
            vehicle.price <= maxPrice
        );
    });

    displayVehicles(filteredVehicles);
}

// Initialize page with all vehicles
document.addEventListener('DOMContentLoaded', () => {
    displayVehicles(vehicles);

    // Handle rent form submission
    document.getElementById('rentForm').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Vehicle rental request submitted successfully!');
        this.reset(); // Clear form
    });
});
