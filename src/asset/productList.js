
import roundSardinella from '../asset/images/fish/roundSardinella.png';
import maseiranSardinella from '../asset/images/fish/maseiranSardinella.png';
import atlanticHorseMackerel from '../asset/images/fish/atlanticHorseMackerel.png';
import cuneneHorseMackerel from '../asset/images/fish/cuneneHorseMackerel.png';
import commonMackerel from '../asset/images/fish/commonMackerel.png';
import atlanticBumper from '../asset/images/fish/atlanticBumper.png';
import bigEyeGrunt from '../asset/images/fish/bigEyeGrunt.png';
import cassavaCroaker from '../asset/images/fish/cassavaCroaker.png';
import littleTunny from '../asset/images/fish/littleTunny.png';
import senegalJack from '../asset/images/fish/senegalJack.png';
import ribbonFish from '../asset/images/fish/ribbonFish.png';
import africanLookdown from '../asset/images/fish/africanLookdown.png';
import senegaleseTonguesole from '../asset/images/fish/senegaleseTonguesole.png';
import lesserAfricanThreadfin from '../asset/images/fish/lesserAfricanThreadfin.png';
import smoothmouthSeaCatfish from '../asset/images/fish/smoothmouthSeaCatfish.png';
import flagfinMojarra from '../asset/images/fish/flagfinMojarra.png';
import atlanticPomfret from '../asset/images/fish/atlanticPomfret.png';
import beardedBrotula from '../asset/images/fish/beardedBrotula.png';
import curemaMullet from '../asset/images/fish/curemaMullet.png';
import whiteTuna from '../asset/images/fish/whiteTuna.png';
import cymbium from '../asset/images/fish/cymbium.png';
import cymbiumPepo from '../asset/images/fish/cymbiumPepo.png';
import murex from '../asset/images/fish/murex.png';
import cuttlefish from '../asset/images/fish/cuttlefish.png';
import octopus from '../asset/images/fish/octopus.png';
import _ from 'lodash';
import { useMemo } from 'react';

