var x=0;


class Accordion{
    
    constructor(options){ 
        this.container = document.getElementById(options.container); //prendo il nome dell'elemento
        this.mainTitle =  options.mainTitle;
        this.mypanel = [];
        this.createBox_mainTitle();

            for(let i=0; i < options.panels.length; i++){  //per ogni elemento dell'array panels
                var box = this.container.firstElementChild;   //prende il primo elemento figlio di 'my-accordion' (quindi il div box)
                this.createPanel(box,options.panels[i]); // aggiunge un pannello dentro al box
                this.mypanel[i] = new Panel(box);  //crea un nuovo oggetto pannello
                this.createListener()
            }

        }

        createListener() {
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
        
    createBox_mainTitle(){
        if (this.mainTitle){ //se il titolo principale esiste aggiungi il div contenitore + div del titolo
            this.box = '<div class="col-5 col-s-3 box"> <div class="main-panel"> <p> ' + this.mainTitle + '</p> </div>  </div>';
        }else{              //se non esiste aggiungi solo il div
            this.box = '<div class="col-5 col-s-3 box"> </div>';
        }
        this.container.innerHTML = this.box; //inserisco nel div l'Accordion
    }

    createPanel(child,panels) {  //funzione per creare l'HTML dei pannelli
        this.itemTitle = panels.title;
        this.description = panels.subtitle;
        this.content = panels.content;
        let stringitem = "<div class='panelclose' onclick='panel_change()'><span class='material-icons icondown'></span><p class='title'>"+ this.itemTitle +"</p>";
        let stringdesc = "<p class='description'>"+ this.description +"</p>";
        let stringcontent = "<div class='content'>"+ this.content +"</div></div>";
        if(this.description){
            child.innerHTML += stringitem + stringdesc + stringcontent;
         }else{
            child.innerHTML += stringitem + stringcontent;
         }
     }



}

class Panel{  //classe per gestire i pannelli

    constructor(box){
        this.panel = box.lastElementChild;
        this.content = this.panel.querySelector('.content');
        this.icon = this.panel.querySelector('.icondown')


    }
/*


    createListener() {
        this.panel.addEventListener("onclick",function panel_change(){
            let content = this.querySelector('.content');
            let icon = this.querySelector('.icondown')
            this.classList.toggle("panelopen");
            icon.classList.toggle("iconup");
            if(content.style.height){
            content.style.height = null;
            }else{
                content.style.height = content.scrollHeight +"px";
            }
            });  

    }
*/
 
}

