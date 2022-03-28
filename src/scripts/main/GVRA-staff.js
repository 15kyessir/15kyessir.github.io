const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const accessToken = urlParams.get('secret');

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
  if (accessToken === null && localStorage.getItem("gvra_s_at") === null || simpleHash(accessToken) !== "1kgrbih" && simpleHash(localStorage.getItem("gvra_s_at")) !== "1kgrbih" || accessToken === null && simpleHash(localStorage.getItem("gvra_s_at")) !== "1kgrbih") {
    window.location.href = "/GVRPS/"
  } else {
    if (localStorage.getItem("gvra_s_at") === null) {
      localStorage.setItem("gvra_s_at", accessToken)
    }
  }
} catch (e) {

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