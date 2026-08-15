let card="Aadhaar Card",price=50;
function sel(x,n,p){document.querySelectorAll(".service").forEach(a=>a.classList.remove("active"));x.classList.add("active");card=n;price=p;total()}
function total(){let q=Math.max(1,+document.getElementById("qty").value||1);document.getElementById("chosen").textContent=card;document.getElementById("price").textContent=price*q}
function preview(i,id){let b=document.getElementById(id);b.innerHTML="";if(i.files[0]){let im=document.createElement("img");im.src=URL.createObjectURL(i.files[0]);b.appendChild(im)}}
function order(){let n=document.getElementById("name").value.trim(),m=document.getElementById("mobile").value.trim(),q=document.getElementById("qty").value;if(!n||m.length<10){alert("Name और सही Mobile Number भरें");return}let t=`PVC Card Order\nCard: ${card}\nName: ${n}\nMobile: ${m}\nQuantity: ${q}\nTotal: ₹${price*q}`;location.href="https://wa.me/918797668195?text="+encodeURIComponent(t)}
total()