<script setup lang="ts">
import { RedBlackTree } from "./structures/red-black-tree";

interface RawDictionaryDataInterface {
    keyEn: string;
    descriptionEn: string;
    keyIn: string;
    descriptionIn: string;
    gimmick: (() => void) | null;
}

const RAW_DICTIONARY_DATA: RawDictionaryDataInterface[] = [
    {
        keyEn: "Mirror",
        descriptionEn: "A reflective surface, typically of glass coated with a metal amalgam, that reflects a clear image",
        keyIn: "Cermin",
        descriptionIn: "Permukaan reflektif, biasanya dari kaca yang dilapisi dengan amalgam logam, yang memantulkan gambar yang jelas",
        gimmick: null,
    },
    {
        keyEn: "Giraffe",
        descriptionEn: "A large African mammal with a very long neck and forelegs, having a coat patterned with brown patches separated by lighter lines",
        keyIn: "Jerapah",
        descriptionIn: "Mamalia besar Afrika dengan leher dan kaki depan yang sangat panjang, memiliki bulu berpola dengan bercak coklat yang dipisahkan oleh garis-garis yang lebih terang",
        gimmick: null,
    },
    {
        keyEn: "Rabbit",
        descriptionEn: "A burrowing, plant-eating mammal with long ears, long hind legs, and a short tail",
        keyIn: "Kelinci",
        descriptionIn: "Mamalia pemakan tumbuhan yang menggali dengan telinga panjang, kaki belakang panjang, dan ekor pendek",
        gimmick: null,
    },
    {
        keyEn: "Snake",
        descriptionEn: "A long limbless reptile that has no eyelids, a short tail, and jaws that are capable of considerable extension",
        keyIn: "Ular",
        descriptionIn: "Reptil panjang tanpa anggota badan yang tidak memiliki kelopak mata, ekor pendek, dan rahang yang mampu diperpanjang secara signifikan",
        gimmick: null,
    },
    {
        keyEn: "Ice Cream",
        descriptionEn: "A soft frozen food made with sweetened and flavored milk fat",
        keyIn: "Es Krim",
        descriptionIn: "Makanan beku lembut yang dibuat dengan lemak susu yang dimaniskan dan diberi rasa",
        gimmick: null,
    },
    {
        keyEn: "Tabby",
        descriptionEn: "A domestic cat with a distinctive coat that features stripes, dots, lines, or swirling patterns, usually with a mark resembling an 'M' on its forehead",
        keyIn: "Kucing Belang",
        descriptionIn: "Kucing domestik dengan bulu khas yang memiliki garis-garis, titik-titik, garis-garis, atau pola berputar, biasanya dengan tanda yang menyerupai 'M' di dahinya",
        gimmick: null,
    },
    {
        keyEn: "Cat",
        descriptionEn: "A small domesticated carnivorous mammal with soft fur, a short snout, and retractile claws",
        keyIn: "Kucing",
        descriptionIn: "Mamalia karnivora kecil yang dijinakkan dengan bulu lembut, moncong pendek, dan cakar yang dapat ditarik",
        gimmick: null,
    },
    {
        keyEn: "Kangaroo",
        descriptionEn: "A large plant-eating marsupial with a long powerful tail and strongly developed hind limbs that enable it to travel by leaping",
        keyIn: "Kanguru",
        descriptionIn: "Marsupial pemakan tumbuhan besar dengan ekor panjang yang kuat dan anggota tubuh belakang yang sangat berkembang yang memungkinkannya untuk bepergian dengan melompat",
        gimmick: null,
    },
    {
        keyEn: "Glider",
        descriptionEn: "A light aircraft that is designed to fly for long periods without using an engine",
        keyIn: "Pesawat Layang",
        descriptionIn: "Pesawat ringan yang dirancang untuk terbang dalam waktu lama tanpa menggunakan mesin",
        gimmick: null,
    },
    {
        keyEn: "Airfield",
        descriptionEn: "An area of land set aside for the takeoff, landing, and maintenance of aircraft",
        keyIn: "Lapangan Terbang",
        descriptionIn: "Area tanah yang disediakan untuk lepas landas, mendarat, dan pemeliharaan pesawat",
        gimmick: null,
    },
    {
        keyEn: "Coupe",
        descriptionEn: "A car with a fixed-roof body style that is shorter than a sedan or saloon of the same model",
        keyIn: "Coupe",
        descriptionIn: "Mobil dengan gaya bodi atap tetap yang lebih pendek dari sedan atau saloon dari model yang sama",
        gimmick: null,
    },
    {
        keyEn: "Tiger",
        descriptionEn: "A large cat species native to Asia, having a tawny coat with transverse black stripes",
        keyIn: "Harimau",
        descriptionIn: "Spesies kucing besar yang berasal dari Asia, memiliki bulu coklat kekuningan dengan garis-garis hitam melintang",
        gimmick: null,
    },
    {
        keyEn: "Helicopter",
        descriptionEn: "A type of aircraft which derives both lift and propulsion from one or two sets of horizontally revolving rotors",
        keyIn: "Helikopter",
        descriptionIn: "Jenis pesawat yang memperoleh daya angkat dan dorongan dari satu atau dua set rotor yang berputar secara horizontal",
        gimmick: null,
    },
    {
        keyEn: "Banana",
        descriptionEn: "A long curved fruit that grows in clusters and has soft pulpy flesh and yellow skin when ripe",
        keyIn: "Pisang",
        descriptionIn: "Buah panjang yang melengkung yang tumbuh dalam kelompok dan memiliki daging yang lembut dan berkulit kuning ketika matang",
        gimmick: null,
    },
    {
        keyEn: "Mutt",
        descriptionEn: "A dog, especially a mongrel",
        keyIn: "Anjing Campuran",
        descriptionIn: "Anjing, terutama anjing campuran",
        gimmick: null,
    },
    {
        keyEn: "Violin",
        descriptionEn: "A stringed musical instrument of treble pitch, played with a horsehair bow",
        keyIn: "Biola",
        descriptionIn: "Alat musik gesek dengan nada tinggi, dimainkan dengan busur rambut kuda",
        gimmick: null,
    },
    {
        keyEn: "Zipper",
        descriptionEn:
            "A device used for fastening clothing, bags, etc., consisting of two strips of fabric with interlocking metal or plastic teeth and a sliding piece that closes an opening by drawing the teeth together",
        keyIn: "Ritsleting",
        descriptionIn:
            "Perangkat yang digunakan untuk mengikat pakaian, tas, dll., terdiri dari dua strip kain dengan gigi logam atau plastik yang saling mengunci dan bagian geser yang menutup bukaan dengan menarik gigi bersama-sama",
        gimmick: null,
    },
    {
        keyEn: "Penguin",
        descriptionEn: "A large flightless seabird of the southern hemisphere, with black upper parts and white underparts and wings developed into flippers for swimming underwater",
        keyIn: "Pinguin",
        descriptionIn:
            "Burung laut besar yang tidak bisa terbang dari belahan bumi selatan, dengan bagian atas hitam dan bagian bawah putih serta sayap yang berkembang menjadi sirip untuk berenang di bawah air",
        gimmick: null,
    },
    {
        keyEn: "Notebook",
        descriptionEn: "A small book with blank or ruled pages for writing notes in",
        keyIn: "Buku Catatan",
        descriptionIn: "Buku kecil dengan halaman kosong atau bergaris untuk menulis catatan",
        gimmick: null,
    },
    {
        keyEn: "SUV",
        descriptionEn: "A sport utility vehicle, a kind of passenger vehicle which combines the towing capacity of a pickup truck with the passenger-carrying space of a minivan",
        keyIn: "SUV",
        descriptionIn: "Kendaraan utilitas olahraga, jenis kendaraan penumpang yang menggabungkan kapasitas penarik truk pickup dengan ruang angkut penumpang minivan",
        gimmick: null,
    },
    {
        keyEn: "Aircraft",
        descriptionEn: "Any machine capable of flying, including airplanes, helicopters, and gliders",
        keyIn: "Pesawat",
        descriptionIn: "Mesin apa pun yang mampu terbang, termasuk pesawat terbang, helikopter, dan glider",
        gimmick: null,
    },
    {
        keyEn: "Window",
        descriptionEn: "An opening in the wall or roof of a building or vehicle that is fitted with glass or other transparent material, in a frame, to admit light or air and allow people to see out",
        keyIn: "Jendela",
        descriptionIn:
            "Bukaan di dinding atau atap bangunan atau kendaraan yang dilengkapi dengan kaca atau bahan transparan lainnya, dalam bingkai, untuk memasukkan cahaya atau udara dan memungkinkan orang untuk melihat keluar",
        gimmick: null,
    },
    {
        keyEn: "Kitten",
        descriptionEn: "A young cat",
        keyIn: "Anak Kucing",
        descriptionIn: "Kucing muda",
        gimmick: null,
    },
    {
        keyEn: "Turtle",
        descriptionEn: "A slow-moving reptile, enclosed in a scaly or leathery domed shell, able to retract its head and thick legs",
        keyIn: "Kura-kura",
        descriptionIn: "Reptil yang bergerak lambat, tertutup dalam cangkang berkubah bersisik atau berkulit, mampu menarik kembali kepala dan kaki tebalnya",
        gimmick: null,
    },
    {
        keyEn: "Peacock",
        descriptionEn: "A large bird, the male of which has very long tail feathers that have eye-like markings and can be erected and fanned out in display",
        keyIn: "Merak",
        descriptionIn: "Burung besar, jantan yang memiliki bulu ekor sangat panjang yang memiliki tanda seperti mata dan dapat ditegakkan dan dikembangkan untuk dipamerkan",
        gimmick: null,
    },
    {
        keyEn: "Monkey",
        descriptionEn: "A small to medium-sized primate that typically has a long tail, most kinds of which live in trees in tropical countries",
        keyIn: "Monyet",
        descriptionIn: "Primata kecil hingga sedang yang biasanya memiliki ekor panjang, sebagian besar jenisnya hidup di pohon di negara tropis",
        gimmick: null,
    },
    {
        keyEn: "Book",
        descriptionEn: "A set of written, printed, or blank pages fastened together along one side and encased between protective covers",
        keyIn: "Buku",
        descriptionIn: "Sekumpulan halaman tertulis, tercetak, atau kosong yang diikat bersama di satu sisi dan dibungkus di antara sampul pelindung",
        gimmick: null,
    },
    {
        keyEn: "Queen",
        descriptionEn: "The female ruler of an independent state, especially one who inherits the position by right of birth",
        keyIn: "Ratu",
        descriptionIn: "Penguasa wanita dari negara merdeka, terutama yang mewarisi posisi tersebut berdasarkan hak kelahiran",
        gimmick: null,
    },
    {
        keyEn: "Xylophone",
        descriptionEn: "A musical instrument played by striking a row of wooden bars of graduated length with one or more small wooden or plastic beaters",
        keyIn: "Saron",
        descriptionIn: "Alat musik yang dimainkan dengan memukul deretan batang kayu dengan panjang bertingkat dengan satu atau lebih pemukul kayu atau plastik kecil",
        gimmick: null,
    },
    {
        keyEn: "Sedan",
        descriptionEn: "A passenger car in a three-box configuration with separate compartments for engine, passenger, and cargo",
        keyIn: "Sedan",
        descriptionIn: "Mobil penumpang dalam konfigurasi tiga kotak dengan kompartemen terpisah untuk mesin, penumpang, dan kargo",
        gimmick: null,
    },
    {
        keyEn: "Lamp",
        descriptionEn: "A device for giving light, especially one that has a covering or is contained within something",
        keyIn: "Lampu",
        descriptionIn: "Perangkat untuk memberikan cahaya, terutama yang memiliki penutup atau terkandung dalam sesuatu",
        gimmick: null,
    },
    {
        keyEn: "Television",
        descriptionEn: "A device that receives broadcast signals and reproduces them on a screen",
        keyIn: "Televisi",
        descriptionIn: "Perangkat yang menerima sinyal siaran dan mereproduksinya di layar",
        gimmick: null,
    },
    {
        keyEn: "Walrus",
        descriptionEn: "A large gregarious marine mammal with two large downward-pointing tusks, found in the Arctic Ocean",
        keyIn: "Walrus",
        descriptionIn: "Mamalia laut besar yang suka berkelompok dengan dua gading besar yang mengarah ke bawah, ditemukan di Samudra Arktik",
        gimmick: null,
    },
    {
        keyEn: "Wolf",
        descriptionEn: "A wild carnivorous mammal of the dog family, living and hunting in packs",
        keyIn: "Serigala",
        descriptionIn: "Mamalia karnivora liar dari keluarga anjing, hidup dan berburu dalam kelompok",
        gimmick: null,
    },
    {
        keyEn: "Apple",
        descriptionEn: "The round fruit of a tree of the rose family, which typically has thin red or green skin and crisp flesh",
        keyIn: "Apel",
        descriptionIn: "Buah bulat dari pohon keluarga mawar, yang biasanya memiliki kulit merah atau hijau tipis dan daging renyah",
        gimmick: null,
    },
    {
        keyEn: "House",
        descriptionEn: "A building for human habitation, especially one that is lived in by a family or small group of people",
        keyIn: "Rumah",
        descriptionIn: "Bangunan untuk tempat tinggal manusia, terutama yang dihuni oleh keluarga atau kelompok kecil orang",
        gimmick: null,
    },
    {
        keyEn: "Hat",
        descriptionEn: "A shaped covering for the head worn for warmth, as a fashion item, or as part of a uniform",
        keyIn: "Topi",
        descriptionIn: "Penutup berbentuk untuk kepala yang dikenakan untuk kehangatan, sebagai barang mode, atau sebagai bagian dari seragam",
        gimmick: null,
    },
    {
        keyEn: "Convertible",
        descriptionEn: "A car with a flexible roof that can retract and fold away, converting it from an enclosed to an open-air vehicle",
        keyIn: "Convertible",
        descriptionIn: "Mobil dengan atap fleksibel yang dapat ditarik dan dilipat, mengubahnya dari kendaraan tertutup menjadi kendaraan terbuka",
        gimmick: null,
    },
    {
        keyEn: "Bicycle",
        descriptionEn: "A vehicle composed of two wheels held in a frame one behind the other, propelled by pedals and steered with handlebars attached to the front wheel",
        keyIn: "Sepeda",
        descriptionIn: "Kendaraan yang terdiri dari dua roda yang dipegang dalam bingkai satu di belakang yang lain, didorong oleh pedal dan dikendalikan dengan setang yang terpasang pada roda depan",
        gimmick: null,
    },
    {
        keyEn: "Yogurt",
        descriptionEn: "A semi-solid sourish food prepared from milk fermented by added bacteria",
        keyIn: "Yogurt",
        descriptionIn: "Makanan semi-padat yang asam yang disiapkan dari susu yang difermentasi oleh bakteri yang ditambahkan",
        gimmick: null,
    },
    {
        keyEn: "Puppy",
        descriptionEn: "A young dog",
        keyIn: "Anak Anjing",
        descriptionIn: "Anjing muda",
        gimmick: null,
    },
    {
        keyEn: "Orange",
        descriptionEn: "A large round juicy citrus fruit with a tough bright reddish-yellow rind",
        keyIn: "Jeruk",
        descriptionIn: "Buah jeruk besar bulat berair dengan kulit keras berwarna kuning kemerahan cerah",
        gimmick: null,
    },
    {
        keyEn: "Unicorn",
        descriptionEn: "A mythical animal typically represented as a horse with a single straight horn projecting from its forehead",
        keyIn: "Unicorn",
        descriptionIn: "Hewan mitos yang biasanya digambarkan sebagai kuda dengan satu tanduk lurus yang menonjol dari dahinya",
        gimmick: null,
    },
    {
        keyEn: "Airliner",
        descriptionEn: "A large airplane for transporting passengers and cargo",
        keyIn: "Pesawat Penumpang",
        descriptionIn: "Pesawat besar untuk mengangkut penumpang dan kargo",
        gimmick: null,
    },
    {
        keyEn: "Watch",
        descriptionEn: "A small timepiece worn typically on a strap on one's wrist",
        keyIn: "Jam Tangan",
        descriptionIn: "Jam kecil yang biasanya dikenakan pada tali di pergelangan tangan",
        gimmick: null,
    },
    {
        keyEn: "Jacket",
        descriptionEn: "An outer garment extending either to the waist or the hips, typically having sleeves and a fastening down the front",
        keyIn: "Jaket",
        descriptionIn: "Pakaian luar yang memanjang baik ke pinggang atau pinggul, biasanya memiliki lengan dan pengikat di bagian depan",
        gimmick: null,
    },
    {
        keyEn: "Hound",
        descriptionEn: "A type of dog used for hunting",
        keyIn: "Anjing Pemburu",
        descriptionIn: "Jenis anjing yang digunakan untuk berburu",
        gimmick: null,
    },
    {
        keyEn: "Airplane",
        descriptionEn: "A powered flying vehicle with fixed wings and a weight greater than that of the air it displaces",
        keyIn: "Pesawat Terbang",
        descriptionIn: "Kendaraan terbang yang bertenaga dengan sayap tetap dan berat lebih besar dari udara yang dipindahkannya, digunakan untuk mengangkut orang atau barang",
        gimmick: null,
    },
    {
        keyEn: "Airport",
        descriptionEn: "A complex of runways and buildings for the takeoff, landing, and maintenance of civil aircraft, with facilities for passengers",
        keyIn: "Bandara",
        descriptionIn: "Kompleks landasan pacu dan bangunan untuk lepas landas, mendarat, dan pemeliharaan pesawat sipil, dengan fasilitas untuk penumpang",
        gimmick: null,
    },
    {
        keyEn: "Radio",
        descriptionEn: "A device that receives radio signals and converts them into sound",
        keyIn: "Radio",
        descriptionIn: "Perangkat yang menerima sinyal radio dan mengubahnya menjadi suara",
        gimmick: null,
    },
    {
        keyEn: "Whale",
        descriptionEn: "A very large marine mammal with a streamlined hairless body, a horizontal tail fin, and a blowhole on top of the head for breathing",
        keyIn: "Paus",
        descriptionIn: "Mamalia laut yang sangat besar dengan tubuh tanpa bulu yang ramping, sirip ekor horizontal, dan lubang sembur di atas kepala untuk bernapas",
        gimmick: null,
    },
    {
        keyEn: "Balloon",
        descriptionEn: "A small bag made of thin rubber or other light material that can be inflated with air or gas",
        keyIn: "Balon",
        descriptionIn: "Kantong kecil yang terbuat dari karet tipis atau bahan ringan lainnya yang dapat diisi dengan udara atau gas",
        gimmick: null,
    },
    {
        keyEn: "Chair",
        descriptionEn: "A separate seat for one person, typically with a back and four legs",
        keyIn: "Kursi",
        descriptionIn: "Tempat duduk terpisah untuk satu orang, biasanya dengan sandaran dan empat kaki",
        gimmick: null,
    },
    {
        keyEn: "Quail",
        descriptionEn: "A small, short-tailed Old World game bird resembling a tiny partridge, typically having brown camouflaged plumage",
        keyIn: "Puyuh",
        descriptionIn: "Burung permainan Dunia Lama kecil dengan ekor pendek yang menyerupai burung puyuh kecil, biasanya memiliki bulu kamuflase coklat",
        gimmick: null,
    },
    {
        keyEn: "Car",
        descriptionEn: "A road vehicle, typically with four wheels, powered by an internal combustion engine and able to carry a small number of people",
        keyIn: "Mobil",
        descriptionIn: "Kendaraan jalan raya, biasanya dengan empat roda, ditenagai oleh mesin pembakaran dalam dan mampu membawa sejumlah kecil orang",
        gimmick: null,
    },
    {
        keyEn: "Dog",
        descriptionEn: "A domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, and a barking, howling, or whining voice",
        keyIn: "Anjing",
        descriptionIn: "Mamalia karnivora yang dijinakkan yang biasanya memiliki moncong panjang, indra penciuman yang tajam, dan suara menggonggong, melolong, atau merengek",
        gimmick: null,
    },
    {
        keyEn: "Pencil",
        descriptionEn:
            "An instrument for writing or drawing, typically consisting of a thin stick of graphite or a similar substance enclosed in a long thin piece of wood or fixed in a metal or plastic case",
        keyIn: "Pensil",
        descriptionIn:
            "Instrumen untuk menulis atau menggambar, biasanya terdiri dari batang tipis grafit atau zat serupa yang tertutup dalam potongan kayu panjang tipis atau dipasang dalam wadah logam atau plastik",
        gimmick: null,
    },
    {
        keyEn: "Yacht",
        descriptionEn: "A medium-sized sailboat equipped for cruising or racing",
        keyIn: "Kapal Pesiar",
        descriptionIn: "Kapal layar berukuran sedang yang dilengkapi untuk berlayar atau balapan",
        gimmick: null,
    },
    {
        keyEn: "Yak",
        descriptionEn: "A large domesticated wild ox with shaggy hair, humped shoulders, and large horns, used in Tibet as a pack animal and for its milk, meat, and hide",
        keyIn: "Yak",
        descriptionIn: "Lembu liar besar yang dijinakkan dengan rambut lebat, bahu bungkuk, dan tanduk besar, digunakan di Tibet sebagai hewan pengangkut dan untuk susu, daging, dan kulitnya",
        gimmick: null,
    },
    {
        keyEn: "Vulture",
        descriptionEn: "A large bird of prey with the head and neck more or less bare of feathers, feeding chiefly on carrion",
        keyIn: "Burung Bangkai",
        descriptionIn: "Burung pemangsa besar dengan kepala dan leher yang lebih atau kurang tanpa bulu, terutama memakan bangkai",
        gimmick: null,
    },
    {
        keyEn: "Fan",
        descriptionEn: "A device with rotating blades that creates a current of air for cooling or ventilation",
        keyIn: "Kipas Angin",
        descriptionIn: "Perangkat dengan bilah berputar yang menciptakan aliran udara untuk pendinginan atau ventilasi",
        gimmick: null,
    },
    {
        keyEn: "Phone",
        descriptionEn: "A device that uses either a landline or cellular network to transmit voice and data communications",
        keyIn: "Telepon",
        descriptionIn: "Perangkat yang menggunakan jaringan telepon kabel atau seluler untuk mengirimkan komunikasi suara dan data",
        gimmick: null,
    },
    {
        keyEn: "Umbrella",
        descriptionEn: "A device consisting of a circular canopy of cloth on a folding metal frame supported by a central rod, used as protection against rain or sometimes sun",
        keyIn: "Payung",
        descriptionIn:
            "Perangkat yang terdiri dari kanopi kain melingkar pada bingkai logam yang dapat dilipat yang didukung oleh batang pusat, digunakan sebagai perlindungan terhadap hujan atau kadang-kadang matahari",
        gimmick: null,
    },
    {
        keyEn: "Computer",
        descriptionEn: "An electronic device for storing and processing data, typically in binary form, according to instructions given to it in a variable program",
        keyIn: "Komputer",
        descriptionIn: "Perangkat elektronik untuk menyimpan dan memproses data, biasanya dalam bentuk biner, sesuai dengan instruksi yang diberikan dalam program variabel",
        gimmick: null,
    },
    {
        keyEn: "Lion",
        descriptionEn: "A large tawny-colored cat that lives in prides, found in Africa and northwestern India",
        keyIn: "Singa",
        descriptionIn: "Kucing besar berwarna coklat kekuningan yang hidup dalam kelompok, ditemukan di Afrika dan India barat laut",
        gimmick: null,
    },
    {
        keyEn: "Parrot",
        descriptionEn: "A bird, often vividly colored, with a short downcurved hooked bill, grasping feet, and a raucous voice",
        keyIn: "Burung Beo",
        descriptionIn: "Burung, sering berwarna cerah, dengan paruh melengkung pendek, kaki yang dapat mencengkeram, dan suara yang keras",
        gimmick: null,
    },
    {
        keyEn: "Camera",
        descriptionEn: "A device for recording visual images in the form of photographs, film, or video signals",
        keyIn: "Kamera",
        descriptionIn: "Perangkat untuk merekam gambar visual dalam bentuk foto, film, atau sinyal video",
        gimmick: null,
    },
    {
        keyEn: "Raven",
        descriptionEn: "A large heavily built crow with mainly black plumage, feeding chiefly on carrion",
        keyIn: "Gagak",
        descriptionIn: "Gagak besar dengan tubuh berat dengan bulu hitam, terutama memakan bangkai",
        gimmick: null,
    },
    {
        keyEn: "Elephant",
        descriptionEn: "A large herbivorous mammal with a trunk, long curved ivory tusks, and large ears",
        keyIn: "Gajah",
        descriptionIn: "Mamalia herbivora besar dengan belalai, gading melengkung panjang, dan telinga besar",
        gimmick: null,
    },
    {
        keyEn: "Tomcat",
        descriptionEn: "A male cat",
        keyIn: "Kucing Jantan",
        descriptionIn: "Kucing jantan",
        gimmick: null,
    },
    {
        keyEn: "Zucchini",
        descriptionEn: "A variety of summer squash that is shaped like a cucumber and that has a smooth, dark green skin",
        keyIn: "Zukini",
        descriptionIn: "Varietas labu musim panas yang berbentuk seperti mentimun dan memiliki kulit halus berwarna hijau tua",
        gimmick: null,
    },
    {
        keyEn: "Jet",
        descriptionEn: "An aircraft powered by jet engines",
        keyIn: "Jet",
        descriptionIn: "Pesawat yang ditenagai oleh mesin jet",
        gimmick: null,
    },
    {
        keyEn: "Zebra",
        descriptionEn: "An African wild horse with black-and-white stripes and an erect mane",
        keyIn: "Zebra",
        descriptionIn: "Kuda liar Afrika dengan garis-garis hitam-putih dan surai tegak",
        gimmick: null,
    },
    {
        keyEn: "Table",
        descriptionEn: "A piece of furniture with a flat top and one or more legs, providing a level surface for eating, writing, or working",
        keyIn: "Meja",
        descriptionIn: "Perabot dengan bagian atas datar dan satu atau lebih kaki, menyediakan permukaan datar untuk makan, menulis, atau bekerja",
        gimmick: null,
    },
    {
        keyEn: "Guitar",
        descriptionEn: "A stringed musical instrument, typically played by plucking or strumming the strings with the fingers or a plectrum",
        keyIn: "Gitar",
        descriptionIn: "Alat musik berdawai, biasanya dimainkan dengan memetik atau memetik dawai dengan jari atau plektrum",
        gimmick: null,
    },
    {
        keyEn: "Sparrow",
        descriptionEn: "A small finch-like Old World bird related to the weaverbirds, typically with brown and gray plumage",
        keyIn: "Burung Gereja",
        descriptionIn: "Burung Dunia Lama kecil yang mirip dengan burung finch yang berkerabat dengan burung penenun, biasanya dengan bulu coklat dan abu-abu",
        gimmick: null,
    },
];

