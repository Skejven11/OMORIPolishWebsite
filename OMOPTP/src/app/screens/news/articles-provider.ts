import { NewsArticle } from "src/app/components/newsarticle/newsarticle.component"

export var articles: NewsArticle[] = [
    {
        date: '01.04.2023',
        author: 'Studio Kiełkun',
        text: `Drogie Kiełkuny!<br>
        Czekaliśmy na ten moment od bardzo dawna i w końcu możemy z dumą ogłosić, że spolszczenie do gry OMORI jest w pełni ukończone! 
        To było naprawdę wielkie wyzwanie, ale dzięki pasji i determinacji wielu członków zespołu udało nam się je osiągnąć.
        <br>
        Teraz, gdy już możecie zagrać w pełni spolszczoną wersję gry, chcielibyśmy podziękować wszystkim, 
        którzy byli z nami przez cały ten czas, wspierając nasze wysiłki i zachęcając nas do dalszej pracy. 
        To dzięki Waszemu wsparciu udało nam się dotrzeć do końca tego projektu i zrealizować nasze marzenie o spolszczeniu tej wspaniałej gry.
        <br><br>
        Jeśli jeszcze nie widzieliście, zobaczcie trailer, który przygotowaliśmy. Po pobraniu tłumaczenia <a [routerLink]="'/faq'" class="text-red-500">z naszej strony</a>
        koniecznie podzielcie się z nami swoimi wrażeniami lub screenshotami z gry na naszym serwerze na Discordzie!
        <br><br>
        Do zobaczenia jeszcze kiedyś!`,
        video: 'https://www.youtube.com/embed/CGRa4iKiWHo'
    },
    {
        date: '04.03.2023',
        author: 'Yukki',
        text: `Dzień dobry Cebulki!<br>
        Jeśli brak wam energii (w szczególności z rana), zaleca się przesłuchanie „Good Morning” w 
        <a href="https://www.youtube.com/watch?v=vyM_VHHqGaM" class="text-red-500">wykonaniu naszego zespołu</a>. 9/10 lekarzy potwierdza wysoką skuteczność tej metody.<br>
        Kiedy szefowa wyszła na ciastko, po kryjomu zaśpiewaliśmy „Good Morning”. Ale co to by było za spolszczenie, gdyby tekst byłby po angielsku? 
        Nie martwcie się, o to też zadbaliśmy, a głównie Oskar. Gdy szefowa wróciła i już miała nam spuścić manto za obijanie się, usłyszała śpiew swojej siły roboczej. 
        Właśnie wtedy zdała sobie sprawę, że częściej powinna wychodzić na ciastko.
        <br><br>
        W końcu przekroczyliśmy próg 50%, co oznacza, że jesteśmy bliżej niż dalej! Tłumaczenie idzie całkiem sprawnie, a nie mamy zamiaru zwalniać tempa. 
        Tłumacze wylewają swoje siódme poty, korektorzy ich asekurują, a testerzy patrzą się i śmieją z błędów poprzedników.<br>
        Przypominamy o naszym serwerze na <a href="https://discord.gg/8JTc36HNyM" class="text-red-500">Discordzie</a>, 
        gdzie możecie zadać nam pytanie bądź chillować z innymi fanami omori. Lekarze również zalecają obczaić nasze konto na 
        <a href="https://www.tiktok.com/@studio_kielkun" class="text-red-500">TikToku</a> oraz 
        kanał na <a href="https://www.youtube.com/@studio-kielkun" class="text-red-500">YouTubie</a>.
        <br><br>
        Wi-elo!`,
        photos: [
            'screens/4.1.png',
            'screens/4.2.png',
            'screens/4.3.png'
        ]
    },
    {
        date: '25.01.2023',
        author: 'Skejven',
        text: `Siemka,<br>
        Dawno nie było żadnego newsa, więc pomyślałem, że to dobra pora na małą aktualizację.<br>
        Jeżeli chodzi o tłumaczenie, to aktualny stan przetłumaczonego tekstu to ponad 40%! Zbliżamy się wielkimi krokami do połowy i z tej 
        okazji mamy również dla was parę niespodzianek, które zostaną w swoim czasie ujawnione na naszym discordzie (na którego serdecznie zapraszamy). 
        Od ostatniego czasu testerzy tłumaczenia nie próżnowali i bardzo pomagają nam wykrywać błędy, czy to w dialogach, walce czy przetłumaczonych grafikach.
        <br><br>
        Kontynuując trend tworzenia naszych playlist, Oskar przygotował <a href="https://www.youtube.com/watch?v=M-1xScJcRp8" class="text-red-500">kolejną</a>
        składankę utworów wybranych przez członków naszego discorda. Tym razem tematem były święta, a to tylko pierwsza część! Następna ukaże się niedługo, 
        więc obserwujcie nasz kanał na youtube (jak zwykle, linki znajdują się na dole strony).<br> Nasz zespół życzy Wam dobrego roku 2023, 
        oby był to rok w którym OMORI będzie można przejść w całości po polsku.
        <br><br>
        Pozdro i z essą!`,
        photos: [
            'screens/3.1.png',
            'screens/3.2.png',
            'screens/3.3.png'
        ]
    },
    {
        date: '31.10.2022',
        author: 'Oskar',
        text: `Siema! <br>
        Dzisiaj Halloween. To dobry pretekst, żeby napisać kolejną aktualizację. Mimo, że od ostatniego wpisu na stronie nieminął ledwo miesiąc, 
        to sporo się u nas wydarzyło. Pierwszą, i chyba najważniejszą zmianą jest nowa oficjalna nazwa naszej grupy. 
        Powitajcie zatem "Studio Kiełkun" i jego przeuroczą, cebulkową maskotkę! Natomiast w kwestii prac nad spolszczeniem,
        mam dla was dwie dobre wiadomości. Przetłumaczyliśmy już 25% całej gry i dzisiaj ruszyły pierwsze testy spolszczenia. 
        To nie koniec niespodzianek. By umilić wam oczekiwanie, wspólnie z Yukki ułożyliśmy dla was 
        <a href="https://www.youtube.com/watch?v=LBwL6BB1jjs" class="text-red-500">playlistę</a> z piosenkami wybranymi przez członków naszego zespołu. 
        Po przesłuchaniu sprawdźcie też nasz <a href="https://www.youtube.com/channel/UCUadiPvPzoAu6bcsV1BXo0w" class="text-red-500">kanał</a> youtube,
         mogą się tam co jakiś czas ukazywać ciekawe materiały!
        <br><br>
        Do zobaczenia!`,
        photos: [
            'screens/2.1.png',
            'screens/2.2.png',
            'screens/2.3.png'
        ]
    },
    {
        date: '21.09.2022',
        author: 'Skejven',
        text: `Hej!
            <br>
            Przyszedł czas na pierwszą aktualizację :) Pierwsze i najważniejsze, 
            nasz serwer na Discordzie jest już otwarty dla wszystkich! Dołączyć można poprzez kliknięcie ikonki poniżej. 
            Pamiętajcie o przestrzeganiu regulaminu i zachowywaniu się odpowiednio! 
            <br>
            Teraz czas na małe podsumowanie prac. 
            Jeżeli chodzi o ilość przetłumaczonych dialogów i cutscenek, jesteśmy na około 15%. Idzie nam to szybko, ale pamiętajcie, 
            że ten procent wcale nie jest równy stopniowi ukończenia tłumaczenia. W to wchodzi bardzo wiele różnych czynników. Nasi graficy pracują, 
            aby język polski zawitał również na kolorowych obrazkach widocznych w samej grze, nie tylko w tekście. 
            Technicy (ja i Piotruś) ogarniają kod gry, tak, żeby sporo tekstu, minigierek i innych czynności w grze pasowało do naszego języka.
            <br><br>
            To tyle na razie!`,
        photos: [
            'screens/1.1.jpg',
            'screens/1.2.png',
            'screens/1.3.png'
        ]
    },
] 