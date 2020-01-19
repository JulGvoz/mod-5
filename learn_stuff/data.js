class Entry {
    constructor(x, y, name) {
        this.x = x;
        this.y = y;
        this.name = name;
    }
}

var data = [
    new Entry(327, 181, "Kordiljeros"),
    new Entry(360, 175, "Uoliniai kalnai"),
    new Entry(396, 182, "Didžiosios lygumos"),
    new Entry(413, 229, "Meksikos pakrantės žemuma"),
    new Entry(480, 217, "Paatlantės žemuma"),
    new Entry(474, 189, "Apalačų kalnai"),
    new Entry(506, 448, "Andų kalnai"),
    new Entry(547, 354, "Gvianos plokščiakalnis"),
    new Entry(536, 396, "Amazonės žemuma"),
    new Entry(596, 461, "Brazilijos plokščiakalnis"),
    new Entry(555, 483, "La Platos žemuma"),
    new Entry(795, 224, "Atlaso kalnai"),
    new Entry(814, 272, "Achagaro kalnynas"),
    new Entry(863, 279, "Tibesčio kalnynas"),
    new Entry(813, 328, "Nigerijos upės žemuma"),
    new Entry(868, 319, "Čado lyguma"),
    new Entry(934, 268, "Nilo žemuma"),
    new Entry(961, 326, "Etiopijos kalnynas"),
    new Entry(943, 376, "Rytų Afrikos plokščiakalnis"),
    new Entry(904, 372, "Kongo baseino lyguma"),
    new Entry(878, 435, "Lundos plynaukštė"),
    new Entry(888, 515, "Kapo kalnai"),
    new Entry(935, 480, "Drakono kalnai"),
    new Entry(931, 205, "Tauro kalnai"),
    new Entry(968, 176, "Kaukazo kalnai"),
    new Entry(1003, 223, "Irano kalnynas"),
    new Entry(992, 155, "Pakaspijo žemuma"),
    new Entry(1055, 95, "Vakarų Sibiro lyguma"),
    new Entry(997, 96, "Uralo kalnai"),
    new Entry(1169, 91, "Vidurio Sibiro plokščiakalnis"),
    new Entry(1136, 283, "Dekaro plokščiakalnis"),
    new Entry(1173, 258, "Gango žemuma"),
    new Entry(1103, 252, "Indo žemuma"),
    new Entry(1192, 229, "Tibeto kalnai"),
    new Entry(1168, 211, "Kunluno kalnai"),
    new Entry(1136, 187, "Tian Šano kalnai"),
    new Entry(1280, 223, "Kinijos lyguma"),
    new Entry(1437, 505, "Didysis Vandeskyros kalnagrūbris"),
    new Entry(1418, 482, "Didysis Artezinis baseinas"),
    new Entry(853, 80, "Skandinavijos kalnai"),
    new Entry(802, 180, "Pirėnų kalnai"),
    new Entry(835, 165, "Alpės"),
    new Entry(855, 183, "Apeninai"),
    new Entry(845, 141, "Vidurio Europos lyguma"),
    new Entry(936, 122, "Rytų Europos lyguma")
]

var data_json = JSON.stringify(data);

//var data_json = '[{"x":327,"y":181,"name":"Kordiljeros"},{"x":360,"y":175,"name":"Uoliniai kalnai"},{"x":396,"y":182,"name":"Didžiosios lygumos"},{"x":413,"y":229,"name":"Meksikos pakrantės žemuma"},{"x":480,"y":217,"name":"Paatlantės žemuma"},{"x":474,"y":189,"name":"Apalačų kalnai"},{"x":506,"y":448,"name":"Andų kalnai"},{"x":547,"y":354,"name":"Gvianos plokščiakalnis"},{"x":536,"y":396,"name":"Amazonės žemuma"},{"x":596,"y":461,"name":"Brazilijos plokščiakalnis"},{"x":555,"y":483,"name":"La Platos žemuma"},{"x":795,"y":224,"name":"Atlaso kalnai"},{"x":814,"y":272,"name":"Achagaro kalnynas"},{"x":863,"y":279,"name":"Tibesčio kalnynas"},{"x":813,"y":328,"name":"Nigerijos upės žemuma"},{"x":868,"y":319,"name":"Čado lyguma"},{"x":934,"y":268,"name":"Nilo žemuma"},{"x":961,"y":326,"name":"Etiopijos kalnynas"},{"x":943,"y":376,"name":"Rytų Afrikos plokščiakalnis"},{"x":904,"y":372,"name":"Kongo baseino lyguma"},{"x":878,"y":435,"name":"Lundos plynaukštė"},{"x":888,"y":515,"name":"Kapo kalnai"},{"x":935,"y":480,"name":"Drakono kalnai"},{"x":931,"y":205,"name":"Tauro kalnai"},{"x":968,"y":176,"name":"Kaukazo kalnai"},{"x":1003,"y":223,"name":"Irano kalnynas"},{"x":992,"y":155,"name":"Pakaspijo žemuma"},{"x":1055,"y":95,"name":"Vakarų Sibiro lyguma"},{"x":997,"y":96,"name":"Uralo kalnai"},{"x":1169,"y":91,"name":"Vidurio Sibiro plokščiakalnis"},{"x":1136,"y":283,"name":"Dekaro plokščiakalnis"},{"x":1173,"y":258,"name":"Gango žemuma"},{"x":1103,"y":252,"name":"Indo žemuma"},{"x":1192,"y":229,"name":"Tibeto kalnai"},{"x":1168,"y":211,"name":"Kunluno kalnai"},{"x":1136,"y":187,"name":"Tian Šano kalnai"},{"x":1280,"y":223,"name":"Kinijos lyguma"},{"x":1437,"y":505,"name":"Didysis Vandeskyros kalnagrūbris"},{"x":1418,"y":482,"name":"Didysis Artezinis baseinas"},{"x":853,"y":80,"name":"Skandinavijos kalnai"},{"x":802,"y":180,"name":"Pirėnų kalnai"},{"x":835,"y":165,"name":"Alpės"},{"x":855,"y":183,"name":"Apeninai"},{"x":845,"y":141,"name":"Vidurio Europos lyguma"},{"x":936,"y":122,"name":"Rytų Europos lyguma"}]';

data = JSON.parse(data_json, (key, value) => {
    value.attempts = 1;
    value.correct = 0;
    value.weight = value.attempts - value.correct;
    value.lastGuessTime = 0;
    return value;
});