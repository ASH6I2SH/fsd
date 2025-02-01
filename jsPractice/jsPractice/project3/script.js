const throttleFunction = (func, delay) => {

            let prev = 0;
            return (...args) => {
                let now = new Date().getTime();
                if (now - prev > delay) {
                    prev = now;
                    return func(...args);
                }
            }
        }


        document.querySelector(".center").addEventListener("mousemove",
            throttleFunction((dets) => {
                
                document.createElement("div");
                // This will create a div Element.
                // console.log(document.createElement("div"));

                var div= document.createElement("div");
                // This will save the created div element in div variable.
                // console.log(div);

                div.classList.add("imagediv");
                // This will add the imagediv class to the class list of div element which means imagediv would be the class of created element div.

                document;
                // This is the document Object 😂 
                // which is the root element 
                // that represents the html document.
                // console.log(document);

                document.body;
                //  document.body and document.head is the property of document object provided by browser.
                //  document.div, document.h1, etc are not the property of document object because these elements can occur mutlitple times while the head and body elements are universal and uniquely identifiable in HTML document.
                // console.log(document.body);


                document.body.appendChild(div);
                // This will append the created div element in body element.
                // console.log(document.body.appendChild(div));

                div.style.left = dets.clientX + "px";
                div.style.top =  dets.clientY + "px";


                setTimeout(function(){


                    div.remove();
                    // This will remove the created element div from body where it was appended Before.

                }, 1000)

                var img= document.createElement("img");
                var arr= [
                    "https://plus.unsplash.com/premium_photo-1737629957724-6bc7cdf1396f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1737376518702-3f4eb7876953?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1737652423535-c1b0096f9244?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1736780995479-bc82c2bffa2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
                    "https://images.unsplash.com/photo-1737222561123-269af6be3e15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
                    "https://images.unsplash.com/photo-1737396091041-158da644aee5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1737396091041-158da644aee5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1736772424997-d060a145965d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NHx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1737099049906-fdf13033c12b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Nnx8fGVufDB8fHx8fA%3D%3D",
                    "https://images.unsplash.com/photo-1737625775035-31acd1e4e18b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D"];

                var index= Math.floor(Math.random()*10);

                img.setAttribute("src", arr[index]);

                div.appendChild(img);

                gsap.to(".imagediv img", {
                    y: "0",
                    ease: Power3,
                    duration: 0.4
                })

                
            }, 250));

            console.log(document);



