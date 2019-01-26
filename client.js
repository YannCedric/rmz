const fetch = require('node-fetch')

async function script (dateFrom="2018-02-19", dateTo="2018-02-19", offset=20, limit=20) {

    const plays = await fetch(`https://conuhacks-playback-api.touchtunes.com/plays?startDate=${dateFrom}T21:00:00Z&endDate=${dateTo}T22:00:00Z&offset=${offset}&limit=${limit}`,
    {
        method: 'GET',
        headers: {'client-secret': '9923ac9b-8fd3-421f-b0e5-952f807c6885'},
    }).then(res => res.json())
    .then(res => res.plays)

    const playsFormatted = plays.map( x => {
        return {state: x.state, songId: x.songId}
    })

    console.log({length: plays.length, playsFormatted})
}

script()