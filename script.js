const countries = ["USA", "Canada", "UK", "Australia", "Germany", "France", "Japan", "China", "Brazil", "India", "Italy", "Spain", "Mexico", "South Korea", "Russia", "Indonesia", "Netherlands", "Turkey", "Saudi Arabia", "Switzerland", "Argentina", "Sweden", "Belgium", "Norway", "Austria", "UAE", "Poland", "Thailand", "Denmark", "Iran", "Malaysia", "Egypt", "Portugal", "Israel", "Singapore", "Ireland", "Philippines", "Pakistan", "Greece", "Finland", "Nigeria", "Vietnam", "South Africa", "Colombia", "Chile", "Bangladesh", "Czech Republic", "Romania", "Hungary"];
const cities = {
  "USA": ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia", "Phoenix", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "San Francisco", "Indianapolis", "Columbus", "Fort Worth", "Charlotte", "Seattle", "Denver", "Washington"],
  "Canada": ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa", "Edmonton", "Winnipeg", "Quebec City", "Hamilton", "Kitchener", "London", "Victoria", "Halifax", "St. John's", "Regina", "Saskatoon", "Kelowna", "Barrie", "Windsor", "Kingston"],
  "UK": ["London", "Manchester", "Birmingham", "Glasgow", "Liverpool", "Leeds", "Newcastle", "Sheffield", "Bristol", "Belfast", "Nottingham", "Southampton", "Leicester", "Cardiff", "Coventry", "Bradford", "Bournemouth", "Reading", "Swansea", "Plymouth"],
  "Australia": ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Canberra", "Newcastle", "Sunshine Coast", "Wollongong", "Hobart", "Geelong", "Townsville", "Cairns", "Darwin", "Toowoomba", "Ballarat", "Bendigo", "Albury", "Launceston"],
  "Germany": ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf", "Dortmund", "Essen", "Leipzig", "Bremen", "Dresden", "Hanover", "Nuremberg", "Duisburg", "Bochum", "Wuppertal", "Bielefeld", "Bonn", "Münster"],
  "France": ["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille", "Rennes", "Reims", "Le Havre", "Cannes", "Toulon", "Grenoble", "Angers", "Dijon", "Nîmes", "Aix-en-Provence"],
  "Japan": ["Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo", "Fukuoka", "Kobe", "Kyoto", "Kawasaki", "Saitama", "Hiroshima", "Sendai", "Chiba", "Kitakyushu", "Nagasaki", "Kumamoto", "Okayama", "Kagoshima", "Shizuoka", "Niigata"],
  "China": ["Shanghai", "Beijing", "Guangzhou", "Shenzhen", "Wuhan", "Chengdu", "Nanjing", "Tianjin", "Chongqing", "Xi'an", "Hangzhou", "Shenyang", "Qingdao", "Dalian", "Suzhou", "Harbin", "Jinan", "Zhengzhou", "Changsha", "Dongguan"],
  "Brazil": ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Fortaleza", "Belo Horizonte", "Manaus", "Curitiba", "Recife", "Goiânia", "Belém", "Porto Alegre", "São Luís", "Campinas", "São Gonçalo", "Maceió", "Duque de Caxias", "Nova Iguaçu", "Teresina", "Campo Grande"],
  "India": ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", "Surat", "Pune", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Visakhapatnam", "Indore", "Thane", "Bhopal", "Patna", "Vadodara", "Ghaziabad"],
  "Italy": ["Rome", "Milan", "Naples", "Turin", "Palermo", "Genoa", "Bologna", "Florence", "Bari", "Catania", "Venice", "Verona", "Messina", "Padua", "Trieste", "Brescia", "Prato", "Taranto", "Parma", "Reggio Calabria"],
  "Spain": ["Madrid", "Barcelona", "Valencia", "Seville", "Zaragoza", "Málaga", "Murcia", "Palma", "Las Palmas", "Bilbao", "Alicante", "Córdoba", "Valladolid", "Vigo", "Gijón", "Hospitalet", "La Coruña", "Granada", "Vitoria", "Elche"],
  "Mexico": ["Mexico City", "Guadalajara", "Monterrey", "Puebla", "Toluca", "Tijuana", "León", "Juárez", "Torreón", "Querétaro", "San Luis Potosí", "Mérida", "Aguascalientes", "Cuernavaca", "Mexicali", "Hermosillo", "Saltillo", "Morelia", "Chihuahua", "Durango"],
  "South Korea": ["Seoul", "Busan", "Incheon", "Daegu", "Daejeon", "Gwangju", "Suwon", "Ulsan", "Changwon", "Seongnam", "Goyang", "Yongin", "Bucheon", "Cheongju", "Ansan", "Jeonju", "Anyang", "Pohang", "Uijeongbu", "Gimhae"],
  "Russia": ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Nizhny Novgorod", "Kazan", "Chelyabinsk", "Omsk", "Samara", "Ufa", "Rostov-on-Don", "Krasnoyarsk", "Voronezh", "Perm", "Volgograd", "Krasnodar", "Saratov", "Tyumen", "Tolyatti", "Izhevsk"],
  "Indonesia": ["Jakarta", "Surabaya", "Bandung", "Medan", "Bekasi", "Tangerang", "Makassar", "Semarang", "Depok", "Palembang", "South Tangerang", "Bandar Lampung", "Padang", "Denpasar", "Banjarmasin", "Pekanbaru", "Bogor", "Malang", "Yogyakarta", "Cimahi"],
  "Netherlands": ["Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven", "Tilburg", "Groningen", "Almere", "Breda", "Nijmegen", "Enschede", "Haarlem", "Arnhem", "Zaanstad", "Amersfoort", "Apeldoorn", "Zwolle", "Hoofddorp", "Leeuwarden", "Leiden"],
  "Turkey": ["Istanbul", "Ankara", "Izmir", "Bursa", "Adana", "Gaziantep", "Konya", "Antalya", "Mersin", "Kayseri", "Eskişehir", "Diyarbakır", "Şanlıurfa", "Samsun", "Denizli", "Çorlu", "Kahramanmaraş", "Erzurum", "Van", "Batman"],
  "Saudi Arabia": ["Riyadh", "Jeddah", "Mecca", "Medina", "Dammam", "Ta'if", "Tabuk", "Buraidah", "Khamis Mushait", "Al Hufuf", "Hail", "Najran", "Yanbu", "Al Qatif", "Abha", "Al Jubail", "Ha'il", "Al Kharj", "Al Bahah", "Jazan"],
  "Switzerland": ["Zurich", "Geneva", "Basel", "Lausanne", "Bern", "Winterthur", "Lucerne", "St. Gallen", "Lugano", "Biel/Bienne", "Thun", "Köniz", "La Chaux-de-Fonds", "Fribourg", "Schaffhausen", "Chur", "Vernier", "Neuchâtel", "Uster", "Sion"],
  "Argentina": ["Buenos Aires", "Córdoba", "Rosario", "Mendoza", "San Miguel de Tucumán", "La Plata", "Mar del Plata", "Salta", "Santa Fe", "San Juan", "Resistencia", "Neuquén", "Corrientes", "Posadas", "Bahía Blanca", "San Salvador de Jujuy", "Paraná", "Formosa", "San Fernando del Valle de Catamarca", "Santiago del Estero"],
  "Sweden": ["Stockholm", "Gothenburg", "Malmö", "Uppsala", "Linköping", "Västerås", "Örebro", "Norrköping", "Helsingborg", "Jönköping", "Umeå", "Lund", "Gävle", "Borås", "Södertälje", "Eskilstuna", "Halmstad", "Växjö", "Karlstad", "Trollhättan"],
  "Belgium": ["Brussels", "Antwerp", "Ghent", "Charleroi", "Liège", "Bruges", "Namur", "Leuven", "Mons", "Aalst", "Mechelen", "La Louvière", "Kortrijk", "Hasselt", "Ostend", "Sint-Niklaas", "Tournai", "Genk", "Seraing", "Roeselare"],
  "Norway": ["Oslo", "Bergen", "Trondheim", "Stavanger", "Drammen", "Fredrikstad", "Kristiansand", "Sandnes", "Tromsø", "Sarpsborg", "Skien", "Ålesund", "Sandefjord", "Haugesund", "Tønsberg", "Moss", "Porsgrunn", "Bodø", "Arendal", "Hamar"],
  "Austria": ["Vienna", "Graz", "Linz", "Salzburg", "Innsbruck", "Klagenfurt", "Villach", "Wels", "Sankt Pölten", "Dornbirn", "Wiener Neustadt", "Steyr", "Feldkirch", "Bregenz", "Leonding", "Klosterneuburg", "Baden bei Wien", "Wolfsberg", "Leoben", "Krems"],
  "UAE": ["Dubai", "Abu Dhabi", "Sharjah", "Al Ain", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain", "Khor Fakkan", "Dibba Al-Fujairah", "Dibba Al-Hisn", "Khalifa City", "Madinat Zayed", "Ruwais", "Liwa Oasis", "Al Quoz", "Kalba", "Jebel Ali", "Dhaid", "Silat Al Khaimah"],
  "Poland": ["Warsaw", "Kraków", "Łódź", "Wrocław", "Poznań", "Gdańsk", "Szczecin", "Bydgoszcz", "Lublin", "Białystok", "Katowice", "Gdynia", "Częstochowa", "Radom", "Sosnowiec", "Toruń", "Kielce", "Rzeszów", "Gliwice", "Zabrze"],
  "Thailand": ["Bangkok", "Nonthaburi", "Nakhon Ratchasima", "Chiang Mai", "Hat Yai", "Udon Thani", "Pak Kret", "Khon Kaen", "Chaophraya Surasak", "Ubon Ratchathani", "Nakhon Si Thammarat", "Nakhon Sawan", "Phra Pradaeng", "Rayong", "Chon Buri", "Chiang Rai", "Phitsanulok", "Samut Prakan", "Lampang", "Laem Chabang"],
  "Denmark": ["Copenhagen", "Aarhus", "Odense", "Aalborg", "Esbjerg", "Randers", "Kolding", "Horsens", "Vejle", "Roskilde", "Helsingør", "Herning", "Silkeborg", "Næstved", "Fredericia", "Hillerød", "Hørsholm", "Holstebro", "Taastrup", "Slagelse"],
  "Iran": ["Tehran", "Mashhad", "Isfahan", "Karaj", "Tabriz", "Shiraz", "Ahvaz", "Qom", "Kermanshah", "Urmia", "Rasht", "Kerman", "Zahedan", "Hamadan", "Yazd", "Arak", "Ardabil", "Bandar Abbas", "Eslamshahr", "Shahrekord"],
  "Malaysia": ["Kuala Lumpur", "George Town", "Ipoh", "Shah Alam", "Petaling Jaya", "Johor Bahru", "Kuching", "Kota Kinabalu", "Alor Setar", "Malacca City", "Seremban", "Mirir", "Bintulu", "Sandakan", "Sibu", "Kuala Terengganu", "Kuantan", "Tawau", "Taiping", "Alor Gajah"],
  "Egypt": ["Cairo", "Alexandria", "Giza", "Shubra El Kheima", "Port Said", "Suez", "Luxor", "Al-Mansura", "El-Mahalla El-Kubra", "Tanta", "Asyut", "Ismailia", "Fayyum", "Zagazig", "Aswan", "Damietta", "Damanhur", "El-Minya", "Beni Suef", "Sohag"],
  "Portugal": ["Lisbon", "Porto", "Vila Nova de Gaia", "Amadora", "Braga", "Funchal", "Coimbra", "Setúbal", "Queluz", "Agualva-Cacém", "Almada", "Viseu", "Guimarães", "Evora", "Rio Tinto", "Odivelas", "Aveiro", "Amora", "Matosinhos", "Ponta Delgada"],
  "Israel": ["Jerusalem", "Tel Aviv", "Haifa", "Rishon LeZion", "Petah Tikva", "Ashdod", "Netanya", "Beersheba", "Holon", "Bnei Brak", "Ramat Gan", "Rehovot", "Bat Yam", "Kfar Saba", "Herzliya", "Ramat HaSharon", "Lod", "Ashkelon", "Modiin-Maccabim-Reut", "Netivot"],
  "Singapore": ["Singapore"],
  "Ireland": ["Dublin", "Cork", "Limerick", "Galway", "Waterford", "Drogheda", "Dundalk", "Swords", "Bray", "Navan", "Ennis", "Tralee", "Kilkenny", "Carlow", "Naas", "Sligo", "Greystones", "Malahide", "Leixlip", "Wicklow"],
  "Philippines": ["Quezon City", "Manila", "Davao City", "Caloocan", "Cebu City", "Zamboanga City", "Taguig", "Antipolo", "Pasig", "Cagayan de Oro", "Parañaque", "Makati", "Bacoor", "General Santos", "Las Piñas", "Muntinlupa", "San Jose del Monte", "Bacolod", "Iloilo City", "Dasmariñas"],
  "Pakistan": ["Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Gujranwala", "Multan", "Hyderabad", "Peshawar", "Quetta", "Islamabad", "Sargodha", "Sialkot", "Bahawalpur", "Sukkur", "Jhang", "Sheikhupura", "Larkana", "Gujrat", "Mardan", "Kasur"],
  "Greece": ["Athens", "Thessaloniki", "Patras", "Heraklion", "Larissa", "Volos", "Ioannina", "Chania", "Chalcis", "Sérres", "Drama", "Chios", "Katerini", "Alexandroupoli", "Kavala", "Rethymno", "Corinth", "Tripoli", "Pyrgos", "Komotini"],
  "Finland": ["Helsinki", "Espoo", "Tampere", "Vantaa", "Oulu", "Turku", "Jyväskylä", "Lahti", "Kuopio", "Pori", "Kouvola", "Joensuu", "Lappeenranta", "Hämeenlinna", "Vaasa", "Seinäjoki", "Rovaniemi", "Mikkeli", "Kotka", "Salo"],
  "Nigeria": ["Lagos", "Kano", "Ibadan", "Kaduna", "Port Harcourt", "Benin City", "Maiduguri", "Zaria", "Aba", "Jos", "Ilorin", "Oyo", "Enugu", "Abeokuta", "Abuja", "Sokoto", "Onitsha", "Warri", "Ebute Ikorodu", "Okene"],
  "Vietnam": ["Ho Chi Minh City", "Hanoi", "Haiphong", "Can Tho", "Bien Hoa", "Da Nang", "Vung Tau", "Nha Trang", "Hue", "Rạch Giá", "Qui Nhơn", "Thái Nguyên", "Buôn Ma Thuột", "Thái Bình", "Vinh", "My Tho", "Cao Lãnh", "Long Xuyên", "Bac Lieu", "Tan An"],
  "South Africa": ["Johannesburg", "Cape Town", "Durban", "Ekurhuleni", "Tshwane", "Port Elizabeth", "Vereeniging", "Bloemfontein", "Nelspruit", "Kimberley", "Polokwane", "Rustenburg", "East London", "Pietermaritzburg", "Mbombela", "George", "Klerksdorp", "Potchefstroom", "Welkom", "Uitenhage"],
  "Colombia": ["Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena", "Cúcuta", "Soledad", "Ibagué", "Bucaramanga", "Soacha", "Pereira", "Santa Marta", "Bello", "Villavicencio", "Valledupar", "Neiva", "Montería", "Armenia", "Sincelejo", "Popayán"],
  "Chile": ["Santiago", "Puente Alto", "Antofagasta", "Viña del Mar", "Valparaíso", "Talcahuano", "San Bernardo", "Temuco", "Concepción", "Rancagua", "La Pintana", "Arica", "Talca", "Chillán", "Iquique", "Los Ángeles", "San Felipe", "Punta Arenas", "Quilpué", "Copiapó"],
  "Bangladesh": ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Comilla", "Tongi", "Narayanganj", "Sylhet", "Mymensingh", "Narsingdi", "Jessore", "Dinajpur", "Barisal", "Saidpur", "Parbatipur", "Sarishabari", "Nawabganj", "Gazipur", "Bogra", "Brahmanbaria"],
  "Czech Republic": ["Prague", "Brno", "Ostrava", "Plzeň", "Liberec", "Olomouc", "Ústí nad Labem", "Hradec Králové", "České Budějovice", "Pardubice", "Havířov", "Zlín", "Kladno", "Most", "Karviná", "Opava", "Frýdek-Místek", "Jihlava", "Teplice", "Děčín"],
  "Romania": ["Bucharest", "Cluj-Napoca", "Timișoara", "Iași", "Craiova", "Constanța", "Galați", "Brașov", "Ploiești", "Oradea", "Brăila", "Arad", "Pitești", "Sibiu", "Bacău", "Târgu Mureș", "Baia Mare", "Buzău", "Botoșani", "Satu Mare"],
  "Hungary": ["Budapest", "Debrecen", "Szeged", "Miskolc", "Pécs", "Győr", "Nyíregyháza", "Kecskemét", "Székesfehérvár", "Szombathely", "Szolnok", "Tatabánya", "Kaposvár", "Érd", "Veszprém", "Békéscsaba", "Zalaegerszeg", "Sopron", "Eger", "Nagykanizsa"]
};

