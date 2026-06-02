//your JS code here. If required.
const form = document.getElementById("book-form");
        const bookList = document.getElementById("book-list");

        form.addEventListener("submit", (e)=>{
            e.preventDefault();

            let title = document.getElementById("title").value;
            let author = document.getElementById("author").value;
            let isbn = document.getElementById("isbn").value;

            if(title === "" || author === "" || isbn === ""){
                alert("Please fill all fields");
                return
            }

            const row = document.createElement("tr");

            row.innerHTML=`
                <td>${title}</td>
                <td>${author}</td>
                <td>${isbn}</td>
                <td>
                    <button class="delete">X</button>
                </td> 
            `;
            bookList.append(row);
            form.reset()
        })

        bookList.addEventListener("click", (e)=>{
            if(e.target.classList.contains("delete")){
                e.target.parentElement.parentElement.remove()
            }
        })