const FISH_RAW_PRODUCTS = [
    {
        en: "Maseiran Sardinella",
        fr: "Sardinelle Plate / Grande Allache",
        sp: "Machudlo",
        sn: "Yaboy Tass",
        cn: "扁沙丁",
        scientificName: "SARDINELLE PLATE / Sardinella Maderensis",
        origin: "Sénégal",
        season: "Whole Year",
        fao: "34 – Atlantic, Eastern Central",
        productionMethod: "Caught (Trawls/Surrounding nets and Lift nets)",
        frozen: "Land frozen",
        glaze: "N/A",
        packing: "Bulk",
        allergens: "Fish",
        tags: [
            "Permanent",
            "W/R"
        ],
        calibrage: "G (300g+), M (180g-300g), P (170g-200g), PP (150g-170g)",
        img: maseiranSardinella,
        url: "maseiran-sardinella"
    },
    {
        en: "Round Sardinella",
        fr: "Sardinelle Ronde / Allache Sadinelia",
        sp: "Alacha / Sardina",
        sn: "Yaboy Mbeureuk",
        cn: "圓沙丁",
        scientificName: "SARDINELLE RONDE / Sardinella Aurita",
        origin: "Sénégal",
        season: "From Aug. to Jun.",
        fao: "34 – Atlantic, Eastern Central",
        productionMethod: "Caught (Trawls/Surrounding nets and Lift nets)",
        frozen: "Land frozen",
        glaze: "N/A",
        packing: "Bulk",
        allergens: "Fish",
        tags: [
            "Permanent",
            "W/R"
        ],
        calibrage: "G (280g+), M (180g-280g), P (160g-180g), PP (130g-160g)",
        img: roundSardinella,
        url: "round-sardinella"
    },
    {
        en: "Cunene Horse Mackerel",
        fr: "Chinchard Noir / Chinchard Cunene",
        sp: "Jurel Cunene",
        sn: "Dieye Bou Gnoul",
        cn: "黑竹筴",
        scientificName: "CHINCHARD NOIR / Trachurus Trecae",
        origin: "Sénégal",
        season: "From Nov. to Jun.",
        fao: "34 – Atlantic, Eastern Central",
        productionMethod: "Caught (Trawls / Surrounding nets and lift nets)",
        frozen: "Land frozen",
        glaze: "N/A",
        packing: "Bulk",
        allergens: "Fish",
        tags: [
            "Permanent",
            "W/R"
        ],
        calibrage: "GG (600g+), G (450g-600g), M (300g-450g), P (200g-300g), PP (100g-200g)",
        img: cuneneHorseMackerel,
        url: "cunene-horse-mackerel"
    },
    {
        en: "Atlantic Horse Mackerel",
        fr: "Chinchard Blanc / Chinchard d'Europe",
        sp: "Jurel",
        sn: "Dieye Bou Wekh",
        cn: "白竹筴",
        scientificName: "CHINCHARD BLANC / Decaprterus Rhonchus",
        origin: "Sénégal",
        season: "From Mar. to May.",
        fao: "34 – Atlantic, Eastern Central",
        productionMethod: "Caught (Trawls / Surrounding nets and lift nets)",
        frozen: "Land frozen",
        glaze: "N/A",
        packing: "Bulk",
        allergens: "Fish",
        tags: [
            "Seasonal",
            "W/R"
        ],
        calibrage: "GG (500g+), G (400g-500g), M (300g-400g), P (200g-300g), PP (100g-200g)",
        img: atlanticHorseMackerel,
        url: "atlantic-horse-mackerel"
    },
    {
        en: "Common Mackerel",
        fr: "Maquereau Common",
        sp: "Estornino",
        sn: "Weuyeung",
        cn: "鯖魚",
        scientificName: "MAQUEREAU / Scomber Japonicus",
        origin: "Sénégal",
        season: "From Nov. to Jun.",
        fao: "34 – Atlantic, Eastern Central",
        productionMethod: "Caught (Trawls / Surrounding nets and lift nets)",
        frozen: "Land frozen",
        glaze: "N/A",
        packing: "Bulk",
        allergens: "Fish",
        tags: [
            "Seasonal",
            "W/R"
        ],
        calibrage: "GG (800g+), G (600g-800g), M (400g-600g), P (200g-400g), PP (100g-200g)",
        img: commonMackerel,
        url: "mackerel"
    },
    {
        en: "Atlantic Bumper",
        fr: "Lagna-Lagna/Sapater",
        sp: "Casabe",
        sn: "Lagna-lagna",
        cn: "樹葉鯧",
        scientificName: "LAGNA-LAGNA / Chloroscombrus Chrysurus",
        origin: "Sénégal",
        season: "From Nov. to Jun.",
        fao: "34 – Atlantic, Eastern Central",
        productionMethod: "Caught (Trawls/Surrounding nets and Lift nets)",
        frozen: "Land frozen",
        glaze: "N/A",
        packing: "Bulk",
        allergens: "Fish",
        tags: [
            "Permanent",
            "W/R"
        ],
        calibrage: "One size : 70g+",
        img: atlanticBumper,
        url: "atlantic-bumper"
    },
    {
        en: "Big Eye Grunt",
        fr: "Pelon/ Lippu Pelon",
        sp: "Burro Ojon",
        sn: "Khour-khour",
        cn: "小石鱸",
        scientificName: "PELON / Brachydeuterus Auritus",
        origin: "Sénégal",
        season: "Whole Year",
        fao: "34 – Atlantic, Eastern Central",
        productionMethod: "Caught (Trawls/Surrounding nets and Lift nets)",
        frozen: "Land frozen",
        glaze: "N/A",
        packing: "Bulk",
        allergens: "Fish",
        tags: [
            "Permanent",
            "W/R",
            "Elaborate"
        ],
        calibrage: "One size : 70g+",
        img: bigEyeGrunt,
        url: "big-eye-grunt"
    },
    {
        en: "African Lookdown",
        fr: "Fanta/Musso African",
        sp: "Jorobado Africano",
        sn: "Fantre",
        cn: "方頭鰺",
        scientificName: "FANTA / Selene Dorsalis",
        origin: "Sénégal",
        season: "From Nov. to Dec.",
        fao: "34 – Atlantic, Eastern Central",
        productionMethod: "Caught (Trawls / Surrounding nets and lift nets)",
        frozen: "Land frozen",
        glaze: "N/A",
        packing: "Bulk",
        allergens: "Fish",
        tags: [
            "Seasonal",
            "W/R"
        ],
        calibrage: "One size : 150g+",
        img: africanLookdown,
        url: "african-lookdown"
    },
    {
        en: "Flagfin Mojarra",
        fr: "Geresse/ Blanche Drapeau",
        sp: "Mojarrita de Ley",
        sn: "GAMARA-GAMARA",
        cn: "小銀鱸",
        scientificName: "GERESSE / Eucinostomus Melanopterus",
        origin: "Sénégal",
        season: "From Nov. to Dec.",
        fao: "34 – Atlantic, Eastern Central",
        productionMethod: "Caught (Trawls / Surrounding nets and lift nets)",
        frozen: "Land frozen",
        glaze: "N/A",
        packing: "Bulk",
        allergens: "Fish",
        tags: [
            "Seasonal",
            "W/R"
        ],
        calibrage: "One size : 70g+",
        img: flagfinMojarra,
        url: "flagfin-mojarra"
    },
    {
        en: "Smoothmouth Sea Catfish",
        fr: "Machoiron Banderille",
        sp: "Bagre Bocalisa",
        sn: "Dakak",
        cn: "海鯰",
        scientificName: "MACHOIRON / Arius Hendelotti Valenciennes",
        origin: "Sénégal",
        season: "Sept.",
        fao: "34 – Atlantic, Eastern Central",
        productionMethod: "Caught (Trawls / Surrounding nets and lift nets)",
        frozen: "Land frozen",
        glaze: "N/A",
        packing: "Bulk",
        allergens: "Fish",
        tags: [
            "Seasonal",
            "W/R"
        ],
        calibrage: "G, M, P, PP",
        img: smoothmouthSeaCatfish,
        url: "smoothmouth-sea-catfish"
    },
    {
        en: "Cassava Croaker",
        fr: "Ombrine",
        sp: "Corrina Casava",
        sn: "Feutte",
        cn: "西非大黃魚",
        scientificName: "OMBRINE / Pseudotolithus Senegalensis",
        origin: "Sénégal",
        season: "From Mar. to Jun.",
        fao: "34 – Atlantic, Eastern Central",
        productionMethod: "Caught (Trawls/Surrounding nets and Lift nets)",
        frozen: "Land frozen",
        glaze: "N/A",
        packing: "Bulk",
        allergens: "Fish",
        tags: [
            "Seasonal",
            "W/R"
        ],
        calibrage: "GG, G, M, P, PP",
        img: cassavaCroaker,
        url: "cassava-croaker"
    },
    {
        en: "Little Tunny",
        fr: "Thonine Commune",
        sp: "Bacoreta",
        sn: "Kiri Kiri",
        cn: "小鮪",
        scientificName: "RAVIL / Euthynnus Alletteratus",
        origin: "Sénégal",
        season: "From Mar. to Jun.",
        fao: "34 – Atlantic, Eastern Central",
        productionMethod: "Caught (Trawls/Surrounding nets and Lift nets)",
        frozen: "Land frozen",
        glaze: "N/A",
        packing: "Bulk",
        allergens: "Fish",
        tags: [
            "Seasonal",
            "W/R"
        ],
        calibrage: "GG (800g+), G (500g-800g), M (300g-500g), P (200g-300g), PP (150g-200g)",
        img: littleTunny,
        url: "little-tunny"
    },
    {
        en: "Senegal Jack",
        fr: "Carangue du Sénégal",
        sp: "Jurel Senegalés",
        sn: "Safar",
        cn: "黃鰺",
        scientificName: "SAFAR / Caranx Senegallus",
        origin: "Sénégal",
        season: "May.",
        fao: "34 – Atlantic, Eastern Central",
        productionMethod: "Caught (Trawls/Surrounding nets and Lift nets)",
        frozen: "Land frozen",
        glaze: "N/A",
        packing: "Bulk",
        allergens: "Fish",
        tags: [
            "Seasonal",
            "W/R"
        ],
        calibrage: "TV",
        img: senegalJack,
        url: "senegal-jack"
    },
    {
        en: "Lesser African Threadfin",
        fr: "Petit Capitaine",
        sp: "Barbude de Diez Barbes",
        sn: "Sikket Mboa",
        cn: "方頭魚 (俗)、馬鮁",
        scientificName: "THIEKEM / Galeoides Decadactilus",
        origin: "Sénégal",
        season: "Mar. May. Aug. Oct.",
        fao: "34 – Atlantic, Eastern Central",
        productionMethod: "Caught (Trawls/Surrounding nets and Lift nets)",
        frozen: "Land frozen",
        glaze: "N/A",
        packing: "Bulk",
        allergens: "Fish",
        tags: [
            "Seasonal",
            "W/R"
        ],
        calibrage: "GG, G, M, P, PP",
        img: lesserAfricanThreadfin,
        url: "lesser-african-threadfin"
    },
    {
        en: "Largehead Hairtail/ Ribbon Fish",
        fr: "Ceinture D'argent",
        sp: "Pez Sable",
        sn: "Talar",
        cn: "白帶魚",
        scientificName: "CEINTURE / Trichiurus Lepturus",
        origin: "Sénégal",
        season: "From Apr. to Jun.",
        fao: "34 – Atlantic, Eastern Central",
        productionMethod: "Longlining / Fishing Pole",
        frozen: "Land frozen",
        glaze: "N/A",
        packing: "IQF Bag,Bulk",
        allergens: "Fish",
        tags: [
            "Seasonal",
            "W/R",
            "Elaborate"
        ],
        calibrage: "100g-200g, 200g-300g, 300g-500g, 500g-700g, 700g-900g, 900g+",
        img: ribbonFish,
        url: "ribbon-fish"
    },
    {
        en: "Senegalese Tonguesole",
        fr: "Sole-lengue Sénégalaise",
        sp: "Lengua Del Senegal",
        sn: "Sole",
        cn: "塞內加爾舌鰨",
        scientificName: "SOLE / Cynoglossus Senegalensis",
        origin: "Sénégal",
        season: "From Mar. to May.",
        fao: "34 – Atlantic, Eastern Central",
        productionMethod: "Caught (Trawls / Surrounding nets and lift nets)",
        frozen: "Land frozen",
        glaze: "N/A",
        packing: "Bulk",
        allergens: "Fish",
        tags: [
            "Seasonal",
            "W/R"
        ],
        calibrage: "200g-300g, 300g-400g, 400g-500g, 500g-600g, 600g-700g, 700g-800g, 800g-900g, 900g-1000g, 1KG+",
        img: senegaleseTonguesole,
        url: "senegalese-tonguesole"
    },
    {
        en: "Atlantic Pomfret",
        fr: "Brème de Mer",
        sp: "-",
        sn: "Diaman Noir",
        cn: "烏魴 / 大西洋鯧魚",
        scientificName: "BRAMA BRAMA",
        origin: "Sénégal",
        season: "-",
        fao: "34 – Atlantic, Eastern Central",
        productionMethod: "Caught (Trawls/Surrounding nets and Lift nets)",
        frozen: "Land frozen",
        glaze: "N/A",
        packing: "Bulk",
        allergens: "Fish",
        tags: [
            "Seasonal",
            "W/R"
        ],
        calibrage: "TV",
        img: atlanticPomfret,
        url: "atlantic-pomfret"
    },
    {
        en: "Bearded Brotula",
        fr: "Brotula Barbé",
        sp: "-",
        sn: "Brotula de Barbas",
        cn: "鰍魚",
        scientificName: "LOCHE / Brotula Barbata",
        origin: "Sénégal",
        season: "From Jan. to May",
        fao: "34 – Atlantic, Eastern Central",
        productionMethod: "Caught (Trawls/Surrounding nets and Lift nets)",
        frozen: "Land frozen",
        glaze: "N/A",
        packing: "Bulk",
        allergens: "Fish",
        tags: [
            "Seasonal",
            "W/R"
        ],
        calibrage: "-",
        img: beardedBrotula,
        url: "bearded-brotula"
    },
    {
        en: "Curema Mullet",
        fr: "Mulet Cureme",
        sp: "Liza Curema",
        sn: "Valenciennes",
        cn: "鯔魚",
        scientificName: "MULET / Mugil Curema",
        origin: "Sénégal",
        season: "From Jan. to Apr.",
        fao: "34 – Atlantic, Eastern Central",
        productionMethod: "Caught (Trawls / Surrounding nets and lift nets)",
        frozen: "Land frozen",
        glaze: "N/A",
        packing: "Bulk",
        allergens: "Fish",
        tags: [
            "Seasonal",
            "W/R"
        ],
        calibrage: "GG (700g+), G (500-700g), M (300-500g), P (200-300g), PP (150g-200g)",
        img: curemaMullet,
        url: "curema-mullet"
    },
    {
        en: "White Tuna",
        fr: "Thon Blanc",
        sp: "Atún Blanco",
        sn: "-",
        cn: "白金槍魚 / 白鮪魚",
        scientificName: "THON BLANC / Thunnus Alalunga",
        origin: "Sénégal",
        season: "From May to Jul.",
        fao: "34 – Atlantic, Eastern Central",
        productionMethod: "Caught (Trawls / Surrounding nets and lift nets)",
        frozen: "Land frozen",
        glaze: "N/A",
        packing: "Bulk",
        allergens: "Fish",
        tags: [
            "Seasonal",
            "W/R"
        ],
        calibrage: "GG (800g+), G (500g-800g), M (300g-500g), P (200g-300g), PP (150g-200g)",
        img: whiteTuna,
        url: "white-tuna"
    }
];

