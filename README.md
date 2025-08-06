# 📸 React Photo Gallery

A beautiful, responsive photo gallery built with React.js that fetches stunning images from the Unsplash API. Features search functionality, quick tags, and elegant hover effects.

![React Photo Gallery](https://images.unsplash.com/photo-1452801357919-36bc5fda6514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE0NjB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTQ0ODM2NjV8&ixlib=rb-4.1.0&q=80&w=800)

## ✨ Features

### Core Features
- **🖼️ Image Gallery**: Display 10 random high-quality images from Unsplash
- **🔍 Search Functionality**: Search for specific photos using keywords
- **🏷️ Quick Search Tags**: Pre-defined tags for popular searches (cars, flowers, boats, nature, cats, architecture)
- **👨‍🎨 Photo Credits**: Display photographer names with links to their Unsplash profiles
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **⚡ Loading States**: Elegant loading indicators and error handling
- **🎲 Random Photos**: Get fresh random photos with one click

### UI/UX Features
- **🎨 Modern Design**: Clean, professional interface with gradient backgrounds
- **✨ Hover Effects**: Smooth animations and photo overlay effects
- **📐 Grid Layout**: Responsive CSS Grid for optimal photo arrangement
- **🌈 Visual Feedback**: Interactive buttons and smooth transitions

## 🚀 Live Demo

Deploy this project to see it in action! Instructions below.

## 🛠️ Tech Stack

- **Frontend**: React.js 18
- **Build Tool**: Vite
- **HTTP Client**: Axios
- **Styling**: CSS3 with Grid and Flexbox
- **API**: Unsplash API

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Unsplash API key (free from [Unsplash Developers](https://unsplash.com/developers))

### Step 1: Clone the Repository
```bash
git clone https://github.com/1234-ad/react-photo-gallery.git
cd react-photo-gallery
```

### Step 2: Install Dependencies
```bash
npm install
# or
yarn install
```

### Step 3: Get Unsplash API Key
1. Visit [Unsplash Developers](https://unsplash.com/developers)
2. Create a free account
3. Create a new application
4. Copy your Access Key

### Step 4: Configure API Key
Open `src/App.jsx` and replace the placeholder with your actual API key:

```javascript
const UNSPLASH_ACCESS_KEY = 'YOUR_ACTUAL_UNSPLASH_ACCESS_KEY';
```

### Step 5: Run the Application
```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173`

## 🏗️ Project Structure

```
react-photo-gallery/
├── public/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # Project documentation
```

## 🎯 API Usage

### Unsplash API Endpoints Used

1. **Random Photos**:
   ```
   GET https://api.unsplash.com/photos/random?count=10&client_id=YOUR_ACCESS_KEY
   ```

2. **Search Photos**:
   ```
   GET https://api.unsplash.com/search/photos?query=SEARCH_TERM&per_page=10&client_id=YOUR_ACCESS_KEY
   ```

## 🚀 Deployment

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)
3. Or connect your GitHub repo for automatic deployments

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "homepage": "https://1234-ad.github.io/react-photo-gallery",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 🎨 Customization

### Changing the Number of Photos
In `App.jsx`, modify the `count` parameter:
```javascript
// For random photos
count: 20, // Change from 10 to 20

// For search results
per_page: 20, // Change from 10 to 20
```

### Adding New Quick Search Tags
In `App.jsx`, update the tags array:
```javascript
{['cars', 'flowers', 'boats', 'nature', 'cats', 'architecture', 'travel', 'food'].map((tag) => (
  // ... existing code
))}
```

## 🐛 Troubleshooting

### Common Issues

1. **API Key Error**:
   - Ensure your Unsplash API key is correctly set
   - Check if the key has proper permissions

2. **CORS Issues**:
   - Unsplash API supports CORS, but ensure you're making requests from allowed origins

3. **Rate Limiting**:
   - Unsplash has rate limits (50 requests/hour for demo apps)
   - Consider implementing request caching for production

## 🔮 Future Enhancements

- [ ] **Load More Button**: Pagination for more photos
- [ ] **Infinite Scrolling**: Automatic loading as user scrolls
- [ ] **Image Download**: Direct download functionality
- [ ] **Favorites**: Save favorite photos to localStorage
- [ ] **Categories**: Browse by photo categories
- [ ] **Full-Screen View**: Modal for enlarged photo viewing

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Unsplash](https://unsplash.com) for providing the amazing photo API
- [Vite](https://vitejs.dev) for the fast build tool
- [React](https://reactjs.org) for the awesome framework

---

⭐ If you found this project helpful, please give it a star on GitHub!