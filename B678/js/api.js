// bat su kien cho search button
document.getElementById("searchBtn").addEventListener("click", function () {
  // kiem tra du lieu nhap vao
  const searchInput = document.getElementById("search").value.trim();
  // khong co du lieu => khong thuc hien
  if (searchInput === "") {
    alert("Vui lòng nhập từ khóa tìm kiếm.");
    return;
  }
  // lay du lieu tu va tim kiem tren API
  loadData(searchInput);
  return;
});

// ham load du lieu tu API
function loadData(searchInput) {
  const apiURL = `https://pokeapi.co/api/v2/pokemon/${searchInput}`;
  //   fetch du lieu tu API
  fetch(apiURL)
    .then((response) => {
      if (response.status === 404) {
        throw new Error("Khong tim thay du lieu phu hop.");
      }
      //   chuyen tu kieu json -> javascript object (json())
      return response.json();
    })
    .then((data) => {
        console.log(data);
      //   hien thi du lieu len man hinh
      renderData(data.name, data.sprites.front_default, data.weight);
    })
    .catch((error) => {
      alert(error);
    });
}

// ham render du lieu
function renderData(name, img_url, bio) {
  // lay element trong HTML => load lai noi dung
  const nameElement = document.getElementById("name");
  const imgElement = document.querySelector("#image");
  const bioElement = document.getElementById("bio");
  //   gan du lieu vao element
  nameElement.textContent = name;
  imgElement.src = img_url;
  imgElement.alt = name;
  bioElement.innerHTML = `<strong>Weight:</strong> ${bio} kg`;
}
