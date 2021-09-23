
//Luokka: Henkilo
class Henkilo{
    constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
        this.etunimet = etunimet;
        this.sukunimi = sukunimi;
        this.kutsumanimi = kutsumanimi;
        this.syntymavuosi = syntymavuosi;
    }
}
//Luokka urheilija laajentaa pääluokkaa Henkilo
class urheilija extends Henkilo{

    //superilla kaytetaan henkilo luokkaa konstruktorissa
    constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
        super(etunimet, sukunimi, kutsumanimi, syntymavuosi);
    }


    //Set metodit tietojen asettamiseen, sekä get metodit tietojen hakemiseen. Oli vähän hankaluuksia metodien nimien kanssa. Nyt toimii kuitenkin.
    set lkuva(linkki){
        this.linkki = linkki;
    }
    get lkuva(){
        return this.linkki;
    }


    set opaino(paino){
        this.paino = paino;
    }
    get opaino(){
        return this.paino;
    }


    set olaji(laji){
        this.laji = laji;
    }
    get olaji(){
        return this.laji
    }


    set osaavutukset(saavutukset){
        this.saavutukset = saavutukset;
    }
    get osaavutukset(){
        return this.saavutukset;
    }

}
// Luodaan testimielessä ensimmäinen urheilija ja asetetaan hänelle set metodien mukaisesti attribuutit:
const eka = new urheilija('Marja', 'Kaikola', 'Maru', 1995);
eka.opaino = 23
eka.lkuva = "https://www.w3schools.com/js/js_class_inheritance.asp";
eka.osaavutukset = "MM kultaa '2020";
eka.olaji = "Hiihto";

//Tulostetaan luodun olion tiedot:
for(const arvo in eka){
    console.log(`${arvo}: ${eka[arvo]}`);
}

//Toinen olio pääluokasta
const toka = new Henkilo("Tarja", "Pekkala", "Tarkku", 1982);

//Tulostetaan myös toisen olion tiedot:
for(const arvo in toka){
    console.log(`${arvo}: ${toka[arvo]}`);
}


console.log("Testitulostus get metodin toiminnan varmistamiseksi: " + eka.osaavutukset);

