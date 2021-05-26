var x=0;

class Accordion{
    
    constructor(options){ 
        this.container = document.getElementById(options.container); //prendo il nome dell'elemento
        this.mainTitle =  options.mainTitle;
        this.mypanel = [];
        if (this.mainTitle){ //se il titolo principale esiste aggiungi il div contenitore + div del titolo
            this.finalstring = '<div class="col-5 col-s-3 box"> <div class="main-panel"> <p> ' + this.mainTitle + '</p> </div>';
        }else{              //se non esiste aggiungi solo il div
            this.finalstring = '<div class="col-5 col-s-3 box">';
        }

        for(let i=0; i < options.panels.length; i++){  //per ogni elemento dell'array panels
            this.mypanel[i] = new Panel(options.panels[i]);  //crea un nuovo oggetto pannello
            this.finalstring += this.mypanel[i].createPanel(i); //aggiungilo alla stringa finale
        }
        this.finalstring += "</div>" //chiudo il div
        this.createAccordion(); //crea Accordion completo
        }

    createAccordion() {
        this.container.innerHTML = this.finalstring; //inserisco nel div l'Accordion
        var panel = document.getElementsByClassName("panelclose");
        var icon = document.getElementsByClassName("icondown");
        var content =  document.getElementsByClassName("content");
        for(let i=x; i < panel.length; i++){
            x++;
            panel[i].addEventListener("click" ,function accordion_change(){
                icon[i].classList.toggle("iconup");
                panel[i].classList.toggle("panelopen");
                document.querySelectorAll('.iconup');
                if(content[i].style.height){
                    content[i].style.height = null;
                }else{
                    content[i].style.height = content[i].scrollHeight +"px";
                }
            });   
        }
    }
}

class Panel{

    constructor(options){
        this.itemTitle = options.title;
        this.description = options.subtitle;
        this.content = options.content;
    }

    createPanel() {
        let stringitem = "<div class='panelclose'><span class='material-icons icondown'></span><p class='title'>"+ this.itemTitle +"</p>";
        let stringdesc = "<p class='description'>"+ this.description +"</p>";
        let stringcontent = "<div class='content'>"+ this.content +"</div></div>";
        if(this.description){
            return stringitem + stringdesc + stringcontent;
         }else{
             return stringitem + stringcontent;
         }
     }

}