const EN_TO_IN_RED_BLACK_TREE: RedBlackTree = new RedBlackTree();
const IN_TO_EN_RED_BLACK_TREE: RedBlackTree = new RedBlackTree();

RAW_DICTIONARY_DATA.forEach((rawDictionaryData: RawDictionaryDataInterface): void => {
    console.log(
        EN_TO_IN_RED_BLACK_TREE.add(rawDictionaryData.keyEn, rawDictionaryData.descriptionEn, rawDictionaryData.keyIn, rawDictionaryData.descriptionIn, rawDictionaryData.gimmick),
        rawDictionaryData.keyEn
    );

    console.log(
        IN_TO_EN_RED_BLACK_TREE.add(rawDictionaryData.keyIn, rawDictionaryData.descriptionIn, rawDictionaryData.keyEn, rawDictionaryData.descriptionEn, rawDictionaryData.gimmick),
        rawDictionaryData.keyIn
    );
});

console.log(EN_TO_IN_RED_BLACK_TREE.getTotal());
console.log(EN_TO_IN_RED_BLACK_TREE.getPreOrder());
console.log(EN_TO_IN_RED_BLACK_TREE.getInOrder());
console.log(EN_TO_IN_RED_BLACK_TREE.getPostOrder());
console.log(EN_TO_IN_RED_BLACK_TREE.root!.toString());
console.log("\n");
console.log(IN_TO_EN_RED_BLACK_TREE.getTotal());
console.log(IN_TO_EN_RED_BLACK_TREE.getPreOrder());
console.log(IN_TO_EN_RED_BLACK_TREE.getInOrder());
console.log(IN_TO_EN_RED_BLACK_TREE.getPostOrder());
console.log(IN_TO_EN_RED_BLACK_TREE.root!.toString());
</script>

<template>Test</template>
