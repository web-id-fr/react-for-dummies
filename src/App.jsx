import birthdayCake from './assets/birthday-cake.svg'
import './App.css'

function App() {

    const userList = [
        {
            "id": 1,
            "name": "Robinet Jimpson"
        },
        {
            "id": 2,
            "name": "Fonzie Meekins"
        },
        {
            "id": 3,
            "name": "Artur Fishlee"
        },
        {
            "id": 4,
            "name": "Sig Hazeley"
        },
        {
            "id": 5,
            "name": "Salaidh Blazdell"
        },
        {
            "id": 6,
            "name": "Dulce Diloway"
        },
        {
            "id": 7,
            "name": "Maje Gecks"
        },
        {
            "id": 8,
            "name": "Barry Boys"
        },
        {
            "id": 9,
            "name": "Gwenette Moncey"
        },
        {
            "id": 10,
            "name": "Thia Demke"
        },
        {
            "id": 11,
            "name": "Aigneis Mallam"
        },
        {
            "id": 12,
            "name": "Marabel Batthew"
        },
        {
            "id": 13,
            "name": "Janey Brendel"
        },
        {
            "id": 14,
            "name": "Austin Curtain"
        },
        {
            "id": 15,
            "name": "Amil Rougier"
        },
        {
            "id": 16,
            "name": "Jone Licciardiello"
        },
        {
            "id": 17,
            "name": "Ashlie Aslie"
        },
        {
            "id": 18,
            "name": "Teresita Danit"
        },
        {
            "id": 19,
            "name": "Yoshi Donisthorpe"
        },
        {
            "id": 20,
            "name": "Serge Tinsey"
        },
        {
            "id": 21,
            "name": "Gilburt Ballinghall"
        },
        {
            "id": 22,
            "name": "Karlens Kruse"
        },
        {
            "id": 23,
            "name": "Ruby Wakeford"
        },
        {
            "id": 24,
            "name": "Erwin Liddall"
        },
        {
            "id": 25,
            "name": "Priscilla Fellman"
        },
        {
            "id": 26,
            "name": "Hinze Sibbe"
        },
        {
            "id": 27,
            "name": "Ali O'Hartnett"
        },
        {
            "id": 28,
            "name": "Tedi McDuffy"
        },
        {
            "id": 29,
            "name": "Tann Layland"
        },
        {
            "id": 30,
            "name": "Ezequiel Birnie"
        },
        {
            "id": 31,
            "name": "Ricoriki Gozzett"
        },
        {
            "id": 32,
            "name": "Gabriel Scrivens"
        },
        {
            "id": 33,
            "name": "Westley Rankcom"
        },
        {
            "id": 34,
            "name": "Trudy Goodding"
        },
        {
            "id": 35,
            "name": "Yuma Osbaldeston"
        },
        {
            "id": 36,
            "name": "Boris Duffet"
        },
        {
            "id": 37,
            "name": "Rozanne Brimner"
        },
        {
            "id": 38,
            "name": "Grannie Housden"
        },
        {
            "id": 39,
            "name": "Viviyan Breslauer"
        },
        {
            "id": 40,
            "name": "Granville des Remedios"
        },
        {
            "id": 41,
            "name": "Henka Weatherburn"
        },
        {
            "id": 42,
            "name": "Clarita Bousler"
        },
        {
            "id": 43,
            "name": "Charin Chuney"
        },
        {
            "id": 44,
            "name": "Mel Cove"
        },
        {
            "id": 45,
            "name": "Flin Watkin"
        },
        {
            "id": 46,
            "name": "Langston Splaven"
        },
        {
            "id": 47,
            "name": "Ody Culmer"
        },
        {
            "id": 48,
            "name": "Gianni Jenteau"
        },
        {
            "id": 49,
            "name": "Lilly Brumbie"
        },
        {
            "id": 50,
            "name": "Whittaker Bonner"
        },
        {
            "id": 51,
            "name": "Johnette Sprosson"
        },
        {
            "id": 52,
            "name": "Rufe Nestor"
        },
        {
            "id": 53,
            "name": "Nertie Widdup"
        },
        {
            "id": 54,
            "name": "Cathlene Latty"
        },
        {
            "id": 55,
            "name": "Rakel Brideau"
        },
        {
            "id": 56,
            "name": "Josie Beenham"
        },
        {
            "id": 57,
            "name": "Marlene Tocque"
        },
        {
            "id": 58,
            "name": "Nichole Coye"
        },
        {
            "id": 59,
            "name": "Claudine Roskilly"
        },
        {
            "id": 60,
            "name": "Bekki MacFaell"
        },
        {
            "id": 61,
            "name": "Laurens Phythian"
        },
        {
            "id": 62,
            "name": "Lavinia Calafate"
        },
        {
            "id": 63,
            "name": "Marena McTrustie"
        },
        {
            "id": 64,
            "name": "Dale Shickle"
        },
        {
            "id": 65,
            "name": "Faustina Levay"
        },
        {
            "id": 66,
            "name": "Seth Rikkard"
        },
        {
            "id": 67,
            "name": "Yves Prantl"
        },
        {
            "id": 68,
            "name": "Julianna Milius"
        },
        {
            "id": 69,
            "name": "Alessandro Slader"
        },
        {
            "id": 70,
            "name": "Filberto Brigman"
        },
        {
            "id": 71,
            "name": "Sansone Cattle"
        },
        {
            "id": 72,
            "name": "Kassie Chaldecott"
        },
        {
            "id": 73,
            "name": "Bartholomeus Vanichkin"
        },
        {
            "id": 74,
            "name": "Ariel Crichten"
        },
        {
            "id": 75,
            "name": "Cleavland Timothy"
        },
        {
            "id": 76,
            "name": "Car Balcon"
        },
        {
            "id": 77,
            "name": "Trescha Geertz"
        },
        {
            "id": 78,
            "name": "Huntlee Rebert"
        },
        {
            "id": 79,
            "name": "Anton Minogue"
        },
        {
            "id": 80,
            "name": "Farlee Ledger"
        },
        {
            "id": 81,
            "name": "Cate Braga"
        },
        {
            "id": 82,
            "name": "Jonas Fullerd"
        },
        {
            "id": 83,
            "name": "Francesca Westwater"
        },
        {
            "id": 84,
            "name": "Lucita Olenchikov"
        },
        {
            "id": 85,
            "name": "Corliss Calltone"
        },
        {
            "id": 86,
            "name": "Carley Varvell"
        },
        {
            "id": 87,
            "name": "Chere Kalkhoven"
        },
        {
            "id": 88,
            "name": "Terry Ibberson"
        },
        {
            "id": 89,
            "name": "Leonore Buscombe"
        },
        {
            "id": 90,
            "name": "Jenilee Kingswell"
        },
        {
            "id": 91,
            "name": "Lelah Courtman"
        },
        {
            "id": 92,
            "name": "Brandy Leek"
        },
        {
            "id": 93,
            "name": "Marv Bresson"
        },
        {
            "id": 94,
            "name": "Cordey Marte"
        },
        {
            "id": 95,
            "name": "Mariellen Haggish"
        },
        {
            "id": 96,
            "name": "Jacqueline Munson"
        },
        {
            "id": 97,
            "name": "Mendie Shercliff"
        },
        {
            "id": 98,
            "name": "Karalee Climpson"
        },
        {
            "id": 99,
            "name": "Kennan Wratten"
        },
        {
            "id": 100,
            "name": "Jecho Thompson"
        }
    ]

    return (
        <>
            <h1 className="title">Average age calculator</h1>
            <div className="user-list">
                <ul>
                    {userList.map((user) => (
                        <li key={user.id}><label><input type="checkbox" />{user.name}</label></li>
                    ))}
                </ul>
            </div>
            <div className="average">
                <img src={birthdayCake} width={200} alt="" />
                <p>Âge moyen des personnes sélectionnées</p>
                <p className="result">56 ans</p>
            </div>
        </>
    )
}

export default App
