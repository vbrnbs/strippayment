const productsArray = [
  {
    id: 1,
    full: {
      id: "price_1NeuTRF8wzumqS6HVslh5LB5",
      price: 3000,
    },
    kedv: {
      id: "price_1Ni713F8wzumqS6Htf64e2CF",
      price: 2000,
    },
    title: "VARGABETŰK – NAGY IDŐK NAGY TANÚI - MIKÓ ISTVÁN",

    time: "22 Szeptember 18:30",
    description:
      "A Varga Róbert újságíró vezette havonta ismétlődő beszélgetéssorozat e havi vendége a Kossuth-díjas érdemes és kiváló művész. Egy régebbi miniszavazás alapján Mikó Istvánt az ország tíz legismertebb színészei között emlegették. Sokoldalú egyéniség, zenél, zenét szerez, színdarabot ír, rendez, játszik. Sokaknak eszébe juthatnak a régi kabarék, hosszú ideig kirobbanthatatlan volt a televízióból, rádióból. Színházigazgató volt tíz évig Sopronban. Egyik alapítójaként jegyzi a Kisvárdai Várszínház. Másoknak a remek színpadi alakításai villannak fel Mikszáth Kálmántól Kálmán Imréig. Színpadi bemutatóinak a száma a szakmai nagyjai közé emeli, megközelíti a 270-et. Talán nem véletlenül az a címe egyik önálló estjének, hogy Ez az arc ismerős. Annyi mindennel foglalkozott már, sok helyen hagyott nyomot, hogy valami mindig eszükbe jut róla az embereknek. Kinek a Kaláka együttes, amelynek alapítója volt, vagy a Mindhalálig Beatles című kultikus előadás, a Thália és Arizona Színházakban. Emlékezetes rajzfilm hangok Micimackótól, a Muppet-show-n és Aladdinon át egészen a Macskafogó Lusta Dickjéig fémjelzik a nevét. Robin Williams filmjeinek a nyolcvan százalékát ő szinkronizálta. Mikó István azonban sokak szemében egyszerűen csak Švejk. Jaroslav Hašek hőséből egy darab. Ez az ő legendája marad mindörökké. Több, mint harminc éve kelti életre Hašek kultikus figuráját. Ezret bújt Švejk bőrébe, a derék katona alakja kitörölhetetlenül összeforrt az életével. Nevét pörkölt viseli Mikó István sokat utazik az országban. Ha útközben megáll, betér egy-egy étterembe, ahol szinte mindig megismerik, s ő kellemesen elbeszélget a pincérekkel arról is, szerinte milyen a jó pörkölt. Ezt egyes helyeken annyira megfogadták, hogy az országban a receptje alapján két helyen készítenek el és szolgálnak fel olyan pörköltet, amely a nevét viseli.",
    location: "Magyarpolány, Faluház",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/a2u1oYSGcxvxlc99pxaq5OKG8B1.jpg",
  },
  {
    id: 2,
    full: {
      id: "price_1Ni70IF8wzumqS6H5ubVWDFA",
      price: 3000,
    },
    kedv: {
      id: "price_1NgdzmF8wzumqS6HX7WCuo9c",
      price: 2500,
    },
    title: "A BŰBÁJOS LAKAT - BÓBITA BÁBSZÍNHÁZ",
    time: "28 Szeptember 11:00",
    description:
      "Berze Nagy János gyűjtése alapján bábszínpadra írta: Nagy Viktória Éva és Schneider Jankó Élt egyszer egy szegény asszony, aki olyan szegény volt, hogy még az egerei is a szomszédba jártak kéregetni. Ennek az asszonynak volt egy fia. Ez a fiú olyan okos volt, hogy túljárt még az ördög eszén is: elcsente legféltettebb kincsét, a bűbájos lakatot. Jól is ment a sora ezután a szegény legénynek, még a király lányát is feleségül vette. Ám az ördög sosem alszik! Tervező: Bodor Judit Zene: Csernák Zoltán Samu Rendezte Schneider Jankó Játsszák: Papp Melinda és Matta Lóránt",
    location: "Magyarpolány, Faluház",
    image: "https://bobita.hu/wp-content/uploads/2023/01/a-bubajos-lakat.jpg",
  },
  {
    id: 3,
    full: {
      id: "price_1Ni6zBF8wzumqS6HOEtYPwAR",
      price: 3000,
    },
    kedv: {
      id: "price_1Nge0vF8wzumqS6HSCffbmc1",
      price: 2000,
    },
    title: "PÓLIKA – KOVÁCS APOLLÓNIA - MAGYARORSZÁGI SZERB SZÍNHÁZ",
    time: "30 Szeptember 15:00",
    description:
      "Kovács Apollóniát, a magyar és a cigány dal koronázatlan királynőjét Varga Klári Jászai Mari-díjas színművésznő idézi közénk. Nemrégen ment el a földi létből. A budakalászi idősek otthonába jöttek el érte odaátról barátai: Sárközi meg a Zsiga, hogy az örök fénybe kísérjék a Gelem, gelem dalával (Rusz Milán, Suki István). Az idős, Kossuth-díjas művészről még gondozói sem tudták, hogy ki is ő valójában, hiszen férjezett nevén mutatkozott be és szobájából nem lehet kicsalogatni. A nappaliból csak annyit hallani, hogy egyfolytában énekel.",
    location: "SZAPORCA, EPERFA TÁJHÁZ",
    image:
      "https://scontent.fakl1-3.fna.fbcdn.net/v/t31.18172-8/17157784_1863745960572378_6400187102520330384_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=Tex10SeUo6MAX9hT5NF&_nc_ht=scontent.fakl1-3.fna&oh=00_AfAzB_xP2KmgiShEJHclBz8A1KyO_BUwCJpUaQ2RtsCFPg&oe=651480B0",
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.full.id === id || product.kedv.id === id);

  if (productData === undefined) {
    alert("No product found with ID: " + id);
    return undefined;
  }
  return productData;
}

export { productsArray, getProductData };
