import { ImageInfoPairsType } from "../customs/CustomImageSlider";

export const GALLERY_ROOT = process.env.PUBLIC_URL + "/gallery/";
const MAX_WIDTH_GOOGLE_DRIVE = 10000;
export const GOOGLE_DRIVE_ROOT = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w${MAX_WIDTH_GOOGLE_DRIVE}`;

export const FRANCE_images: ImageInfoPairsType[] = [
    {
        url: GOOGLE_DRIVE_ROOT("1xsSZ0fIUXyyyiKwV2aTuSErofb1fNjVc"),
        title: "몽마르뜨 언덕에서",
        subtitle: "Sacré-Cœur, colline de montmartre",
        description: "AM 09:30. 한적한 몽마르뜨 언덕, 사크레-쾨르 대성당 앞. 파리의 전경이 한 눈에 보인다.",
        location: "https://www.google.com/maps/place/Sacr%C3%A9-C%C5%93ur/",
    },
    { 
        url: GALLERY_ROOT + "FRANCE/20230117_Paris2.jpg",
        title: "Ober Mamma",
        description: "PM 18:30. 트러플 파스타가 맛있었다.",
        location: "https://www.google.co.kr/maps/place/Ober+Mamma/",
    },
    {
        url: GALLERY_ROOT + "FRANCE/20230118_Paris3.jpg",
        title: "Musée d'Orsay",
        description: "PM 13:15. 오르세 미술관의 외관. 상징인 시계도 담겨있다."
    },
    { 
        url: GALLERY_ROOT + "FRANCE/20230118_Paris4.jpg",
        title: "루브르 옆을 걸으며",
        subtitle: "Musée du Louvre",
        description: "PM 13:20. 루브르 박물관의 외관.",
    },
    { 
        url: GALLERY_ROOT + "FRANCE/20230118_Paris5.jpg",
        title: "루브르 안쪽 광장에서",
        subtitle: "Musée du Louvre",
        description: "PM 15:10. 상징적인 유리 피라미드와 루브르 박물관.",
    },
    {
        url: GALLERY_ROOT + "FRANCE/20230119_Paris6.jpg",
        title: "생트 샤펠 예배당",
        subtitle: "Sainte-Chapelle",
        description: "AM 10:40. 조화로운 스테인드글라스가 만드는 환상적인 풍경.",
    },
    { 
        url: GALLERY_ROOT + "FRANCE/20230119_Paris7.jpg",
        title: "생트 샤펠 예배당(2)",
        subtitle: "Sainte-Chapelle",
        description: "AM 11:00. 조화로운 스테인드글라스가 만드는 환상적인 풍경.",
    },
    {
        url: GALLERY_ROOT + "FRANCE/20230120_Paris8.jpg",
        title: "에투알 개선문",
        subtitle: "Arc de Triomphe",
        description: "AM 10:00. 날씨 좋은 날, 로터리 밖에서 본 개선문.",
    },
    { 
        url: GALLERY_ROOT + "FRANCE/20230120_Paris9.jpg",
        title: "에투알 개선문 전망대",
        subtitle: "Arc de Triomphe Observatory",
        description: "AM 11:30.",
    },
    {   
        url: GALLERY_ROOT + "FRANCE/20230120_Paris10.jpg",
        title: "루브르 박물관",
        subtitle: "Musee du Louvre",
        description: "PM 15:00.",
    },
    { 
        url: GALLERY_ROOT + "FRANCE/20230120_Paris11.jpg",
        title: "루브르 박물관",
        subtitle: "Musee du Louvre",
        description: "PM 19:00.",
    },
    { 
        url: GALLERY_ROOT + "FRANCE/20230121_Paris12.jpg",
        title: "오페라 가르니에",
        subtitle: "Palais Garnier",
        description: "PM 16:40. 그랑푸아예(Grand Foyer).",
    },
    { 
        url: GALLERY_ROOT + "FRANCE/20230122_Paris13.jpg",
        title: "몽파르나스 타워 전망대",
        subtitle: "Tour Montparnasse 56th floor",
        description: "PM 18:15.",
    },
    { 
        url: GALLERY_ROOT + "FRANCE/20230123_Paris14.jpg",
        title: "조르주 퐁피두 센터",
        subtitle: "The Centre Pompidou",
        description: "PM 15:30.",
    },
    { 
        url: GALLERY_ROOT + "FRANCE/20230123_Paris15.jpg",
        title: "오페라 가르니에",
        subtitle: "Palais Garnier",
        description: "PM 19:00.",
    },
    { 
        url: GALLERY_ROOT + "FRANCE/20230124_Paris16.png",
        title: "파리 디즈니랜드",
        subtitle: "Disney Land Paris",
        description: "PM 14:00.",
    },
    { 
        url: GALLERY_ROOT + "FRANCE/20230124_Paris17.jpg",
        title: "파리 디즈니랜드",
        subtitle: "Disney Land Paris",
        description: "PM 19:55. During the Light Show.",
    },
    { 
        url: GALLERY_ROOT + "FRANCE/20230126_Strasbourg18.jpg",
        title: "바토라마 선착장",
        subtitle: "Batorama",
        description: "PM 15:45. Strasbourg.",
    },
    { 
        url: GALLERY_ROOT + "FRANCE/20230126_Strasbourg19.jpg",
        title: "스트라스부르 노트르담 대성당",
        subtitle: "Cathédrale Notre-Dame de Strasbourg",
        description: "PM 16:50.",
    },
    {   
        url: GALLERY_ROOT + "FRANCE/20230127_Paris20.jpg",
        title: "생마르탱 운하",
        subtitle: "Le Canal Saint-Martin",
        description: "PM 13:50.",
    },
];

export const BELGIUM_images: ImageInfoPairsType[] = [
    { url: GALLERY_ROOT + "BELGIUM/20230127_Brussels1.jpg" },
    { url: GALLERY_ROOT + "BELGIUM/20230127_Brussels2.jpg" },
    { url: GALLERY_ROOT + "BELGIUM/20230128_Brussels3.jpg" },
    { url: GALLERY_ROOT + "BELGIUM/20230128_Brussels4.jpg" },
    { url: GALLERY_ROOT + "BELGIUM/20230128_Brussels5.jpg" },
    { url: GALLERY_ROOT + "BELGIUM/20230128_Brussels6.jpg" },
    { url: GALLERY_ROOT + "BELGIUM/20230128_Brussels7.jpg" },
    { url: GALLERY_ROOT + "BELGIUM/20230128_Brussels8.jpg" },
    { url: GALLERY_ROOT + "BELGIUM/20230128_Brussels9.jpg" },
    { url: GALLERY_ROOT + "BELGIUM/20230129_Antwerpen10.jpg" },
    { url: GALLERY_ROOT + "BELGIUM/20230129_Antwerpen11.jpg" },
    { url: GALLERY_ROOT + "BELGIUM/20230130_Brussels12.jpg" },
];
export const NETHERLANDS_images: ImageInfoPairsType[] = [
    { url: GALLERY_ROOT + "NETHERLANDS/20230130_Amsterdam1.jpg" },
    { url: GALLERY_ROOT + "NETHERLANDS/20230131_Amsterdam2.jpg" },
    { url: GALLERY_ROOT + "NETHERLANDS/20230131_Amsterdam3.jpg" },
    { url: GALLERY_ROOT + "NETHERLANDS/20230131_Amsterdam4.jpg" },
    { url: GALLERY_ROOT + "NETHERLANDS/20230201_Amsterdam5.jpg" },
    { url: GALLERY_ROOT + "NETHERLANDS/20230201_Amsterdam6.jpg" },
    { url: GALLERY_ROOT + "NETHERLANDS/20230201_Amsterdam7.jpg" },
    { url: GALLERY_ROOT + "NETHERLANDS/20230201_Amsterdam8.jpg" },
    { url: GALLERY_ROOT + "NETHERLANDS/20230201_Amsterdam9.jpg" },
    { url: GALLERY_ROOT + "NETHERLANDS/20230201_Amsterdam10.jpg" },
];
export const SWISS_images: ImageInfoPairsType[] = [
    { url: GALLERY_ROOT + "SWISS/20230202_Bern1.jpg" },
    { url: GALLERY_ROOT + "SWISS/20230202_Bern2.jpg" },
    { url: GALLERY_ROOT + "SWISS/20230202_Bern3.jpg" },
    { url: GALLERY_ROOT + "SWISS/20230202_Bern4.jpg" },
    { url: GALLERY_ROOT + "SWISS/20230202_Bern5.jpg" },
    { url: GALLERY_ROOT + "SWISS/20230202_Bern6.jpg" },
    { url: GALLERY_ROOT + "SWISS/20230202_Train7.jpg" },
    { url: GALLERY_ROOT + "SWISS/20230203_Jungfrau8.jpg" },
    { url: GALLERY_ROOT + "SWISS/20230203_Jungfrau9.jpg" },
    { url: GALLERY_ROOT + "SWISS/20230203_Mannlichen10.jpg" },
    { url: GALLERY_ROOT + "SWISS/20230203_Mannlichen11.jpg" },
    { url: GALLERY_ROOT + "SWISS/20230203_Interlaken12.jpg" },
    { url: GALLERY_ROOT + "SWISS/20230203_Interlaken13.jpg" },
];
export const TURKIYE_images: ImageInfoPairsType[] = [
    { url: GALLERY_ROOT + "TURKIYE/20230207_Istanbul1.jpg" },
    { url: GALLERY_ROOT + "TURKIYE/20230207_Istanbul2.jpg" },
    { url: GALLERY_ROOT + "TURKIYE/20230207_Istanbul3.jpg" },
    { url: GALLERY_ROOT + "TURKIYE/20230207_Istanbul4.jpg" },
    { url: GALLERY_ROOT + "TURKIYE/20230207_Istanbul5.jpg" },
    { url: GALLERY_ROOT + "TURKIYE/20230207_Istanbul6.jpg" },
    { url: GALLERY_ROOT + "TURKIYE/20230207_Istanbul7.jpg" },
    { url: GALLERY_ROOT + "TURKIYE/20230208_Istanbul8.jpg" },
    { url: GALLERY_ROOT + "TURKIYE/20230208_Istanbul9.jpg" },
    { url: GALLERY_ROOT + "TURKIYE/20230208_Cappadocia10.jpg" },
    { url: GALLERY_ROOT + "TURKIYE/20230209_Cappadocia11.jpg" },
    { url: GALLERY_ROOT + "TURKIYE/20230210_Istanbul12.jpg" },
    { url: GALLERY_ROOT + "TURKIYE/20230210_Istanbul13.jpg" },
    { url: GALLERY_ROOT + "TURKIYE/20230211_Istanbul14.jpg" },
    { url: GALLERY_ROOT + "TURKIYE/20230211_Istanbul15.jpg" },
    { url: GALLERY_ROOT + "TURKIYE/20230211_Istanbul16.jpg" },
];
export const GREECE_images: ImageInfoPairsType[] = [
    { url: GALLERY_ROOT + "GREECE/20230213_Santorini1.jpg" },
    { url: GALLERY_ROOT + "GREECE/20230213_Santorini2.jpg" },
    { url: GALLERY_ROOT + "GREECE/20230213_Santorini3.jpg" },
    { url: GALLERY_ROOT + "GREECE/20230214_Athens4.jpg" },
    { url: GALLERY_ROOT + "GREECE/20230214_Athens5.jpg" },
    { url: GALLERY_ROOT + "GREECE/20230214_Athens6.jpg" },
    { url: GALLERY_ROOT + "GREECE/20230214_Athens7.jpg" },
    { url: GALLERY_ROOT + "GREECE/20230215_Athens8.jpg" },
    { url: GALLERY_ROOT + "GREECE/20230215_Athens9.jpg" },
    { url: GALLERY_ROOT + "GREECE/20230215_Athens10.jpg" },
    { url: GALLERY_ROOT + "GREECE/20230215_Athens11.jpg" },
    { url: GALLERY_ROOT + "GREECE/20230215_Athens12.jpg" },
    { url: GALLERY_ROOT + "GREECE/20230215_Athens13.jpg" },
];
export const ITALY_images: ImageInfoPairsType[] = [
    { url: GALLERY_ROOT + "ITALY/20230216_Rome1.jpg" },
    { url: GALLERY_ROOT + "ITALY/20230216_Rome2.jpg" },
    { url: GALLERY_ROOT + "ITALY/20230216_Rome3.png" },
    { url: GALLERY_ROOT + "ITALY/20230216_Rome5.jpg" },
    { url: GALLERY_ROOT + "ITALY/20230217_Vatican7.jpg" },
    { url: GALLERY_ROOT + "ITALY/20230217_Rome9.jpg" },
    { url: GALLERY_ROOT + "ITALY/20230218_Rome10.jpg" },
    { url: GALLERY_ROOT + "ITALY/20230219_Venice11.jpg" },
    { url: GALLERY_ROOT + "ITALY/20230219_Venice12.jpg" },
    { url: GALLERY_ROOT + "ITALY/20230220_Venice13.jpg" },
    { url: GALLERY_ROOT + "ITALY/20230220_Venice15.jpg" },
    { url: GALLERY_ROOT + "ITALY/20230220_Venice18.jpg" },
    { url: GALLERY_ROOT + "ITALY/20230220_Venice20.jpg" },
    { url: GALLERY_ROOT + "ITALY/20230220_Venice21.jpg" },
    { url: GALLERY_ROOT + "ITALY/20230220_Venice22.jpg" },
    { url: GALLERY_ROOT + "ITALY/20230220_Venice23.jpg" },
    { url: GALLERY_ROOT + "ITALY/20230221_Venice25.jpg" },
];