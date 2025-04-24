const { Query } = require("pg")
const{getConcertsByArtistAndCity,getMerchandiseStallsByStallName,getAfterPartiesByCity}=require("../controllers/tourController")
const axiosInstance=require("../lib/axios.lib")

jest.mock("../lib/axios.lib.js",()=>({
    get:jest.fn()
}))

describe('tour controller test',()=>{
    test("should fetch tours based on city and artist",async()=>{
        const mockResponse={
            concerts:[{
                id: 1,
                artist: "The Rolling Stones",
                venue: "Wembley Stadium",
                city: "London",
                date: "2024-07-10T19:00:00.000Z",
                ticketPrice: 5032,
                seatCategory: "VIP"
            }]
        }

        axiosInstance.get.mockResolvedValue(mockResponse)

        const req={query:{artist:"The Rolling Stones",city:"London"}}
        const res={json:jest.fn(),status:jest.fn(()=>res)}
        await getConcertsByArtistAndCity(req,res)

        expect(axiosInstance.get).toHaveBeenCalledWith(`/concerts/search?artist=The Rolling Stones&city=London`);
        expect(res.json).toHaveBeenCalledWith(mockResponse.date)
    })


    test("should fetch merchanise stalls based on stall names",async()=>{
        const mockResponse={
            merchandiseStalls: [
                {
                    'id': 1,
                    'stallName': 'Rocking Tees',
                    'itemAvailable': 'T-Shirts',
                    'price': 250
                }
              ],
        }

        axiosInstance.get.mockResolvedValue(mockResponse)

        const req={query:{stallName:"Rocking Tees"}}
        const res={json:jest.fn(),status:jest.fn(()=>res)}
        await getMerchandiseStallsByStallName(req,res)

        expect(axiosInstance.get).toHaveBeenCalledWith(`/merchandiseStalls/search?stallName=Rocking Tees`);
        expect(res.json).toHaveBeenCalledWith(mockResponse.date)
    })


    test("should fetch afterparties based on city names",async()=>{
        const mockResponse={
            afterParties: [
                {
                   'id': 11,
                   'location': 'Vortex Club',
                   'city': 'Phoenix',
                   'date': '2024-12-11T22:30:00.000Z',
                   'ticketPrice': 800
               },
               {
                   'id': 30,
                   'location': 'Velvet Nightclub',
                   'city': 'Phoenix',
                   'date': '2024-12-30T22:30:00.000Z',
                   'ticketPrice': 900
               }
             ],
        }

        axiosInstance.get.mockResolvedValue(mockResponse)

        const req={query:{city:"Phoenix"}}
        const res={json:jest.fn(),status:jest.fn(()=>res)}
        await getAfterPartiesByCity(req,res)

        expect(axiosInstance.get).toHaveBeenCalledWith(`/afterParties/search?city=Phoenix`);
        expect(res.json).toHaveBeenCalledWith(mockResponse.date)
    })
})