/*********  Cursor ************/

const cursor = document.querySelector(".cursor")

// move cursor as mouse move
document.addEventListener("mousemove", (e) => {
   cursor.style.left = e.pageX + 'px'
   cursor.style.top = e.pageY + 'px'
})

// add different classes on events
const links = document.querySelectorAll("a")
links.forEach((link) => {
   link.addEventListener("mouseover", () => {
      cursor.classList.add('link');
   })
   link.addEventListener("mouseout", () => {
      cursor.classList.remove('link');
   })
})

/************** Sphere *************/

const myTags = [
   'JavaScript', 'CSS', 'HTML',
   'Python', 'Java', 'git', 'npm', '🐈‍⬛', 
   'Node.js', 'MySQL', 'Wordpress',
   'PHP', 'Symphony', 'Photoshop',
   'Illustrator', 'InDesign', 'Adobe XD'
];

var tagCloud = TagCloud('.content', myTags,{

 // radius in px
radius: 195,

 // animation speed
 // slow, normal, fast
 maxSpeed: 'fast',
 initSpeed: 'fast',

 // 0 = top
 // 90 = left
 // 135 = right-bottom
 direction: 135,
 
 // interact with cursor move on mouse out
 keep: true
 
});

//To change the color of text randomly
var colors = ['#a20404', '#6D7CAF', '#fff', '#2043b3', '#027c02', '#e7c500'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.content').style.color = random_color;

/********** Burger menu **************/

function myFunction() {
   var x = document.getElementById("myNavigation");
   if (x.className === "menunavigationcontainer") {
     x.className += "-responsive";
   } else {
     x.className = "menunavigationcontainer";
   }
 }

/************* Langue **********/

/* Mail */

function verif_form(form_selecteur,param_insert){
	var param={
		input_verif_text:'.js-verif-text',
		input_verif_email:'.js-verif-email',
		input_verif_rgpd:'.js-verif-rgpd',
		select_verif:'.js-verif-select',
		balise_error:'.form-error',
		class_error:'form-error-hidden',
		onkeyup:true,
		default_data_min:1,
		attr_data_min:'data-min',
		default_data_max:10,
		attr_data_max:'data-max',
	},
	convert_number=function(data,retour){
		if(typeof data == 'string'){
			data=parseInt(data);
			if(!isNaN(data)){
				retour=data;
			}
		}
		return retour;
	},
	return_error=function(element,error){
		if(element.parentElement.querySelector(param.balise_error)!==null){
			if(error){
				element.parentElement.querySelector(param.balise_error).classList.add(param.class_error);
			}else{
				element.parentElement.querySelector(param.balise_error).classList.remove(param.class_error);
			}
		}
		return error;
	},
	verif_nbcara=function(element){
		let nbcara=element.value.length;
		let min=convert_number(element.getAttribute(param.attr_data_min),param.default_data_min);
		let max=convert_number(element.getAttribute(param.attr_data_max),param.default_data_max);
		if(min>=max){max=min+1;}
		if(nbcara >= min && nbcara <= max){
			return return_error(element,true);
		}
		return return_error(element,false);
	},
	verif_email=function(element){
		if(verif_nbcara(element)){
			let text= element.value;
			let pos = text.indexOf('@');
			if(pos >= 2){
				text = text.substring(pos+1);
				pos = text.indexOf('@');
				if(pos==-1){
					pos = text.indexOf('.');
					if(pos >= 2){
						text = text.substring(pos+1);
						if(text.length >= 2){
							return return_error(element,true);
						}
					}
				}
			}
		}
		return return_error(element,false);
	},
	verif_rgpd=function(element,elform){
		elform.querySelectorAll('[type="submit"]').forEach(function(el){
			if(element.checked){
				el.removeAttribute('disabled');
			}else{
				el.setAttribute('disabled','disabled');
			}
		});
		return return_error(element,element.checked);
	},
	verif_select=function(element){
		if(element.value!=''){
			return return_error(element,true);
		}
		return return_error(element,false);
	};

	if(typeof param_insert == 'object'){
		for(const key_insert in param_insert){
			for(const key in param){
				if(key_insert == key){
					param[key]=param_insert[key_insert];
				}
			}
		}
	}
	document.querySelectorAll(form_selecteur).forEach(function(elform){
		// vérification du nombre de caracteres
		elform.querySelectorAll(param.input_verif_text).forEach(function(el){
			if(param.onkeyup){
				el.onkeyup=function(){verif_nbcara(this);}
			}
			el.onchange=function(){verif_nbcara(this);}
		});
		// vérification d'un mail valide
		elform.querySelectorAll(param.input_verif_email).forEach(function(el){
			if(param.onkeyup){
				el.onkeyup=function(){verif_email(this);}
			}
			el.onchange=function(){verif_email(this);}
		});
		// vérification rgpd
		elform.querySelectorAll(param.input_verif_rgpd).forEach(function(el){
			el.onchange=function(){
				verif_rgpd(this,elform);
			}
		});
		// vérification select
		elform.querySelectorAll(param.select_verif).forEach(function(el){
			el.onchange=function(){
				verif_select(this);
			}
		});

		// vérification avant envoi du formulaire du nombre de caracteres et du mail valide et case a cocher RGPD
		elform.onsubmit=function(){
			let retour_submit=true;
			this.querySelectorAll(param.input_verif_text).forEach(function(eltext){
				if(!verif_nbcara(eltext)){retour_submit=false;}
			});
			this.querySelectorAll(param.input_verif_email).forEach(function(eltext){
				if(!verif_email(eltext)){retour_submit=false;}
			});
			this.querySelectorAll(param.input_verif_rgpd).forEach(function(eltext){
				if(!verif_rgpd(eltext,elform)){retour_submit=false;}
			});
			this.querySelectorAll(param.select_verif).forEach(function(eltext){
				if(!verif_select(eltext)){retour_submit=false;}
			});
			return retour_submit;
		}
	});
}

verif_form('.js-form-verif',{
	default_data_max:100,
});
