
export async function GET(request) {

    const cordinates = [
        { long: 32.33, lat:39.23 },
        { long: 32.33, lat:39.23 }
    ]

    return new Response(JSON.stringify(cordinates))
}