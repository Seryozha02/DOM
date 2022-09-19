let arr = [{
  id: 0,
  name: 'Armenia',
  parentId: null
}, {
  id: 1,
  name: 'Shirak',
  parentId: 0
}, {
  id: 2,
  name: 'Lori',
  parentId: 0
}, {
  id: 3,
  name: 'Tavush',
  parentId: 0
}, {
  id: 4,
  name: 'Syuniq',
  parentId: 0
}, {
  id: 5,
  name: 'Gyumri',
  parentId: 1
}, {
  id: 6,
  name: 'Vanadzor',
  parentId: 2
}, {
  id: 7,
  name: 'Ijevan',
  parentId: 3
}, {
  id: 8,
  name: 'Goris',
  parentId: 4
}, {
  id: 9,
  name: '58',
  parentId: 5
}, {
  id: 10,
  name: 'Dimac',
  parentId: 6
}, {
  id: 11,
  name: 'Rembaz',
  parentId: 7
}, {
  id: 12,
  name: 'Getapnya',
  parentId: 8
}]


const func = (elems, id = null) => {
return  elems.filter(elem => elem.parentId === id)
.map(elem => ({...elem, children : func(elems,elem.id)}))
}
let arr2 = func(arr)

let root = document.getElementById("root")

function makeTable(array){
root.innerHTML += `
  <ul id = "genUl">
    <li id = "li${array[0].id}"'><p id = 'p${array[0].id}'>${array[0].name}</p></li>
  </ul>
`
makeUl(array[0].children)

}

function makeUl(arr){
if(arr.length == 0){
  return
}else{
  for(let i = 0; i < 1; i++){
    arr.forEach(obj => {
      document.getElementById(`li${obj.parentId}`).innerHTML += `
      <ul>
        <li id = "li${obj.id}"><p id = 'p${obj.id}'>${obj.name}</p></li>
      </ul>
      `
      makeUl(obj.children)
    })
  }
}
}
makeTable(arr2)

let list = document.querySelectorAll("p")
function find(value){
list.forEach(p => {
 p.style.display = "block"
})
list.forEach(p => {
  let text = p.innerText.toLowerCase()
  if(value.length !== 0){
    if(text.slice(0, value.length) !== value.toLowerCase()){
      p.style.display = 'red'
    }else{
      p.style.borderBottom = '4px solid green'
    }
  }
})
}

list.forEach(p => {
p.addEventListener('click', function opClose(ev){
  for(let i = 1; i < p.parentElement.children.length; i++)
    p.parentElement.children[i].classList.toggle('myClass')
})
})