const axios = require('axios')
const fs = require('fs')

async function main() {
  const response = await axios.get('https://pai-page.webflow.io')
  const html = response.data.replace(/<html data-wf-domain="pai-page.webflow.io"/, '<html')
  fs.writeFileSync('dist/index.html', html)
}

main()