// Sort countries alphabetically
countries.sort();

// Sort cities for each country alphabetically
for (let country in cities) {
  cities[country].sort();
}

const apiKey = '10e4eb94c9c7119e35ad97f483902f35'; // Replace 'YOUR_API_KEY' with your actual API key

// Function to fetch weather data
function fetchWeather(city) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json());
}

// Function to populate the country select element
function populateCountries() {
  const countrySelect = document.getElementById('countrySelect');
  countries.forEach(country => {
    const option = document.createElement('option');
    option.textContent = country;
    countrySelect.appendChild(option);
  });
}

// Function to populate the city select element based on the selected country
function populateCities(country) {
  const citySelect = document.getElementById('citySelect');
  const citiesInCountry = cities[country];
  citySelect.innerHTML = ''; // Clear previous options
  citiesInCountry.forEach(city => {
    const option = document.createElement('option');
    option.textContent = city;
    citySelect.appendChild(option);
  });
}

// Function to display weather data
function displayWeather(weatherData) {
  const weatherDataDiv = document.getElementById('weatherData');
  weatherDataDiv.innerHTML = `
    <h2>Weather</h2>
    <p>Description: ${weatherData.weather[0].description}</p>
    <p>Temperature: ${weatherData.main.temp} K</p>
    <p>Humidity: ${weatherData.main.humidity}%</p>
  `;
}

// Populate countries select element
populateCountries();

// Event listener for country selection
document.getElementById('countrySelect').addEventListener('change', function() {
  const selectedCountry = this.value;
  populateCities(selectedCountry);
});

// Event listener for form submission
document.getElementById('weatherForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const selectedCity = document.getElementById('citySelect').value;
  fetchWeather(selectedCity)
    .then(weatherData => {
      displayWeather(weatherData);
    })
    .catch(error => {
      console.log('Error fetching weather data:', error);
    });
});
