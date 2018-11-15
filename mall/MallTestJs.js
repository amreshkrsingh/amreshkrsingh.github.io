		function myProduct(categoryId){
			document.getElementById('allthing').style.opacity="1";
			document.getElementById('main').style.display="block";
			document.getElementById('showChart').style.display="none";
			var parent = document.getElementById('main');
			parent.innerHTML = "";
			for(var i = 0; i<products[categoryId].items.length; i++){
				var data = products[categoryId].items[i];
				var di = document.createElement("div");	
				di.setAttribute("class","div");
				if(data.image != undefined){
					var image= document.createElement("img");
					image.setAttribute("src",data.image);
					if(categoryId == 1){
						image.setAttribute("class","im1");
					}
					if(categoryId == 3){
						image.setAttribute("class","im2");
					}
					di.appendChild(image);
				}
				var smallImg = document.createElement("img");
				smallImg.data = data;
				smallImg.setAttribute("src","shoppy.png");
				smallImg.setAttribute("class","SmallimgAdd");
				//smallImg.addEventListener("onclick",myAdd(data),i,false);
				smallImg.setAttribute("onclick","selctProduct(this.data)");
				di.appendChild(smallImg);
				if(data.discount != undefined){
					var disc = document.createElement("div");
					disc.setAttribute("class","name");
					disc.innerText = "Discount up to : "+data.discount;
					di.appendChild(disc);
				}
				//niche ka pid kewal Wine me hai usi ke liye yah hai
				//Belows pid for wine only
				if(data.pid != undefined){
					var pid= document.createElement("div");
					pid.setAttribute("class","name");
					pid.innerText = "pid-"+data.pid;
					di.appendChild(pid);
				}
				if(data.author != undefined){
					var author= document.createElement("div");
					author.setAttribute("class","name");
					author.innerText = "author-"+data.author;
					di.appendChild(author);
				}
				if(data.name != undefined){
					var name= document.createElement("div");
					name.setAttribute("class","name");
					name.innerText = "Name-"+data.name;
					di.appendChild(name);
				}
				if(data.brand != undefined){
					var brand= document.createElement("div");
					brand.setAttribute("class","name");
					brand.setAttribute("title",data.brand);
					brand.innerText = "Brand-"+data.brand;
					di.appendChild(brand);
				}
				if(data.price != undefined){
					var price= document.createElement("div");
					price.setAttribute("class","name");
					price.innerText = "Price - "+data.price + " $";
					di.appendChild(price);
				}
				parent.appendChild(di);
				//parent.insertBefore(di,parent.firstChild);
			}
		}
		function selctProduct(data){
			document.getElementById('allthing').style.opacity="0.3";
			document.getElementById('addTOChart').style.left =300+"px";
			//document.getElementByclass('divak').style = "";
			document.getElementById('addTOChart').innerHTML = "";
			if(document.getElementById("back") == null){
				var im1 = document.createElement("img");
				im1.setAttribute("src","Backbutton.gif");
				im1.setAttribute("id","back");
				im1.setAttribute("onclick","myback()");
				addTOChart.appendChild(im1);
			}
			if(document.getElementById("AddToChart2") == null){
				var im2 = document.createElement("img");
				im2.setAttribute("src","AddToChart.gif");
				im2.data = data;
				im2.setAttribute("id","AddToChart2");
				im2.setAttribute("onclick","AddToChart(this.data)");
				addTOChart.appendChild(im2);
			}
			var di = document.createElement("div");
			di.setAttribute("class","divak");
			if(data.image != undefined){
					var image= document.createElement("img");
					image.setAttribute("src",data.image);
					image.setAttribute("class","bigimg");
					di.appendChild(image);
				}
				if(data.discount != undefined){
					var disc = document.createElement("div");
					disc.setAttribute("class","name");
					disc.innerText = "Discount up to : "+data.discount;
					di.appendChild(disc);
				}
				//niche ka pid kewal Wine me hai usi ke liye yah hai
				//Belows pid for wine only
				if(data.pid != undefined){
					var pid= document.createElement("div");
					pid.setAttribute("class","name");
					pid.innerText = "pid-"+data.pid;
					di.appendChild(pid);
				}
				if(data.author != undefined){
					var author= document.createElement("div");
					author.setAttribute("class","name");
					author.innerText = "author-"+data.author;
					di.appendChild(author);
				}
				if(data.name != undefined){
					var name= document.createElement("div");
					name.setAttribute("class","name");
					name.innerText = "Name-"+data.name;
					di.appendChild(name);
				}
				if(data.brand != undefined){
					var brand= document.createElement("div");
					brand.setAttribute("class","name");
					brand.setAttribute("title",data.brand);
					brand.innerText = "Brand-"+data.brand;
					di.appendChild(brand);
				}
				if(data.price != undefined){
					var price= document.createElement("div");
					price.setAttribute("class","name");
					price.innerText = "Price - "+data.price + " $";
					di.appendChild(price);
				}
				var quantity = document.createElement("input");
					quantity.setAttribute("class","name");
					quantity.setAttribute("placeholder","enter the quantity");
					quantity.setAttribute("Type","number");
					quantity.setAttribute("id","quantity");
					di.appendChild(quantity);
				
				addTOChart.appendChild(di);
			//addTOChart.appendChild(div);
		}

		function myback(){
			document.getElementById('allthing').style.opacity="1";
			document.getElementById('addTOChart').style.left =-800+"px";
		}

		information = [];
		function AddToChart(data){
			data.quantity = document.getElementById('quantity').value;
			information.push(data);
			console.log(information);
			document.getElementById('allthing').style.opacity="1";
			document.getElementById('addTOChart').style.left =-720+"px";
		}

		function myviewcart(){
			//document.getElementById("showChart").style.display="block";
			document.getElementById('allthing').style.display="none";
			document.getElementById('sideChart').style.left =250+"px";
			document.getElementById('sidechartlist').innerHTML = "";
			console.log(information.length);
			var total = 0;
			for(var i = 0; i<=information.length-1; i++){
				var d = document.createElement("div");

				var serial = document.createElement("div");
				serial.setAttribute("class","chartsDiv");
				if(information[i].name != undefined){
					serial.innerText = "Name : "+information[i].name;
				}else{
					serial.innerText = "----";
				}
				d.appendChild(serial);

				serial = document.createElement("div");
				serial.setAttribute("class","chartsDiv");
				if(information[i].discount != undefined){
					serial.innerText = "discount : "+information[i].discount;
				}else{
					serial.innerText = "----";
				}
				d.appendChild(serial);

				serial = document.createElement("div");
				serial.setAttribute("class","chartsDiv");
				if(information[i].price != undefined){
					serial.innerText = "price : "+information[i].price;
					if (information[i].discount != undefined) {
						total += (+information[i].price)-((+information[i].price) * ((+information[i].discount.replace("%",""))/100)) ;
					}else{
						total += +information[i].price;
					}
				}else{
					serial.innerText = "----";
				}
				d.appendChild(serial);

				serial = document.createElement("div");
				serial.setAttribute("class","chartsDiv");
				if(information[i].quantity != undefined){
					serial.innerText = "quantity : "+information[i].quantity;
				}else{
					serial.innerText = "----";
				}
				d.appendChild(serial);

				document.getElementById('sidechartlist').appendChild(d);
			}
			if (information.length>0) {
				totalPrice = document.createElement("div");
				totalPrice.innerText ="Total Price : " +total;
				totalPrice.setAttribute("class","totalPrice")
				d.appendChild(totalPrice);
			}
		}
		function myPro(){
			document.getElementById('sideChart').style.left =-850+"px";
			document.getElementById('allthing').style.display="block";
		}
		function myHome(){
			window.location.reload();
		}
