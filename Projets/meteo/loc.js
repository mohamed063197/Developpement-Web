/* Affichage de l'heure */
date=new Date()
document.getElementById("h").innerHTML=date.getHours()+":"+date.getMinutes() ;

/* Recuperation de la latitude et la longitude */
var lat=0
var long=0
var lang="fr"
var cookie=false

function coordonnees(pos) {
    let crd = pos.coords;
    lat = crd.latitude.toFixed(2);
    long = crd.longitude.toFixed(2);
}
navigator.geolocation.getCurrentPosition(coordonnees);
lang=navigator.language 
cookie=navigator.cookieEnabled 
console.log("Cookies active "+cookie)

/* Recuperation de la meteo */
function getMeteo(latitude, longitude, unite="metric", langue="fr"){
    // je recuperer tout et je les renvoie en objet
}

/* Recuperation de la couleur de l'arriere plan */
function getBG(des){
    if (des.indexOf("nuageux")){
        return "couleur Bleu Foncé"
    }elif (des.indexOf("ensoleillé")){
        return "couleur Bleu Ciel"
    }elif (des.indexOf("pluie")){
        return "couleur Pluie"
    }
}

/* Affichage de la Meteo */
const farad=document.getElementById("farad");
const degree=document.getElementById("degre");
farad.addEventListener('click',function(){
    // Recuperer la valeur en farad Python (temperature, min, max)
    // Touse les modifier
    let meteo=getMeteo(latitude=lat, longitude=long, unite="metric",langue=lang)
    var temp=meteo
    var temp_min=2
    var temp_max=7
    
    document.getElementById("temp").innerHTML=""+meteo.temp
    this.setAttribute("class","degre active")
    degree.setAttribute("class","degre")
    
})


degree.addEventListener('click',function(){
    // Recuperer la valeur en degre Python (temperature, min, max)
    // Touse les modifier
    var temp=4
    var temp_min=2
    var temp_max=7
    document.getElementById("temp").innerHTML=""+parseInt(f)
    this.setAttribute("class","degre active")
    farad.setAttribute("class","degre")
    
})


/*----------------------------------------------------------------*/

class Animal {
    constructor(nom) {
      this.nom = nom;
    }
  
    parle() {
      console.log(`${this.nom} fait du bruit.`);
    }
  }
  
  class Chien extends Animal {
    constructor(nom) {
      super(nom); // appelle le constructeur parent avec le paramètre
    }
    parle() {
      console.log(`${this.nom} aboie.`);
    }
  }





class Meteo(object):
    
 

    def __init__(self):
       
        self._lat="43.74"
        self._long="7.30"
       
        self._city=""
        self._country= ""
        self._commune=""
        
        self._description=""
        self._tempMax=""
        self._tempMin=""
        self._temp=""
        self._humidity=""
        self._pressure=""
        self._wind=""

       
    
        
    def __init__(self, latitude, longitude, units="metric", langue="fr"):

        #Affectation des coordonnées
        self._lat=latitude
        self._long=longitude

        #Recuperation de l'adresse complete
        geolocator = Nominatim(user_agent="specify_your_app_name_here")
        location = geolocator.reverse(latitude+","+longitude)
        adr=location.address.split(',')
        self._city=adr[3]
        self._country= adr[-1]
        self._commune=adr[2]
        
        #Recuperation des informations Meteo
        root="https://api.openweathermap.org/data/2.5/weather?"
        p={
            "lat":self._lat,
            "lon":self._long,
            "lang":langue,
            "units":units,
            "appid":"c27a97a9fadcef115d6f6af59bfdb304"
        }
        
        res = requests.get(root+self.dictToURL(p))
        res_data = res.json()
        
        self._description=res_data["weather"][0]['description']
        self._tempMax=res_data["main"]['temp_max']
        self._tempMin=res_data["main"]['temp_min']
        self._temp=res_data["main"]['temp']
        self._humidity=res_data["main"]['pressure']
        self._pressure=res_data["main"]['pressure']
        self._wind=res_data["wind"]['speed']
        
    def getMeteoWithCity(city):
        
        #Recuperation des informations Meteo
        root="https://api.openweathermap.org/data/2.5/weather?"
        p={
            "q":city,
            "lang":"fr",
            "units":"metric",
            "appid":"c27a97a9fadcef115d6f6af59bfdb304"
        }
        
        res = requests.get(root+self.dictToURL(p))
        res_data = res.json()
        
        self._description=res_data["weather"][0]['description']
        self._tempMax=res_data["main"]['temp_max']
        self._tempMin=res_data["main"]['temp_min']
        self._temp=res_data["main"]['temp']
        self._humidity=res_data["main"]['pressure']
        self._pressure=res_data["main"]['pressure']
        self._wind=res_data["wind"]['speed']
       
        #Recuperation de l'adresse complete
        geolocator = Nominatim(user_agent="specify_your_app_name_here")
        location = geolocator.reverse("43.74, 7.30")
        adr=location.address.split(',')
   
        self._lat=latitude
        self._long=longitude
       
        self._city=adr[3]
        self._country= adr[-1]
        self._commune=adr[2]
        
        
    def dictToURL(self ,d):
        url=""
        for i,v in d.items():
            url+="&"+i+"="+v
        return url[1:]  
        
    
    #----- Latitude----
    @property
    def lat(self):
        return self._lat

    @lat.setter
    def lat(self, l):
        self._lat  =  latitude
        
    #----- Longitude ----    
    @property
    def long(self):
        return self._long

    @long.setter
    def roues(self, longitude):
        self._long  =  longitude
        
    #----- City ----
    @property
    def city(self):
        return self._city

    @city.setter
    def city(self, city):
        self._city  =  city
        
   #----- Country ----
    @property
    def country(self):
        return self._country

    @country.setter
    def country(self, country):
        self._country  =  country
        
    #----- commune ----
    @property
    def commune(self):
        return self._commune

    @commune.setter
    def commune(self, commune):
        self._commune  =  commune
        
    #----- humidity ----
    @property
    def humidity(self):
        return self._humidity

    @humidity.setter
    def humidity(self, humidity):
        self._humidity  =  humidity

    #---- description ---
    @property
    def description(self):
        return self._description

    @description.setter
    def description(self, description):
        self._description  =  description
        
    #---- tempMax ----
    @property
    def tempMax(self):
        return self._tempMax

    @tempMax.setter
    def tempMax(self, tempMax):
        self._tempMax  =  tempMax
        
    #---- tempMin ----
    @property
    def tempMin(self):
        return self._tempMin

    @tempMin.setter
    def tempMin(self, tempMin):
        self._tempMin  =  tempMin
    #---- temp ----
    @property
    def temp(self):
        return self._temp

    @temp.setter
    def temp(self, temp):
        self._temp  =  temp
   
    #---- pressure ----
    @property
    def pressure(self):
        return self._pressure

    @pressure.setter
    def pressure(self, pressure):
        self._pressure  =  pressure
    #---- wind ----
    @property
    def wind(self):
        return self._wind

    @temp.setter
    def wind(self, wind):
        self._wind  =  wind