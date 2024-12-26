const global = {
    currentPage: window.location.pathname,
    search: {
        term: '',
        type: '',
        page: 1,
        totalPages: 1,
        totalResults: 0
    }
}

async function displayPopularTv() {
    // destructure the object
    const { results } = await fetchAPIData('tv/popular')

    results.forEach((show) => {
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML = `
          <a href="tv-details.html?id=${show.id}">
          ${show.poster_path ? `
            <img
              src="https://image.tmdb.org/t/p/w500${show.poster_path}"
              class="card-img-top"
              alt="${show.name}"
            />
            ` : `<img
              src="../images/no-image.jpg"
              class="card-img-top"
              alt="show name"
            />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${show.name}</h5>
            <p class="card-text">
              <small class="text-muted">${show.first_air_date}</small>
            </p>
          </div>
        `
        document.querySelector('#popular-shows').appendChild(div)
    })
}

async function displayPopularMovies() {
    // destructure the object
    const { results } = await fetchAPIData('movie/popular')

    results.forEach((movie) => {
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML = `
          <a href="movie-details.html?id=${movie.id}">
          ${movie.poster_path ? `
            <img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />
            ` : `<img
              src="../images/no-image.jpg"
              class="card-img-top"
              alt="Movie Title"
            />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">${movie.release_date}</small>
            </p>
          </div>
        `
        document.querySelector('#popular-movies').appendChild(div)
    })
}
// Display the show details
async function displayShowDetails() {
    // search -> ?id=333323
    const showId = window.location.search.split('=')[1]
    const show = await fetchAPIData(`tv/${showId}`)
    displayBackgroundImage('show', show.backdrop_path)
    const div = document.createElement('div')
    div.innerHTML = `
        <div class="details-top">
          <div>
          ${show.poster_path ? `
            <img
              src="https://image.tmdb.org/t/p/w500${show.poster_path}"
              class="card-img-top"
              alt="${show.title}"
            />
            ` : `<img
              src="../images/no-image.jpg"
              class="card-img-top"
              alt="show Title"
            />`
        }
          </div>
          <div>
            <h1>${show.name}</h1>
            <p>
              <i class="fas fa-star text-primary"></i>
              ${show.vote_average.toFixed(1)}
            </p>
            <p class="text-muted">Release Date: ${show.first_air_date}</p>
            <p>
            ${show.overview}
            </p>
            <h4>Genres</h4>
            <ul class="list-group">
            ${show.genres.map((genre) => `<li>${genre.name}</li>`).join('')}
            </ul>
            <a href="${show.homepage}" target="_blank" class="btn">Visit show Homepage</a>
          </div>
        </div>
        <div class="details-bottom">
          <h1>show Info</h1>
          <ul>
            <li><span class="text-secondary">Number of Episodes:</span> ${show.number_of_episodes}</li>
            <li><span class="text-secondary">Last Episode To Air:</span> ${show.last_episode_to_air.name}</li>
            <li><span class="text-secondary">Status:</span> ${show.status}</li>
          </ul>
          <h3>Production Companies</h3>
          <div class="list-group">${show.production_companies.map((company) => `<span>${company.name}</span>`).join('')}</div>
        </div>
    `
    document.querySelector('#show-details').appendChild(div)
}

// Display the show details
async function displayMovieDetails() {
    // search -> ?id=333323
    const showId = window.location.search.split('=')[1]
    const movie = await fetchAPIData(`movie/${showId}`)
    displayBackgroundImage('movie', movie.backdrop_path)
    const div = document.createElement('div')
    div.innerHTML = `
        <div class="details-top">
          <div>
          ${movie.poster_path ? `
            <img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />
            ` : `<img
              src="../images/no-image.jpg"
              class="card-img-top"
              alt="Movie Title"
            />`
        }
          </div>
          <div>
            <h1>${movie.title}</h1>
            <p>
              <i class="fas fa-star text-primary"></i>
              ${movie.vote_average.toFixed(1)}
            </p>
            <p class="text-muted">Release Date: ${movie.release_date}</p>
            <p>
            ${movie.overview}
            </p>
            <h4>Genres</h4>
            <ul class="list-group">
            ${movie.genres.map((genre) => `<li>${genre.name}</li>`).join('')}
            </ul>
            <a href="${movie.homepage}" target="_blank" class="btn">Visit Movie Homepage</a>
          </div>
        </div>
        <div class="details-bottom">
          <h1>Movie Info</h1>
          <ul>
            <li><span class="text-secondary">Budget:</span> $${movie.budget}</li>
            <li><span class="text-secondary">Revenue:</span> $${movie.revenue}</li>
            <li><span class="text-secondary">Runtime:</span> ${movie.runtime} minutes</li>
            <li><span class="text-secondary">Status:</span> ${movie.status}</li>
          </ul>
          <h3>Production Companies</h3>
          <div class="list-group">${movie.production_companies.map((company) => `<span>${company.name}</span>`).join('')}</div>
        </div>
    `
    document.querySelector('#movie-details').appendChild(div)
}

async function searchAPIData(page) {
    const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzY1OGNlYmE4MWY5M2ZkMGE2NzEwMjZmZGZhZWViMiIsIm5iZiI6MTczNTEzNTY5NC4xNDQsInN1YiI6IjY3NmMxMWNlNDVjYzU1ZmZiNzY0ZWJhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aCfoFrn7nEIesPp5jn2b4jLEDT6I0K0QzM2N5tf_zc4'
    // const API_KEY = '13658ceba81f93fd0a671026fdfaeeb2'
    const API_URL = 'https://api.themoviedb.org/3/'
    const fetchOption = {
        headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
            accept: 'application/json'
        }
    }
    if (!page) {page = 1}
    showSpinner(true)

    const response = await fetch(`${API_URL}search/${global.search.type}?language=us&query=${global.search.term}&page=${page}`, fetchOption)
    const data = await response.json()

    showSpinner(false)

    return data
}

