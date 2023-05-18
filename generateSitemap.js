const Sitemap = require('react-router-sitemap').default;
const routes = [
  {
      path: '/',
     
  },
  {
      path: '#/json-formatter',
     
  },
  {
      path: '#/diff-checker',
     
  },
  {
      path: '#/flex-playGround',
      
  },
  {
      path: '#/custom-hooks',
     
  },
  {
      path: '#/TS-utils',
      
  },
  {
      path: '#/notes',
    
  },
  {
      path: '*',
      
  }
];

function generateSitemap() {
  return new Sitemap(routes)
    .build('https://yair8520.github.io/dev-tools/') 
    .save('./public/sitemap.xml');
}

generateSitemap();
