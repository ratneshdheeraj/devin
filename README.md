# MercuryUI Product Management Dashboard

A modern SaaS-style dashboard for product management, inspired by [mercury.com](https://mercury.com).

## Features
- Sidebar navigation with modern design
- Topbar with user avatar and page title
- Summary cards for key metrics (Total Products, Average ROI, Average Margin)
- Searchable, sortable, paginated product table
- Responsive and clean UI using Material-UI (MUI)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ratneshdheeraj/devin.git
   cd devin
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure
- `src/components/Sidebar.js` — Sidebar navigation
- `src/components/Topbar.js` — Top navigation bar
- `src/components/SummaryCards.js` — Dashboard summary cards
- `src/components/ProductTable.js` — Product data table
- `src/App.js` — Main app layout

## Customization
- Replace the logo in `Sidebar.js` with your company logo
- Update product data in `App.js` or connect to your backend

## License
MIT 