const SEAFOOD_RAW_PRODUCTS = [
    {
        en: "False Elephant's Snout",
        fr: "-",
        sp: "-",
        sn: "-",
        cn: "木瓜螺 / 七彩螺",
        scientificName: "Melo Melo / Cymbium Cymbium",
        origin: "Sénégal",
        season: "From Feb. to May",
        fao: "34 – Atlantic, Eastern Central",
        productionMethod: "Caught (Trawls / Surrounding nets and lift nets)",
        frozen: "Land frozen",
        glaze: "N/A",
        packing: "Bulk/IQF",
        allergens: "Seafood",
        tags: [
            "Seasonal",
            "W/R",
            "Elaborate"
        ],
        calibrage: "MIX, 10/30, 30/50, 50/100, 100/150, 150/200, 200/300, 300/400, 400+",
        img: cymbium,
        url: "cymbium"
    },
    {
        en: "Nepotune's Volute",
        fr: "Volute Neptune",
        sp: "Voluta de Neptune",
        sn: "-",
        cn: "大木瓜螺 / 甜瓜螺 / 西非海螺",
        scientificName: "VOLUPE / Cymbium Pepo",
        origin: "Sénégal",
        season: "From Feb. to May",
        fao: "34 – Atlantic, Eastern Central",
        productionMethod: "Caught (Trawls / Surrounding nets and lift nets)",
        frozen: "Land frozen",
        glaze: "N/A",
        packing: "Bulk/IQF",
        allergens: "Seafood",
        tags: [
            "Seasonal",
            "W/R",
            "Elaborate"
        ],
        calibrage: "MIX, 100/400, 400/600, 600/800, 800/1000, 1000+",
        img: cymbiumPepo,
        url: "cymbium-pepo"
    },
    {
        en: "Duplex Murex",
        fr: "Rocher Dupiex",
        sp: "Canailla Espinuda",
        sn: "Murex",
        cn: "赤螺 / 紅螺 / 孖螺",
        scientificName: "Murex Duplex",
        origin: "Sénégal",
        season: "From Jun. to Sept.",
        fao: "34 – Atlantic, Eastern Central",
        productionMethod: "Caught (Trawls / Surrounding nets and lift nets)",
        frozen: "Land frozen",
        glaze: "N/A",
        packing: "Bulk/IQF",
        allergens: "Seafood",
        tags: [
            "Seasonal",
            "W/R",
            "Elaborate"
        ],
        calibrage: "MIX, 5/10, 10/20, 20/30, 30/50, 50/80, 80/100, 100+",
        img: murex,
        url: "murex"
    },
    {
        en: "Pharaoh Cuttlefish",
        fr: "Sciche Pharaon",
        sp: "Sepia Faraonica",
        sn: "-",
        cn: "烏賊 / 花枝 / 墨魚",
        scientificName: "SEICHE / Sepia Pharaonis",
        origin: "Sénégal",
        season: "Whole Year",
        fao: "34 – Atlantic, Eastern Central",
        productionMethod: "Caught (Trawls / Surrounding nets and lift nets)",
        frozen: "Land frozen",
        glaze: "N/A",
        packing: "Bulk/IQF",
        allergens: "Seafood",
        tags: [
            "Permanent",
            "W/R",
            "Elaborate"
        ],
        calibrage: "100/200, 200/400, 400/600, 600/800, 800/1000, 1000+",
        img: cuttlefish,
        url: 'cuttlefish'
    },
    {
        en: "Common Octopus",
        fr: "Pieuvre",
        sp: "Pulpo Comun",
        sn: "Poulpe",
        cn: "章魚",
        scientificName: "PULPO / Octopus Vulgaris",
        origin: "Sénégal",
        season: "From Feb. to Oct.",
        fao: "34 – Atlantic, Eastern Central",
        productionMethod: "Caught (Trawls / Surrounding nets and lift nets)",
        frozen: "Land frozen",
        glaze: "N/A",
        packing: "Bulk/IQF",
        allergens: "Seafood",
        tags: [
            "Seasonal",
            "W/R",
            "Elaborate"
        ],
        calibrage: "N/A",
        img: octopus,
        url: 'octopus'
    },

];

export const useProductList = () => {
    const FISH_PRODUCTS = useMemo(() => _.orderBy(FISH_RAW_PRODUCTS, [product => product.en.toLowerCase()], ['asc']), []);
    const SEAFOOD_PRODUCTS = useMemo(() => _.orderBy(SEAFOOD_RAW_PRODUCTS, [product => product.en.toLowerCase()], ['asc']), []);

    return { FISH_PRODUCTS, SEAFOOD_PRODUCTS };
};

