# GameStyle Hub 🎮👕

A dynamic e-commerce website for selling gaming IDs and clothes with weather-based UI theming.

## Features

- **User Authentication**: Login/Signup system with social login options (Google, Discord, Steam)
- **Gaming IDs Section**: Sell premium gaming accounts (Valorant, Fortnite, CS2, LoL, PUBG)
- **Clothes Section**: Gaming-inspired streetwear (Hoodies, T-Shirts, Caps, Accessories)
- **Dynamic Weather Theming**: UI colors change based on current weather conditions
  - ☀️ Sunny - Warm orange/yellow theme
  - ☁️ Cloudy - Cool gray/blue theme
  - 🌧️ Rainy - Deep blue/teal theme
  - ❄️ Snowy - Icy blue/white theme
  - ⛈️ Thunderstorm - Dark purple/electric theme
  - 🌙 Night - Dark with purple accents
  - 🔥 Hot - Red/orange theme
- **Shopping Cart**: Add items, persistent storage
- **Product Filtering**: Filter by category
- **Responsive Design**: Works on all devices
- **Manual Theme Toggle**: Click palette icon to cycle through themes

## Setup Instructions

### 1. Create Virtual Environment (already done)
```bash
python3 -m venv venv
```

### 2. Activate Virtual Environment
```bash
# macOS/Linux
source venv/bin/activate

# Windows
venv\Scripts\activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. (Optional) Set Weather API Key
Get a free API key from [OpenWeatherMap](https://openweathermap.org/api) and set it:
```bash
export OPENWEATHER_API_KEY=your_api_key_here
```

### 5. Run the Server
```bash
python app.py
```

### 6. Open in Browser
Navigate to: **http://localhost:5000**

## Project Structure

```
Personal Project/
├── venv/               # Python virtual environment
├── app.py              # Flask server
├── login.html          # Login/Signup page
├── index.html          # Main shop page (protected)
├── styles.css          # CSS with weather themes
├── script.js           # JavaScript (products, cart, weather, auth)
├── requirements.txt    # Python dependencies
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## Authentication

- Users must login or signup to access the shop
- Credentials are stored in browser localStorage (demo only)
- Social login options: Google, Discord, Steam (demo mode)
- Guest access available with limited features

## Weather Theme Demo

Without an API key, the website runs in demo mode:
- Themes change based on time of day
- Click the palette icon (🎨) in the navbar to manually cycle through all weather themes

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Python Flask
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Poppins)
- **Weather API**: OpenWeatherMap (optional)

## License

MIT License - Feel free to use and modify!
