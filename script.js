let smartForm = document.getElementById("smartForm");


const FIELDS =[
    {
        name:"name",
        type:"text",
        label:"Name",
        required: true,
        minLength: 3,
        icon: `<i class="fa-solid fa-user fa-xs ms-1"></i>`
    },
    { 
        name: "email", 
        label: "Email", 
        type: "email", 
        required: true,
        icon:`<i class="fa-solid fa-envelope fa-xs ms-1"></i>`
    },
    { 
        name: "age", 
        label: "Age", 
        type: "number", 
        required: true, 
        min: 12,
        icon: `<i class="fa-solid fa-arrow-up-1-9 fa-xs ms-1"></i>`
    },
    { 
        name: "phone", 
        label: "Phone", 
        type: "tel", 
        required: true, 
        pattern: /^[0-9]{10}$/,
        icon: `<i class="fa-solid fa-phone fa-xs ms-1"></i>`
    },
    { 
        name: "username", 
        label: "Username", 
        type: "text", 
        required: true, 
        minLength: 5 ,
        icon: `<i class="fa-solid fa-at fa-xs ms-1"></i>`
    },
    { 
        name: "password", 
        label: "Password",
        type: "password", 
        required: true, 
        minLength: 6 ,
        icon: `<i class="fa-solid fa-lock fa-xs ms-1"></i>`
    },
    { 
        name: "confirmPassword", 
        label: "Confirm Password", 
        type: "password", 
        required: true ,
        icon: `<i class="fa-solid fa-lock fa-xs ms-1"></i>`
    },
    { 
        name: "address", 
        label: "Address", 
        type: "text", 
        required: true ,
        icon: `<i class="fa-solid fa-map-location-dot fa-xs ms-1"></i>`
    },
    { 
        name: "city", 
        label: "City", 
        type: "text", 
        required: true ,
        icon:  `<i class="fa-solid fa-city fa-xs ms-1"></i>`

    },
    { 
        name: "zip", 
        label: "ZIP Code", 
        type: "text", 
        required: true, 
        pattern: /^[0-9]{5}$/ ,
        icon: `<i class="fa-solid fa-hashtag fa-xs ms-1"></i>`
    },
    { 
        name: "country", 
        label: "Country", 
        type: "text", 
        required: true ,
        icon:`<i class="fa-solid fa-location-dot  fa-xs ms-1"></i> `

    },
    { 
        name: "gender", 
        label: "Gender", 
        type: "text", 
        required: true ,
        icon: `<i class="fa-solid fa-venus-mars  fa-xs ms-1"></i>`
    },
    { 
        name: "birthDate", 
        label: "Birth Date", 
        type: "date", 
        required: true ,
        icon: `<i class="fa-solid fa-calendar-days fa-xs ms-1"></i>`
    },
    { 
        name: "nationalID", 
        label: "National ID", 
        type: "text", 
        required: true, 
        pattern: /^[0-9]{14}$/ ,
        icon: `<i class="fa-solid fa-address-card fa-xs ms-1"></i>`
    },
    { 
        name: "facebook", 
        label: "Facebook URL", 
        type: "url", 
        required: false ,
        icon: `<i class="fa-brands fa-facebook fa-xs ms-1"></i>`
    },
    { 
        name: "linkedin", 
        label: "LinkedIn URL", 
        type: "url", 
        required: false ,
        icon: `<i class="fa-brands fa-linkedin fa-xs ms-1"></i>`
    },
    { 
        name: "github", 
        label: "GitHub Username", 
        type: "text", 
        required: false ,
        icon: `<i class="fa-brands fa-github fa-xs ms-1"></i>`
    },
    { 
        name: "bio", 
        label: "Short Bio", 
        type: "text", 
        required: false,
        minLength: 10 ,
        icon: `<i class="fa-solid fa-circle-info fa-xs ms-1"></i>`
    },
    { 
        name: "skills", 
        label: "Skills",
        type: "text", 
        required: true ,
        icon: `<i class="fa-solid fa-icons fa-xs ms-1"></i>`
    },
    { 
        name: "experience", 
        label: "Years of Experience", 
        type: "number", 
        required: true, 
        min: 0 ,
        icon: `<i class="fa-solid fa-snowflake fa-xs ms-1"></i>`
    }

]


    //   <div class="text-start mb-3">
    //     <label for="" class="form-label text-white mb-2 fs-5 align-items-center">
    //       name
    //       <i class="fa-solid fa-user fa-xs ms-1"></i>
    //     </label>
    //     <input type="text" name="name" id="" class="form-control">
    //   </div> 

FIELDS.forEach((field)=>{
    let wrapper = document.createElement('div');
    wrapper.setAttribute("class","text-start mb-3")

    let label = document.createElement("label")
    label.setAttribute("class","form-label text-white mb-2 fs-5 align-items-center")
    label.innerHTML = field.label + field.icon;
    wrapper.appendChild(label)

    let input = document.createElement("input");
    input.setAttribute("class","form-control")
    input.type = field.type;
    input.name = field.name;

    if(field.required === true){
        input.setAttribute("required","");
    }

    wrapper.appendChild(input);

    smartForm.appendChild(wrapper)
})

    // <button class="btn text-white rounded-pill px-5 py-2 fw-medium" style="background-image: linear-gradient(to left ,#f92f76, #e2608e,#F283AA);">Send</button>
    let send = document.createElement("button");
    send.setAttribute("class","btn btn-outline-light text-white rounded-pill px-5 py-2 fw-medium");
    send.setAttribute("type","submit");
    send.style.backgroundImage = "linear-gradient(to left, #718355, #87986a,#b5c99a ,#cfe1b9)";
    send.textContent = "send";
    
    smartForm.appendChild(send)


/*********************************************VALIDATION*********************************** */
let errorsDiv = document.getElementById("errors");


smartForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const errors = [];
   

    FIELDS.forEach((field)=>{
        const input = smartForm.elements[field.name]; 
        const value = input.value.trim();

        if(field.required && value ===""){
            errors.push(`${field.label} is required`);
            return;
        }

        if(field.pattern && !field.pattern.test(value)){
            errors.push(`${field.label} does not match the pattern`)
        }

        if(field.min && parseInt(value) < field.min){
            errors.push(`${field.label} must be atleast ${field.min} character`)
        }
        if(field.minLength && value.length < field.minLength){
            errors.push(`${field.label} must ne at least ${field.minLength} characters`)
        }
    })

        if (errors.length > 0) {
            errorsDiv.style.display = "block";
            errors.forEach((err) => {
                let p = document.createElement("p");
                p.innerHTML = err;
                errorsDiv.appendChild(p);
            });

            let xbtn = document.getElementById("xbtn");

            xbtn.addEventListener("click",function(){
            errorsDiv.style.display = "none";
})

        }


})



/**************************************************** */



