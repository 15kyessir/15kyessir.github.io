const simpleHash = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash;
  }
  return new Uint32Array([hash])[0].toString(36);
};

document.getElementById("GVRPS-staff-login-btn").addEventListener("click", (e) => {
  if (localStorage.getItem("gvra_s_at") !== null && simpleHash(localStorage.getItem("gvra_s_at")) === "1kgrbih") {
    document.getElementById("GVRPS-staff-login-box").style.display = "none"
    window.location.href = "staff/"
  } else {
    document.getElementById("GVRPS-staff-login-box").style.display = "block"
  }
});
document.getElementById("staff-login-password-cancel").addEventListener("click", (e) => {
  document.getElementById("GVRPS-staff-login-box").style.display = "none"
});