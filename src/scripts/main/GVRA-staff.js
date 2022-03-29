const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let accessToken = urlParams.get('secret');

if (localStorage.getItem("gvra_s_at") === null) {
  localStorage.setItem("gvra_s_at", "")
}

if (accessToken === null) {
  accessToken = ""
}

const simpleHash = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash;
  }
  return new Uint32Array([hash])[0].toString(36);
};

try {
  if (localStorage.getItem("gvra_s_at") === null && accessToken === null) {
    window.location.href = "/GVRPS/"
  } else if (simpleHash(localStorage.getItem("gvra_s_at")) === "1kgrbih" || simpleHash(accessToken) === "1kgrbih") {
    console.log(simpleHash(accessToken) === "1kgrbih")
    if (simpleHash(localStorage.getItem("gvra_s_at")) !== "1kgrbih")
    localStorage.setItem("gvra_s_at", accessToken)
    console.log(simpleHash(localStorage.getItem("gvra_s_at")) === "1kgrbih")
  } else {
    window.location.href = "/GVRPS/"
  }
} catch (e) {
  console.error(e)
}

if (accessToken !== null) {
  var clean_uri = location.protocol + "//" + location.host + location.pathname;
  window.history.replaceState({}, document.title, clean_uri);
}

document.getElementById("staff-logout-btn").addEventListener("click", function(e){
  document.getElementById("staff-logout-confirmation-box").style.display = "block"
});
document.getElementById("staff-logout-confirmation-cancel").addEventListener("click", function(e) {
  document.getElementById("staff-logout-confirmation-box").style.display = "none"
});
document.getElementById("staff-confirm-logout").addEventListener("click", function(e) {
  localStorage.removeItem("gvra_s_at")
  window.location.href = "/GVRPS/"
});