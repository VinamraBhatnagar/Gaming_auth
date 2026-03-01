"""
GameStyle Hub - Flask Server
A dynamic e-commerce website for gaming IDs and clothes with weather-based theming.
"""

from flask import Flask, send_from_directory, jsonify, request
import requests
import os

# Get the directory where this script is located
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__, static_folder=BASE_DIR, static_url_path='')

# Weather API Configuration
WEATHER_API_KEY = os.environ.get('OPENWEATHER_API_KEY', '')

# ===== Page Routes =====

@app.route('/')
def landing():
    """Serve the landing page."""
    return send_from_directory(BASE_DIR, 'index.html')

@app.route('/landing.html')
def landing_page():
    """Redirect old landing.html to index.html"""
    return send_from_directory(BASE_DIR, 'index.html')

@app.route('/login.html')
def login_page():
    """Serve the login page."""
    return send_from_directory(BASE_DIR, 'login.html')

@app.route('/home.html')
def home_page():
    """Serve the main home page."""
    return send_from_directory(BASE_DIR, 'home.html')

@app.route('/clothing.html')
def clothing_page():
    """Serve the clothing page."""
    return send_from_directory(BASE_DIR, 'clothing.html')

@app.route('/gaming.html')
def gaming_page():
    """Serve the gaming IDs page."""
    return send_from_directory(BASE_DIR, 'gaming.html')

@app.route('/scrims.html')
def scrims_page():
    """Serve the BGMI scrims registration page."""
    return send_from_directory(BASE_DIR, 'scrims.html')

# ===== Static Files =====

@app.route('/styles.css')
def styles():
    return send_from_directory(BASE_DIR, 'styles.css')

@app.route('/script.js')
def script():
    return send_from_directory(BASE_DIR, 'script.js')

@app.route('/firebase-config.js')
def firebase_config():
    return send_from_directory(BASE_DIR, 'firebase-config.js')

# ===== API Routes =====

@app.route('/api/weather')
def get_weather():
    """Proxy endpoint for weather API."""
    if not WEATHER_API_KEY:
        return jsonify({
            'error': 'Weather API key not configured',
            'demo': True,
            'weather': [{'main': 'Clear'}],
            'main': {'temp': 22},
            'sys': {'sunrise': 1609459200, 'sunset': 1609502400}
        })
    
    lat = request.args.get('lat', 40.7128)
    lon = request.args.get('lon', -74.0060)
    
    try:
        response = requests.get(
            f'https://api.openweathermap.org/data/2.5/weather',
            params={
                'lat': lat,
                'lon': lon,
                'units': 'metric',
                'appid': WEATHER_API_KEY
            },
            timeout=10
        )
        response.raise_for_status()
        return jsonify(response.json())
    except requests.RequestException as e:
        return jsonify({
            'error': str(e),
            'demo': True,
            'weather': [{'main': 'Clear'}],
            'main': {'temp': 22},
            'sys': {'sunrise': 1609459200, 'sunset': 1609502400}
        }), 500

@app.route('/api/health')
def health_check():
    """Health check endpoint."""
    return jsonify({'status': 'healthy', 'message': 'GameStyle Hub is running!'})

@app.route('/api/scrims/register', methods=['POST'])
def register_scrim():
    """Handle BGMI scrim registration."""
    data = request.get_json()
    # In production, save to database
    return jsonify({
        'success': True,
        'message': 'Registration successful!',
        'data': data
    })

if __name__ == '__main__':
    # Get port from environment variable (Render sets this)
    port = int(os.environ.get('PORT', 5000))
    debug = os.environ.get('FLASK_DEBUG', 'False').lower() == 'true'
    
    print("\n" + "="*50)
    print("🎮 GameStyle Hub Server")
    print("="*50)
    print(f"🌐 Running on port {port}")
    print(f"🔑 Weather API: {'Configured' if WEATHER_API_KEY else 'Demo Mode'}")
    print("="*50 + "\n")
    
    app.run(debug=debug, host='0.0.0.0', port=port)
