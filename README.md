# Weekend Escapism - Demo Site

This project is a demo website designed to help users find weekend getaway destinations. It features interactive elements such as a dynamic gallery, filtering options, and detailed destination information.

---

## Features

- **Dynamic Gallery**: Displays destinations with images, weather information, and distances.
- **Interactive Filters**:
  - Filter destinations by distance, starting location, and activity tags.
- **Destination Details**:
  - View detailed descriptions, weather info, and Google Maps links for each destination.
- **Responsive Design**: Optimized for both desktop and mobile devices.

---

## Technologies Used

- **HTML5**: For structuring the content.
- **CSS3**: For styling and layout, including responsive design.
- **JavaScript (ES6)**: For interactivity and dynamic content generation.
- **jQuery**: For DOM manipulation and event handling.
- **Google Fonts**: For typography.
- **Open-Meteo API**: For fetching real-time weather data.

---

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/valentto/Demo-Site.git
   cd Demo-Site
   ```

2. Open the project in a local server:
   - **Using VS Code Live Server**:
     - Install the Live Server extension.
     - Right-click on `index.html` and select **"Open with Live Server"**.
   - **Using Node.js `http-server`**:
     ```bash
     npm install -g http-server
     http-server
     ```
   - **Using Python**:
     ```bash
     python3 -m http.server
     ```

3. Open the URL provided by the server (e.g., `http://127.0.0.1:8080`) in your browser.

---

## Folder Structure

```
Demo-Site/
├── css/
│   ├── index.css       # Styles for the website
├── img/                # Images for destinations
├── js/
│   ├── index.js        # Main JavaScript file
│   ├── data.js         # Data for destinations and locations
├── index.html          # Main HTML file
├── README.md           # Project documentation
```

---

## Future Enhancements

- Add user reviews and ratings for destinations.
- Integrate a weather forecast for multiple days.
- Add a "Save to Favorites" feature for users.
- Include an interactive map for better navigation.

---

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.