async function fetchAPIData(endpoint) {
    const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzY1OGNlYmE4MWY5M2ZkMGE2NzEwMjZmZGZhZWViMiIsIm5iZiI6MTczNTEzNTY5NC4xNDQsInN1YiI6IjY3NmMxMWNlNDVjYzU1ZmZiNzY0ZWJhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aCfoFrn7nEIesPp5jn2b4jLEDT6I0K0QzM2N5tf_zc4'
    const API_KEY = '13658ceba81f93fd0a671026fdfaeeb2'
    const API_URL = 'https://api.themoviedb.org/3/'
    const fetchOption = {
        headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
            accept: 'application/json'
        }
    }
    showSpinner(true)

    const response = await fetch(`${API_URL}${endpoint}?language=us`, fetchOption)
    const data = await response.json()

    showSpinner(false)

    return data
}

function showSpinner(flag) {
    const spinner = document.querySelector('.spinner')
    if (flag) {
        spinner.classList.add('show')
    } else {
        spinner.classList.remove('show')
    }

}

// HighLight the active link
function highlightActiveLink() {
    const navLink = document.querySelectorAll('.nav-link')
    navLink.forEach((link) => {
        if (link.getAttribute('href') === global.currentPage) {
            link.classList.add('active')
        }
    })
}

