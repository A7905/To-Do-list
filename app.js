const item = document.querySelector("#item")
const todoBox = document.querySelector("#to-do-list")

item.addEventListener(
    "keyup",
    function(event){
        if(event.key == "Enter"){
            adTodo(this.value)
            this.value=""
        }
    }
)

const adTodo=(item) =>{
    const listItem=document.createElement("li");
    listItem.innerHTML= `
        ${item}
        <i class="fas fa-times"></i>
    `;

    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");
        }
    )

    listItem.querySelector("i").addEventListener(
        "click",
        function(){
            listItem.remove()
        }
    )


    todoBox.appendChild(listItem)
}