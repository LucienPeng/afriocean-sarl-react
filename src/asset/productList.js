
import roundSardinella from '../asset/images/fish/round-sardinella.png';
import atlanticHorseMackerel from '../asset/images/fish/atlantic-horse-mackerel.png';
import commonMackerel from '../asset/images/fish/commonMackerel.png';
import atlanticBumper from '../asset/images/fish/atlanticBumper.png';
import bigEyeGrunt from '../asset/images/fish/bigEyeGrunt.png';
import cassavaCroaker from '../asset/images/fish/cassavaCroaker.png';
import littleTunny from '../asset/images/fish/littleTunny.png';
import senegalJack from '../asset/images/fish/senegalJack.png';
import ribbonFish from '../asset/images/fish/ribbonFish.png';
import senegaleseTonguesole from '../asset/images/fish/senegaleseTonguesole.png';
import lesserAfricanThreadfin from '../asset/images/fish/lesserAfricanThreadfin.png';
import { useMemo } from 'react';

export const useProductList = () => {

    const PRODUCTS = useMemo(() => [
        {
            en: "Maeiran Sardinella",
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
            calibrage: "G(300g+),M(180g-300g),P(170g-200g),PP(150g-170g)",
            img: "",
            url: "maeiran-ardinella"
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
            calibrage: "G(280g+),M(180g-280g),P(160g-180g),PP(130g-160g)",
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
            calibrage: "GG(600g+),G(450g-600g),M(300g-450g),P(200g-300g),PP(100g-200g)",
            img: "",
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
            calibrage: "GG(500g+),G(400g-500g),M(300g-400g),P(200g-300g),PP(100g-200g)",
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
            calibrage: "GG(800g+),G(600g-800g),M(400g-600g),P(200g-400g),PP(100g-200g)",
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
                "Elabore"
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
            img: "",
            url: "african -lookdown"
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
            img: "",
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
            calibrage: "G,M,P,PP",
            img: "",
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
            calibrage: "GG,G,M,P,PP",
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
            calibrage: "GG,G,M,P,PP",
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
            calibrage: "GG,G,M,P,PP",
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
                "Elabore"
            ],
            calibrage: "100g-200g,200g-300g,300g-500g,500g-700g,700g-900g,900g+",
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
            calibrage: "200g-300g,300g-400g,400g-500g,500g-600g,600g-700g,700g-800g,800g-900g,900g-1000g,1KG+",
            img: senegaleseTonguesole,
            url: "senegalese-tonguesole"
        }
    ], []);

    return { PRODUCTS };
};

