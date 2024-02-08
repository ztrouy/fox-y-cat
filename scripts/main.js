    const getTheFox = async () => {
        // Fetch a random fox image
        const response = await fetch('https://randomfox.ca/floof')
        const convertedData = await response.json()

        // Inject random fox image into the DOM
        const foxImgElement = document.querySelector("#fox")
        foxImgElement.src = convertedData.image
    }

    const getTheCat = async () => {
        // Fetch a random cat image
        const response = await fetch('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false')
        const convertedData = await response.json()
        
        // Inject random cat image into the DOM
        const catImgElement = document.querySelector("#cat")
        catImgElement.src = convertedData[0]
    }


    getTheFox()
    getTheCat()


/*
    fetch('https://randomfox.ca/floof')
    .then(response => response.json())
    .then(
        (convertedData) => {
            const foxImgElement = document.querySelector("#fox")
            foxImgElement.src = convertedData.image
        }
    )

    fetch('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false')
        .then(response => response.json())
        .then(
            (convertedData) => {
                const catImgElement = document.querySelector("#cat")
                catImgElement.src = convertedData[0]
            }
        )
*/