// Desafio1
const Tareas = [
    
    { 
    titulo:"Entregar portafolio",
    estado:"Terminado"  
},

   {
    titulo: "Practicar Js",
    estado: "En progreso"
 },

 {
    titulo:"Pasar apuntes",
    estado: "Pendiente"
 }

]

console.log(Tareas)

// Desafio 2 con extra



function Nuevatarea (titulo,estado){
Tareas.push({titulo:titulo,estado:estado});
Tareas.estado === "En progreso",
 console.log("  Tarea agregada correctamente c:  ")
   return Tareas 
 }
 

 console.log(Nuevatarea("clases Ada","En progreso"));
 

// Desafio 3:



let ListaDeTareas = (estados) => {

 if (estados === "En progreso" || estados === "Pendiente" || estados === "Terminado") {
    let ListaDeTareas = Tareas.filter(tareas => tareas.estado === estados);
   return ListaDeTareas;
   
   } else {
   return Tareas;
    }
    }
   console.log(ListaDeTareas("En progreso"))
   //  console.log(ListaDeTareas("Terminado"))
   //  console.log(ListaDeTareas("Pendiente"))
   // console.log(ListaDeTareas("ajfnjwnfowr"))


// Desafio 4:


let cambiar = (titulo,estado) => {
   if ( titulo === "Practicar Js" ||titulo === "Pasar apuntes" || titulo=== "Entregar portafolio" ||titulo=== "clases Ada")
    {
    return "Ya existe,no la voy a agregar"
   } else {
   Tareas.push({titulo: titulo ,estado: estado});
    console.log(Tareas);
   }
     
 }
 
 console.log(cambiar("pasar el trapo", "En progreso"));
//  console.log(cambiar("Practicar Js"))



// Desafio 5:



 const existeTarea = (parametro) => {

  if (parametro!=""){
      filtrarTarea = Tareas.filter( tareas => tareas.titulo.includes(parametro));
   if (filtrarTarea.length>0){
    return filtrarTarea;   
    } else {
      return " - no existe ese parametro -"
    }

      }
   }

   //   console.log(existeTarea(" Js"))
   //   console.log(existeTarea("portafolio"))
   //   console.log(existeTarea("apuntes"))
     console.log(existeTarea("trapo"))
     console.log(existeTarea("música"))