function displayBackgroundImage(type, backgroudPath) {
    const overlayDiv = document.createElement('div')
    overlayDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${backgroudPath})`
    overlayDiv.style.backgroundSize = 'cover';
    overlayDiv.style.backgroundPosition = 'center';
    overlayDiv.style.backgroundRepeat = 'no-repeat';
    overlayDiv.style.height = '100vh';
    overlayDiv.style.width = '100vw';
    overlayDiv.style.position = 'absolute';
    overlayDiv.style.top = '0';
    overlayDiv.style.left = '0';
    overlayDiv.style.zIndex = '-1';
    overlayDiv.style.opacity = '0.3';
    if (type === 'movie') {
        document.querySelector('#movie-details').appendChild(overlayDiv);
    } else {
        document.querySelector('#show-details').appendChild(overlayDiv);
    }
}

// display the slider movies using the swiper library
async function displaySlider() {
    const {results} = await fetchAPIData('movie/now_playing')

    results.forEach((movie) => {
        const div = document.createElement('div')
        div.classList.add('swiper-slide')

        div.innerHTML = `
            <a href="movie-details.html?id=${movie.id}">
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
            </a>
            <h4 class="swiper-rating">
              <i class="fas fa-star text-secondary"></i> ${movie.vote_average} / 10
            </h4>
        `
        document.querySelector('.swiper-wrapper').appendChild(div)
        initSwiper()
    })
}

function initSwiper() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        freeMode: true,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
            500: {
                slidesPerView: 2,
            },
            700: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    })
}

function displaySearchResult(results) {
    document.querySelector('#search-results').innerHTML = ''
    if (global.search.type === 'movie') {
        results.forEach(movie => {
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML = `
          <a href="movie-details.html?id=${movie.id}">
          ${movie.poster_path ? `
            <img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />
            ` : `<img
              src="../images/no-image.jpg"
              class="card-img-top"
              alt="Movie Title"
            />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">${movie.release_date}</small>
            </p>
          </div>
        `
        document.querySelector('#search-results').appendChild(div)
        })
    } else {
        results.forEach((show) => {
            
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML = `
          <a href="tv-details.html?id=${show.id}">
          ${show.poster_path ? `
            <img
              src="https://image.tmdb.org/t/p/w500${show.poster_path}"
              class="card-img-top"
              alt="${show.name}"
            />
            ` : `<img
              src="../images/no-image.jpg"
              class="card-img-top"
              alt="show name"
            />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${show.name}</h5>
            <p class="card-text">
              <small class="text-muted">${show.first_air_date}</small>
            </p>
          </div>
        `
        document.querySelector('#search-results').appendChild(div)
    })
    }
    // add the display for the whole results the total pages
    document.querySelector('#search-results-heading').innerHTML = `
        <h2>${results.length} of ${global.search.totalResults} Result for ${global.search.term}<h2>
    `
    displayPagination() 
}

function displayPagination() {
    document.querySelector('#pagination').innerHTML = ''
    const div = document.createElement('div')
    div.classList.add('pagination')
    div.innerHTML = `
          <button class="btn btn-primary" id="prev">Prev</button>
          <button class="btn btn-primary" id="next">Next</button>
          <div class="page-counter">Page ${global.search.currentPage} of ${global.search.totalPages} Pages</div>
    `
    document.querySelector('#pagination').appendChild(div)

    const preBtn = document.querySelector('#prev')    
    const nextBtn = document.querySelector('#next')    
    preBtn.addEventListener('click', displayPrevPage)
    nextBtn.addEventListener('click', displayNextPage)
}

async function displayNextPage() {
    if (global.search.currentPage >= global.search.totalPages) {return}
    global.search.currentPage += 1
    search(global.search.currentPage)
}

async function displayPrevPage() {
    if (global.search.currentPage <= 1)  {return}
    global.search.currentPage -= 1
    search(global.search.currentPage)
}

// search for the movie result
async function search(request_page) {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    
    global.search.type = urlParams.get('type')
    global.search.term = urlParams.get('search-term')


    if (global.search.term !== '' && global.search.item !== null) {
        const {results, total_pages, total_results, page} = await searchAPIData(request_page)
        global.search.totalResults = total_results
        global.search.totalPages = total_pages
        global.search.currentPage = page
        displaySearchResult(results)
        console.log(results)
    } else {
        
        // make a custom Alert
        showAlert('Please enter a search term!')
    }
}

function showAlert(message, className) {
    const alertEl = document.createElement('div')
    alertEl.classList.add('alert', className)
    alertEl.appendChild(document.createTextNode(message))
    document.querySelector('#alert').appendChild(alertEl)

    setTimeout((e) => {
        alertEl.remove()
    }, 3000)
}



// init the whole app
function init() {

    // implement router 
    switch (global.currentPage) {
        case '/':
        case '/index.html':
            displaySlider()
            displayPopularMovies()
            break
        case '/search.html':
            search()
            break
        case '/shows.html':
            displayPopularTv()
        case '/movie-details.html':
            displayMovieDetails()
            break
        case '/tv-details.html':
            displayShowDetails()
            break
    }

    highlightActiveLink()

}

init()