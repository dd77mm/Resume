document.getElementById('fetch-location').addEventListener('click', function() {
    
    const url = 'https://ipinfo.io/json'; 

    
    fetch(url)
        .then(response => response.json())  
        .then(data => {
          
            const ip = data.ip;
            const city = data.city || "N/A";
            const region = data.region || "N/A";
            const country = data.country || "N/A";
            const org = data.org || "N/A";
            const location = data.loc || "N/A";
            const postalCode = data.postal || "N/A";

            
            document.getElementById('location-info').innerHTML = `
                <p><strong>IP Address:</strong> ${ip}</p>
                <p><strong>City:</strong> ${city}</p>
                <p><strong>Region:</strong> ${region}</p>
                <p><strong>Country:</strong> ${country}</p>
                <p><strong>Location:</strong> ${location}</p>
                <p><strong>Organization:</strong> ${org}</p>
                <p><strong>Postal Code:</strong> ${postalCode}</p>
            `;
        })
        .catch(error => {
            
            document.getElementById('location-info').innerHTML = '<p>Error fetching location information. Please try again later.</p>';
            console.error('Error fetching geolocation:', error);
        });
});


document.getElementById('clear-location').addEventListener('click', function() {
    document.getElementById('location-info').innerHTML = ''; 
    console.log('Geolocation information cleared');
});
